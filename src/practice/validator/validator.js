import { rules } from './rules.js'

class Validator {
  constructor() {
    this.cache = []
  }

  /**
   * 添加规则
   * @param {HTMLElement} formItem 被校验的表单项
   * @param {Array<{ rule: string; errorMsg: string }>} ruleConfig 校验规则
   */
  add(formItem, ruleConfig) {
    // 遍历所有规则配置，存放到 cache
    ruleConfig.forEach(({ rule, errorMsg }) => {
      // 获取参数 minLength:6 -> ['minLength', '6']
      const params = rule.split(':')

      // 将校验函数存入缓存
      this.cache.push(() => {
        // 校验规则
        const _rule = params.shift()
        // 校验的值
        params.unshift(formItem.value)
        // message
        params.push(errorMsg)

        return rules[_rule].apply(formItem, params)
      })
    })
  }

  validate(cb) {
    // 调用所有校验函数
    for (const fn of this.cache) {
      const errorMsg = fn()

      if (errorMsg) {
        return errorMsg
      }
    }
  }
}

export default Validator
