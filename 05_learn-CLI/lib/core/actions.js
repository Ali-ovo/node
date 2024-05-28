const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('./config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project) => {
  // 1. clone 项目
  await download(vueRepo, project, { clone: true })

  // 2. 执行 pnpm install
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  await commandSpawn(command, ['install'], { cwd: `./${project}` })

  // 3. 运行 pnpm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })

  // 4. 打开浏览器
  open('http://localhost:4173')
}

module.exports = { createProjectAction }
