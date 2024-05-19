const path = require('path')

const basePath = 'D:/web/AllCode/ProjectTtest/NodeJs/node-study/04_常见的内置模块/01_path/'
const filename = 'abc.txt'

const filePath = path.resolve(basePath, filename)

console.log(filePath)
