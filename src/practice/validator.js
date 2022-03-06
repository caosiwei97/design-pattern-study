const strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: function (value, errorMsg) {
    // 手机号码格式
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  },
}

class Validator {
  constructor() {
    this.cache = []
  }

  add(prop, rules, errorMsg) {
    rules.forEach(({ strategy, errorMsg }) => {
      // 获取参数
      const arr = strategy.split(':')

      // 将校验函数存入缓存
      this.cache.push(function () {
        // 校验策略
        const strategy = arr.shift()
        // 校验的值
        arr.unshift(prop.value)
        // message
        arr.push(errorMsg)
        return strategies[strategy].apply(prop, arr)
      })
    })
  }

  start() {
    console.log(this.cache)
    // 取出cache的函数执行
    for (const fn of this.cache) {
      const msg = fn()
      if (msg) {
        return msg
      }
    }
  }
}

const validatorFn = () => {
  const validator = new Validator()

  validator.add(registerForm.userName, [
    {
      strategy: 'isNonEmpty',
      errorMsg: '用户名不能为空',
    },
    {
      strategy: 'minLength:10',
      errorMsg: '用户名长度不能小于 10 位',
    },
  ])

  validator.add(registerForm.password, [
    {
      strategy: 'minLength:6',
      errorMsg: '密码长度不能小于 6 位',
    },
  ])
  validator.add(registerForm.phoneNumber, [
    { strategy: 'isMobile', errorMsg: '手机号码格式不正确' },
  ])

  const errorMessage = validator.start()

  if (errorMessage) {
    console.log(errorMessage)
    return false
  }
}

var registerForm = document.getElementById('registerForm')

registerForm.onsubmit = function (e) {
  const isValid = validatorFn()
  if (!isValid) e.preventDefault()
}
