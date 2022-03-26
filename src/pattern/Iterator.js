const Iterator = function (array) {
  let index = 0

  return {
    next() {
      return index < array.length
        ? { value: array[index++], done: false }
        : { value: undefined, done: true }
    },
  }
}

const it = Iterator([1, 2, 3])

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
