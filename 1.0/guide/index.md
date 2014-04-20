## 综述

Dialog是。

* 版本：1.0
* 作者：莫争
* demo：[http://gallery.kissyui.com/dialog/1.0/demo/index.html](http://gallery.kissyui.com/dialog/1.0/demo/index.html)

## 初始化组件
		
    S.use('gallery/dialog/1.0/index', function (S, Dialog) {
         var dialog = new Dialog();
    })

## API

### 参数

*mask* (Boolean)

弹框遮罩，默认为 `true`

*width* (Number)

弹框宽度，默认为 `300`

*height* (Number)

弹框高度，默认为 `auto`

*title* (String)

弹框标题，默认为 `''`

*content* (String)

弹框内容，默认为 `''`

*buttons* (Array)

弹框按钮

*trigger* (String)

弹框触发元素，可传递选择器

*classPrefix* (String)

弹框样式前缀，默认为 `ks-dialog`

### 方法

