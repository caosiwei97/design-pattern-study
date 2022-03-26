const mult = function () {
  let a = 1

  for (let i = 0; i < arguments.length; i++) {
    a *= arguments[i]
  }

  return a
}

const plus = function () {
  let a = 1

  for (let i = 0; i < arguments.length; i++) {
    a += arguments[i]
  }

  return a
}

const createProxyFactory = (fn) => {
  const cache = {}

  return function () {
    const args = Array.prototype.join.call(arguments, ',')

    return (cache[args] = cache[args] || fn.apply(this, arguments))
  }
}

const multProxy = createProxyFactory(mult)
const plusProxy = createProxyFactory(plus)

console.log(multProxy(1, 2, 3))
console.log(multProxy(1, 2, 3))
