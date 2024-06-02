const fs = require('fs')
const sharp = require('sharp')

// 读取文本
// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data.toString())
// })

// 读取文件图片
fs.readFile('./lei.jpg', (err, data) => {
  console.log(data)

  fs.writeFile('./lei2.jpg', data, (err) => {
    if (err) {
      console.log(err)
    }
  })
})

// 使用sharp库处理图片
sharp('./lei.jpg').rotate().resize(1000, 600).toFile('./baz.png')
