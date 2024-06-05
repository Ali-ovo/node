const fs = require('fs')

const writer = fs.createWriteStream('./foo.txt', {
  flags: 'a',
  start: 7,
})

// 流写入过程
writer.write('你好', (err) => {
  if (err) {
    console.log(err)
  }
  console.log('写入成功')

  // 写入结束 并且可以传入数据
  writer.end("关闭了")
})

// 流写入开始
writer.on('open', () => {
  console.log('open')
})

// 流写入结束
writer.on('close', () => {
  console.log('close')
})
