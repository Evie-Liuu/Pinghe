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
      user.value = {
        email: userCredential.user.email,
        role: role,
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();

      // const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpbnN0aXR1dGlvbl9pZCI6bnVsbCwicGVybWlzc2lvbnMiOlsic3lzdGVtX2FkbWluIiwibWFuYWdlX2FsbF9mb3J1bSIsInZpZXdfZm9ydW0iLCJtYW5hZ2VfaW5zdGl0dXRpb25fYWN0aXZpdGllcyIsInZpZXdfYW5hbHl0aWNzIiwibWFuYWdlX293bl9jb250ZW50IiwibWFuYWdlX2luc3RpdHV0aW9uX2NvbnRlbnQiLCJtYW5hZ2VfYWxsX2NvbnRlbnQiLCJtYW5hZ2Vfb3duX2FjdGl2aXRpZXMiLCJwYXJ0aWNpcGF0ZV9hY3Rpdml0aWVzIiwidmlld19hY3Rpdml0aWVzIiwidmlld191c2VycyIsImNyZWF0ZV9mb3J1bV9wb3N0cyIsIm1hbmFnZV9zdHVkZW50X3VzZXJzIiwiY29tbWVudF9mb3J1bV9wb3N0cyIsIm1hbmFnZV9hbGxfYWN0aXZpdGllcyIsIm1hbmFnZV9pbnN0aXR1dGlvbl91c2VycyIsIm1hbmFnZV9pbnN0aXR1dGlvbnMiLCJ2aWV3X2NvbnRlbnQiLCJtYW5hZ2Vfb3duX2luc3RpdHV0aW9uIiwibWFuYWdlX2luc3RpdHV0aW9uX2ZvcnVtIiwibWFuYWdlX3VzZXJzIiwidmlld19pbnN0aXR1dGlvbnMiXSwidXNlcl9pZCI6IlE3bHJETTVSZDVQbUN0M1Awa1N0elV5U0t0cTEiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2Rncy1qb3VybmV5IiwiYXVkIjoic2Rncy1qb3VybmV5IiwiYXV0aF90aW1lIjoxNzU4MDA3NDAxLCJzdWIiOiJRN2xyRE01UmQ1UG1DdDNQMGtTdHpVeVNLdHExIiwiaWF0IjoxNzU4MDA3NDAxLCJleHAiOjE3NTgwMTEwMDEsImVtYWlsIjoiYWRtaW5Ac2Rnc2pvdXJuZXkuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluQHNkZ3Nqb3VybmV5LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.OTQLy69LX-FPRMIZemUarUQQ9XYfzT4FdJsKh7bdv668JFcXsREvT-6Ik8OmFnOkG1r3e5Cl7X6boEeNN0V-ivFgATbPcvhZmbVjOlHr61VlcpYoLQ0OEZWs8Pr_n2EjUjaq_Af7LW8c306hDLXfNZwWzzgFBiDQMvi06-4y0zgt19TsU45T6qTDtbUe0H7gg_WUn6LWV84yqV4UCa6PMWgxY0kSUGnWrlLUzXogE8LhHtjj8fVxymZkiqLlMNLxXMdo-xrP399DZEaZXRoil24xPhxzCT0BN8ZI4keKFN_VipbOqNwatwIu45IAXJVzxVDv_lEvZGZxPvNHlyYxxg"
      console.log(idToken);

      // 後端登入
      try {
        const backendResponse = await apiService.login({ id_token: idToken });
        console.log('Backend login successful:', backendResponse);
      } catch (backendError) {
        console.error('Backend login failed:', backendError);
        // 根據後端錯誤決定是否中斷登入
        return { success: false, message: '後端登入失敗，請稍後再試' };
      }

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

      // 如果沒有儲存的使用者資料，從後端建立新的
      if (!user.value || user.value.id !== userCredential.user.uid) {
        user.value = backendResponse.user;
        // user.value = {
        //   email: userCredential.user.email,
        //   role: 'teacher', // or determine role based on custom claims
        //   displayName: '老師',
        //   uid: userCredential.user.uid,
        //   institution_id: userData ? userData.school : null // 如果有儲存的學校資訊就使用，否則為 null
        // };
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


  // 測試用
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
