const path = require('path')
const fs = require('fs')

const ejs = require('ejs')

const compile = (template, data) => {
  const templatePosition = `../templates/${template}`
  const templatePath = path.resolve(__dirname, templatePosition)

  return new Promise((resolve, reject) => {
    ejs.renderFile(
      templatePath,

      { data },
      (err, result) => {
        if (err) {
          console.log(err)
          reject(err)
          return
        }

        resolve(result)
      }
    )
  })
}

const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName)

      return true
    }
  }
}

const writeToFile = (path, content) => {
  // 判断文件时候存在
  return fs.promises.writeFile(path, content)
}

module.exports = {
  compile,
  writeToFile,
  createDirSync
}
