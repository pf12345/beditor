# beditor
react富文本编辑器

## 安装
```
npm install beditor --save-dev
```

## 使用
```js
import React, { useState } from 'react';
import Editor from 'beditor'

const editorConfig = {
  // 上传图片配置
  imgConfig: {
    file: {
      action: '/api/uploadForm',
      accept: "svg,png,jpg,jpeg,gif,webp"
    },
    remote: {
      action: '/api/uploadForm',
    }
  },
  // 上传视频配置
  videoConfig: {
    action: '/api/uploadForm'
  }
}

export default (props) => {
  const [value, setValue] = useState('hello world');
  return (
    <div>
      <Editor 
        value={value} 
        placeholder="请输入markdown..."
        onChange={(value: string, html: string) => {
          // value - 编辑器使用的渲染数据，html - 页面渲染使用数据
          console.log(value, html)
        }}
        {...editorConfig}
      />
    </div>
  )
}
```


## 开发

```
> git clone https://github.com/pf12345/beditor.git

> cd beditor

> npm install

> npm run dev
```

### 查看示例

基于bisheng的示例预览

```
> npm run start
```
> npm run start
```