// 场景：计算职工每个月工资 = 绩效 + base
// 绩效：C -> A -> S 从低到高

function caculateSalary(level, base) {
  if (level === 'S') {
    return base + 3000
  }

  if (level === 'A') {
    return base + 20000
  }

  if (level === 'C') {
    return base + 5000
  }
}

const person1 = caculateSalary('S', 1000)
const person2 = caculateSalary('A', 1000)
const person3 = caculateSalary('C', 1000)

console.log(person1, person2, person3)
