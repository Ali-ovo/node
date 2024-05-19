const path = require('path')

// 1. 获取路径信息
const filePath = '/ProjectTest/01_path/02_path的其他方法.js'

// 获取路径中的目录部分
path.dirname(filePath) // /ProjectTest/01_path

// 获取路径中的文件名部分
path.basename(filePath) // 02_path的其他方法.js

// 获取路径中的扩展名部分
path.extname(filePath) // .js

// 2. 路径拼接
const basePath = '/ProjectTest/01_path/'
const filename = '/abc.txt'
const otherName = './other.js'

// 将多个路径拼接在一起
path.join(basePath, filename) // /ProjectTest/01_path/abc.txt

// 3. resolve 路径拼接
// resolve 会判断拼接的路径字符串 是否以 ../ 或 ./ 开头，如果有，则进行路径简化
path.resolve(basePath, filename, otherName) // /abc.txt/other.js
