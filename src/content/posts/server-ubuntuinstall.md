---
title: "【服务器】Ubuntu安装部署"
pubDate: 2024-07-09
chapter: infra
tags: ["服务器"]
legacy: true
---

![7b69e8420c30a47f9a589a8d1a25cb0](/images/Server-UbuntuInstall/7b69e8420c30a47f9a589a8d1a25cb0.jpg)

## ubuntu-20.04.6-live-server-amd64

## 安装部署

### 1. 制作一个U盘启动盘

**Ubuntu** iso**下载地址**

[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)

[官网下载](https://cn.ubuntu.com/download)

**制作工具下载**

推荐使用rufus，因为免费

[安装地址](https://rufus.org.cn/)

准备一个U盘，插上U盘，打开rufus，选择镜像文件，具体配置如下：

![image-20240709200710588](/images/Server-UbuntuInstall/image-20240709200710588.png)

然后点击开始就行了

等U盘制作完成就可以开始下一步了

### 2. 设置开机启动项

#### 对于不同的电脑，开机boot方法不同，根据主板品牌，大致如下：

![img](/images/Server-UbuntuInstall/SouthEast.png)

笔记本电脑
主要按键：Delete, ESC, F1, F2, F10

品牌笔记本电脑
ibm/thinkpad（冷开机按f1，部分新型号可以在重新启动时启动按f1，少数机型是Fn+F1或F2）

惠普hp（启动和重新启动时按f2或者F10，或者先按ESC再按F10）

索尼sony（启动和重新启动时按f2或者ASSIST键）

戴尔dell（启动和重新启动时按f2）

宏碁acer（启动和重新启动时按f2）

东芝toshiba（冷开机时按esc然后按f1，或者F2）

惠普康柏hp compaq（开机到右上角出现闪动光标时按f10，或者开机时按f10）

富士通fujitsu（启动和重新启动时按f2）

三星Samsung（启动和重新时按f2）

联想Lenovo(启动时按F2或Fn+F2，部分机型需关机时按Novo恢复键)

华硕Asus（启动时按F2）

微星msi（启动时按Delete）

神舟Hasee（启动时按F2）

小米、海尔、明基、技嘉、方正、清华同方、雷神、未来人类、外星人、七喜等品牌笔记本也是F2

台式电脑
主要按键：DEL, ESC, F1, F2, F8, F9, F10, F12

组装机不同主板台式机
Award BIOS：按“Del”键

AMI BIOS：按“Del”或“ESC”键

Phoenix BIOS：按“F2”键

品牌台式机
ibm/thinkpad（冷开机按f1，部分新型号可以在重新启动时启动按f1）

惠普hp（启动和重新启动时按f2或者F10）

索尼sony（启动和重新启动时按f2）

戴尔dell（启动和重新启动时按f2）

宏碁acer（启动和重新启动时按f2）

东芝toshiba（冷开机时按esc然后按f1）

惠普康柏hp compaq（开机到右上角出现闪动光标时按f10，或者开机时按f10）

富士通fujitsu（启动和重新启动时按f2）

三星Samsung（启动和重新时按f2）

联想Lenovo(启动时按F2或Fn+F2，部分机型需关机时按Novo恢复键)

华硕Asus（启动时按F2）

大多数中国大陆国产和台湾品牌（启动和重新启动时按f2）

#### 进入BIOS之后，设置启动方式为移动盘启动

[用u盘装系统bios怎么设置u盘启动_快启动官网 (kqidong.com)](http://www.kqidong.com/bios/2718.html)

我测试的时候使用的电脑不支持UEFI,所以选择的是下面这个：（Remouable Dev.移动盘启动)

![1st Boot Device](/images/Server-UbuntuInstall/1495707536719160_w3m.png)

设置好之后，按F10进行保存重启，进入下一步

### 3. 系统安装

[参考文章](https://www.cnblogs.com/huizhipeng/p/18089881)

### 4. 设置允许ssh使用22端口连接

[参考文章](https://blog.csdn.net/ychgyyn/article/details/90215522#:~:text=%E8%BE%93%E5%85%A5%20passwd%20%EF%BC%8C%E8%BE%93%E5%85%A5%E4%BD%A0%E6%83%B3%E8%A6%81%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%E5%AF%86%E7%A0%81%20%E8%BE%93%E5%85%A5%20su,yyn%20%E5%88%87%E6%8D%A2%E5%9B%9E%E6%99%AE%E9%80%9A%E7%94%A8%E6%88%B7%E7%84%B6%E5%90%8E%E5%9C%A8%E8%BE%93%E5%85%A5%20su%20root%20%E5%90%8E%E8%BE%93%E5%85%A5%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%E5%AF%86%E7%A0%81%E5%88%87%E6%8D%A2%E5%9B%9EROOT%E7%94%A8%E6%88%B7%E7%9C%8B%E6%98%AF%E5%90%A6%E6%88%90%E5%8A%9F)

## ubuntu-20.04.6-desktop-amd64.iso

[参考文章](https://blog.csdn.net/weixin_44023658/article/details/105197092)

桌面版安装比较简单，制作U盘启动盘前面有样例，故不在记录

## 使用宝塔面板进行管理

[宝塔面板官网](https://www.bt.cn/)

安装脚本

```bash
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```

在ubuntu命令行中运行即可安装

## 使用1panel面板进行管理

[1panel官网链接](https://1panel.cn/)

```bash
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

[← 下一篇 【Python】Kivy入门](/2024/07/09/Python-KivyBase/)

[【蓝桥杯】国赛知识梳理 上一篇 →](/2024/05/24/DSA-KnowledgeOrganization/)

∧ [≡](#toc-div)
