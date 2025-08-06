import { defineStore } from 'pinia'
import type { User, LoginForm, RegisterForm } from '@/types/auth'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
    loading: false
  }),

  getters: {
    isLoggedIn: (state) => state.isAuthenticated && !!state.user
  },

  actions: {
    async login(form: LoginForm) {
      this.loading = true
      try {
        // TODO: 实现登录逻辑
        console.log('Login form:', form)
      } catch (error) {
        console.error('Login error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(form: RegisterForm) {
      this.loading = true
      try {
        // TODO: 实现注册逻辑
        console.log('Register form:', form)
      } catch (error) {
        console.error('Register error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.user = null
      this.isAuthenticated = false
    },

    setUser(user: User) {
      this.user = user
      this.isAuthenticated = true
    }
  }
})