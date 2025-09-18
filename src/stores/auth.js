import { reactive, toRefs, computed } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase'
import { apiService } from '@/services/api'

const state = reactive({
  isAuthenticated: false,
  user: null,
});

// 建立一個 Promise，它將在首次確定身份驗證狀態時解析。
let authReadyResolver;
export const authReady = new Promise(resolve => {
  authReadyResolver = resolve;
});

// 只設定一次 onAuthStateChanged 監聽器。
// 這會在應用程式載入時自動執行。
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    state.isAuthenticated = true;
    const userData = localStorage.getItem('user_data');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      // 檢查用戶 UID 是否匹配，如果不匹配則清除舊資料
      if (parsedUserData.uid === firebaseUser.uid) {
        state.user = parsedUserData;
      } else {
        // UID 不匹配，清除舊資料並等待新的登入資料
        localStorage.removeItem('user_data');
        state.user = null;
      }
    } else {
      // 如果沒有本地資料，設置為 null 等待登入過程完成
      state.user = null;
    }

    // 確保有 auth_token
    firebaseUser.getIdToken().then(token => {
      localStorage.setItem('auth_token', token);
    });
  } else {
    state.isAuthenticated = false;
    state.user = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  }
  // 首次 onAuthStateChanged 觸發時，解析 Promise，通知應用程式驗證已就緒。
  if (authReadyResolver) {
    authReadyResolver();
    authReadyResolver = null; // 避免未來再次解析
  }
});

// 多身分認證系統
export const useAuth = () => {
  // 預設帳號（實際應該存在後端）
  const credentials = {
    admin: { account: 'admin', password: 'admin' },
    teacher: { account: 'tc', password: 'tc' }
  }

  const registerWithEmailAndPassword = async (username, email, password, school, role) => {
    try {
      // 1. Firebase 註冊
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      console.log('Firebase registration successful')

      // 2. 設置認證 token
      localStorage.setItem('auth_token', idToken)

      // 3. 準備後端註冊資料
      const backendUserData = {
        full_name: username,
        institution_id: 1,
        role: role, // 使用傳入的 role
        id_token: idToken
      }
      console.log(backendUserData);

      // 4. 調用後端 API 註冊
      try {
        const backendResponse = await apiService.register(backendUserData)
        console.log('Backend registration successful:', backendResponse)
      } catch (backendError) {
        console.error('Backend registration failed:', backendError)

        // 檢查是否是開發環境且後端服務器未運行或 API 未配置
        const isDevelopment = import.meta.env.DEV
        const isConnectionError = backendError.message?.includes('ERR_CONNECTION_REFUSED') ||
          backendError.message?.includes('Failed to fetch') ||
          backendError.message?.includes('NetworkError') ||
          backendError.message?.includes('API_BASE_URL_NOT_CONFIGURED')

        if (isDevelopment && isConnectionError) {
          console.warn('Development mode: Backend server not running or API not configured, skipping backend registration')
          console.warn('User registered in Firebase successfully, but backend sync will be skipped')
        } else {
          console.warn('User registered in Firebase but backend registration failed')
          // 在生產環境中，可以選擇是否要阻止用戶註冊
          // return { success: false, message: '註冊失敗：無法連接到服務器，請稍後再試' }
        }
      }

      // 4. 設置用戶狀態
      state.user = {
        email: userCredential.user.email,
        role: role,
        username: username,
        displayName: '老師',
        uid: userCredential.user.uid,
        institution_id: school,
        id_token: idToken
      }
      state.isAuthenticated = true
      localStorage.setItem('auth_token', idToken)
      localStorage.setItem('user_data', JSON.stringify(state.user))

      return { success: true, user: state.user }
    } catch (error) {
      console.error('Registration Error:', error)

      // 如果是 Firebase 錯誤，返回相應訊息
      if (error.code === 'auth/email-already-in-use') {
        return { success: false, message: '此電子郵件已被註冊' }
      } else if (error.code === 'auth/weak-password') {
        return { success: false, message: '密碼強度不足' }
      } else if (error.code === 'auth/invalid-email') {
        return { success: false, message: '無效的電子郵件格式' }
      }

      return { success: false, message: error.message || '註冊失敗，請稍後再試' }
    }
  }
  const test = async (data) => {
    // 測試註冊
    const backendUserData = {
      id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU4MDA1Njc2LCJ1c2VyX2lkIjoiemRwZ1JqY2NlVWVqNzFGSmZFWnIwZk1UdnhsMiIsInN1YiI6InpkcGdSamNjZVVlajcxRkpmRVpyMGZNVHZ4bDIiLCJpYXQiOjE3NTgwMDU2NzYsImV4cCI6MTc1ODAwOTI3NiwiZW1haWwiOiJ0ZXN0OThAc2Rnc2pvdXJuZXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3Q5OEBzZGdzam91cm5leS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Z6-8m6VlNV1IZ6fnMCifgP1flT3zZRVxhfovKUyvdZ0nwodxkgfcjlsSavH6tnEaijdOKQYCm5WL016EPpNK5k2nT7OuO269rfAsNOs9JC6VAgHbFVWVyV4WLF6ssVbpEQCEd6z3RTGRX2NJf0BS3dXyozAOMuUbz_wMeNFNe4I_8Os19FAJZFGLjATBkkm1ccqEtKpyYoZBE0loQ6g4VxH-z8xuF7GPimpMnVrB-UYAmyK6NPXJt4AKEMbXkIkTM8kBf3f3dwP5GxoG_WlWpIdVWuVANQwjkbpYi6nLvCFlWFd0eNg_GjhJ9Xl7xc_ecyo0COXIo97587V3RiBoDw",
      full_name: "Test Teacher User",
      role: "teacher",
      institution_id: 1
    }

    // 設置認證 token
    localStorage.setItem('auth_token', backendUserData.id_token)

    // 3. 調用後端 API 註冊
    try {
      const backendResponse = await apiService.register(backendUserData)
      console.log('Backend registration successful:', backendResponse)
    } catch (backendError) {
      console.error('Backend registration failed:', backendError)
      // 如果後端註冊失敗，仍然允許 Firebase 註冊成功，但記錄錯誤
      console.warn('User registered in Firebase but backend registration failed')
    }
    // try {
    //   console.log(data);

    //   const backendResponse = await apiService.login(data)
    //   console.log('Backend registration successful:', backendResponse)
    // } catch (backendError) {
    //   console.error('Backend registration failed:', backendError)
    //   // 如果後端註冊失敗，仍然允許 Firebase 註冊成功，但記錄錯誤
    //   console.warn('User registered in Firebase but backend registration failed')
    // }

  }

  const loginWithCredentials = async (email, password) => {
    try {
      // 在開始登入前清除舊的用戶資料，防止競態條件
      localStorage.removeItem('user_data');
      state.user = null;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // 設置認證 token
      localStorage.setItem('auth_token', idToken);

      // 後端登入
      try {
        const backendResponse = await apiService.login({ id_token: idToken });
        console.log('Backend login successful:', backendResponse);
        state.user = backendResponse.user;
      } catch (backendError) {
        console.error('Backend login failed:', backendError);
        // 清除認證資料
        localStorage.removeItem('auth_token');
        // 根據後端錯誤決定是否中斷登入
        return { success: false, message: '後端登入失敗，請稍後再試' };
      }

      // 設置用戶狀態和本地儲存
      state.isAuthenticated = true;
      localStorage.setItem('user_data', JSON.stringify(state.user));
      return { success: true };
    } catch (error) {
      console.error('Login Error:', error);
      // 登入失敗時清除所有相關資料
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      state.user = null;
      state.isAuthenticated = false;
      return { success: false, message: error.message };
    }
  }

  const loginWithEmailAndPassword = async (email, password) => {
    return await loginWithCredentials(email, password);
  }


  // 測試用
  // 身分選擇登入（學生和訪客不需要密碼）
  const selectRole = (roleType, userData = {}) => {
    state.isAuthenticated = true

    switch (roleType) {
      case 'admin':
        state.user = {
          account: userData.account || 'admin',
          role: 'admin',
          displayName: '管理員',
          icon: 'fa-user-shield'
        }
        localStorage.setItem('auth_token', 'admin_token')
        localStorage.setItem('user_data', JSON.stringify(state.user))
        break

      case 'teacher':
        state.user = {
          account: userData.account || 'teacher',
          role: 'teacher',
          displayName: '老師',
          icon: 'fa-user-tie'
        }
        localStorage.setItem('auth_token', 'teacher_token')
        localStorage.setItem('user_data', JSON.stringify(state.user))
        break

      case 'student':
        state.user = {
          account: userData.name || '學生',
          role: 'student',
          displayName: '學生',
          icon: 'fa-user-graduate'
        }
        localStorage.setItem('auth_token', 'student_token')
        localStorage.setItem('user_data', JSON.stringify(state.user))
        break

      case 'visitor':
        state.user = {
          account: '訪客',
          role: 'visitor',
          displayName: '訪客',
          icon: 'fa-user'
        }
        localStorage.setItem('auth_token', 'visitor_token')
        localStorage.setItem('user_data', JSON.stringify(state.user))
        break
    }

    return { success: true }
  }

  // 管理員登入
  const adminLogin = (account, password) => {
    if (account === credentials.admin.account && password === credentials.admin.password) {
      return selectRole('admin', { account })
    }
    return { success: false, message: '帳號或密碼錯誤' }
  }

  // 老師密碼登入
  const teacherLogin = (account, password) => {
    if (account === credentials.teacher.account && password === credentials.teacher.password) {
      return selectRole('teacher', { account })
    }
    return { success: false, message: '帳號或密碼錯誤' }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Sign out error', error)
    }
    state.isAuthenticated = false
    state.user = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }

  // Permission
  const isAdmin = computed(() => {
    return state.user && state.user.role === 'admin'
  })

  const isTeacher = computed(() => {
    return state.user && state.user.role === 'teacher'
  })

  const isStudent = computed(() => {
    return state.user && state.user.role === 'student'
  })

  const isVisitor = computed(() => {
    return state.user && state.user.role === 'visitor'
  })

  return {
    ...toRefs(state),
    isAdmin,
    isTeacher,
    isStudent,
    isVisitor,
    selectRole,
    adminLogin,
    teacherLogin,
    logout,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithCredentials,
    test
  }
}
