/**
 * 执行终端命令
 */

const { spawn } = require('child_process')

// 封装 spawn 方法
const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)

    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  spawn,
  commandSpawn
}
