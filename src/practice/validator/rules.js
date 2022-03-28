export const rules = {
  isNonEmpty(value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength(value, errorMsg, length) {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  },
}
