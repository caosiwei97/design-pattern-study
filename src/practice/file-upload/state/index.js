import Upload from './Upload.js'

const upload = new Upload('设计模式')

upload.init()

window.external.upload = function (state) {
  upload[state]()
}

window.external.upload('sign')

setTimeout(function () {
  window.external.upload('uploading') // 1 秒后开始上传
}, 1000)

setTimeout(function () {
  window.external.upload('done') // 5 秒后上传完成
}, 5000)
