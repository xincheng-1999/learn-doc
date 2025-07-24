import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 侧边栏项类型
interface SidebarItem {
  text: string
  link: string
}

// 侧边栏组类型
interface SidebarGroup {
  text: string
  items: SidebarItem[]
}

// 自动生成侧边栏的函数 - 为每个分类生成独立的侧边栏
function generateSidebar() {
  const docsPath = path.join(__dirname, '../docs')
  const sidebar: Record<string, SidebarGroup[]> = {}
  
  try {
    const categories = fs.readdirSync(docsPath).filter(item => {
      const itemPath = path.join(docsPath, item)
      return fs.statSync(itemPath).isDirectory()
    }).sort() // 按字母顺序排序目录
    
    categories.forEach(category => {
      const categoryPath = path.join(docsPath, category)
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))
        .sort() // 按字母顺序排序文件
      
      if (files.length > 0) {
        const items: SidebarItem[] = files.map(file => {
          const fileName = path.basename(file, '.md')
          // 将文件名转换为更友好的标题
          const title = fileName
            .replace(/[-_]/g, ' ') // 替换连字符和下划线为空格
            .replace(/\b\w/g, l => l.toUpperCase()) // 首字母大写
          
          return {
            text: title,
            link: `/docs/${category}/${fileName}`
          }
        })
        
        // 将目录名转换为更友好的标题
        const categoryTitle = category
          .replace(/[-_]/g, ' ') // 替换连字符和下划线为空格
          .replace(/\b\w/g, l => l.toUpperCase()) // 首字母大写
        
        // 为这个分类创建侧边栏配置
        sidebar[`/docs/${category}/`] = [{
          text: categoryTitle,
          items: items
        }]
      }
    })
  } catch (error) {
    console.warn('Error generating sidebar:', error)
  }
  
  return sidebar
}

// 导航项类型
interface NavItem {
  text: string
  link: string
}

// 自动生成导航栏的函数
function generateNav(): NavItem[] {
  const docsPath = path.join(__dirname, '../docs')
  const nav: NavItem[] = [{ text: 'Home', link: '/' }]
  
  try {
    const categories = fs.readdirSync(docsPath).filter(item => {
      const itemPath = path.join(docsPath, item)
      return fs.statSync(itemPath).isDirectory()
    }).sort() // 按字母顺序排序目录
    
    categories.forEach(category => {
      const categoryPath = path.join(docsPath, category)
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))
        .sort() // 按字母顺序排序文件
      
      if (files.length > 0) {
        // 将目录名转换为更友好的标题
        const categoryTitle = category
          .replace(/[-_]/g, ' ') // 替换连字符和下划线为空格
          .replace(/\b\w/g, l => l.toUpperCase()) // 首字母大写
        
        // 使用第一个文件作为默认链接
        const firstFile = path.basename(files[0], '.md')
        
        nav.push({
          text: categoryTitle,
          link: `/docs/${category}/${firstFile}`
        })
      }
    })
  } catch (error) {
    console.warn('Error generating nav:', error)
  }
  
  return nav
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习文档中心",
  description: "系统化的技术文档，助力你的学习之路",
  base: '/learn-doc/', // GitHub Pages 部署路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: generateNav(),
    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xincheng-1999/learn-doc' }
    ]
  }
})
