import plugin from './Plugin.js'
import {
  SignState,
  UploadingState,
  PauseState,
  DoneState,
  ErrorState,
} from './State.js'

// 上传类
class Upload {
  constructor(filename) {
    this.filename = filename
    this.plugin = plugin // 上传的控件
    this.button1 = null // 暂停和继续上传
    this.button2 = null // 删除
    this.signState = new SignState(this)
    this.uploadingState = new UploadingState(this)
    this.pauseState = new PauseState(this)
    this.doneState = new DoneState(this)
    this.errorState = new ErrorState(this)
    this.currentState = this.signState // 初始状态
  }

  init() {
    this.dom = document.createElement('div')
    this.dom.innerHTML = `
            <span>${this.filename}</span>
            <button data-action="button1">扫描中</button>
            <button data-action="button2">删除</button>
          `
    document.body.appendChild(this.dom)
    this.button1 = document.querySelector('[data-action="button1"]')
    this.button2 = document.querySelector('[data-action="button2"]')
    this.bindEvent()
  }

  bindEvent() {
    // 给两个按钮绑定事件
    this.button1.onclick = () => {
      this.currentState.clickHandler1()
    }

    this.button2.onclick = () => {
      this.currentState.clickHandler2()
    }
  }

  sign() {
    this.plugin.sign()
    this.currentState = this.signState
  }

  uploading() {
    this.button1.innerHTML = '上传中，点击暂停'
    this.plugin.uploading()
    this.currentState = this.uploadingState
  }

  pause() {
    this.button1.innerHTML = '已暂停，点击继续上传'
    this.plugin.pause()
    this.currentState = this.pauseState
  }

  done() {
    this.button1.innerHTML = '上传完成'
    this.plugin.done()
    this.currentState = this.doneState
  }

  error() {
    this.button1.innerHTML = '上传失败'
    this.currentState = this.errorState
  }

  del() {
    this.plugin.del()
    this.dom.parentNode.removeChild(this.dom)
  }
}

export default Upload
