const message = 'Hello World'

const enBuffer = Buffer.from(message, 'utf8')

console.log('enBuffer', enBuffer)

const cnMessage = '你好，世界'
const cnBuffer = Buffer.from(cnMessage, 'utf16le')
console.log('cnBuffer', cnBuffer.toString('utf16le'))
