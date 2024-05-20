const EventEmitter = require('events')

// 创建一个事件总线
const eventBus = new EventEmitter()

// 监听事件
eventBus.on('event', (data) => {
  console.log('event:', data)
})

// 触发事件
eventBus.emit('event', 'hello world')
