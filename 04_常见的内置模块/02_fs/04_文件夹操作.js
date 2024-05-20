const fs = require('fs')

// 1. 创建文件夹
const dirname = './test'
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err)
  })
}

// 2.读取文件夹中的所有文件
fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
  console.log(files)
})

// 3.文件夹的重命名
