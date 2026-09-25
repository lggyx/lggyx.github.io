---
title: "【Asp.Net】BookShop说明文档"
pubDate: 2024-05-22
chapter: archive
tags: ["ASP.NET"]
legacy: true
---

## BookShop

## 介绍

ASP.NET应用系统设计与开发实战项目BookShop，完整项目在BookShop目录下

## 项目演示

### 当当网上书店首页

![image-20241129182356531](/images/Asp-Net-BookShop/image-20241129182356531.png)

### 当当网图书分类显示

#### 按照图书分类

![image-20240522145038514](/images/Asp-Net-BookShop/image-20240522145038514.png)

#### 按照出版品牌商

![image-20240522145159148](/images/Asp-Net-BookShop/image-20240522145159148.png)

### 当当网图书详情页

![image-20240517174033577](/images/Asp-Net-BookShop/image-20240517174033577.png)

### 当当网新增订单演示

![image-20240522145321335](/images/Asp-Net-BookShop/image-20240522145321335.png)
![image-20240522145345736](/images/Asp-Net-BookShop/image-20240522145345736-1716370269692-2.png)
![image-20240522145651681](/images/Asp-Net-BookShop/image-20240522145651681-1716370269692-3.png)
![image-20240522145707070](/images/Asp-Net-BookShop/image-20240522145707070-1716370269692-4.png)

### 当当网用户登录

![image-20240517174110277](/images/Asp-Net-BookShop/image-20240517174110277-1716370269692-5.png)

### 当当网个人信息

![image-20240517174213598](/images/Asp-Net-BookShop/image-20240517174213598-1716370269692-6.png)

### 当当网购物车

![image-20240517174250589](/images/Asp-Net-BookShop/image-20240517174250589-1716370269692-7.png)

### 搜索功能演示

![image-20240517174350714](/images/Asp-Net-BookShop/image-20240517174350714.png)

### 后台管理系统用户登录

![image-20240517173310694](/images/Asp-Net-BookShop/image-20240517173310694-1716370269692-21.png)

### 管理员用户管理

#### 用户信息查询

![image-20240517173504064](/images/Asp-Net-BookShop/image-20240517173504064-1716370269692-8.png)

![image-20240517173549044](/images/Asp-Net-BookShop/image-20240517173549044-1716370269692-9.png)

#### 后端新增用户

![image-20240522150356339](/images/Asp-Net-BookShop/image-20240522150356339-1716370269692-10.png)

![image-20240522150526547](/images/Asp-Net-BookShop/image-20240522150526547-1716370269692-11.png)

### 管理员图书分类管理

![image-20240517173639044](/images/Asp-Net-BookShop/image-20240517173639044-1716370269692-12.png)

### 管理员出版社管理

![image-20240517173728364](/images/Asp-Net-BookShop/image-20240517173728364-1716370269692-13.png)

### 管理员图书管理

#### 图书分类查询

![image-20240517173804161](/images/Asp-Net-BookShop/image-20240517173804161-1716370269692-14.png)

#### 添加图书信息

![image-20240522150125276](/images/Asp-Net-BookShop/image-20240522150125276-1716370269692-16.png)

#### 修改图书信息

![image-20240522145943193](/images/Asp-Net-BookShop/image-20240522145943193-1716370269692-15.png)

### 管理员订单管理

#### 订单管理列表

![image-20240517173834433](/images/Asp-Net-BookShop/image-20240517173834433-1716370269692-17.png)

#### 订单详细信息

![image-20240522150240729](/images/Asp-Net-BookShop/image-20240522150240729-1716370269692-18.png)

## 项目特点

#### 使用Common类库统一管理DBHelper

具体内容请参考项目对应代码，此处举例

![image-20240522160917117](/images/Asp-Net-BookShop/image-20240522160917117-1716370269692-19.png)

#### 采用MD5加密用户密码信息

可以有效防止数据库泄露用户密码信息泄露的情况

![image-20240522160655322](/images/Asp-Net-BookShop/image-20240522160655322-1716370269692-20.png)

![image-20240522160732222](/images/Asp-Net-BookShop/image-20240522160732222-1716370269692-22.png)

![image-20240522160615465](/images/Asp-Net-BookShop/image-20240522160615465-1716370269692-23.png)

## 软件架构

### 项目结构

- 

BookShop.WebUI：ASP.NET MVC Web应用程序项目，包含视图、控制器、路由等。

- 

BookShop.Common：包含通用工具和辅助类的类库项目，用于数据访问层（DAL）和其他服务。

- 

BookShop.DAL：数据访问层（DAL）类库项目，包含数据访问逻辑和接口。

- 

BookShop.Model：包含数据模型（如书籍、作者、类别等）的类库项目。

- 

BookShop.BLL：业务逻辑层（BLL）类库项目，包含业务规则和服务。

![image-20240522160151327](/images/Asp-Net-BookShop/image-20240522160151327-1716370269692-24.png)

### Common类库

- 数据库连接字符串管理：在Common类库中，可以定义一个配置管理器类，用于从配置文件（如web.config或appsettings.json）中读取和解析数据库连接字符串。

- 数据库提供程序工厂：创建一个数据库提供程序工厂类，该类能够根据配置的连接字符串类型（如SQL Server、MySQL等）创建和返回相应的数据库上下文或连接对象。

### 数据访问层（DAL）

- 接口定义：在BookShop.Data项目中，为每种数据模型定义接口（如IBookRepository、IAuthorRepository等），这些接口包含CRUD（创建、读取、更新、删除）操作的方法。

- 实现类：为每个接口创建实现类（如SqlBookRepository、MySqlBookRepository等），这些类将使用Common类库中的数据库提供程序工厂来建立与数据库的连接并执行操作。

### MySQL数据源处理

- 

在Common里面配置符合MySql的DBHelper

- 

MySQL连接字符串：在web.config配置文件中添加MySQL数据库的连接字符串。

- 

MySQL提供程序：在Common类库中实现或集成MySQL数据库提供程序（如使用MySQL Connector/NET）。

### 业务逻辑层（BLL）

- 服务类：在BookShop.BLL项目中，创建服务类（如BookService、AuthorService等），这些类将调用数据访问层中的接口来执行业务逻辑。服务类应该是无状态的，并且只应包含与业务逻辑相关的代码。

### 控制器和视图

- 控制器：在BookShop.WebUI项目中，创建MVC控制器，这些控制器将调用业务逻辑层中的服务类来处理请求并返回数据。

- 视图：创建MVC视图来显示数据并允许用户与应用程序进行交互。视图应该只包含与显示相关的代码，并且应该通过控制器来与业务逻辑层进行通信。

## 安装教程

- 拉取项目

- 运行安装BookShop/mysql-connection-net文件夹中的文件，并添加引用

- 添加mybookshop数据库，运行mysql脚本

- 清理并重新生成解决方案

- 运行项目

## 使用说明

- 

本项目使用.net4.5.2，可以向上兼容

- 

在项目运行前请安装BookShop/mysql-connection-net文件夹中的文件，并添加引用

- 

测试账号信息如下：

| 测试账号 | 测试用户类型 | 密码 |
| --- | --- | --- |
| admin | 管理员 | 123456 |
| jingjing | 普通用户 | jingjing |
| bobo | VIP用户 | 123456 |

[← 下一篇 【蓝桥杯】国赛知识梳理](/posts/dsa-knowledgeorganization/)

[【蓝桥杯】进阶-状态压缩动态规划的典型题型深入分析 上一篇 →](/posts/dsa-dynamicprogrammingtype/)

