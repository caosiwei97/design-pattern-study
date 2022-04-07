const strategies = {
  S(salary) {
    return salary * 5
  },
  A(salary) {
    return salary * 4
  },
  B(salary) {
    return salary * 3
  },
  Q(salary) {
    return salary * 3
  },
  E(salary) {
    return salary * 3
  },
}

/**
 * 计算奖金
 * @param {string} level 绩效等级
 * @param {number} salary 基本工资
 * @returns
 */
const calculateBonus = (level, salary) => strategies[level](salary)

console.log(calculateBonus('S', 10000))
console.log(calculateBonus('A', 10000))
console.log(calculateBonus('B', 10000))
