import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
// 导入图标
import { IconUser, IconMobile, IconMessage, IconLock } from '@arco-design/web-vue/es/icon'

import App from './App.vue'
import router from './router'

// 导入全局样式
import '@/assets/styles/tokens.css'
import '@/assets/styles/global.css'

const app = createApp(App)

// 注册图标组件
const icons = {
  IconUser,
  IconMobile,
  IconMessage,
  IconLock
}
for (const [key, component] of Object.entries(icons)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')