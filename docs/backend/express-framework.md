# Express 框架

Express是Node.js最流行的Web框架。

## 安装

```bash
npm install express
```

## 基本用法

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
```

## 中间件

Express应用本质上就是一系列中间件函数的调用。
