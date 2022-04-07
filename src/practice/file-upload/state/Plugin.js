// 上传控件
let plugin = (function () {
  let plugin = document.createElement('embed')
  plugin.style.display = 'none'

  plugin.sign = function () {
    console.log('开始扫描')
  }

  plugin.pause = function () {
    console.log('文件暂停上传')
  }

  plugin.uploading = function () {
    console.log('文件开始上传')
  }

  plugin.del = function () {
    console.log('文件被删除')
  }

  plugin.done = function () {
    console.log('文件上传完成')
  }

  document.body.appendChild(plugin)

  return plugin
})()

export default plugin
