# CDE Login - Vue3 注册登录系统

基于 Vue3 + TypeScript + Element Plus 的现代化注册登录系统。

## 功能特性

- 🏠 Landing Page - 首页
- 📝 用户注册
  - 导航页面
  - 手机号注册
  - 邮箱注册
  - 密码确认
- 🔐 用户登录
  - 手机号登录
  - 账户登录
  - Tab 切换
- 🔑 忘记密码

## 技术栈

- Vue 3 + TypeScript
- Vue Router 4
- Pinia (状态管理)
- Element Plus (UI 组件库)
- Vite (构建工具)
- Axios (HTTP 客户端)

## 项目结构

```
CDELogin/
├── public/                 # 静态资源
│   └── favicon.ico
├── src/
│   ├── api/               # API 接口
│   │   └── auth.ts
│   ├── assets/            # 静态资源
│   │   ├── images/        # 图片资源
│   │   └── styles/        # 样式文件
│   │       ├── global.css
│   │       └── variables.css
│   ├── components/        # 公共组件
│   │   ├── auth/          # 认证相关组件
│   │   │   ├── AuthLayout.vue
│   │   │   └── VerificationCodeInput.vue
│   │   └── common/        # 通用组件
│   │       ├── AppHeader.vue
│   │       └── AppFooter.vue
│   ├── router/            # 路由配置
│   │   └── index.ts
│   ├── stores/            # Pinia 状态管理
│   │   └── auth.ts
│   ├── types/             # TypeScript 类型定义
│   │   └── auth.ts
│   ├── utils/             # 工具函数
│   │   ├── index.ts
│   │   └── validation.ts
│   ├── views/             # 页面组件
│   │   ├── LandingPage.vue
│   │   ├── NotFound.vue
│   │   └── auth/          # 认证相关页面
│   │       ├── Login.vue
│   │       ├── ForgotPassword.vue
│   │       └── register/  # 注册相关页面
│   │           ├── Navigation.vue
│   │           ├── PhoneRegister.vue
│   │           ├── PhoneConfirm.vue
│   │           ├── EmailRegister.vue
│   │           └── EmailConfirm.vue
│   ├── App.vue            # 根组件
│   └── main.ts            # 入口文件
├── .eslintrc.cjs          # ESLint 配置
├── .gitignore             # Git 忽略文件
├── env.d.ts               # 环境类型声明
├── index.html             # HTML 模板
├── package.json           # 项目配置
├── README.md              # 项目说明
├── tsconfig.json          # TypeScript 配置
└── vite.config.ts         # Vite 配置
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint

# 类型检查
npm run type-check
```

## 环境配置

项目支持多环境配置：

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置

## 路由结构

- `/` - Landing Page (首页)
- `/auth/login` - 登录页面
- `/auth/register/navigation` - 注册导航页面
- `/auth/register/phone` - 手机号注册
- `/auth/register/phone-confirm` - 手机号密码确认
- `/auth/register/email` - 邮箱注册
- `/auth/register/email-confirm` - 邮箱密码确认
- `/auth/forgot-password` - 忘记密码

## 组件说明

### 页面组件
- `LandingPage.vue` - 首页，展示产品介绍和登录注册入口
- `Login.vue` - 登录页面，支持手机号/账户登录切换
- `ForgotPassword.vue` - 忘记密码页面
- `register/` - 注册相关页面集合

### 通用组件
- `AppHeader.vue` - 应用头部组件
- `AppFooter.vue` - 应用底部组件
- `AuthLayout.vue` - 认证页面布局组件
- `VerificationCodeInput.vue` - 验证码输入组件

## 状态管理

使用 Pinia 进行状态管理：

- `auth.ts` - 用户认证状态管理
  - 用户信息
  - 登录状态
  - Token 管理
  - 登录/注册/登出操作

## API 接口

- `auth.ts` - 认证相关 API
  - 用户登录
  - 用户注册
  - 忘记密码
  - 验证码发送/验证
  - Token 刷新

## 工具函数

- `validation.ts` - 表单验证工具
  - 手机号验证
  - 邮箱验证
  - 密码验证
  - 验证码验证
- `index.ts` - 通用工具函数
  - 时间格式化
  - 防抖/节流
  - 深拷贝
  - 本地存储

## 样式系统

- `variables.css` - CSS 变量定义
- `global.css` - 全局样式
- Element Plus 组件库样式

## 开发规范

- 使用 TypeScript 进行类型检查
- 使用 ESLint 进行代码规范检查
- 组件使用 Composition API
- 路由使用懒加载
- API 请求统一管理