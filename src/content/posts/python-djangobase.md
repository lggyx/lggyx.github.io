---
title: "【Python】Django入门"
pubDate: 2024-07-28
chapter: python
tags: ["Python", "Django"]
legacy: true
---

## 介绍

Django 是一个高级的 Python 网络框架，可以快速开发安全和可维护的网站。由经验丰富的开发者构建，Django 负责处理网站开发中麻烦的部分，因此你可以专注于编写应用程序，而无需重新开发。 它是免费和开源的，有活跃繁荣的社区，丰富的文档，以及很多免费和付费的解决方案。

Django 可以使你的应用具有以下优点：

- 

[完备性](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E5%AE%8C%E5%A4%87%E6%80%A7)

Django 遵循“功能完备”的理念，提供开发人员可能想要“开箱即用”的几乎所有功能。因为你需要的一切都是一个”产品“的一部分，它们都可以无缝结合在一起，遵循一致性设计原则，并且具有广泛和[最新的文档](https://docs.djangoproject.com/en/1.10/).

- 

[通用性](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E9%80%9A%E7%94%A8%E6%80%A7)

Django 可以（并已经）用于构建几乎任何类型的网站—从内容管理系统和维基，到社交网络和新闻网站。它可以与任何客户端框架一起工作，并且可以提供几乎任何格式（包括 HTML，Rss 源，JSON，XML 等）的内容。你正在阅读的网站就是基于 Django。在内部，尽管它为几乎所有可能需要的功能（例如几个流行的数据库，模版引擎等）提供了选择，但是如果需要，它也可以扩展到使用其他组件。

- 

[安全性](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E5%AE%89%E5%85%A8%E6%80%A7)

Django 帮助开发人员通过提供一个被设计为“做正确的事情”来自动保护网站的框架来避免许多常见的安全错误。例如，Django 提供了一种安全的方式来管理用户账户和密码，避免了常见的错误，比如将 session 放在 cookie 中这种易受攻击的做法（取而代之的是 cookies 只包含一个密钥，实际数据存储在数据库中）或直接存储密码而不是密码哈希。*密码哈希是通过[密码散列函数](https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC%E9%9B%9C%E6%B9%8A%E5%87%BD%E6%95%B8)发送密码而创建的固定长度值。Django 能通过运行哈希函数并将输出的哈希值与存储的哈希值进行比较来检查输入的密码是否正确。然而由于功能的“单向”性质，即使存储的哈希值被泄漏，攻击者也难以破解原始密码。*默认情况下，Django 可以防范许多漏洞，包括 SQL 注入，跨站点脚本，跨站点请求伪造和点击劫持 (请参阅 [网站安全](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/First_steps/Website_security) 相关信息，如有兴趣).

- 

[可扩展](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E5%8F%AF%E6%89%A9%E5%B1%95)

Django 使用基于组件的“[无共享](https://en.wikipedia.org/wiki/Shared_nothing_architecture)”架构 (架构的每一部分独立于其他架构，因此可以根据需要进行替换或更改). 在不用部分之间有明确的分隔意味着它可以通过在任何级别添加硬件来扩展服务：缓存服务器，数据库服务器或应用程序服务器。一些最繁忙的网站已经成功地缩放了 Django，以满足他们的需求（例如 Instagram 和 Disqus，仅举两个例子，可自行添加）。

- 

[可维护性](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7)

Django 代码编写是遵照设计原则和模式，鼓励创建可维护和可重复使用的代码。特别是它使用了不要重复自己（DRY）原则，所以没有不必要的重复，减少了代码的数量。Django 还将相关功能分组到可重用的“应用程序”中，并且在较低级别将相关代码分组或模块（ [模型视图控制器 (MVC)](https://developer.mozilla.org/zh-CN/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture) 模式).

- 

[灵活性](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/Introduction#%E7%81%B5%E6%B4%BB%E6%80%A7)

Django 是用 Python 编写的，它在许多平台上运行。这意味着你不受任务特定的服务器平台的限制，并且可以在许多种类的 Linux，Windows 和 Mac OsX 上运行应用程序。此外，Django 得到许多网络托管提供商的好评，他们经常提供特定的基础设施和托管 Django 网站的文档。

## 开发环境

## 操作系统

Django web 应用程序能运行在几乎任何可以运行 Python3 的计算机上：Windows，Mac OSX，Linux/Unix，Solaris，仅举几例。几乎任何计算机都具备在开发期间运行 Django 所需的性能。

## 数据库

Django 支持四个主要数据库（PostgreSQL，MySQL，Oracle 和 SQLite），还有一些社区库可以为其他流行的 SQL 和 NOSQL 数据库提供不同级别的支持。

## 安装Django

## 初级使用

[Django框架完全指南：从入门到高级应用-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/2396500)

[← 下一篇 【Gitee】配置云图库](/2024/07/31/Gitee-ImgWarehouse/)

[【Python】PyQt入门 上一篇 →](/2024/07/17/Python-PyQtBase/)

∧ [≡](#toc-div)
