const name = 'ali233  '
let age = 18

function changeAge() {
  age = 20
}

function getInfo() {
  console.log('getInfo' + name + age)
}

// 这里 大括号 不是一个对象 而且放置变量的引用列表
export { name, age, changeAge, getInfo }
