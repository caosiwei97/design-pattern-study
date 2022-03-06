class Adaptee {
  specifiRequest() {
    return '德国转接头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    const info = this.adaptee.specifiRequest()
    return `${info} - 转换 - 中国转接头`
  }
}

const target = new Target()
console.log(target.request())
