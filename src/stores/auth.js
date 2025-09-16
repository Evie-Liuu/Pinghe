import { ref, computed } from 'vue'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase'

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      console.log('Firebase ID Token:', idToken)
      user.value = {
        email: userCredential.user.email,
        role: 'teacher', // or determine role based on custom claims
        username: username,
        displayName: '老師',
        uid: userCredential.user.uid,
        school: school
      }
      isAuthenticated.value = true
      localStorage.setItem('auth_token', idToken)
      localStorage.setItem('user_data', JSON.stringify(user.value))

      return { success: true, user: user.value }
    } catch (error) {
      console.error('Registration Error:', error)
      return { success: false, message: error.message }
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
          school: userData ? userData.school : null // 如果有儲存的學校資訊就使用，否則為 null
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
    loginWithCredentials
  }
}