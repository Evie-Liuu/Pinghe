import { ref, computed } from 'vue'

// 全域狀態
const isAuthenticated = ref(false)
const user = ref(null)

// 多身分認證系統
export const useAuth = () => {

  // 預設老師帳號（實際應該存在後端）
  const teacherCredentials = {
    username: 'tc',
    password: 'tc'
  }

  // 身分選擇登入（學生和訪客不需要密碼）
  const selectRole = (roleType, userData = {}) => {
    isAuthenticated.value = true

    switch (roleType) {
      case 'teacher':
        user.value = {
          username: userData.username || 'teacher',
          role: 'teacher',
          displayName: '老師',
          icon: 'fa-user-tie'
        }
        localStorage.setItem('auth_token', 'teacher_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
        break

      case 'student':
        user.value = {
          username: userData.name || '學生',
          role: 'student',
          displayName: '學生',
          icon: 'fa-user-graduate'
        }
        localStorage.setItem('auth_token', 'student_token')
        localStorage.setItem('user_data', JSON.stringify(user.value))
        break

      case 'visitor':
        user.value = {
          username: '訪客',
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

  // 老師密碼登入
  const teacherLogin = (username, password) => {
    if (username === teacherCredentials.username && password === teacherCredentials.password) {
      return selectRole('teacher', { username })
    }
    return { success: false, message: '帳號或密碼錯誤' }
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }

  const checkAuth = () => {
    const token = localStorage.getItem('auth_token')
    const userData = localStorage.getItem('user_data')

    if (token && userData) {
      try {
        isAuthenticated.value = true
        user.value = JSON.parse(userData)
      } catch (e) {
        logout()
      }
    }
  }

  const isTeacher = computed(() => {
    return user.value && user.value.role === 'teacher'
  })

  const isStudent = computed(() => {
    return user.value && user.value.role === 'student'
  })

  const isVisitor = computed(() => {
    return user.value && user.value.role === 'visitor'
  })

  // 保持向後兼容
  const isAdmin = computed(() => isTeacher.value)

  return {
    isAuthenticated,
    user,
    isAdmin,
    isTeacher,
    isStudent,
    isVisitor,
    selectRole,
    teacherLogin,
    logout,
    checkAuth
  }
}