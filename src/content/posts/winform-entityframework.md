---
title: "【WinForm】EntityFramework框架"
pubDate: 2024-04-10
chapter: archive
tags: ["C#", "EntityFramework"]
legacy: true
---

[video(video-xcdU9b91-1704040286495)(type-csdn)(url-[https://live.csdn.net/v/embed/355757)(image-https://video-community.csdnimg.cn/vod-84deb4/a090dd94a7e271eebfde0675b3ed0102/snapshots/8ea7d139d04a45018cee00f5941a4830-00004.jpg?auth_key=4857630234-0-0-fd49d3e2a45ced4ff569beca2381b74b)(title-EF框架演示)]](https://live.csdn.net/v/embed/355757)(image-https://video-community.csdnimg.cn/vod-84deb4/a090dd94a7e271eebfde0675b3ed0102/snapshots/8ea7d139d04a45018cee00f5941a4830-00004.jpg?auth_key=4857630234-0-0-fd49d3e2a45ced4ff569beca2381b74b)(title-EF%E6%A1%86%E6%9E%B6%E6%BC%94%E7%A4%BA)%5D)

## 运行环境

Visual Studio 2019
SQL Server
EntityFramework 6.2.0

## 一、创建项目，编写数据库

## 创建一个Windows窗体应用(.NET Framework)

### 添加新项目

![image-20241129183348720](/images/WinForm-EntityFramework/image-20241129183348720.png)

![具体内容](/images/WinForm-EntityFramework/e7b5d3811f1b450f95aa8e32019a2ac0.png)创建后再创建下图：
![可视化界面](/images/WinForm-EntityFramework/e5da96b6d8d44bd9a97166ef1c7e0ef2.png)

### 创建SQL数据库，创建表

创建数据库StudyEF，创建表如下：
在这里要强调一点，在创建表的时候一定设置主键，不然创建后的ef框架会有问题。
![建表](/images/WinForm-EntityFramework/4eede7e3d5254b3fbe246eb3035a5e29.png)往表里面添加几条数据，方便进行测试
![表中数据](/images/WinForm-EntityFramework/c2d63178c31043d18fa63bd343cb8552.png)

## 给项目添加EF实体数据模型

添加一个ADO.NET实体数据模型，我将其命名为EFData，然后进行下面操作
![选择第一个](/images/WinForm-EntityFramework/68010de04d114b54911a7fd54fe4400e.png)![继续](/images/WinForm-EntityFramework/b483bc2b0272416596f8f8561421afbc.png)![新建连接](/images/WinForm-EntityFramework/4b155b9626db4c25a73318c72fa4326c.png)![测试连接](/images/WinForm-EntityFramework/8a315ee3b4cf496ab60dc5c4087a5970.png)![修改对应的连接](/images/WinForm-EntityFramework/ce34dc63b9144bcfb63f75a9b9b6904e.png)
![添加](/images/WinForm-EntityFramework/31fa81caf3004751bbb9e8a1292959df.png)
然后就是完成，漫长的等待创建完成

![创建成功](/images/WinForm-EntityFramework/274f2968f1bf4abe9ff28dae4d7e297f.png)

## 二、DataGridView绑定数据源

![添加数据库](/images/WinForm-EntityFramework/861af9287cfc46d38d2ed3eb5d876f19.png)下一步，下一步，然后选择连接
![在这里插入图片描述](/images/WinForm-EntityFramework/639606538b554ddba521733ebbf2950c.png)下一步，下一步，一直到下图，选中表，点击完成
![在这里插入图片描述](/images/WinForm-EntityFramework/02f7559804954c33b0c50dc2ce250b5e.png)
添加完成后，dgv控件自动显示字段名
![在这里插入图片描述](/images/WinForm-EntityFramework/c8ada2553bbf458089488d979b4b650f.png)
这里的表头可以根据需求修改
![在这里插入图片描述](/images/WinForm-EntityFramework/ae14d255c29d4c9ea36e8a009a8d6926.png)
运行测试，数据显示正常
![在这里插入图片描述](/images/WinForm-EntityFramework/a7da9b7137034732945cedc3af2f8d56.png)

## 三、实现添加按钮

## 编写代码

首先添加一个Add的windows窗体
如图所示：
![添加窗体设计](/images/WinForm-EntityFramework/ca8bda65cdbd49388744c8e3d4b2a06c.png)鼠标双击添加按钮，在添加按钮事件里面开始编写：

```csharp
String username = textBox1.Text;
       String name = textBox2.Text;
       String password = textBox3.Text;
       String age = textBox4.Text;
       String phone = textBox5.Text;
       String email = textBox6.Text;
       String address = textBox7.Text;
       using (var study = new StudyEFEntities())
       {
           var test = new TestData // 假设TestData是您的实体类  
           {
               // 在此处设置test对象的属性，例如：  
               password = password,
               username=username,
               name=name,
               age=age,
               phone=phone,
               email=email,
               address=address
           };

           // 将test对象添加到数据库中  
           study.TestData.Add(test);
           // 保存更改到数据库  
           study.SaveChanges();
       }
       MessageBox.Show("添加成功");
       Main f1 = (Main)this.Owner;
       f1.Refresh_Method();
       f1.Activate();
       this.Hide();
```

![添加](/images/WinForm-EntityFramework/56e07fd67d4d4dcd90f6008c20bbfc96.png)在主页面（原来我写的是Test窗体，但是重新生成解决方案了也没有显示，估计是重名了与其他功能，于是我主界面换成了Main窗体）的添加按钮里面编写new一个窗体，并且写一个让数据刷新的方法，通过owner在添加窗体调用，这样添加完成原来的窗体更新数据。

```csharp
private void button1_Click(object sender, EventArgs e)
     {
         Add f1 = new Add();
         f1.Owner = this;
         f1.Show();
     }

     internal void Refresh_Method()
     {
         this.testDataTableAdapter.Fill(this.studyEFDataSet1.TestData);
     }
```

![在这里插入图片描述](/images/WinForm-EntityFramework/52910a887077462a89be7c7abe92c5e9.png)

## 运行测试

![在这里插入图片描述](/images/WinForm-EntityFramework/5d607bca1a624e9ea829b0b7e9e84670.png)![在这里插入图片描述](/images/WinForm-EntityFramework/f51496f5946c47538fdc822a030dc9c8.png)测试没有问题。

## 四、实现删除按钮

## 编写代码

在Main窗体里面，双击删除按钮

```csharp
//删除按钮
        private void button2_Click(object sender, EventArgs e)
        {
            var dev1 = this.dataGridView1.CurrentRow;
            using (var study = new StudyEFEntities())
            {
                if (dev1.Cells[0].Value != null)
                {
                    int idToDelete;
                    if (int.TryParse(dev1.Cells[0].Value.ToString(), out idToDelete))
                    {
                        var ToDelete = study.TestData.FirstOrDefault(u => u.id == idToDelete);
                        if (ToDelete != null)
                        {
                            study.TestData.Remove(ToDelete);
                            study.SaveChanges();
                        }
                    }
                }
                this.testDataTableAdapter.Fill(this.studyEFDataSet1.TestData);
            }
        }
```

![删除按钮](/images/WinForm-EntityFramework/a1c758d8c0434c579d7f803ae34a5239.png)

## 运行测试

![在这里插入图片描述](/images/WinForm-EntityFramework/ed387128824b4eae916a6a9112d5a60f.png)测试没有问题，点击删除删除选中数据，并且刷新数据（原理是重新绑定数据）

## 五、实现修改按钮

## 编写代码

### 窗体之间传递参数

因为修改，修改是要有数据显示才能方便，不然就成重写了，在这里我觉得需要做一个参数传递。

#### Main窗体中修改按钮事件

```csharp
//修改按钮
       private void button3_Click(object sender, EventArgs e)
       {
           if (this.dataGridView1.SelectedRows.Count > 0)
           {
               var dev1 = this.dataGridView1.CurrentRow;
               Update frm = new Update(dev1);
               frm.Owner = this;
               frm.Show();
           }
           else
           {
               MessageBox.Show("请先选择一条数据");
           }
       }
```

![在这里插入图片描述](/images/WinForm-EntityFramework/9553048d44794291bbe15479e654fbf8.png)

#### 在update窗体中添加参数绑定

```csharp
public Update(DataGridViewRow dev1)
        {
            InitializeComponent();
            textBox8.Text = dev1.Cells[0].Value.ToString();
            textBox1.Text = dev1.Cells[1].Value.ToString();
            textBox2.Text = dev1.Cells[2].Value.ToString();
            textBox3.Text = dev1.Cells[3].Value.ToString();
            textBox4.Text = dev1.Cells[4].Value.ToString();
            textBox5.Text = dev1.Cells[5].Value.ToString();
            textBox6.Text = dev1.Cells[6].Value.ToString();
            textBox7.Text = dev1.Cells[7].Value.ToString();
        }
```

#### 在update窗体中添加修改按钮代码

```csharp
private void button1_Click(object sender, EventArgs e)
       {
           int id = int.Parse(textBox8.Text);
           string username = textBox1.Text;
           string name = textBox2.Text;
           string password = textBox3.Text;
           string age = textBox4.Text;
           string phone = textBox5.Text;
           string email = textBox6.Text;
           string address = textBox7.Text;
           using (var study = new StudyEFEntities())
           {
               // 假设你要更新的是用户信息  
               var ToUpdate = study.TestData.FirstOrDefault(u => u.id == id);
               if (ToUpdate != null)
               {
                   // 更新用户的属性  
                   ToUpdate.username = username;
                   ToUpdate.name = name;
                   ToUpdate.password = password;
                   ToUpdate.age = age;
                   ToUpdate.phone = phone;
                   ToUpdate.email = email;
                   ToUpdate.address = address;
                   // 保存更改到数据库  
                   study.SaveChanges();
               }
           }
               MessageBox.Show("修改成功");
               Main f1 = (Main)this.Owner;
               f1.Refresh_Method();
               f1.Activate();
               this.Hide();
       }
```

## 测试运行

运行测试没有问题。

## 六、实现查询按钮

## 新建表checkname，给下拉框添加数据

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/images/WinForm-EntityFramework/75526e320ad74d32a524e6c97e65f22c.png)
添加字段
![在这里插入图片描述](/images/WinForm-EntityFramework/159df9cc1cb54fdd871eda06f8927b2c.png)

去vs里更新模型数据
![在这里插入图片描述](/images/WinForm-EntityFramework/d1fe399d8bf84bc3b424f7af036192c8.png)

在main窗体里面绑定数据
![在这里插入图片描述](/images/WinForm-EntityFramework/03e64d968aac4c1d941a28dcd75e39c2.png)

## 编写代码

```csharp
//查询按钮实现
       private void button4_Click(object sender, EventArgs e)
       {
           using (var study = new StudyEFEntities())
           {
               // 查询满足条件的用户 
               if (comboBox1.SelectedValue.ToString() == "u.id") 
               {
                   int ToCheck;
                   if (int.TryParse(textBox1.Text, out ToCheck))
                   {
                       var test = study.TestData.Where(u => u.id == ToCheck);
                       this.dataGridView1.DataSource = test.ToList(); 
                   }
               }
               if (comboBox1.SelectedValue.ToString() == "u.username")
               {
                   var test = study.TestData.Where(u => u.username == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }
               if (comboBox1.SelectedValue.ToString() == "u.name")
               {
                   var test = study.TestData.Where(u => u.name == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }
               if (comboBox1.SelectedValue.ToString() == "u.password")
               {
                   var test = study.TestData.Where(u => u.password == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }
               if (comboBox1.SelectedValue.ToString() == "u.phone")
               {
                   var test = study.TestData.Where(u => u.phone == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }
               if (comboBox1.SelectedValue.ToString() == "u.email")
               {
                   var test = study.TestData.Where(u => u.email == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }
               if (comboBox1.SelectedValue.ToString() == "u.phone")
               {
                   var test = study.TestData.Where(u => u.phone == textBox1.Text);
                   this.dataGridView1.DataSource = test.ToList();
               }

           }
       }
       //重置按钮实现
       private void button5_Click(object sender, EventArgs e)
       {
           textBox1.Text = "";
           comboBox1.Text = "";
           using (var study = new StudyEFEntities())
           {
                
               var test = study.TestData;
               this.dataGridView1.DataSource = test.ToList();

           }
       }
```

## 运行测试

![在这里插入图片描述](/images/WinForm-EntityFramework/34dfb9ef8a084e68bd51bc7166ebf7c8.png)

[← 下一篇 【Vue】基础语法详解](/posts/vue-basestudy/)

[【蓝桥杯】23年省赛B组 上一篇 →](/posts/dsa-lanqiaoprovincialcompetitionb/)

