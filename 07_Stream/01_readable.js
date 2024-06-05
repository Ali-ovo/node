const fs = require('fs')

const reader = fs.createReadStream('./foo.txt', {
  // flags: https://nodejs.cn/api/v20/fs.html#file-system-flags
  flags: 'r',
  start: 3,
  end: 6,
  highWaterMark: 2,
})

// 流读取过程
reader.on('data', (chunk) => {
  console.log(chunk.toString())
})

// 流读取开始
reader.on('open', () => {
  console.log('open')
})

// 流读取结束
reader.on('close', () => {
  console.log('close')
})
