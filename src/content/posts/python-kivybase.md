---
title: "【Python】Kivy入门"
pubDate: 2024-07-09
chapter: python
tags: ["Python", "Kivy"]
legacy: true
---

## Kivy简介

Kivy是Python的Gui的一种。

网上关于使用python进行ui设计的文档很少，因此为了自己方便，也为了这个领域的发展，于是编写初稿。

**注**：本版本是在windows环境下使用的，后期其他系统可能会添加。

[参考文献](https://cycleuser.gitbooks.io/kivy-guide-chinese/content/00-Kivy-CN.html)

## 安装

**官网原文档链接**

[Installation on Windows](https://kivy.org/docs/installation/installation-windows.html)

[Installation on Linux](https://kivy.org/docs/installation/installation-linux.html)

[Installation on Mac OS](https://kivy.org/docs/installation/installation-osx.html)

## 安装前提

首先你得有一个合适的python环境

官方文档里面提及的是3.9的版本

国内安装比较慢，可以采用国内的开源镜像站

[阿里云开源镜像站](https://mirrors.aliyun.com/python-release/)

之后最好设置下载镜像源为国内的，国外的比较慢

## 安装过程

安装了Python之后，打开命令行工具cmd，然后按照下面的命令来进行Kivy的安装。

- 首先要保证已经安装了最新的pip和wheel：

```bash
python -m pip install --upgrade pip wheel setuptools
```

- 然后安装必要的依赖包(其中gstreamer大小接近139MB，如果不需要用，就可以跳过不安装这个包:

```python
python -m pip install docutils pygments pypiwin32 kivy.deps.sdl2 kivy.deps.glew
python -m pip install kivy.deps.gstreamer --extra-index-url https://kivy.org/downloads/packages/simple/
```

- 如果上一步都成功了没什么报错，就可以安装Kivy了:

```bash
python -m pip install kivy
```

- 在环境变量中添加一些路径到PATH来避免遇到[各种issues](https://github.com/kivy/kivy/issues/3957) (在你的python.exe所在的路径下运行下面的命令):

```bash
set PATH=%PATH%;%cd%\share\sdl2\bin;%cd%\share\glew\bin
```

## 基础

[原文地址](https://kivy.org/docs/guide/basic.html)

## Kivy环境安装搭建

Kivy要依赖很多Python包，比如 pygame, gstreamer, PIL, Cairo 等等还有好多。这些包并非都是必需的，要根据你的运行平台来看具体情况，有时候缺那么一两个包就可能导致安装失败，或者运行过程中出错等等，这就挺痛苦的。所以Kivy官方针对Windows和MacOS X提供了集成好关键部件的压缩包，解压缩之后直接就能用。具体的安装过程可以参考下面链接中的中文安装指南：

- [Kivy中文安装指南](http://blog.cycleuser.org/kivy-installment-tutorial.html)

如果你非要自己从零开始安装，那最起码要确保安装有[Cython](http://cython.org/)和[Pygame](http://pygame.org/)。这两个包可以通过pip来安装，如下所示：

```bash
pip install cython
pip install pygame
pip install kivy
```

[Kivy的开发版本](https://github.com/kivy/kivy)也可以通过git来安装：

```bash
git clone https://github.com/kivy/kivy
make
```

## 创建一个应用

创建一个Kivy应用大概步骤如下：

- 基于App类创建一个子类；

- 把build()方法实现为返回一个控件实例(这个控件的实例也就是你整个应用的根控件)。

- 创建一个这个类的实例，然后调用run()方法。

下面的代码就是上述思路的最小化实现：

```python
import kivy
kivy.require('1.0.6') # 注意要把这个版本号改变成你现有的Kivy版本号!

from kivy.app import App # 译者注：这里就是从kivy.app包里面导入App类
from kivy.uix.label import Label # 译者注：这里是从kivy.uix.label包中导入Label控件，这里都注意开头字母要大写

class MyApp(App):

    def build(self): # 译者注：这里是实现build()方法
        return Label(text='Hello world') # 译者注：在这个方法里面使用了Label控件

if __name__ == '__main__':
    MyApp().run() # 译者注：这里就是运行了。
```

把上面的代码以文本形式复制到一个文本文件中，保存成py文件，例如main.py，然后运行，就行了。

![运行截图](/images/Python-KivyBase/image-20240709221042996.png)

## Kivy应用的生命周期

如上图所示，不论什么用途和目的，咱们应用的入口都是这个run()方法，在本文的样例代码中，就是“MyApp().run()”。

下面就一行一行开始详细解释了：

```python
from kivy.app import App
```

为什么要导入这个App类呢？因为咱们自定义的这个App要继承这个类。这个类的位置在kivy安装目录下的kivy目录下的app.py文件中。

如果你想要深入挖掘一下，去了解这个Kivy的App类到底是怎么个内容，你可以打开这个app.py文件，亲自来看看。Kivy作者特别鼓励大家去阅读源码。Kivy基于Python，用Sphinx编写的文档，所以每个类的文档都在对应的文件内。

然后咱们回过头来，继续看本文这次的代码的第二行：

```python
from kivy.uix.label import Label
```

这里一定要特别注意各种包和类的导入。”kivy.uix”这个包的作用是容纳用户界面元素，比如各种输出布局和控件。

接下来看到这一行：

```python
class MyApp(App):
```

这一行定义了咱们这次的Kivy应用的基类。如果你要做修改的话，把MyApp改成你要设定的应用名字就可以了。

接着往下看：

```python
def build(self):
```

在上面的生命周期图中加粗强调的部分表明，build函数所处的是要进行初始化和返回根控件的位置。根控件返回的操作在下面这一行中实现：

```python
return Label(text='Hello world')
```

这里我们用文本‘Hello World’对Label这一控件进行了初始化，并且返回了其实例。这个Label就是咱们这个应用的根控件了。

Python是用缩进来区别代码块的，所以一定要注意上面代码的缩进和层次，尤其是函数定义那部分。

然后咱们继续，到了真正让应用开始运行的这部分了：

```python
if __name__ == '__main__':
    MyApp().run()
```

这里对MyApp这个类进行了初始化，然后调用了这个类的run()方法。这样就初始化并启动了我们的Kivy应用了。

## 运行应用

接下来就是要在不同操作系统平台上来运行咱们刚刚写好的应用了：

To run the application, follow the instructions for your operating system:

- Windows 可以在CMD中以如下方式运行：

```cmd
$ python main.py #用系统Python运行
C:\appdir>kivy.bat main.py #用kivy.bat来运行，注意这里要设定好正确的路径
```

- Android 下面要运行还需要一些复杂的文件，所以等以后深入了之后再给讲解这部分了。

这个应用运行之后的具体效果就是下面图片所示这样，会打开一个窗口，然后展示出一个Label，上面写着文本‘Hello World’，这个Label会覆盖该窗口的全部区域。就这样了。

![img](/images/Python-KivyBase/quickstart.png)

## 修改定制这个应用

增加一个用户名/密码输入的页面

```python
from kivy.app import App
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.textinput import TextInput

class LoginScreen(GridLayout):

    def __init__(self, **kwargs):
        super(LoginScreen, self).__init__(**kwargs)
        self.cols = 2
        self.add_widget(Label(text='User Name'))
        self.username = TextInput(multiline=False)
        self.add_widget(self.username)
        self.add_widget(Label(text='password'))
        self.password = TextInput(password=True, multiline=False)
        self.add_widget(self.password)

class MyApp(App):

    def build(self):
        return LoginScreen()

if __name__ == '__main__':
    MyApp().run()
```

![运行截图](/images/Python-KivyBase/image-20240709221537055.png)

在下面这行代码中，我们导入了一种名为Gridlayout的布局：

```python
from kivy.uix.gridlayout import GridLayout
```

这个类被我们用作基类来制作根控件LoginScreen，在如下代码中进行了定义：

```python
class LoginScreen(GridLayout):
```

如下代码中，我们在LoginScreen类中重新定义了初始化方法**init**()，这样来增加一些控件，并且定义了这些控件的行为：

```python
def __init__(self, **kwargs):
    super(LoginScreen, self).__init__(**kwargs)
```

一定要注意这里要加super，才能把现有的新初始化方法覆盖掉继承来的旧初始化方法。另外也要注意，这里调用super的时候没有省略掉**kwargs，这是一种好习惯。

然后继续往下看：

```python
self.cols = 2
self.add_widget(Label(text='User Name'))
self.username = TextInput(multiline=False)
self.add_widget(self.username)
self.add_widget(Label(text='password'))
self.password = TextInput(password=True, multiline=False)
self.add_widget(self.password)
```

上面的代码中，我们让GridLayout来管理子控件，把子控件设置为两栏，然后加上用户名和密码的Label字符显示控件和TextInput字符输入控件。

运行上面的代码，得到的窗口效果大概如下图：

![img](/images/Python-KivyBase/guide_customize_step1.png)

尝试着重新缩放一下窗口大小，你会发现上面的控件会相对整个窗口的尺寸而自行调整大小，并不需要人为去操作了。这是因为这些控件都使用了默认的尺寸。

## 环境

[英文原文](https://kivy.org/docs/guide/environment.html)

Kivy的初始化和很多行为都可以通过各种环境变量来控制。

例如，若要严格设定用PIL进行文本渲染，可以通过如下方式来实现：

```bash
$ KIVY_TEXT=pil python main.py
```

(译者注：PIL，Python Imaging Library, Python 下常用的绘图库)

所有的这些环境变量的修改设定都需要在导入Kivy之前进行，具体如下所示：

```python
import os
os.environ['KIVY_TEXT'] = 'pil'
import kivy
```

## 路径控制

- 从Kivy1.0.7版本开始提供

You can control the default directories where config files, modules and kivy data are located.

Kivy的配置文件、模块以及数据存储的默认目录，都可手动设定所在位置。

KIVY_DATA_DIR

这个是Kivy的数据目录，默认值为/data 。

KIVY_MODULES_DIR

这个是Kivy的模块目录，默认值为/modules 。

KIVY_HOME

这个是Kivy的HOME目录，该目录是用来存放本地配置文件的，必须是一个可以写入的位置。对应不同系统也有不同位置：

```
* Desktop: /.kivy
* Android: /.kivy
* iOS: /Documents/.kivy
```

- 从Kivy1.9.0版本开始提供

KIVY_SDL2_PATH

这个变量若设定了，编译Kivy的时候就会使用该位置的SDL2库文件，而不再使用系统的库文件。在环境变量PATH的开头部位就要设定好这个变量，这样在运行一个Kivy应用的时候才能也使用相同的SDL2库文件。

- 从Kivy1.9.0版本开始提供

#### 特别注意

刚刚这个SDL2路径是用来编译Kivy的。运行程序的话就用不着了。

## 配置文件

KIVY_USE_DEFAULTCONFIG

若设定了此环境变量，Kivy会读取制定的配置文件。

KIVY_NO_CONFIG

若设定了此环境变量，Kivy将不会读取也不会写入任何配置文件。也适用于用户配置文件夹的位置。（译者注：这句话我还没弄明白，因为没有这样尝试。）

KIVY_NO_FILELOG

若设定了此环境变量，日志将不再输出到文件内。

KIVY_NO_CONSOLELOG

若设定了此环境变量，日志将不再输出到控制台。

KIVY_NO_ARGS

若设定了此环境变量，命令行传递的参数将不会被Kivy解析和使用。也就是说，可以不用 – 定义符，就能随便创建一个使用自己参数的脚本或者应用：

```python
import os
os.environ["KIVY_NO_ARGS"] = "1"
import kivy
```

- 从Kivy1.9.0版本开始提供

## 限定Kivy.core核心，使用特定版本

Kivy.core会尝试使用所在平台的最优实现。如果要测试或者定制安装，你可能要把选择器设定为某个特定版本的kivy.core。

KIVY_WINDOW

这一变量是用来设定如何创建窗口，可用值：sdl2, pygame, x11, egl_rpi

KIVY_TEXT

这一变量是用来设定如何渲染文本，可用值：sdl2, pil, pygame, sdlttf

KIVY_VIDEO

这一变量是用来设定如何渲染视频，可用值：pygst, gstplayer, pyglet, ffpyplayer, ffmpeg, gi, null

KIVY_AUDIO

这一变量是用来设定如何播放声音，可用值：sdl2, gstplayer, pygst, ffpyplayer, pygame, gi, avplayer

KIVY_IMAGE

这一变量是用来设定如何读取图像，可用值：sdl2, pil, pygame, imageio, tex, dds, gif

KIVY_CAMERA

这一变量是用来设定如何读取摄像头，可用值：videocapture, avfoundation, pygst, opencv

KIVY_SPELLING

这一变量是用来设定拼写，可用值： enchant, osxappkit

KIVY_CLIPBOARD

这一变量是用来设定剪切板管理组件，可用值：sdl2, pygame, dummy, android

## 设置单位

KIVY_DPI

这个是用来设定Metrics.dpi的dpi值的。

- 从Kivy1.4.0版本开始提供

KIVY_METRICS_DENSITY

这个是用来设定Metrics.density，像素密度。

- 从Kivy1.5.0版本开始提供

KIVY_METRICS_FONTSCALE

这个是用来设定Metrics.fontscale，字体大小。

- 从Kivy1.5.0版本开始提供

## 图形输出

KIVY_GL_BACKEND

此变量用于设定使用的OpenGL后端，更多细节参考[cgl](http://kivy.org/docs/api-kivy.graphics.cgl.html#module-kivy.graphics.cgl).

KIVY_GL_DEBUG

此变量用于设定是否对OpenGL调用进行日志记录，更多细节参考[cgl](http://kivy.org/docs/api-kivy.graphics.cgl.html#module-kivy.graphics.cgl).

KIVY_GRAPHICS

此变量用于设定是否使用OpenGL ES2，更多细节参考[cgl](http://kivy.org/docs/api-kivy.graphics.cgl.html#module-kivy.graphics.cgl).

KIVY_GLES_LIMITS

此变量用于设定是否强制设定GLES2（默认值为启用，设置为1）。如果设定为false，Kivy将不再兼容GLES2。（译者注：这部分我不懂，就直接生硬翻译了原文，建议大家参考一下原文去理解。）如果设置为true，可能有下表中所示的潜在的不兼容情况：

| Mesh indices | If true, the number of indices in a mesh is limited to 65535 |
| --- | --- |
| Texture blit | When blitting to a texture, the data (color and buffer) format must be the same format as the one used at the texture creation. On desktop, the conversion of different color is correctly handled by the driver, while on Android, most of devices fail to do it. Ref: [https://github.com/kivy/kivy/issues/1600](https://github.com/kivy/kivy/issues/1600) |

- 从Kivy1.8.1版本开始提供

KIVY_BCM_DISPMANX_ID

此变量是针对Raspberry Pi树莓派平台的，用于设定所选择的视频输出端口。默认值为0，下面列表中是在vc_dispmanx_types.h这个头文件中存储的可供选择的变量值：

- 0: DISPMANX_ID_MAIN_LCD

- 1: DISPMANX_ID_AUX_LCD

- 2: DISPMANX_ID_HDMI

- 3: DISPMANX_ID_SDTV

- 4: DISPMANX_ID_FORCE_LCD

- 5: DISPMANX_ID_FORCE_TV

- 6: DISPMANX_ID_FORCE_OTHER

（译者注：上面0-6分别是不同的显示输出端口，相信很容易看懂，大家探索一下吧。）

## 配置

[英文原文](https://kivy.org/docs/guide/config.html)

Kivy的配置文件是一个名为config.ini的文本，符合[标准INI格式](http://en.wikipedia.org/wiki/INI_file)。

## 找到配置文件位置

Kivy的配置文件存放在环境变量KIVY_HOME所制定的位置：

```bash
KIVY_HOME>/config.ini
```

在桌面平台上，默认的位置如下：

```bash
HOME_DIRECTORY>/.kivy/config.ini
```

所以，假设你的用户名是“tito”，在各个操作系统下的配置文件位置则如下所示：

- Windows: `C:\Users\tito\.kivy\config.ini`

- OS X: `/Users/tito/.kivy/config.ini`

- Linux: `/home/tito/.kivy/config.ini`

（译者注：这里要注意，tito只是原文的一个示范，相当于张三李四这样，新手可别照着复制找不到，要用自己操作系统中具体的用户名。）

在Android系统中位置如下：

```bash
ANDROID_APP_PATH>/.kivy/config.ini
```

假如你的Kivy应用的包名称为“org.kivy.launcher”,那么该Kivy应用的配置文件位于:

```bash
/data/data/org.kivy.launcher/files/.kivy/config.ini
```

在iOS上Kivy的默认配置文件位于：

```bash
HOME_DIRECTORY>/Documents/.kivy/config.ini
```

## 本地配置

有时候用户或者开发者可能需要针对特定的应用来修改配置，或者对Kivy的某个组件进行测试，比如输入模块之类的。这时候就可以用如下命令创建一份新的配置文件：

```python
from kivy.config import Config
Config.read(file>)
# set config
Config.write()
```

有时候本地配置只有一个.ini文件还不够用，比如说可能你要单独使用某个garden、Kivy日志或者其他什么模块，这时候就要把KIVY_HOME这个环境变量进行修改了，指定到目标位置就行：

```python
import os
os.environ['KIVY_HOME'] = folder>
```

还有一种思路，就是在运行Kivy应用之前，在终端中手动修改一下这个环境变量：

- Windows: `set KIVY_HOME=folder>`

- Linux & OSX: `export KIVY_HOME=folder>`

在设置了KIVY_HOME之后，所指定的这个文件夹就会被当做默认的.kivy文件夹来用。

## 详细理解配置项

在[kivy.config](http://kivy.org/docs/api-kivy.config.html#module-kivy.config) 模块中可以看到全部的配置项的解释。

## 架构

[英文原文](https://kivy.org/docs/guide/architecture.html)

本章我们将从软件工程的角度，来简单介绍一下Kivy的设计。这对于理解各个部分如何配合工作会有帮助。如果你只关注代码，可能有时候会遇到这样一种情况，就是你已经有了一个初步的想法了，但具体怎么去实现可能还是一头雾水，所以本章就针对这种情况，来更深入地讲解一下Kivy的一些基本思想。你也可以先跳过这一章，等以后再翻回来看，不过我们建议开发者还是先看一下这些内容比较好，起码可以快速略读一下有个印象。

Kivy包含的若干个模块，我们将对这些模块一一进行简要说明。下面这幅图是Kivy整个架构的概括图示：

## 核心模块和输入模块

对理解Kivy的设计内涵，模块化和抽象化的思想是至关重要的。我们试图把各种基本的任务进行抽象，比如打开窗口、显示图像和文本、播放音频、从摄像头获取图像、拼写校正等等。我们将这些部分称为**核心**任务。这样也使得API接口用起来比较简单，扩展起来也容易。更重要的是，这种思路可以让Kivy应用在运行的时候，使用各个运行平台所提供的对应功能的API接口。例如，在苹果的MacOS操作系统、Linux操作系统和Windows操作系统中，就都有各自不同的原生API接口提供各种核心功能。所以就有一部分代码，调用这些不同接口中的某一个，一方面与操作系统进行通信，另一方面与Kivy进行交互，起到中间人的角色，我们称之为**核心模块**。针对不同的操作系统平台要使用各自对应的核心模块，这样的好处是达到一种均衡状态，既能够充分利用操作系统提供的功能，又能尽量提高开发效率。（译者注：我的理解是这样大家平时不用针对不同操作系统去学习和使用各自的API，而只要专心使用Kivy的核心模块进行调用就行了。）这也允许用户来自由选择，使用Kivy提供的核心模块，或者直接使用各个操作系统的API接口。此外，由于使用了各个平台所提供的链接库文件，我们大大减小了Kivy发型版本的体积，也使得打包发布更加容易。这有助于将Kivy应用移植到其他平台。比如Android平台上的Kivy应用就体现了这一特性的好处了。

在输入模块这部分，我们也遵循了同样的思路。**输入模块**，是一段代码，用于针对各种输入设备提供支持，比如苹果公司的Trackpad触摸板，TUIO多点触摸设备，或者是鼠标模拟器等等。如果你需要对某一种新的输入设备添加支持，只需要提供一个新的类，用这个类来读取输入设备的数据，然后传递给Kivy基本事件，就可以了。

## 图形接口

Kivy的图形接口是对OpenGL的抽象。在最底层，Kivy使用OpenGL的命令来进行硬件加速的图形绘制。不过写OpenGL的代码可还是挺复杂的，新手就更难以迅速掌握了。所以我们就提供了一系列的图形接口，利用这些接口可以很简单地进行图形绘制，这些接口中用到了例如画布Canvas、矩形Rectangle等几何概念，比OpenGL里面简单不少。

Kivy自带的所有控件，都使用了这个图形接口；出于性能的考虑，此图形接口是用C语言来实现的。

这个图形接口的另一个好处是可以对你代码中的绘图指令进行自动优化。这个很有用，尤其是在你对OpenGL的优化不太熟悉的情况下。这能让你的绘图代码更高效。

当然了，你也可以坚持使用原生的OpenGL命令。目前Kivy在所有操作系统平台上用的都是是OpenGL 2.0 ES (GLES2)，所以如果你希望保持跨平台的兼容性，我们建议你只是用GLES2兼容的函数。

## 核心模块

核心模块也就是kivy.core，这个包里面提供了常用的各种功能，比如：

- 

Clock

时钟类，可以用于安排计时器事件。同时支持一次性计时和周期性计时。

- 

Cache

If you need to cache something that you use often, you can use our class for that instead of writing your own.

缓存类，如果有一些经常用到的数据需要缓存，就可以用这个类，而不用自己写了。

- 

Gesture Detection

手势识别，这个可以用来识别各种划动行为，比如画个圆圈或者方块之类的。可以训练来识别你自己设计的图形。

- 

Kivy Language

Kivy语言，这个是用来简洁高效地描述Kivy应用的用户界面的。

- 

Properties

这里这些属性和Python语言中的属性不同。这里是我们专门写的一些类，通过用户界面描述来连接控件代码。

## UIX（控件和布局）

UIX用户界面模块，包含了常用的各种控件和布局，可以通过复用来快速构建用户界面。

- 

Widgets 控件

控件是各种用户界面元素，可以添加到程序中来提供各种功能。有的可见，有的不可见。文件浏览器，按钮、滑动页、列表等等，这都属于控件。控件接收动作事件。

- 

Layouts 布局

布局是控件的排列方式。当然，你也可以自己自定义控件的位置，不过从我们提供的预设布局中选择一个来使用，会更方便很多。网格布局、箱式布局等等，都是布局了。你还可以试试复杂的多层网状布局。

## 模块化

如果你用某一种现代的网络浏览器，并且通过一些附加组件对其进行定制，那么你应该就理解了我们提供的各种模块类的基本思想了。各种模块可以用来向Kivy程序中添加功能，即便原作者没有提供的功能也可以加进去了。

例如，有一个模块就能显示当前应用的FPS（Frame Per Second，每秒帧数，即帧率），然后还能统计一段时间的FPS变化。

你可以自己写各种模块添加到应用中。

## 输入事件（Touches）

Kivy抽象了各种输入类型和输入设备，比如触控，鼠标按键，多点触摸等等。这些输入类型有一个共同点，就是都可以把各种输入事件映射成屏幕上对应的一种2D形态。（当然了，还有的输入设备就没法用2D形态来表示，比如通过加速度传感器来衡量设备倾斜角度等。这种情况就得另外考虑了。下面我们讨论的只是那些能用2D形态表示的输入事件，复杂的类型以后再说。）

这些输入类型，在Kivy中都用Touch()类的实例来表示。（请注意，这里可不仅仅是针对手指去触摸的那种touch，而是所有可以这样抽象表示的输入事件。这里用**Touch**只是为了方便而这么简称一下。就想象一下，这些**Touches**就是在用户界面或者显示屏上面的那些个**点击行为**。 ）Touch的实例或者对象，有三种状态。当这个Touch进入了其中的某一个状态，你的程序就会被告知此事件的发生。Touch的三种状态如下：

- 

Down 落下

处于落下状态，只能有一次，就是在发生Touch事件的初始时刻。

- 

Move 移动

这个状态的时间无上限。在一个Touch的生命周期中可以没有这个状态。移动状态只发生在Touch的2D平面位置发生变化的情况下。

- 

Up 抬起

A touch goes up at most once, or never. In practice you will almost always receive an up event because nobody is going to hold a finger on the screen for all eternity, but it is not guaranteed. If you know the input sources your users will be using, you will know whether or not you can rely on this state being entered.

一个Touch要么只能抬起一次，要么就不发生。而实际应用中你会经常遇到Up时间，因为没有人会一直把手指按到屏幕上，不过也有未必就绝对不会有这种情况。若事先知道用户用的输入设备，就可以确定能否完全依靠用户的输入状态。

（译者注：以手指触摸屏幕为例，只有开始接触的时候是Down手指落下这个状态，之后移动就是接下来的Move移动状态，手指抬起来的时候就是Up即抬起状态了；如果以鼠标左键点击为例，按下去左键的时候是Down，按住左键不放进行拖动就是Move，松开左键就是Up了。这段我特别解释一下，因为自己翻译的太生硬了。）

## 控件和事件调度

在图形化的软件开发语境下，**控件**这个词经常出现，一般是来描述程序中用于和用户进行交互的组件。在Kivy中，控件是用来接收各种输入事件的。所以并不一定非要在屏幕上能看得到。Kivy当中所有控件都以**控件树**的形式来管理，学过计算机科学中数据结构相关知识的话，就会意识到这是一种树形结构：一个控件可以有任意多个子控件，也可以没有子控件。**根控件**就只能有一个，处于树形结构的顶端，根控件不具有父控件，并且所有其他控件都是根控件的直接或者间接子控件（就像树根一样，所以叫根控件）。

当新的输入数据可用的时候，Kivy会针对每一个Touch发出一个事件。控件树种的根控件首先接收到这个事件。Touch的不同状态，on_touch_down, on_touch_move和on_touch_up （Down落下、Move移动和Up），会作为Touch的参数，提供给根控件，根控件会调用对应的事件Handler来作出反应。

包括根控件在内，控件树种的每个控件都可以有两种选择，处理该事件，或者将该事件传递下去。如果一个事件的Handler返回True，就意味着这个事件已经被接收并妥善处理。这个事件就也到此为止了。如果不是这样，事件的Handler会跳过此处的空间，调用父类中的对应事件的Handler实现，传递给该控件的子控件。这样的过程可以一路走到最基础的控件类Widget，在它的Touch事件Handler中，只是把Touch传递给子控件，而不进行其他的操作。

```python
# This is analogous for move/up:
def on_touch_down(self, touch):
    for child in self.children[:]:
        if child.dispatch('on_touch_down', touch):
            return True
```

说起来挺麻烦，看上去挺复杂，实际上要简单得多。下一章就会讲解如何使用这种特性来快速创建应用了。

经常有一种情况，就是你可能要让一个控件只在屏幕上某个特定的**区域**来监听Touch事件。这时候就可以使用控件的collide_point()方法来实现此目的。只需要把Touch的位置发给该方法，然后如果此位置位于**监听区域**则返回True，反之返回False。默认情况下，这个方法会监听屏幕上的一个矩形区域，根据控件的中心坐标（x &amp; y坐标系），以及空间尺寸（宽度和高度），不过你也可以用自己的类覆盖掉这一行为。

Title: Kivy Widgets Date: 2017-02-26 Category: Kivy Tags: Python,Kivy

## 控件

[英文原文](https://kivy.org/docs/guide/widgets.html)

## 控件简介

[控件`Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget)是 Kivy 图形界面中的基本元素。控件提供了一个[画布`Canvas`](https://kivy.org/docs/api-kivy.graphics.html#kivy.graphics.Canvas)，这是用来在屏幕上进行绘制的。控件接收事件，并且对事件作出反应。想要对 [控件`Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget)进行更深入的了解，可以去看看这个模块的文档。

## 操作控件树

Kivy 以树的形式来组织控件。你的应用程序会有一个根控件，通常会含有若干的[子控件 `children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)，这些子控件还可以有自己的子控件。一个控件的子控件会以 [`children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)属性的形式表述，这个属性是 Kivy 中的一个[列表属性 `ListProperty`](https://kivy.org/docs/api-kivy.properties.html#kivy.properties.ListProperty)

可以用一下方法来操作控件树：

- [`add_widget()`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.add_widget): 添加一个控件作为子控件；

- [`remove_widget()`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.remove_widget): 从子控件列表中去掉一个控件；

- [`clear_widgets()`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.clear_widgets): 清空一个控件的所有子控件。

例如下面的代码，就是在一个盒式布局 BoxLayout 中添加一个按钮：

```
layout = BoxLayout(padding=10)
button = Button(text='My first button')
layout.add_widget(button)
```

这个按钮就添加到布局当中去了：按钮的 parent 属性会被设置为这个布局；这个按钮也会被添加到布局中的子控件列表。要把这个按钮从这个布局中删掉也很简单：

```
layout.remove_widget(button)
```

移除了之后，这个按钮的 parent 属性就会被设置为 None，也会被从布局的子控件列表中移除。

要是想清空一个控件中的所有自科技，那就用 [`clear_widgets()`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.clear_widgets)方法就可以了：

```
layout.clear_widgets()
```

#### 特别注意

千万别自己手动去操作子控件列表，除非你确定自己掌控得非常深入透彻。因为控件树是和绘图树联系在一起的。例如，如果你添加了一个控件到子控件列表，但没有添加这个新子控件的画布到绘图树上，那么就会出现这种情况：这个控件确实成了一个子控件，但是屏幕上不会显示出来。此外，如果你后续使用添加、移除、清空控件这些操作，可能还会遇到问题。

## 遍历控件树

控件类实例的[子控件`children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)列表属性中包含了所有的子控件。所以可以用如下的方式来进行遍历：

```
root = BoxLayout()
# ... add widgets to root ...
for child in root.children:
    print(child)
```

然而，这样的操作可得谨慎使用。如果你要用之前一节中提到的方法来修改这个子控件列表电话，请一定用下面这种方法来做一下备份：

```
for child in root.children[:]:
    # manipulate the tree. For example here, remove all widgets that have a
    # width
    if child.width  100:
        root.remove_widget(child)
```

默认情况下，控件是不会对子控件的尺寸/位置进行改变的。[位置属性 `pos`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos)是屏幕坐标系上的绝对值（除非你使用[相对布局`relativelayout`](https://kivy.org/docs/api-kivy.uix.relativelayout.html#module-kivy.uix.relativelayout)，这个以后再说），而[尺寸属性 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size)就是一个绝对的尺寸大小。

## 控件索引Z

控件绘制的顺序，是基于各个控件在控件树中的位置。[添加控件方法 `add_widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.add_widget) 可以接收一个索引参数，这样就能指定该新增控件在控件树中的位置。

```
root.add_widget(widget, index)
```

索引值小的控件会被绘制在索引值大的控件之上。一定要记住，默认值是 0 ，所以后添加的控件总会在所有控件的最顶层，除非指定了索引值。

## 整理布局

[布局 `layout`](https://kivy.org/docs/api-kivy.uix.layout.html#module-kivy.uix.layout)是一种特别的控件，它会控制自己子控件的尺寸和位置。有各种不同的布局，这些布局分别为子控件提供拜托你个的自动组织整理。这些布局使用[尺寸推测 `size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint)和[位置推测 `pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint)这两个属性来决定[子控件`children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)的[尺寸 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size) 和 [位置`pos`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos)。

**盒式布局 BoxLayout**: 所有控件充满整个空间，以互相挨着的方块的方式来分布，横着或者竖着排列都可以。子控件的 size_hint 属性可以用来改变每个子控件的比例，也可以设置为固定尺寸。

**网格布局 GridLayout**: 以一张网格的方式来安排控件。你必须指定好网格的维度，确定好分成多少格，这样 Kivy 才能计算出每个元素的尺寸并且确定如何安排这些元素的位置。

**栈状布局 StackLayout**: 挨着放一个个控件，彼此邻近，在某一个维度上有固定大小，而使它们填充整个空间。 这适合用来显示相同预定义大小的子控件。

**锚式布局 AnchorLayout**: 一种非常简单的布局，只关注子控件的位置。 将子控件放在布局的边界位置。 不支持size_hint。

**浮动布局 FloatLayout**: 允许放置具任意位置和尺寸的子控件，可以是绝对尺寸，也可以是相对布局的相对尺寸。 默认的 size_hint（1，1）会让每个子控件都与整个布局一样大，所以如果你多个子控件就要修改这个值。可以把 size_hint 设置成 (None, None)，这样就可以使用 size 这个绝对尺寸属性。控件也支持 pos_hint，这个属性是一个 dict 词典，用来设置相对布局的位置。

**相对布局 RelativeLayout**: 和浮动布局 FloatLayout 差不多，不同之处在于子控件的位置是相对于布局空间的，而不是相对于屏幕。

想要深入理解各种布局的话，可以仔细阅读各种文档。

[`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint) 和 [`pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint):

- [`floatlayout`](https://kivy.org/docs/api-kivy.uix.floatlayout.html#module-kivy.uix.floatlayout)

- [`boxlayout`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#module-kivy.uix.boxlayout)

- [`gridlayout`](https://kivy.org/docs/api-kivy.uix.gridlayout.html#module-kivy.uix.gridlayout)

- [`stacklayout`](https://kivy.org/docs/api-kivy.uix.stacklayout.html#module-kivy.uix.stacklayout)

- [`relativelayout`](https://kivy.org/docs/api-kivy.uix.relativelayout.html#module-kivy.uix.relativelayout)

- [`anchorlayout`](https://kivy.org/docs/api-kivy.uix.anchorlayout.html#module-kivy.uix.anchorlayout)

[`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint) 是一个 [引用列表属性 `ReferenceListProperty`](https://kivy.org/docs/api-kivy.properties.html#kivy.properties.ReferenceListProperty) ，包括 [`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x) 和[`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) 两个变量。接收的变量值是从0到1的各种数值，或者 None， 默认值为 (1, 1)。这表示如果控件处在布局之内，布局将会在两个方向分配全部尺寸（相对于布局大小）给该控件。

举个例子，设置[`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint) 为 (0.5, 0.8)，就会给该[控件`Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget) 分配[布局 `layout`](https://kivy.org/docs/api-kivy.uix.layout.html#module-kivy.uix.layout) 内50% 宽，80% 高的尺寸。

例如下面这个例子：

```
BoxLayout:
    Button:
        text: 'Button 1'
        # default size_hint is 1, 1, we don't need to specify it explicitly
        # however it's provided here to make things clear
        size_hint: 1, 1
```

加载 Kivy 目录：

```
cd $KIVYDIR/examples/demo/kivycatalog
python main.py
```

把上面代码中的 $KIVYDIR 替换成你的 Kivy 安装位置。在左边点击标注有 Box Layout 的按钮。 然后将上面的代码粘贴到窗口右侧的编辑器内。

然后你就可以看到上图这样的界面了，这个按钮 Button 会占据整个布局[尺寸 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size)的 100%。

修改[`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x)/[`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) 为 .5 这就会把[控件 `Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget) 调整为[布局 `layout`](https://kivy.org/docs/api-kivy.uix.layout.html#module-kivy.uix.layout) 的50% [宽度 `width`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.width)/[高度 `height`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.height)。

这时候效果如上图所示，虽然我们已经同时指定了 [`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x) 和 [`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) 为 .5，但似乎只有对 [`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x) 的修改起作用了。这是因为在[盒式布局 `boxlayout`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#module-kivy.uix.boxlayout)中，当[`orientation`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#kivy.uix.boxlayout.BoxLayout.orientation)被设置为竖直方向（vertical） 的时候，[`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) 由布局来控制，而如果[`orientation`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#kivy.uix.boxlayout.BoxLayout.orientation) 被设置为水平方向（horizontal）的时候， [`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x) 由布局来控制，所以这些情况手动设定就无效了。 这些受控维度的尺寸，是根据[子控件 `children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children) 在 [`盒式布局 boxlayout`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#module-kivy.uix.boxlayout)中的总编号来计算的。在上面的例子中，这个子控件的[`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y) 是受控的(.5/.5 = 1)。所以，这里控件就占据了上层布局的整个高度。

接下来咱们再添加一个[按钮 `Button`](https://kivy.org/docs/api-kivy.uix.button.html#kivy.uix.button.Button)到这个 [布局 `layout`](https://kivy.org/docs/api-kivy.uix.layout.html#module-kivy.uix.layout)看看有什么效果。

[盒式布局 `boxlayout`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#module-kivy.uix.boxlayout) 默认对其所有的[子控件 `children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)分配了等大的空间。在咱们这个例子里面，比例是50-50，因为有两个[子控件 `children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)。那么接下来咱们就对其中的一个子控件设置一下 size_hint，然后看看效果怎么样。

从上图可以看出，如果一个子控件有了一个指定的 [`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint)，这就会决定该[控件 `Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget)使用[盒式布局 `boxlayout`](https://kivy.org/docs/api-kivy.uix.boxlayout.html#module-kivy.uix.boxlayout)提供的空间中的多大比例，来作为自己的[尺寸 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size) 。在我们这个例子中，第一个[按钮 `Button`](https://kivy.org/docs/api-kivy.uix.button.html#kivy.uix.button.Button) 的[`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x)设置为了 .5。那么这个控件分配到的空间计算方法如下：

```
first child's size_hint divided by
first child's size_hint + second child's size_hint + ...n(no of children)

.5/(.5+1) = .333...
```

盒式布局 BoxLayout 的剩余[宽度 `width`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.width)会分配给另外的一个[子控件 `children`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.children)。在我们这个例子中，这就意味着第二个[按钮 `Button`](https://kivy.org/docs/api-kivy.uix.button.html#kivy.uix.button.Button) 会占据整个[布局 `layout`](https://kivy.org/docs/api-kivy.uix.layout.html#module-kivy.uix.layout)的 66.66% [宽度 `width`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.width) 。

修改 [`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint) 探索一下来多适应一下吧。

如果你想要控制一个[控件 `Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget)的绝对[尺寸 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size) ，可以把[`size_hint_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_x)/[`size_hint_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint_y)当中的一个或者两个都设置成 None，这样的话该控件的[宽度 `width`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.width) 和[高度 `height`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.height)的属性值就会生效了。

[`pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint) 是一个词典 dict，默认值是空。相比于[`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint)，布局对[`pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint)的处理方式有些不同，不过大体上你还是可以对[`pos`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos) 的各种属性设定某个值来设定[控件 `Widget`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget)在[父控件 `parent`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.parent)中的相对位置（可以设定的属性包括：[`x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.x), [`y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.y), [`right`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.right), [`top`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.top), [`center_x`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.center_x), [`center_y`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.center_y)）。

咱们用下面 kivycatalog 中的代码来可视化地理解一下[`pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint)：

```
FloatLayout:
    Button:
        text: "We Will"
        pos: 100, 100
        size_hint: .2, .4
    Button:
        text: "Wee Wiill"
        pos: 200, 200
        size_hint: .4, .2

    Button:
        text: "ROCK YOU!!"
        pos_hint: {'x': .3, 'y': .6}
        size_hint: .5, .2
```

这份代码的输出效果如下图所示：

说了半天[`size_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size_hint)，你不妨自己试试探索一下 [`pos_hint`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos_hint)，来理解一下这个属性对控件位置的效果。

## 给布局添加背景

关于布局，有一个问题经常被问道：

“怎么给一个布局添加背景图片/颜色/视频/等等……”

本来默认的各种布局都是没有视觉呈现的：因为布局不像控件，布局是默认不含有绘图指令的。不过呢，还是你可以给一个布局实例添上绘图指令，也就可以添加一个彩色背景了：

在 Python 中的实现方法：

```
from kivy.graphics import Color, Rectangle

with layout_instance.canvas.before:
    Color(0, 1, 0, 1) # green; colors range from 0-1 instead of 0-255
    self.rect = Rectangle(size=layout_instance.size,
                           pos=layout_instance.pos)
```

然而很不幸，这样只能在布局的初始化位置以布局的初始尺寸绘制一个矩形。所以还要对布局的尺寸和位置变化进行监听，然后对矩形的尺寸位置进行更新，这样才能保证这个矩形一直绘制在布局的内部。可以用如下方式实现：

```
with layout_instance.canvas.before:
    Color(0, 1, 0, 1) # green; colors range from 0-1 instead of 0-255
    self.rect = Rectangle(size=layout_instance.size,
                           pos=layout_instance.pos)

def update_rect(instance, value):
    instance.rect.pos = instance.pos
    instance.rect.size = instance.size

# listen to size and position changes
layout_instance.bind(pos=update_rect, size=update_rect)
```

在 kv 文件中：

```
FloatLayout:
    canvas.before:
        Color:
            rgba: 0, 1, 0, 1
        Rectangle:
            # self here refers to the widget i.e BoxLayout
            pos: self.pos
            size: self.size
```

上面的 Kv 文件中的生命，就建立了一个隐含的绑定：上面 Kv 代码中的最后两行保证了矩形的[位置 `pos`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos)和[尺寸 `size`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.size)会在[浮动布局 `floatlayout`](https://kivy.org/docs/api-kivy.uix.floatlayout.html#module-kivy.uix.floatlayout)的[位置 `pos`](https://kivy.org/docs/api-kivy.uix.widget.html#kivy.uix.widget.Widget.pos)发生变化的时候进行更新。

接下来咱们把上面的代码片段放进 Kivy 应用里面。

纯 Python 方法：

```
from kivy.app import App
from kivy.graphics import Color, Rectangle
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.button import Button

class RootWidget(FloatLayout):

    def __init__(self, **kwargs):
        # make sure we aren't overriding any important functionality
        super(RootWidget, self).__init__(**kwargs)

        # let's add a Widget to this layout
        self.add_widget(
            Button(
                text="Hello World",
                size_hint=(.5, .5),
                pos_hint={'center_x': .5, 'center_y': .5}))

class MainApp(App):

    def build(self):
        self.root = root = RootWidget()
        root.bind(size=self._update_rect, pos=self._update_rect)

        with root.canvas.before:
            Color(0, 1, 0, 1)  # green; colors range from 0-1 not 0-255
            self.rect = Rectangle(size=root.size, pos=root.pos)
        return root

    def _update_rect(self, instance, value):
        self.rect.pos = instance.pos
        self.rect.size = instance.size

if __name__ == '__main__':
    MainApp().run()
```

使用 Kv 语言：

```
from kivy.app import App
from kivy.lang import Builder

root = Builder.load_string('''
FloatLayout:
    canvas.before:
        Color:
            rgba: 0, 1, 0, 1
        Rectangle:
            # self here refers to the widget i.e FloatLayout
            pos: self.pos
            size: self.size
    Button:
        text: 'Hello World!!'
        size_hint: .5, .5
        pos_hint: {'center_x':.5, 'center_y': .5}
''')

class MainApp(App):

    def build(self):
        return root

if __name__ == '__main__':
    MainApp().run()
```

上面这两个应用的效果都如下图所示： ![../_images/layout_background.png](/images/Python-KivyBase/layout_background.png)

### 给**自定义布局规则/类**增加背景色

上面那一段中咱们对布局实例增加背景的方法，如果用到很多歌布局里面，那就很快变得特别麻烦了。要解决这种需求，就可以基于布局类 Layout 创建一个自定义的布局子类，给自定义的这个类增加一个背景。

使用 Python：

```
from kivy.app import App
from kivy.graphics import Color, Rectangle
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.image import AsyncImage

class RootWidget(BoxLayout):
    pass

class CustomLayout(FloatLayout):

    def __init__(self, **kwargs):
        # make sure we aren't overriding any important functionality
        super(CustomLayout, self).__init__(**kwargs)

        with self.canvas.before:
            Color(0, 1, 0, 1)  # green; colors range from 0-1 instead of 0-255
            self.rect = Rectangle(size=self.size, pos=self.pos)

        self.bind(size=self._update_rect, pos=self._update_rect)

    def _update_rect(self, instance, value):
        self.rect.pos = instance.pos
        self.rect.size = instance.size

class MainApp(App):

    def build(self):
        root = RootWidget()
        c = CustomLayout()
        root.add_widget(c)
        c.add_widget(
            AsyncImage(
                source="http://www.everythingzoomer.com/wp-content/uploads/2013/01/Monday-joke-289x277.jpg",
                size_hint= (1, .5),
                pos_hint={'center_x':.5, 'center_y':.5}))
        root.add_widget(AsyncImage(source='http://www.stuffistumbledupon.com/wp-content/uploads/2012/05/Have-you-seen-this-dog-because-its-awesome-meme-puppy-doggy.jpg'))
        c = CustomLayout()
        c.add_widget(
            AsyncImage(
                source="http://www.stuffistumbledupon.com/wp-content/uploads/2012/04/Get-a-Girlfriend-Meme-empty-wallet.jpg",
                size_hint= (1, .5),
                pos_hint={'center_x':.5, 'center_y':.5}))
        root.add_widget(c)
        return root

if __name__ == '__main__':
    MainApp().run()
```

使用 Kv 语言：

```
from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.boxlayout import BoxLayout
from kivy.lang import Builder

Builder.load_string('''
&lt;CustomLayout&gt;
    canvas.before:
        Color:
            rgba: 0, 1, 0, 1
        Rectangle:
            pos: self.pos
            size: self.size

&lt;RootWidget&gt;
    CustomLayout:
        AsyncImage:
            source: 'http://www.everythingzoomer.com/wp-content/uploads/2013/01/Monday-joke-289x277.jpg'
            size_hint: 1, .5
            pos_hint: {'center_x':.5, 'center_y': .5}
    AsyncImage:
        source: 'http://www.stuffistumbledupon.com/wp-content/uploads/2012/05/Have-you-seen-this-dog-because-its-awesome-meme-puppy-doggy.jpg'
    CustomLayout
        AsyncImage:
            source: 'http://www.stuffistumbledupon.com/wp-content/uploads/2012/04/Get-a-Girlfriend-Meme-empty-wallet.jpg'
            size_hint: 1, .5
            pos_hint: {'center_x':.5, 'center_y': .5}
''')

class RootWidget(BoxLayout):
    pass

class CustomLayout(FloatLayout):
    pass

class MainApp(App):

    def build(self):
        return RootWidget()

if __name__ == '__main__':
    MainApp().run()
```

上面这两个应用的效果都如下图所示：

在自定义布局类中定义了背景之后，就是要确保在自定义布局的各个实例中使用到这个新特性。

首先，要在**全局上**增加一个图形或者颜色给内置的 Kivy 布局的背景，这就需要将所用布局的默认 Kv 规则进行覆盖。

就拿网格布局 GridLayout 举例吧：

```
&lt;GridLayout&gt;
    canvas.before:
        Color:
            rgba: 0, 1, 0, 1
        BorderImage:
            source: '../examples/widgets/sequenced_images/data/images/button_white.png'
            pos: self.pos
            size: self.size
```

接下来把这段代码放到一个 Kivy 应用里面：

```
from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.lang import Builder

Builder.load_string('''
&lt;GridLayout&gt;
    canvas.before:
        BorderImage:
            # BorderImage behaves like the CSS BorderImage
            border: 10, 10, 10, 10
            source: '../examples/widgets/sequenced_images/data/images/button_white.png'
            pos: self.pos
            size: self.size

&lt;RootWidget&gt;
    GridLayout:
        size_hint: .9, .9
        pos_hint: {'center_x': .5, 'center_y': .5}
        rows:1
        Label:
            text: "I don't suffer from insanity, I enjoy every minute of it"
            text_size: self.width-20, self.height-20
            valign: 'top'
        Label:
            text: "When I was born I was so surprised; I didn't speak for a year and a half."
            text_size: self.width-20, self.height-20
            valign: 'middle'
            halign: 'center'
        Label:
            text: "A consultant is someone who takes a subject you understand and makes it sound confusing"
            text_size: self.width-20, self.height-20
            valign: 'bottom'
            halign: 'justify'
''')

class RootWidget(FloatLayout):
    pass

class MainApp(App):

    def build(self):
        return RootWidget()

if __name__ == '__main__':
    MainApp().run()
```

效果大概如下图所示：

我们已经对网格布局 GridLayout 类的规则进行了覆盖，所以接下来在应用中使用这个类就都会显示那幅图片了。

**动画背景**怎么弄呢？

就像在矩形Rectangle/ 边界图像BorderImage /椭圆Ellipse/等里面添加设置绘图指令一样，可以用一个特定的纹理属性 texture ：

```
Rectangle:
    texture: reference to a texture
```

可以用下面的代码实现一个动画背景：

```
from kivy.app import App
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.image import Image
from kivy.properties import ObjectProperty
from kivy.lang import Builder

Builder.load_string('''
&lt;CustomLayout&gt;
    canvas.before:
        BorderImage:
            # BorderImage behaves like the CSS BorderImage
            border: 10, 10, 10, 10
            texture: self.background_image.texture
            pos: self.pos
            size: self.size

&lt;RootWidget&gt;
    CustomLayout:
        size_hint: .9, .9
        pos_hint: {'center_x': .5, 'center_y': .5}
        rows:1
        Label:
            text: "I don't suffer from insanity, I enjoy every minute of it"
            text_size: self.width-20, self.height-20
            valign: 'top'
        Label:
            text: "When I was born I was so surprised; I didn't speak for a year and a half."
            text_size: self.width-20, self.height-20
            valign: 'middle'
            halign: 'center'
        Label:
            text: "A consultant is someone who takes a subject you understand and makes it sound confusing"
            text_size: self.width-20, self.height-20
            valign: 'bottom'
            halign: 'justify'
''')

class CustomLayout(GridLayout):

    background_image = ObjectProperty(
        Image(
            source='../examples/widgets/sequenced_images/data/images/button_white_animated.zip',
            anim_delay=.1))

class RootWidget(FloatLayout):
    pass

class MainApp(App):

    def build(self):
        return RootWidget()

if __name__ == '__main__':
    MainApp().run()
```

要理解这里到底发生了什么，得从第 13 行开始看：

```
texture: self.background_image.texture
```

这里是指定让边界图像 BorderImage 的纹理属性在背景图像 background_image 的纹理属性发生更新的时候进行同步更新。背景图像 background_image 属性的定义是在第 40 行：

```
background_image = ObjectProperty(...
```

这一句代码是将背景图像 background_image 设置成一个[对象属性 `ObjectProperty`](https://kivy.org/docs/api-kivy.properties.html#kivy.properties.ObjectProperty)，这样就可以在其中添加一个[图形控件 `Image`](https://kivy.org/docs/api-kivy.uix.image.html#kivy.uix.image.Image)。图像控件有一个纹理属性（texture property）；在前面的 self.background_image.texture 这句代码中，就是建立了一个名为 texture 的到这个属性的引用。[图形控件 `Image`](https://kivy.org/docs/api-kivy.uix.image.html#kivy.uix.image.Image) 支持动画（animation）：随着动画的改变，图像的纹理会同步更新，在这个过程中，边界图像 BorderImage 指令的 texture 纹理属性也会同步更新。

（译者注：texture of BorderImage instruction，这里我对 instruction 的翻译应该是不太对的，不过我还没理清楚该怎么表述。）

也可以直接传递自定义数据到纹理属性 texture。更多细节可以参考[纹理 `Texture` 的文档](https://kivy.org/docs/api-kivy.graphics.texture.html#kivy.graphics.texture.Texture)。

## 网状布局

嗯，看看这个过程如何扩展是很有趣的。

## 尺寸和位置度量

Kivy 的默认长度单位是像素 pixel，所有的尺寸和位置都用这个单位来表达。你也可以用其他单位来衡量，在跨平台多种设备的时候，这有助于实现更好的连续性体验（这些设备会把尺寸自动转换到像素）。

可用单位包括 [`pt`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.pt)， [`mm`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.mm)，[`cm`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.cm), [`inch`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.inch)， [`dp`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.dp) and [`sp`](https://kivy.org/docs/api-kivy.metrics.html#kivy.metrics.sp)。可以在[度量文档 `metrics`](https://kivy.org/docs/api-kivy.metrics.html#module-kivy.metrics) 中了解更多相关内容。

你还可以探索一下[屏幕模块 `screen`](https://kivy.org/docs/api-kivy.modules.screen.html#module-kivy.modules.screen)的用法，这个可以模拟出不同设备的屏幕，供测试应用。

## 使用屏幕管理器进行屏幕分割

如果你的应用程序要包含多个程序，那可能就需要从一个[屏幕 `Screen`](https://kivy.org/docs/api-kivy.uix.screenmanager.html#kivy.uix.screenmanager.Screen)到另一个[屏幕 `Screen`](https://kivy.org/docs/api-kivy.uix.screenmanager.html#kivy.uix.screenmanager.Screen)提供一个导航的通道。幸运的是，正好有一个[屏幕管理器类`ScreenManager`](https://kivy.org/docs/api-kivy.uix.screenmanager.html#kivy.uix.screenmanager.ScreenManager)，这个类允许你来定义分开的各个屏幕，设置屏幕管理器的[`TransitionBase`](https://kivy.org/docs/api-kivy.uix.screenmanager.html#kivy.uix.screenmanager.TransitionBase)就可以实现从一个屏幕到另一个屏幕的跳转导航。

## 图形

[英文原文](https://kivy.org/docs/guide/graphics.html)

## 译者前言

这一章节比前两章节简单很多，翻译的也比较顺了。

## 简介Canvas

Kivy中控件图形呈现是使用Canvas完成的，可以将其看作一个无限的绘图板，也是一组绘图指令。有很多种绘图指令都可以应用或者添加到你的Canvas伤，不过总体上分为两类：

- [`context instructions`环境指令](https://kivy.org/docs/api-kivy.graphics.context_instructions.html#module-kivy.graphics.context_instructions)

- [`vertex instructions`顶点指令](https://kivy.org/docs/api-kivy.graphics.vertex_instructions.html#module-kivy.graphics.vertex_instructions)

[`context instructions`环境指令](https://kivy.org/docs/api-kivy.graphics.context_instructions.html#module-kivy.graphics.context_instructions)不绘制任何图形，但会改变[`vertex instructions`顶点指令](https://kivy.org/docs/api-kivy.graphics.vertex_instructions.html#module-kivy.graphics.vertex_instructions)的绘制结果。

Canvas都包含两个指令分支。分别是[`canvas.before`](https://kivy.org/docs/api-kivy.graphics.html#kivy.graphics.Canvas.before)和[`canvas.after`](https://kivy.org/docs/api-kivy.graphics.html#kivy.graphics.Canvas.after) 这两种指令群。这两组指令分别在`Canvas`图形绘制前后执行。 绘制前的会被绘制的图形覆盖掉，绘制后的会覆盖在图形上层。这些指令都在用户对它们读取之后才会被创建。

要对一个控件添加Canvas绘图指令，需要使用Canvas环境指令：

```python
class MyWidget(Widget):
    def __init__(self, **kwargs):
        super(MyWidget, self).__init__(**kwargs)
        with self.canvas:
            # add your instruction for main canvas here
            # 这里是增加一个座位主绘图的指令

        with self.canvas.before:
            # you can use this to add instructions rendered before
            # 这里可以在绘图之前添加指令

        with self.canvas.after:
            # you can use this to add instructions rendered after
            # 这里可以在绘图之后添加指令
```

## 环境指令

环境指令是用于操作opengl环境。 可以旋转，翻译和缩放画布。还可以附加纹理或更改绘图颜色。下面这段代码里面的是最常用到的更改颜色的指令，其他的环境指令也都很有用处：

```python
with self.canvas.before:
    Color(1, 0, .4, mode='rgb')
```

## 绘图指令

绘图指令可简可繁，最简单的比如画一个多边形，更复杂的比如绘制网格或者贝塞尔曲线都可以：

```python
with self.canvas:
   # draw a line using the default color
   # 用默认颜色画一条线
   Line(points=(x1, y1, x2, y2, x3, y3))

   # lets draw a semi-transparent red square
   # 接下来画一个半透明的红方块
   Color(1, 0, 0, .5, mode='rgba')
   Rectangle(pos=self.pos, size=self.size)
```

## 操作指令

有时候可能需要把之前添加到Canvas绘图上的指令进行更改或者删除，这可以有很多种办法，要根据具体需求来选择：

可以给指令创建一个引用然后对其进行更新：

```python
class MyWidget(Widget):
    def __init__(self, **kwargs):
        super(MyWidget, self).__init__(**kwargs)
        with self.canvas:
            self.rect = Rectangle(pos=self.pos, size=self.size)

        self.bind(pos=self.update_rect)
        self.bind(size=self.update_rect)

    def update_rect(self, *args):
        self.rect.pos = self.pos
        self.rect.size = self.size
```

或者也可以清空Canvas画布然后重新画：

```python
class MyWidget(Widget):
    def __init__(self, **kwargs):
        super(MyWidget, self).__init__(**kwargs)
        self.draw_my_stuff()

        self.bind(pos=self.draw_my_stuff)
        self.bind(size=self.draw_my_stuff)

    def draw_my_stuff(self):
        self.canvas.clear()

        with self.canvas:
            self.rect = Rectangle(pos=self.pos, size=self.size)
```

要注意更新指令的方法是更好的选择，因为这样减少了开销，并且避免了创建新指令。

[← 下一篇 【WinForm】NanUI使用](/posts/winform-nanui/)

[【服务器】Ubuntu安装部署 上一篇 →](/posts/server-ubuntuinstall/)

