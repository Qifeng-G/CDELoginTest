// 用户相关类型定义

export interface User {
  id: string
  username?: string
  email?: string
  phone?: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface LoginForm {
  account: string // 可以是手机号或用户名
  password: string
  loginType: 'phone' | 'username'
  remember?: boolean
}

export interface RegisterForm {
  account: string // 手机号或邮箱
  password: string
  confirmPassword: string
  registerType: 'phone' | 'email'
  verificationCode?: string
  agreementAccepted: boolean
}

export interface ForgotPasswordForm {
  account: string
  accountType: 'phone' | 'email'
  verificationCode: string
  newPassword: string
  confirmPassword: string
}

export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
  success: boolean
}

export interface LoginResponse {
  token: string
  user: User
  expiresIn: number
}

export interface RegisterResponse {
  message: string
  user: User
}

export interface VerificationCodeResponse {
  message: string
  expires: number
}