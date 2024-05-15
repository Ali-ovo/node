const name = 'ali233  '
let age = 18

function changeAge() {
  age = 20
}

function getInfo() {
  console.log('getInfo' + name + age)
}

module.exports = {
  name,
  age,
  changeAge,
  getInfo,
}

