const strategy = {
  A(base) {
    return base + 2000
  },
  S(base) {
    return base + 3000
  },
  C(base) {
    return base + 500
  },
}

class Bonus {
  constructor(base) {
    this.base = base
    this.strategy = null
  }

  setStrategy(level) {
    this.strategy = strategy[level]
  }

  getSalary() {
    return this.strategy.call(this, this.base)
  }
}

const bo1 = new Bonus(1000)
bo1.setStrategy('S')

const bo2 = new Bonus(1000)
bo2.setStrategy('A')

const bo3 = new Bonus(1000)
bo3.setStrategy('C')

console.log(bo1.getSalary())
console.log(bo2.getSalary())
console.log(bo3.getSalary())
