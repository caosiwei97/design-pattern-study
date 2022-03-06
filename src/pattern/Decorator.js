@addProperty('cao')
class Person {
  @readonly
  getName() {
    return Person.username
  }
}

// 修饰类
function addProperty(value) {
  return function (target) {
    target.username = value
  }
}

// 修饰方法
function readonly(target, name, des) {
  des.writable = false
}

const p = new Person()

p.getName = 1

console.log(p.getName())
