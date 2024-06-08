const http = require('http')

// http.get('http://localhost:8000', (res) => {
//   console.log(res.statusCode)
//   console.log(res.headers)

//   res.on('data', (data) => {
//     console.log(data.toString())
//   })

//   res.on('end', () => {
//     console.log('数据接收完毕')
//   })
// })

const request = http.request(
  {
    method: 'POST',
    host: 'localhost',
    port: 8000,
  },
  (res) => {
    res.on('data', (data) => {
      console.log(data.toString())
    })

    res.on('end', () => {
      console.log('数据接收完毕')
    })
  }
)

request.end()