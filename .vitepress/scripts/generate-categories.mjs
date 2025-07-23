import { readdirSync, statSync, writeFileSync, mkdirSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function generateCategoriesData() {
  const docsPath = join(__dirname, '../../docs')
  const categories = []
  
  try {
    const dirs = readdirSync(docsPath).filter(item => {
      const itemPath = join(docsPath, item)
      return statSync(itemPath).isDirectory()
    }).sort()
    
    dirs.forEach(dir => {
      const dirPath = join(docsPath, dir)
      const files = readdirSync(dirPath)
        .filter(file => file.endsWith('.md'))
        .sort()
      
      if (files.length > 0) {
        const firstFile = basename(files[0], '.md')
        categories.push({
          name: dir,
          fileCount: files.length,
          firstFile: firstFile,
          files: files.map(f => basename(f, '.md'))
        })
      }
    })
  } catch (error) {
    console.warn('Error generating categories data:', error)
  }
  
  // 生成 JavaScript 模块
  const content = `export const categories = ${JSON.stringify(categories, null, 2)}`
  
  // 确保目录存在
  const dataDir = join(__dirname, '../data')
  try {
    statSync(dataDir)
  } catch {
    // 目录不存在，创建它
    mkdirSync(dataDir, { recursive: true })
  }
  
  writeFileSync(join(__dirname, '../data/categories.js'), content)
  console.log('Categories data generated successfully!')
}

generateCategoriesData()
