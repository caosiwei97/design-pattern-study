// 场景：计算职工每个月工资 = 绩效 + base
// 绩效：C -> A -> S 从低到高

function levelS (base) {
  retunr base + 3000
}

function levelA (base) {
  retunr base + 2000
}

function levelC (base) {
  retunr base + 500
}

function caculateSalary (level, base) {
  let result

  switch (level) {
    case 'S':
      result =  levelS(base)
      break;
    case 'A':
      result =  levelA(base)
      break;
    case 'C':
      result =  levelC(base)
      break;
  
    default:
      break;
  }
}

const person1 = caculateSalary('S', 1000)
const person2 = caculateSalary('A', 1000)
const person3 = caculateSalary('C', 1000)

console.log(person1, person2, person3)
