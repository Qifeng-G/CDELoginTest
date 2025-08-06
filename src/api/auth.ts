import axios from 'axios'
import type { 
  LoginForm, 
  RegisterForm, 
  ForgotPasswordForm,
  ApiResponse,
  LoginResponse,
  RegisterResponse,
  VerificationCodeResponse
} from '@/types/auth'

// 创建axios实例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // TODO: 在这里添加你的token逻辑
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      // TODO: 处理认证失败
      window.location.href = '/auth/login'
    }
    return Promise.reject(error)
  }
)

// 认证相关API
export const authApi = {
  // 用户登录
  login: (data: LoginForm): Promise<ApiResponse<LoginResponse>> => {
    return api.post('/auth/login', data)
  },

  // 用户注册
  register: (data: RegisterForm): Promise<ApiResponse<RegisterResponse>> => {
    return api.post('/auth/register', data)
  },

  // 忘记密码
  forgotPassword: (data: ForgotPasswordForm): Promise<ApiResponse<string>> => {
    return api.post('/auth/forgot-password', data)
  },

  // 发送手机验证码
  sendPhoneCode: (phone: string): Promise<ApiResponse<VerificationCodeResponse>> => {
    return api.post('/auth/send-phone-code', { phone })
  },

  // 发送邮箱验证码
  sendEmailCode: (email: string): Promise<ApiResponse<VerificationCodeResponse>> => {
    return api.post('/auth/send-email-code', { email })
  },

  // 验证验证码
  verifyCode: (account: string, code: string, type: 'phone' | 'email'): Promise<ApiResponse<boolean>> => {
    return api.post('/auth/verify-code', { account, code, type })
  },

  // 刷新Token
  refreshToken: (): Promise<ApiResponse<{ token: string }>> => {
    return api.post('/auth/refresh-token')
  },

  // 用户登出
  logout: (): Promise<ApiResponse<string>> => {
    return api.post('/auth/logout')
  }
}

export default api