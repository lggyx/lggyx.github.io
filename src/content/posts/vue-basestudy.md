---
title: "【Vue】基础语法详解"
pubDate: 2024-04-17
chapter: frontend
tags: ["Vue"]
legacy: true
---
# 【Vue】基础语法详解

# Vue.js 基础语法教程

## 1. 环境搭建

首先需要引入Vue.js：

```html

```

## 2. Vue实例创建

Vue实例是Vue应用的起点：

```javascript
var app = new Vue({
    el: "#app",   // 绑定根元素
    data: {       // 数据对象
        msg: "hello vue"
    },
    methods: {    // 方法
        // 这里定义方法
    }
})
```

## 3. 基础语法

### 3.1 文本插值 - Mustache语法

使用双大括号进行文本插值：

```html

{{ msg }}
  
```

支持基本的表达式运算：

```html

{{ bool ? 'a':'b' }}
  
```

### 3.2 指令

#### v-html

用于输出HTML字符串：

```html

```

#### v-model

实现双向数据绑定：

```html

{{value}}

```

#### v-if / v-else-if / v-else

条件渲染：

```html

红色

绿色

其他颜色

```

#### v-bind

绑定HTML属性：

```html
[链接](url)

[链接](url)
```

#### v-on

绑定事件：

```html

点击事件

点击事件

```

#### v-for

列表渲染：

```html

{{item}}

{{index}}: {{item}}

    {{item.name}}: ¥{{item.price}}

```

### 3.3 Class与Style绑定

动态绑定class：

```html

    

```

## 4. 完整示例

下面是一个包含菜单切换的完整示例：

```html

    
        {{item}}
    
    

        {{item}}
    

var app = new Vue({
    el: "#app",
    data: {
        menu: ["首页", "详情", "购物车", "我的"],
        cur_menu: '首页'
    }
})

.active {
    color: red;
}

```

## 5. 注意事项

- 在模板表达式中应避免复杂的运算

- v-for遍历时建议添加:key属性以提高性能

- v-if和v-show的选择要根据具体场景（频繁切换用v-show）

- 使用v-html时要注意XSS攻击风险

以上就是Vue.js的基础语法介绍。

[← 下一篇 【JavaScript】基础语法详解](/2024/04/17/JavaScript-BaseStudy/)

[【WinForm】EntityFramework框架 上一篇 →](/2024/04/10/WinForm-EntityFramework/)

∧ [≡](#toc-div)
