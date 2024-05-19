const fs = require('fs')

// 读取文件信息
const filepath = './abc.txt'

// 1. 同步
const info = fs.statSync(filepath)
console.log('同步 后续代码') // 同步代码会阻塞后续代码执行
console.log('同步 info ', info)

// 2. 异步
fs.stat(filepath, (err, info) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('异步 info ', info)
})
console.log('异步 后续代码') // 异步代码不会阻塞后续代码执行

// 3. Promise
fs.promises.stat(filepath).then((info) => {
  console.log('Promise info ', info)
})
console.log('Promise 后续代码') // Promise 代码不会阻塞后续代码执行
