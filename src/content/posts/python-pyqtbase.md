---
title: "【Python】PyQt入门"
pubDate: 2024-07-17
chapter: python
tags: ["Python", "PyQt"]
legacy: true
---

## 1、GUI开发框架简介

## 1.1 通用开发框架

-  winform：基于C#语言，用于开发桌面应用程序，可以使用NanUI之类的UI库，开发选择多，运行占用内存大

-  javafx：基于java，主要用于跨平台桌面程序开发

-  electorn：基于node-js，跨平台，开发成本低，运行效率低

-  qt：基于C++，跨平台，效率高，开发成本高

-  flutter：基于dart语言，谷歌开源移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面

## 1.2 Python方案

- PyQT：PyQt5是Qt v5的Python版本，功能强大复杂，提供QT Designer设计UI （GPL V3协议，开源，商用收费）

- Pyside: PySide2是来自QT for Python项目的官方Python模块 （LGPL协议，闭源商用）

- Tkinter：Python标准库，Tk GUI 工具包的接口 ，布局通过代码实现，简单易用，但开发效率低

- WxPython：开源免费，提供wxFormbuilder，压缩版PyQT

本文主要详细介绍下PyQt5完整入门教程，包含环境配置，使用Qt Designer设计UI，最终完成一个天气预报的GUI实例开发。

参考文献：[PyQt完整入门教程](https://www.cnblogs.com/lovesoo/p/12491361.html)

## 2.PyQt环境配置

## 2.1 PyQt5 及 pyqt5-tools 安装

直接pip安装即可：

```mipsasm
pip install PyQt5
pip install pyqt5-tools
```

建议使用国内源，进行快速安装：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pyqt5
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pyqt5-tools
```

## 2.2 PyCharm配置环境

启动PyCharm后，新建一个PyQt5空项目后，需要配置Qt Designer、pyuic、pyrcc工具，相关配置方法如下：

### 2.2.1 Qt Designer

Qt Designer 是通过拖拽的方式放置控件，并实时查看控件效果进行快速UI设计。

最终生成.ui文件（实质上是XML格式的文件），可以通过pyuic5工具转换成.py文件。

在Pycharm中，依次打开 File - Settings - Tools - External Tools，点击 + Create Tool，配置如下：

```yaml
Name: QtDisigner
Program : E:\pyqy\venv\Lib\site-packages\qt5_applications\Qt\bin\designer.exe # 当前designer目录，请根据实际修改
Working directory: $FileDir$
```

![image-20240717002351613](/images/Python-PyQtBase/image-20240717002351613.png)

### 2.2.2 Qt Designer 汉化

在这里说明一下，新版本的QT Designer不需要汉化，打开默认是中文版本

默认Qt Designer是英文版的，可以使用翻译文件进行汉化，下载地址：[百度网盘](https://pan.baidu.com/s/1tJ3P2UQEv7OF5ArfKCOsjA)，提取码：kxvx

下载文件 designer_zh_CN.qm后， 拷贝至本地pyqt5_tools的translations文件夹下即可，示例目录：

```vb
E:\pyqy\venv\Lib\site-packages\qt5_applications\Qt\bin\translations
```

在PyCharm主界面，依次点击 Tools - External Tools - QtDisigner，即可启动中文界面的Qt Disigner

![image-20240717002330263](/images/Python-PyQtBase/image-20240717002330263.png)

### 2.2.3 PyUIC配置

PyUIC主要是把Qt Designer生成的.ui文件换成.py文件。

在Pycharm中，依次打开 File - Settings - Tools - External Tools，点击 + Create Tool，配置如下：

```yaml
Name: PyUIC
Program : C:\Python38\python.exe # 当前Python目录，请根据实际修改
Arguments: -m PyQt5.uic.pyuic $FileName$ -o $FileNameWithoutExtension$.py
Working directory: $FileDir$
```

![image-20240717002706346](/images/Python-PyQtBase/image-20240717002706346.png)

### 2.2.4 PyRCC配置

PyRCC主要是把编写的.qrc资源文件换成.py文件。

在Pycharm中，依次打开 File - Settings - Tools - External Tools，点击 + Create Tool，配置如下：

```yaml
Name: PyRCC
Program : C:\Python38\Scripts\pyrcc5.exe # 当前rcc工具目录，请根据实际修改
Arguments: $FileName$ -o $FileNameWithoutExtension$_rc.py
Working directory: $FileDir$
```

![image-20240717002938184](/images/Python-PyQtBase/image-20240717002938184.png)

## 3、实例开发

下面我们以一个简单的城市天气预报为例，演示使用PyQt5开发一个GUI程序的基本流程。

## 3.1 获取天气数据

主要逻辑是通过Http接口调用免费的API接口获取相关城市天气数据，详见[天气API说明](https://www.sojson.com/api/weather.html)

如测试一下请求天津的天气，链接为：[http://t.weather.sojson.com/api/weather/city/101030100](http://t.weather.sojson.com/api/weather/city/101030100)

返回成功状态（status）为：200 ，失败为非200，返回数据为json数据，直接解析获取即可。

## 3.1 设计界面UI

打开Qt Designer，可参考下图设计Weather.ui:

### 3.1 获取天气数据

主要逻辑是通过Http接口调用免费的API接口获取相关城市天气数据，详见[天气API说明](https://www.sojson.com/api/weather.html)

如测试一下请求天津的天气，链接为：[http://t.weather.sojson.com/api/weather/city/101030100](http://t.weather.sojson.com/api/weather/city/101030100)

返回成功状态（status）为：200 ，失败为非200，返回数据为json数据，直接解析获取即可。

### 3.1 设计界面UI

打开Qt Designer，可参考下图设计Weather.ui:

![img](/images/Python-PyQtBase/445074-20200314115431903-1503834053.jpg)

我们主要用到的控件有Button, GroupBox, Label,ComboBox,TextEdit，同时定义了两个按钮queryBtn及clearBtn，分别用来查询及清空天气数据。我们需要绑定槽函数，方法如下：

- 在Qt Designer右下角选择 信号/槽编辑器，点击+号新增

- 分别选择queryBtn及clearBtn，选择信号 clicked(), 接收者 Dialog 及槽 accept() （我没找到绑定自定义槽函数的方法…）

![img](/images/Python-PyQtBase/445074-20200314115403954-1640742746.jpg)

最后选择保存为 Weather.ui文件。

### 3.2 转换.ui文件为.py文件

在PyCharm中选中Weather.ui文件后，右键选择 External Tools - PyUIC，即可生成Weather.py，实际运行命令如下：

```makefile
C:\Python38\python.exe -m PyQt5.uic.pyuic Weather.ui -o Weather.py
```

其中，我们需要把两个按钮绑定的槽函数：

```lua
self.queryBtn.clicked.connect(Dialog.accept)
self.clearBtn.clicked.connect(Dialog.accept)
```

修改为自定义函数：

```lua
self.queryBtn.clicked.connect(Dialog.queryWeather)
self.clearBtn.clicked.connect(Dialog.clearText)
```

### 3.3 调用MainDialog

在MainDialog中调用界面类Ui_Dialog，然后在其中中添加查询天气的业务逻辑代码，这样就做到了界面显示和业务逻辑的分离。

新增demo.py文件， 在MainDialog类中定义了两个槽函数queryWeather()和clearText(),以便在界面文件Weather.ui中定义的两个按钮(queryBtn 和clearBtn) 触发clicked 信号与这两个槽函数进行绑定。

```python
# coding:utf-8

import sys
import Weather
from PyQt5.QtWidgets import QApplication, QDialog
import requests

class MainDialog(QDialog):
    def __init__(self, parent=None):
        super(QDialog, self).__init__(parent)
        self.ui = Weather.Ui_Dialog()
        self.ui.setupUi(self)
    
    def queryWeather(self):
        cityName = self.ui.comboBox.currentText()
        cityCode = self.getCode(cityName)
        
        r = requests.get("http://t.weather.sojson.com/api/weather/city/{}".format(cityCode))
        
        print(r.json())
        
        if r.json().get('status') == 200:
            weatherMsg = '城市：{}\n日期：{}\n天气：{}\nPM 2.5：{} {}\n温度：{}\n湿度：{}\n风力：{}\n\n{}'.format(
                r.json()['cityInfo']['city'],
                r.json()['data']['forecast'][0]['ymd'],
                r.json()['data']['forecast'][0]['type'],
                int(r.json()['data']['pm25']),
                r.json()['data']['quality'],
                r.json()['data']['wendu'],
                r.json()['data']['shidu'],
                r.json()['data']['forecast'][0]['fl'],
                r.json()['data']['forecast'][0]['notice'],
            )
        else:
            weatherMsg = '天气查询失败，请稍后再试！'
        
        self.ui.textEdit.setText(weatherMsg)
    
    def getCode(self, cityName):
        cityDict = {"北京": "101010100",
                    "上海": "101020100",
                    "天津": "101030100"}
        
        return cityDict.get(cityName, '101010100')
    
    def clearText(self):
        self.ui.textEdit.clear()

if __name__ == '__main__':
    myapp = QApplication(sys.argv)
    myDlg = MainDialog()
    myDlg.show()
    sys.exit(myapp.exec_())
```

最终运行显示效果如下：

![img](/images/Python-PyQtBase/445074-20200314115449906-304390105.jpg)

[← 下一篇 【Python】Django入门](/2024/07/28/Python-DjangoBase/)

[【Python】Flask入门 上一篇 →](/2024/07/16/Python-FlaskBase/)

∧ [≡](#toc-div)
