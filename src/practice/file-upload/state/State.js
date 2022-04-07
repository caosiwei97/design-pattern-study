class State {
  clickHandler1() {
    throw new Error('子类必须重写父类的 clickHandler1 方法')
  }
  clickHandler2() {
    throw new Error('子类必须重写父类的 clickHandler2 方法')
  }
}

class SignState extends State {
  constructor(upload) {
    super()
    this.upload = upload
  }

  clickHandler1() {
    console.log('扫描中，点击无效...')
  }

  clickHandler2() {
    console.log('文件正在上传中，不能删除')
  }
}

class UploadingState extends State {
  constructor(upload) {
    super()
    this.upload = upload
  }

  clickHandler1() {
    this.upload.pause()
  }

  clickHandler2() {
    console.log('文件正在上传中，不能删除')
  }
}

class PauseState extends State {
  constructor(upload) {
    super()
    this.upload = upload
  }

  clickHandler1() {
    this.upload.uploading()
  }

  clickHandler2() {
    this.upload.del()
  }
}

class DoneState extends State {
  constructor(upload) {
    super()
    this.upload = upload
  }

  clickHandler1() {
    console.log('文件已完成上传, 点击无效')
  }

  clickHandler2() {
    this.upload.del()
  }
}

class ErrorState extends State {
  constructor(upload) {
    super()
    this.upload = upload
  }

  clickHandler1() {
    console.log('文件上传失败, 点击无效')
  }

  clickHandler2() {
    this.upload.del()
  }
}

export { SignState, UploadingState, PauseState, DoneState, ErrorState }
