const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Node.js</h1>')
  res.end('<p>Hello World 111</p>')
})

server.listen(8000, '0.0.0.0', () => {
  console.log('服务器已启动，地址是：http://localhost:8000')
})
