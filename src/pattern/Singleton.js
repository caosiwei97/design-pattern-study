class LoginForm {
  static createInstance = (function () {
    const instance = Object.create(null)
    return function () {
      return instance || new Singleton()
    }
  })()

  constructor(state = 'hide') {
    this.state = state
  }

  show() {
    if (this.state === 'show') {
      alert('登录框已经显示')
      return
    }
    this.state = 'show'
  }

  hide() {
    if (this.state === 'hide') {
      alert('登录框已经隐藏')
      return
    }
    this.state = 'hide'
  }
}

function Singleton(name) {
  this.name = name
}

Singleton.prototype.getName = function () {
  return this.name
}

// 惰性单例
Singleton.getInstance = (function () {
  let instance = null

  return function (name) {
    if (!instance) {
      instance = new Singleton(name)
    }

    return instance
  }
})()
const instance1 = Singleton.createInstance()
const instance2 = Singleton.createInstance()
const instance3 = Singleton.createInstance()

console.log(instance1 === instance2, instance2 === instance3)
