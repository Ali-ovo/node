const EventEmitter = require('events')

// 创建一个事件总线
const eventBus = new EventEmitter()

// 监听事件
eventBus.on('event', (data) => {
  console.log('event:', data)
})

eventBus.on('click', (data) => {
  console.log('click:', data)
})

// 触发事件
eventBus.emit('event', 'hello world')

// 获取注册事件
eventBus.eventNames() // [ 'event', 'click' ]

// 获取事件监听器数量
eventBus.listenerCount('click') // 1

// 移除事件监听器
eventBus.removeAllListeners()
