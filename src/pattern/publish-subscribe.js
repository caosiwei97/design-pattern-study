class Bus {
  constructor() {
    this.cache = {}
  }

  subscribe(event, cb) {
    this.cache[event] = this.cache[event] || []
    this.cache[event].push(cb)
  }

  publish(event, ...params) {
    if (this.cache[event].length) {
      this.cache[event].forEach((cb) => {
        cb.apply(this, params)
      })
    }
  }

  remove(event, cb) {
    const cbs = this.cache[event]

    if (!cbs.length) {
      return
    }

    if (!cb) {
      cbs.length = 0
    } else {
      this.cache[event] = cbs.filter((item) => {
        return item !== cb
      })
    }
  }
}

const bus = new Bus()

bus.subscribe('foo', (name) => {
  console.log(name)
})

bus.subscribe('foo', (name) => {
  console.log(name)
})

bus.remove('foo')

bus.subscribe('foo', (name) => {
  console.log(name)
})

bus.publish('foo', 'cao')
