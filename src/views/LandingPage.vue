<template>
  <div class="landing-page">
    <!-- 头部导航 -->
    <div class="header">
      <div class="header-wrapper">
        <div class="logo">
          <h1 class="logo-text">一见CDE·工程数据平台</h1>
        </div>
        <div class="header-actions">
          <a-button 
            class="register-btn"
            type="secondary"
            @click="$router.push('/auth/register/navigation')"
          >
            注册
          </a-button>
          <a-button 
            class="login-btn"
            type="primary"
            @click="$router.push('/auth/login')"
          >
            登录
          </a-button>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <main class="main">
      <div class="background-wrapper">
        <div class="background-image"></div>
      </div>
      <div class="content-container">
        <div class="hero-content">
          <h1 class="hero-title">一见CDE·工程数据平台</h1>
          <p class="hero-subtitle">一站式统筹多种工程数据，AI驱动的数据管理平台</p>
        </div>
      </div>
      <!-- 底部 -->
      <footer class="footer">
        <p>© 2025 以见科技（上海）有限公司 版权所有 沪ICP备18004844号</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
// Landing Page 逻辑
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-base);
}

/* 头部样式 */
.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e6eb;
  padding: 16px 24px;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-family: "Noto Sans SC", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #1d2129;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.register-btn {
  background-color: #f2f3f5 !important;
  border-color: #f2f3f5 !important;
  color: #4e5969 !important;
  font-family: "Noto Sans SC", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 16px !important;
  border-radius: 4px !important;
}

.register-btn:hover {
  background-color: #e5e6eb !important;
  border-color: #e5e6eb !important;
}

.login-btn {
  background-color: #165dff !important;
  border-color: #165dff !important;
  color: #ffffff !important;
  font-family: "Noto Sans SC", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 16px !important;
  border-radius: 4px !important;
}

.login-btn:hover {
  background-color: #0e44d7 !important;
  border-color: #0e44d7 !important;
}

/* 主要内容区域 */
.main {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 844px;
  overflow: hidden;
}

.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/LandingPage_bg.png');
  background-size: cover;
  background-position: center;
  opacity: 1;
}

.content-container {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--spacing-4);
  max-width: 900px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.hero-title {
  font-family: var(--font-family-heading);
  font-weight: bold;
  font-size: 64px;
  line-height: 1.2;
  color: var(--primary-7);
  margin: 0;
}

.hero-subtitle {
  font-size: 28px;
  line-height: 1.4;
  color: var(--primary-7);
  margin: 0;
}

/* 底部 */
.footer {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  color: var(--text-2);
  font-size: var(--font-size-body-1);
  z-index: 2;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .content-container {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 40px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .content-container {
    padding: var(--spacing-4) var(--spacing-2);
  }

  .main {
    height: auto;
    min-height: calc(100vh - 120px);
  }

  .header {
    padding: 12px 16px;
  }

  .logo-text {
    font-size: 18px;
    line-height: 24px;
  }

  .header-actions {
    gap: 6px;
  }

  .register-btn,
  .login-btn {
    padding: 4px 12px !important;
    font-size: 12px;
    line-height: 18px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }

  .footer {
    font-size: 10px;
  }
}
</style>