# Chrome 插件开发


## manifest.json

### 1、基本属性

- name - 扩展名称  - *
- version - 版本 - *
- description - 描述
- icons - 图标位置
- manifest_verion - manifest版本信息 - *

```json
{ // 基本信息
  "name": "weather",
  "description": "a weather app for chrome",
  "version": "1.0",
  "manifest_version": 2,
  "icons": ""
}
```



### 2、browser_action



browser_action 指定扩展的图标放在 Chrome 工具栏中，它定义了扩展图标文件位置（default_icon）、悬浮提示（default_title）和点击扩展图标所显示的页面位置（default_popup）。



```json
{
  "browser_action": {
    "default_icon": {
      "19": "images/icon19.png",
      "38": "images/icon38.png"
    },
    "default_title": "stock helper",
    "default_popup": "popup.html"
  }
}
```





### 3、options_page



options_page 属性定义了扩展的**设置**页面，配置后在扩展图标点击右键可以看到 *选项*，点击即打开指定页面。对于没有图标（没有设置 browser_action ）的扩展，可以在 chrome://extensions/ 页面找到选项按钮。



```json
{
  "options_page": "setting.html"
}
```



### 4、permissions



permissions 是一个数组，这个属性定义了扩展需要向 Chrome 申请的权限。

比如通过 XMLHttpRequest 跨域请求数据、访问浏览器选项卡（tabs）、获取当前活动选项卡（activeTab）、浏览器通知（notifications）、存储（storage）等，可以根据需要添加。



```json
{
  "permissions": [
    "http://api.wunderground.com/api/"
    "tabs",
    "activeTab",
    "notifications",
    "storage"
  ]
}
```





### 5、background

background 可以使扩展常驻后台，比较常用的是指定子属性 scripts，表示在扩展启动时自动创建一个包含所有指定脚本的页面。



```json
{
  "background": {
    "scripts": ["js/backgroud.js"]
  }
}
```





6、chrome_url_