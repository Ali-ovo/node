const { promisify } = require('util')
const path = require('path')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile, createDirSync } = require('../utils/utils')

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

// 添加组件
const addCpmAction = async (name, dest) => {
  // 1. 编译ejs模板 result
  const result = await compile('vue-component.ejs', { name, lowerName: name.toLowerCase() }, `${name}.vue`, dest)

  // 2. 写入文件
  // 判断生成目录文件
  if (createDirSync(dest)) {
    const targetPath = path.resolve(dest, `${name}.vue`)
    writeToFile(targetPath, result)
  }
}

module.exports = { createProjectAction, addCpmAction }
