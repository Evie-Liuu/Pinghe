import { ref, computed } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase'
import { apiService } from '@/services/api'

// 全域狀態
const isAuthenticated = ref(false)
const user = ref(null)

// 多身分認證系統
export const useAuth = () => {
  // 預設帳號（實際應該存在後端）
  const credentials = {
    admin: { account: 'admin', password: 'admin' },
    teacher: { account: 'tc', password: 'tc' }
  }

  const registerWithEmailAndPassword = async (username, email, password, school) => {
    try {
      // 1. Firebase 註冊
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      console.log('Firebase registration successful')

      // 2. 準備後端註冊資料
      const backendUserData = {
        full_name: username,
        email: email,
        institution_id: school,
        // firebase_uid: userCredential.user.uid,
        role: 'teacher',
        id_token: idToken
      }
      console.log(backendUserData);



      // 3. 調用後端 API 註冊
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
      user.value = {
        email: userCredential.user.email,
        role: 'teacher',
        username: username,
        displayName: '老師',
        uid: userCredential.user.uid,
        institution_id: school,
        id_token: idToken
      }
      isAuthenticated.value = true
      localStorage.setItem('auth_token', idToken)
      localStorage.setItem('user_data', JSON.stringify(user.value))

      return { success: true, user: user.value }
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
  const test = async () => {
    const backendUserData = {
      full_name: "test3",
      email: "test3@sdgsjourney.com",
      institution_id: "3",
      // firebase_uid: userCredential.user.uid,
      role: 'teacher',
      id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU3OTk2MzkzLCJ1c2VyX2lkIjoid1ZlTEd2TXRoalJ6VWlKenpHY1BobnNBczlsMSIsInN1YiI6IndWZUxHdk10aGpSelVpSnp6R2NQaG5zQXM5bDEiLCJpYXQiOjE3NTc5OTYzOTMsImV4cCI6MTc1Nzk5OTk5MywiZW1haWwiOiJ0ZXN0M0BzZGdzam91cm5leS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdDNAc2Rnc2pvdXJuZXkuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.X2k3xk1mI1PBJSTF8GYHU2nS6bSEDogF4Vq8fdheMU7YM3lcdkotUMIKtDZToLChFoodH2aNIdOAKPk1e36bhBz4LmsZ8G0Nv-tDG84-0jAxpN4nkHkD04-7-sATpom02-ZGchW4Hq9yhJt1VtfjMF7cXSg6ssusOPwziy3U8-8iQrk6D7eTT51wOoZzKoGbytcNwLpQhpNAJ7SsfHTsSUqgpkIgAlVhODPidmyRAJRb4iPjAPWPedG3XMxg0VGx8m5sG_VGP8EJsh57GM0UImZx7f1fts2t_RCGU3xf7m5IKsHsbh1YTTJ4VQJBCo9Sr4RzuxYAuFiJ0CoY6Vleew"
    }
    console.log(backendUserData);
    console.log('123');


    // 3. 調用後端 API 註冊
    try {
      const backendResponse = await apiService.register(backendUserData)
      console.log('Backend registration successful:', backendResponse)
    } catch (backendError) {
      console.error('Backend registration failed:', backendError)
      // 如果後端註冊失敗，仍然允許 Firebase 註冊成功，但記錄錯誤
      console.warn('User registered in Firebase but backend registration failed')
    }

  }

  const loginWithCredentials = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // 嘗試從 localStorage 獲取之前儲存的使用者資料（包含學校資訊）
      const storedUserData = localStorage.getItem('user_data');
      let userData = null;

      if (storedUserData) {
        userData = JSON.parse(storedUserData);
        // 確保是同一個使用者
        if (userData.uid === userCredential.user.uid) {
          user.value = userData;
        } else {
          // 如果不是同一個使用者，清除舊資料
          localStorage.removeItem('user_data');
        }
      }

      // 如果沒有儲存的使用者資料，建立新的
      if (!user.value || user.value.uid !== userCredential.user.uid) {
        user.value = {
          email: userCredential.user.email,
          role: 'teacher', // or determine role based on custom claims
          displayName: '老師',
          uid: userCredential.user.uid,
          institution_id: userData ? userData.school : null // 如果有儲存的學校資訊就使用，否則為 null
        };
      }

      isAuthenticated.value = true;
      localStorage.setItem('auth_token', idToken);
      localStorage.setItem('user_data', JSON.stringify(user.value));
      return { success: true };
    } catch (error) {
      console.error('Login Error:', error);
      return { success: false, message: error.message };
    }
  }

  const loginWithEmailAndPassword = async (email, password) => {
    return await loginWithCredentials(email, password);
  }


  // 身分選擇登入（學生和訪客不需要密碼）
  const selectRole = (roleType, userData = {}) => {
    isAuthenticated.value = true

    switch (roleType) {
      case 'admin':
        user.value = {
          account: userData.account || 'admin',
          role: 'admin',
          displayName: '管理員',
          icon: 'fa-user-shield'
        }
        localStorage.setItem('auth_token', 'admin_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
        break

      case 'teacher':
        user.value = {
          account: userData.account || 'teacher',
          role: 'teacher',
          displayName: '老師',
          icon: 'fa-user-tie'
        }
        localStorage.setItem('auth_token', 'teacher_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
        break

      case 'student':
        user.value = {
          account: userData.name || '學生',
          role: 'student',
          displayName: '學生',
          icon: 'fa-user-graduate'
        }
        localStorage.setItem('auth_token', 'student_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
        break

      case 'visitor':
        user.value = {
          account: '訪客',
          role: 'visitor',
          displayName: '訪客',
          icon: 'fa-user'
        }
        localStorage.setItem('auth_token', 'visitor_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
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
    isAuthenticated.value = false
    user.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }

  const checkAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        isAuthenticated.value = true;
        // You might want to get the token again or just use the stored user data
        const userData = localStorage.getItem('user_data');
        if (userData) {
          user.value = JSON.parse(userData);
        } else {
          // If no local data, create a user object from firebaseUser
          user.value = {
            email: firebaseUser.email,
            uid: firebaseUser.uid,
            role: 'teacher', // or fetch role
            displayName: '老師'
          };
          localStorage.setItem('user_data', JSON.stringify(user.value));
          firebaseUser.getIdToken().then(token => {
            localStorage.setItem('auth_token', token);
          });
        }
      } else {
        isAuthenticated.value = false;
        user.value = null;
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    });
  }

  // Permission
  const isAdmin = computed(() => {
    return user.value && user.value.role === 'admin'
  })

  const isTeacher = computed(() => {
    return user.value && user.value.role === 'teacher'
  })

  const isStudent = computed(() => {
    return user.value && user.value.role === 'student'
  })

  const isVisitor = computed(() => {
    return user.value && user.value.role === 'visitor'
  })

  return {
    isAuthenticated,
    user,
    isAdmin,
    isTeacher,
    isStudent,
    isVisitor,
    selectRole,
    adminLogin,
    teacherLogin,
    logout,
    checkAuth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithCredentials,
    test
  }
}
