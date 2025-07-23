<template>
  <div class="document-categories">
    <h2 class="categories-title">📚 文档分类</h2>
    <div class="categories-grid">
      <a 
        :href="withBase('/docs/backend/express-framework')"
        class="category-card"
      >
        <div class="category-icon">⚙️</div>
        <h3 class="category-title">Backend</h3>
        <p class="category-description">后端开发技术，服务端架构和API设计</p>
        <div class="category-count">2 篇文档</div>
      </a>
      
      <a 
        :href="withBase('/docs/database/design-principles')"
        class="category-card"
      >
        <div class="category-icon">🗄️</div>
        <h3 class="category-title">Database</h3>
        <p class="category-description">数据库设计、优化和管理相关知识</p>
        <div class="category-count">2 篇文档</div>
      </a>
      
      <a 
        :href="withBase('/docs/devops/ci-cd-practices')"
        class="category-card"
      >
        <div class="category-icon">🚀</div>
        <h3 class="category-title">DevOps</h3>
        <p class="category-description">DevOps实践、CI/CD和部署自动化</p>
        <div class="category-count">2 篇文档</div>
      </a>
      
      <a 
        :href="withBase('/docs/frontend/api-examples')"
        class="category-card"
      >
        <div class="category-icon">🎨</div>
        <h3 class="category-title">Frontend</h3>
        <p class="category-description">前端开发技术，包括框架、工具和最佳实践</p>
        <div class="category-count">3 篇文档</div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
</script>

<style scoped>
.document-categories {
  margin: 3rem 0;
}

.categories-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.category-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: block;
}

.category-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  text-decoration: none;
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: var(--vp-c-brand-soft);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  text-align: center;
}

.category-description {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.category-count {
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  text-align: center;
  font-weight: 600;
  background: var(--vp-c-brand-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  display: inline-block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .category-card {
    padding: 1.5rem 1rem;
  }
  
  .categories-title {
    font-size: 1.5rem;
  }
  
  .category-icon {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    padding: 1rem;
  }
}
</style>
