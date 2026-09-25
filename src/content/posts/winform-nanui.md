---
title: "【WinForm】NanUI使用"
pubDate: 2024-07-11
chapter: desktop
tags: ["C#", "WinForm", "NanUI"]
legacy: true
---

![26847280e3c37174bef437f1b968c97](/images/WinForm-NanUI/26847280e3c37174bef437f1b968c97.jpg)

## NanUI简介

NanUI是WinForm UI库的一种，它可以让应用程序里面内嵌html+css写的页面，可以样式更加多样化。

项目库地址：[https://gitee.com/dotnetchina/NanUI.git](https://gitee.com/dotnetchina/NanUI.git)

## 示例代码

- [Minimal WinFormium App](https://gitee.com/dotnetchina/NanUI/blob/master/examples/MinimalWinFormiumApp) - 介绍 WinFormium 的基本用法。

## 🔗 第三方库引用和工具集

- CEF - [https://bitbucket.org/chromiumembedded/cef](https://gitee.com/dotnetchina/NanUI)

- Xilium.CefGlue - [https://gitlab.com/xiliumhq/chromiumembedded/cefglue](https://gitee.com/dotnetchina/NanUI)

- Vanara.Library - [https://github.com/dahall/Vanara/](https://gitee.com/dotnetchina/NanUI)

- Vortice.Windows - [https://github.com/amerkoleci/Vortice.Windows](https://gitee.com/dotnetchina/NanUI)

- SkiaSharp - [https://github.com/mono/SkiaSharp](https://gitee.com/dotnetchina/NanUI)

- React - [https://github.com/facebook/react](https://gitee.com/dotnetchina/NanUI)

- React-Router - [https://github.com/remix-run/react-router](https://gitee.com/dotnetchina/NanUI)

- Vite - [https://github.com/vitejs/vite](https://gitee.com/dotnetchina/NanUI)

## 🖥️ 环境要求

**开发环境**

- .NET Framework 4.6.2 或更高版本 / .NET 6.0 或更高版本

- Visual Studio 2019 或更高版本（强烈建议使用 VS2022）

**部署环境**

- Microsoft Windows 7 Service Pack 1 或更高版本

- .Net Framework 4.6.2 或更高版本

- .NET 6.0 需要 Windows 7 Service Pack 1 或更高版本

- .NET 7.0/8.0 需要 Windows 10 或 Windows 11

这是一个 **仅限 Windows** 的框架，所以它目前不能在 Linux 或者 MacOS 环境运行。

支持的最低 Windows 版本是 Windows 7 Service Pack 1，并且 Windows 7 不支持某些功能（例如 DirectComposition 离屏渲染）。

## 🧰 入门

按照以下步骤即可创建一个简单的 WinFormium 应用程序：

**1. 通过默认模板创建一个 WinForm 应用程序。**

**2. 安装 WinFormium NuGet 包**

打开 NuGet 包管理器来安装或使用 NuGet 包管理器控制台，然后运行以下命令来安装 WinFormium nuget 包：

```
PM> Install-Package NetDimension.NanUI
```

安装 WinFormium 所依赖的 Chromium Embedded Framework 依赖项：

```
PM> Install-Package NetDimension.NanUI.Runtime
```

CEF 运行库巨大，再加上众所周知的原因，中国内地玩家请自行设置 NuGet 使用国内镜像。

- **Azure CDN** - [https://nuget.cdn.azure.cn/v3/index.json](https://gitee.com/link?target=https://nuget.cdn.azure.cn/v3/index.json)

- **华为云** - [https://repo.huaweicloud.com/repository/nuget/v3/index.json](https://gitee.com/link?target=https://repo.huaweicloud.com/repository/nuget/v3/index.json)

**3. 一个基本的 WinFormium 应用程序需要以下代码：**

按如下示例修改 **Program.cs** 文件中的代码：

```
using WinFormium;

class Program
{
    [STAThread]
    static void Main(string[] args)
    {
        var builder = WinFormiumApp.CreateBuilder();

        builder.UseWinFormiumApp();

        var app = builder.Build();

        app.Run();
    }
}
```

创建一个类继承 **WinFormiumStartup** 来配置应用程序：

```
using WinFormium;

class MyAPP : WinFormiumStartup
{
    protected override MainWindowCreationAction? UseMainWindow(MainWindowOptions opts)
    {
        // 设置应用程序的主窗体
        return opts.UseMainFormium();
    }

    protected override void WinFormiumMain(string[] args)
    {
        // Main函数中的代码应该在这里，该函数只在主进程中运行。这样可以防止子进程运行一些不正确的初始化代码。
        ApplicationConfiguration.Initialize();
    }

    protected override void ConfigurationChromiumEmbedded(ChromiumEnvironmentBuiler cef)
    {
        // 在此处配置 Chromium Embedded Framwork
    }

    protected override void ConfigureServices(IServiceCollection services)
    {
        // 在这里配置该应用程序的服务
    }
}
```

创建一个类实现 **Formium**，用于配置应用程序的主窗口：

```
using WinFormium;
using WinFormium.Forms;

class MyWindow : Formium
{
    public MyWindow()
    {
        Url = "https://www.google.com";
    }

    protected override FormStyle ConfigureWindowStyle(WindowStyleBuilder builder)
    {
        // 此处配置窗口的样式和属性，或留空以使用默认样式

        var style = builder.UseSystemForm();

        style.TitleBar = false;

        style.DefaultAppTitle = "My first WinFomrim app";

        return style;
    }
}
```

**4. 生成并运行你的第一个 WinFormium 应用程序**

[← 下一篇 【Python】Flask入门](/2024/07/16/Python-FlaskBase/)

[【Python】Kivy入门 上一篇 →](/2024/07/09/Python-KivyBase/)

∧ [≡](#toc-div)
