// 表单验证工具函数

// 手机号验证
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

// 邮箱验证
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// 密码验证（至少8位，包含字母和数字）
export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

// 用户名验证（3-20位字母数字下划线）
export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  return usernameRegex.test(username)
}

// 验证码验证（6位数字）
export const validateVerificationCode = (code: string): boolean => {
  const codeRegex = /^\d{6}$/
  return codeRegex.test(code)
}

// Element Plus 表单验证规则
export const validationRules = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value && !validatePhone(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
  
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value && !validateEmail(value)) {
        callback(new Error('请输入正确的邮箱地址'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
  
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, message: '密码长度至少8位', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value && !validatePassword(value)) {
        callback(new Error('密码必须包含字母和数字'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
  
  confirmPassword: (password: string) => [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value !== password) {
        callback(new Error('两次输入的密码不一致'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
  
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在3到20个字符', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value && !validateUsername(value)) {
        callback(new Error('用户名只能包含字母、数字和下划线'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ],
  
  verificationCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: Function) => {
      if (value && !validateVerificationCode(value)) {
        callback(new Error('请输入6位数字验证码'))
      } else {
        callback()
      }
    }, trigger: 'blur' }
  ]
}