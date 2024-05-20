const fs = require('fs')

// 1. 文件写入
const content = 'Hello, Node.js'
// fs.writeFile(
//   './abc.txt',
//   content,
//   {
//     flag: 'a+',
//     flush: true,

//   },
//   (err) => {
//     console.log(err)
//   }
// )

// 2.文件读取
fs.readFile(
  './abc.txt',
  {
    encoding: 'utf8',
  },
  (err, data) => {
    console.log(data)
  }
)
