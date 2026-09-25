---
title: "【MySql】配置项说明"
pubDate: 2024-08-01
chapter: infra
tags: ["MySQL"]
legacy: true
---

![image](/images/MySql-Doc/bd3ad6dc01394e0c26e56a543d8a53b.jpg)

## MySql用户密码规则修改

**MySQL8.4设置密码规则为mysql_native_password**

mysql使用的时候会有报错：Plugin ‘mysql_native_password’ is not loaded

### 1)首先确认mysql_native_password插件是否已经安装

安装mysql_native_password插件
INSTALL PLUGIN mysql_native_password SONAME ‘mysql_native_password’;
如果已经安装，会显示该插件已经存在

### 2)查看插件状态

show plugins;
看看mysql_native_password插件的状态是不是ACTIVE,如果状态值为DISABLED则说明插件没有激活

### 3)修改my.cnf或my.ini配置文件

[mysqld]
mysql_native_password=ON #添加此行
不要添加default_authentication_plugin=mysql_native_password，否则mysql会无法启动。

### 4)重启mysql服务

### 5)mysql命令行查看用户使用的插件

select user,host,plugin from mysql.user;

### 6)修改密码认证方式

ALTER USER ‘root‘@’localhost’ IDENTIFIED WITH mysql_native_password BY ‘your password’;
FLUSH PRIVILEGES; #刷新权限
————————————————

```
                        版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
```

原文链接：[https://blog.csdn.net/AppleII/article/details/140136984](https://blog.csdn.net/AppleII/article/details/140136984)

[← 下一篇 【MarkDown】图表基本语法](/2024/11/29/MarkDown-ChartBase/)

[【Gitee】配置云图库 上一篇 →](/2024/07/31/Gitee-ImgWarehouse/)

∧ [≡](#toc-div)
