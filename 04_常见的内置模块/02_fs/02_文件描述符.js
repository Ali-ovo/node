const fs = require('fs')

fs.open('./abc.txt', (err, fd) => {
  if (err) {
    console.log(err)
    return
  }

  // fd 是文件描述符
  console.log(fd)

  // 通过描述符读取文件信息
  fs.fstat(fd, (err, info) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('文件信息 ', info)
  })

  fs.close(fd, (err) => {
    if (err) {
      console.log(err)
      return
    }
  })
})
