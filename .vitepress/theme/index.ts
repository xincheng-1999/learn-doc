import DefaultTheme from 'vitepress/theme'
import DocumentCategories from './components/DocumentCategories.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DocumentCategories', DocumentCategories)
  }
}
