---
title: "【JavaScript】基础语法详解"
pubDate: 2024-04-17
chapter: frontend
tags: ["JavaScript"]
legacy: true
---

## JavaScript 基础语法教程

## 1. JavaScript简介

JavaScript是一种具有函数优先特性的轻量级、解释型或即时编译型的编程语言。它是最广泛使用的Web脚本语言，可以为网页添加交互性和动态功能。

## 2. 对象操作

### 2.1 对象的创建与基本操作

```javascript
// 创建对象
let user = {
    name: '张三',
    age: 18,
    sex: '男'
};

// 添加属性
user.address = "北京";
// 或使用中括号语法
user["email"] = "zhangsan@example.com";

// 删除属性
delete user.age;
```

### 2.2 对象的拷贝

```javascript
// 深拷贝方式1：Object.assign()
let teacher = {};
Object.assign(teacher, user);

// 深拷贝方式2：JSON转换
let teacher1 = JSON.parse(JSON.stringify(user));

// 深拷贝方式3：Object.assign()的另一种写法
let teacher2 = Object.assign({}, user);

// 浅拷贝
let teacher3 = teacher2;  // teacher3和teacher2指向同一个对象
```

### 2.3 属性访问

```javascript
let user = {
    name: '张三',
    age: 18
};

// 方式1：点语法
console.log(user.name);

// 方式2：中括号语法
console.log(user["name"]);

// 方式3：解构语法
let { name, age } = user;
```

### 2.4 空值处理

```javascript
// 可选链操作符 ?.
let a = null;
let b = a?.x;  // 安全地访问可能为null的对象

// 空值合并操作符 ??
let d = null;
let e = 1;
let f = d ?? e;  // 如果d为null或undefined，则使用e

// 空值赋值操作符 ??=
let x = null;
let y = 5;
x ??= y;  // 如果x为null或undefined，则赋值为y
```

## 3. 数组操作

### 3.1 数组的创建与基本操作

```javascript
// 创建数组
let arr = new Array();
let arr1 = [1, 2, 3, 4, 5];

// 添加元素
arr1.push(6);        // 尾部添加
arr1.unshift(0);     // 头部添加

// 删除元素
arr1.pop();          // 尾部删除
arr1.shift();        // 头部删除
arr1.splice(1, 2);   // 删除指定位置元素
```

### 3.2 数组方法

```javascript
// 切片
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(0, 2);  // [1, 2]

// 合并数组
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]

// 字符串转数组
let str = "1,2,3,4,5";
let arr3 = str.split(",");  // ["1", "2", "3", "4", "5"]

// 数组转字符串
let arr4 = ["1", "2", "3"];
console.log(arr4.join(","));  // "1,2,3"
```

### 3.3 数组高级操作

```javascript
// 排序
let numbers = [1, 10, 2, 20, 3];
numbers.sort((a, b) => a - b);  // 升序
numbers.sort((a, b) => b - a);  // 降序

// 查找元素
let users = [
    { name: "张三", age: 18 }, 
    { name: "李四", age: 19 }
];
let found = users.find(user => user.name === "张三");
let index = users.findIndex(user => user.name === "张三");

// 过滤
let filtered = users.filter(user => user.age > 18);

// 映射转换
let names = users.map(user => user.name);

// 归约计算
let sum = numbers.reduce((acc, cur) => acc + cur, 0);
```

## 4. JSON操作

```javascript
// JSON对象
let person = {
    "name": "张三",
    "age": 18,
    "address": {
        "city": "北京",
        "district": "朝阳"
    },
    "hobbies": ["读书", "运动"]
};

// JSON字符串转对象
let jsonStr = '{"name": "张三", "age": 18}';
let obj = JSON.parse(jsonStr);

// 对象转JSON字符串
let str = JSON.stringify(person);
```

## 5. 注意事项

- 使用`===`而不是`==`进行比较

- 避免使用全局变量

- 使用`const`和`let`代替`var`

- 对象和数组的深浅拷贝要区分清楚

- 注意处理null和undefined值

## 6. 最佳实践

- 始终使用分号结束语句

- 使用驼峰命名法命名变量和函数

- 合理使用解构赋值

- 优先使用箭头函数

- 使用模板字符串代替字符串拼接

本文档涵盖了JavaScript的核心基础语法，掌握这些内容可以开始进行JavaScript开发。

[← 下一篇 【蓝桥杯】进阶-线性动态规划问题&背包问题进阶策略详解](/posts/dsa-dynamicprogrammingplus/)

[【Vue】基础语法详解 上一篇 →](/posts/vue-basestudy/)

