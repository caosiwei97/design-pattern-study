const animation = {
  linear: function (t, b, c, d) {
    return (c * t) / d + b
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b
  },
}

class Animate {
  constructor(dom) {
    this.dom = dom
    this.startTime = 0
    this.startPos = 0
    this.endPos = 0
    this.propertyName = null
    this.easing = null
    this.duration = null
  }

  start(propertyName, endPos, duration, easing) {
    // 记录开始时间
    this.startTime = +new Date()
    // 初始位置
    this.startPos = this.dom.getBoundingClientRect()[propertyName]
    // dom 节点需要被改变的 CSS 属性名
    this.propertyName = propertyName
    // 目标位置
    this.endPos = endPos
    // 持续时间
    this.duration = duration
    // 动画函数
    this.easing = animation[easing]

    requestAnimationFrame(this.step.bind(this))
  }

  step() {
    const t = +new Date()
    const pos = this.easing(
      t - this.startTime,
      this.startPos,
      this.endPos - this.startPos,
      this.duration,
    )
    this.update(pos)

    if (t < this.startTime + this.duration) {
      requestAnimationFrame(this.step.bind(this))
    }
  }

  update(pos) {
    this.dom.style[this.propertyName] = pos + 'px'
  }
}

export default Animate
