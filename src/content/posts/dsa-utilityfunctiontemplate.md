---
title: "【蓝桥杯】工具函数模板"
pubDate: 2024-03-22
chapter: algorithms
tags: ["蓝桥杯", "Python"]
legacy: true
---
# 【蓝桥杯】工具函数模板

## 内置模板

我们前面讲了很多数据结构相关的知识，本节课程，我们主要讲解怎么不自己定义，而是使用我们所使用的编程语言中，已经定义好的数据结构。

之前我们在栈那一节已经讲过栈的内置数据结构的使用，我们本章就不再进行讲解，我们这节课仍然采用那种方式进行讲解。

#### 知识点

- 迭代器讲解

- 线性表的使用

- 队列的使用

- 集合（set）的使用

- 映射（map）的使用

### 迭代器（Iterator）

首先，明确一点迭代器是 `C++` 的知识，并不适用于 `Java` 和 `Python` 这两种语言，但是下面讲容器就要用到这一点，所以我们必须要提前讲一下。迭代器的知识点很复杂，了解即可，当然有余力可以深究，了解就能做题，实现方式看容器讲解。

对于数组我们可以采用指针进行访问，但是对于其他的存储空间连续的数据结构或者说是存储单元我们就需要找到另一种方式来替代指针的行为作用，从而达到对于非数组的数据结构的访问和遍历，于是我们定义了一种新的变量叫做迭代器。

**定义：**

迭代器是一种检查容器内元素并遍历元素的数据类型。

迭代器提供对一个容器中的对象的访问方法，并且定义了容器中对象的范围。

**迭代器和指针的区别：**

容器和`string`有迭代器类型同时拥有返回迭代器的成员。

如：容器有成员 `.begin()` 和 `.end()`，其中 `.begin()` 成员复制返回指向第一个元素的迭代器，即指向第一个元素的“地址”，而 `.end()` 成员返回指向容器尾元素的下一个位置的迭代器。

即 `.begin()` 指向的是第一个合法元素的位置，`.end()` 指向是容器后第一个不合法元素的地址。

相应的还有容器反向迭代器成员 `.rbegin()` `.rend()`，`.rbegin()` 返回容器的元素前最后一个不合法的地址，`rend()` 返回容器的最后一个合法地址。

#### 容器迭代器的使用

每种容器类型都定义了自己的迭代器类型：

```
如 vector：vector::iterator iter;//定义一个名为iter的变量
```

数据类型是由 `vector` 定义的 `iterator` 类型。简单说就是容器类定义了自己的 `iterator` 类型，用于访问容器内的元素。每个容器定义了一种名为 `iterator` 的类型，这种类型支持迭代器的各种行为。

我么们先讲一下各种迭代器的类型，在讲容器所用的迭代器类型，就可以明白怎么操作。

## 容器

写在前面，由于 `Python` 的语言的特点，所有的数据结构大部分都需要自己实现，但是其 `List` 功能较强，用起来比较简单，当然我们也会再说一遍怎么实现。

在 `Java` 中各种数据结构都是继承于 `list`，所以 `Java` 的 `list` 功能也很强，它的功能有很多，由于篇幅原因我们会挑比较重要的讲解，其他的还需要同学们多去使用。

### Vector 容器（类）

线性表中有 `Vector` 和 `list`，两者作用比较相似。

`Vector` 的主要作用就是可变长度的数组，就把他当成数组使用即可。

至于为什么我们选择讲 `Vector` 而不是 `List`，因为 `Vector` 可以当作数组使用，用起来非常简单，也非常方便。

我们先讲解一下 C++ 的 `Vector` 使用：

```cpp
#include    //头文件
vector a;      //定义了一个int类型的vector容器a
vector b[100]; //定义了一个int类型的vector容器b组
struct rec
{
    ···
};
vector c;            //定义了一个rec类型的vector容器c
vector::iterator it; //vector的迭代器，与指针类似
```

具体操作如下：

```cpp
a.size()           //返回实际长度（元素个数），O(1)复杂度
a.empty()      //容器为空返回1，否则返回0，O(1)复杂度
a.clear()      //把vector清空
a.begin()      //返回指向第一个元素的迭代器，*a.begin()与a[0]作用相同
a.end()        //越界访问，指向vector尾部，指向第n个元素再往后的边界
a.front()      //返回第一个元素的值，等价于*a.begin和a[0]
a.back()       //返回最后一个元素的值，等价于*--a.end()和a[size()-1]
a.push_back(x) //把元素x插入vector尾部
a.pop_back()   //删除vector中最后一个元素
```

遍历的方式有两种：

- 迭代器使用与指针类似，可如下遍历整个容器。

```cpp
for ( vector::iterator it=a.begin() ; it!=a.end() ; it++ )
cout

- 当成数组使用。

```c
for( int i=0;iJava 中我们一般使用 List，相信大家已经非常熟悉了，我们这里给大家补充一下 Vector 的用法，与 List 的使用方式非常的类似。

```java
//第一种构造方法创建一个默认的向量，默认大小为 10：
Vector()
//第二种构造方法创建指定大小的向量。
Vector(int size)
//第三种构造方法创建指定大小的向量，并且增量用 incr 指定。增量表示向量每次增加的元素数目。
Vector(int size,int incr)
//第四种构造方法创建一个包含集合 c 元素的向量：
Vector(Collection c)
```

以下为 `Java Vector` 的 `Api`。

| **修饰符和类型** | **方法和说明** |
| --- | --- |
| boolean | add(E e)将指定的元素附加到此 Vector 的末尾。 |
| void | add(int index, E element)在此 Vector 的指定位置插入指定元素。 |
| boolean | addAll(Collection c)将指定集合中的所有元素追加到末尾 这个向量，按照它们由指定的返回的顺序 集合的迭代器。 |
| boolean | addAll(int index, Collection c)将指定 Collection 中的所有元素插入到此 指定位置的向量。 |
| void | addElement(E obj)将指定的组件添加到此向量的末尾， 将其大小增加一。 |
| int | capacity()返回此向量的当前容量。 |
| void | clear()从此 Vector 中删除所有元素。 |
| Object | clone()返回此向量的克隆。 |
| boolean | contains(Object o)退货 true 如果此向量包含指定的元素。 |
| boolean | containsAll(Collection c)如果此 Vector 包含所有元素，则返回 true 指定的集合。 |
| void | copyInto $Object$ [ ] $anArray$将此向量的分量复制到指定的数组中。 |
| E | elementAt(int index)返回指定索引处的组件。 |
| Enumeration | elements()返回此向量的组件的枚举。 |
| void | ensureCapacity(int minCapacity)如有必要，增加此向量的容量，以确保它至少可以容纳由指定的组件数量最小容量参数。 |
| boolean | equals(Object o)比较指定的 Object 与此 Vector 是否相等。 |
| E | firstElement()返回第一个组件（索引处的项目 0） 的这个向量。 |
| E | get(int index)返回此 Vector 中指定位置的元素。 |
| int | hashCode()返回此 Vector 的哈希码值。 |
| int | indexOf(Object o)返回指定元素第一次出现的索引 在此向量中，如果此向量不包含该元素，则为 -1。 |
| int | indexOf(Object o,int index)返回指定元素第一次出现的索引这个向量，从 index, 或返回 -1 如果 未找到该元素。 |
| void | insertElementAt(E obj, int index)将指定对象作为组件插入此向量中的 指定的 index. |
| boolean | isEmpty()测试此向量是否没有组件。 |
| Iterator | iterator()以适当的顺序返回此列表中元素的迭代器 |
| E | lastElement()返回向量的最后一个组件。 |
| int | lastIndexOf(Object o)返回指定元素最后一次出现的索引在此向量中，如果此向量不包含该元素，则为 -1。 |
| int | lastIndexOf(Object o, int index)返回指定元素最后一次出现的索引这个向量，从 index, 或返回 -1 如果 未找到该元素。 |
| ListIterator | listIterator()返回此列表中元素的列表迭代器（在适当的顺序）。 |
| ListIterator | listIterator(int index)返回此列表中元素的列表迭代器（在适当的序列），从列表中的指定位置开始。 |
| E | remove(int index)移除此 Vector 中指定位置的元素。 |
| boolean | remove(Object o)移除此 Vector 中第一次出现的指定元素如果 Vector 不包含该元素，则它保持不变。 |
| boolean | removeAll(Collection c)从此 Vector 中删除其包含在指定的集合。 |
| void | removeAllElements()从此向量中删除所有组件并将其大小设置为零。 |
| boolean | removeElement(Object obj)删除参数的第一个（最低索引）出现从这个向量。 |
| void | removeElementAt(int index)删除指定索引处的组件。 |
| protected void | removeRange(int fromIndex, int toIndex)从此列表中删除索引介于两者之间的所有元素 fromIndex，包括在内，和 toIndex， 独家的。 |
| boolean | retainAll(Collection c)仅保留此 Vector 中包含在指定的集合。 |
| E | set(int index, E element)将此 Vector 中指定位置的元素替换为指定的元素。 |
| void | setElementAt(E obj,int index)将组件设置在指定的位置 index 这个的向量是指定的对象。 |
| void | setSize(int newSize)设置此向量的大小。 |
| int | size()返回此向量中的组件数。 |
| List | subList(int fromIndex,int toIndex)返回此列表中 fromIndex 之间的部分的视图 |
| Object[] | toArray()返回一个包含此 Vector 中所有元素的数组以正确的顺序。 |
| T[] | $toArray\ T$[] 返回一个包含此 Vector 中所有元素的数组正确的顺序; 返回数组的运行时类型指定数组。 |
| String | toString()返回此 Vector 的字符串表示形式，包含 每个元素的字符串表示。 |
| void | trimToSize()将此向量的容量修剪为向量的电流 尺寸。 |

遍历 Vector

```java
Enumeration vEnum = v.elements();
while (vEnum.hasMoreElements())
    System.out.print(vEnum.nextElement() + " ");
```

**Python 中，我们直接使用 list 即可来实现。**

## 题目解析

快递员需要对快递进行分拣，现在小李是一名快递员，他想要你帮他设计一个程序用于快递的分拣，按城市分开。

现在有以下输入：

```
单号 省份

请你将单号按照城市分开，并输出。

城市按照输入顺序排序

单号按照输入顺序排序
```

样例如下：

```
输入

10

10124214 北京
12421565  上海
sdafasdg213 天津
fasdfga124 北京
145252  上海
235wtdfsg 济南
3242356fgdfsg 成都
23423 武汉
23423565f 沈阳
1245dfwfs 成都

输出

北京 2
10124214
fasdfga124
上海 2
12421565
145252
天津 1
sdafasdg213
济南 1
235wtdfsg
成都 2
3242356fgdfsg
1245dfwfs
武汉 1
23423
沈阳 1
23423565f
```

下面我们来分析一下解题思路。

首先我们要知道中国城市肯定在 $1000$ 个以内，但是单号我们不确定，我们不可能每个数组开 $10000$ 个，那样内存不够，所以这时候我们就用到了我们的 $vector$，他的容量是动态申请的，在比赛中我们可以理解为无限制。

- 第一步：我们创建一个 $vector$ 用于保存地址

```cpp
vector city;
```

- 第二步：我们创建一个 $vector$ 组用于存放单号

```cpp
vector dig[1000];
```

- 

第三步：我们定义一个映射函数，因为你的城市可能会再次出现，你需要知道之前有没有。

- 

第四步：我们开始读入操作并按照顺序进行存放

#### 完整代码

C++ 解题代码：

```cpp
#include
#include
using namespace std;

vector city;
vector dig[1000];

int Myfind(string s)
{
    for(int i=0;i>n;
    for(int i=0;i>d>>c;
        int flag=Myfind(c);
        if(flag==-1){
            city.push_back(c);
            dig[city.size()-1].push_back(d);
        }
        else  dig[flag].push_back(d);
    }
    for(int i=0;i**Java 解题代码**

```java
import java.util.List;
import java.util.Scanner;
import java.util.Vector;

public class Main {

  static Vector city=new Vector();
  static Vector > dig= new Vector >();
  static int Myfind(String s)
  {
      for(int i=0;i());
              dig.get(city.size()-1).addElement(d);

          }
          else   dig.get(flag).addElement(d);
      }
      for(int i=0;i**Python 实现方式:**

```python
city=[]
dig = [[] for i in range(1000)]
def find(s):
   for i in range(0,len(city)):
       if (city[i]==s):
           return i
   return -1

if __name__ == '__main__':
   n=int (input())
   for i in range(0,n):
       d=input().split()
       #print(d[1]        )
       flag=find(d[1])
       if(flag==-1):
           city.append(d[1])
           dig[len(city)-1].append(d[0])
       else:
           dig[flag].append(d[0])

   for i in range(0,len(city)):
       print(city[i],len(dig[i]))
       for j in range(0,len(dig[i])):
           print(dig[i][j])
```

### 队列 Queue

队列的讲解在之前的课程中已经讲过了，忘记的快回去复习。

我们直接开始看操作吧。

#### C++ 中的队列

定义方式：在 C++ 里所有容器的定义方式基本一致。

```c
queue myqueue;
queue myqueue_int;
```

成员函数:

- `front()`：返回 `queue` 中第一个元素的引用。

- `back()`：返回 `queue` 中最后一个元素的引用。

- `push(const T& obj)`：在 `queue` 的尾部添加一个元素的副本。

- `pop()`：删除 `queue` 中的第一个元素。

- `size()`：返回 `queue` 中元素的个数。

- `empty()`：如果 `queue` 中没有元素的话，返回 true。

**Java 中的队列:**

定义方式：

```java
Queue queue = new LinkedList();
```

部分成员函数（包括继承的）：

- `add()`: 增加一个元索,如果队列已满，则抛出一个异常

- `remove()`:移除并返回队列头部的元素，如果队列为空，则抛出一个异常

- `element()`:返回队列头部的元素，如果队列为空，则抛出一个异常

- `offer()`:添加一个元素并返回 `true`，如果队列已满，则返回 `false`

- `poll()`: 移除并返问队列头部的元素，如果队列为空，则返回 `null`

- `peek()`: 返回队列头部的元素，如果队列为空，则返回 `null`

- `put()`: 添加一个元素， 如果队列满，则阻塞

- `take()`: 移除并返回队列头部的元素，如果队列为空，则阻塞

- `size()`: 返回队列长度。

**Python 中的队列**

定义方式：

```python
from queue import Queue

## maxsize设置队列中，数据上限，小于或等于0则不限制，容器中大于这个数则阻塞，直到队列中的数据被消掉
q = Queue(maxsize=0)
```

成员函数：

- 

`Queue.qsize()` 返回队列的大致大小。

- 

`Queue.empty()` 如果队列为空，返回 `True` 否则返回 `False`

- 

`Queue.full()` 如果队列是满的返回 `True` ，否则返回 `False`

- 

`Queue.put(item, block=True, timeout=None)`

常用时忽略默认参数，即使用 `Queue.put(item)`。

- 将 `item` 放入队列，如果可选参数 `block` 是 `true` 并且 `timeout` 是 `None` (默认)，则在必要时阻塞至有空闲插槽可用。

- 如果 `timeout` 是个正数，将最多阻塞 `timeout` 秒，如果在这段时间没有可用的空闲插槽，将引发 `Full` 异常。

- 反之 (`block` 是 `false`)，如果空闲插槽立即可用，则把 `item` 放入队列，否则引发 `Full` 异常 ( 在这种情况下，`timeout` 将被忽略)。

- 

`Queue.get(block=True, timeout=None)`

常用时忽略默认参数，即使用 `Queue.get()`。

- 从队列中移除并返回一个项目。如果可选参数 `block` 是 `true` 并且 `timeout` 是 `None` (默认值)，则在必要时阻塞至项目可得到。

- 如果 `timeout` 是个正数，将最多阻塞 `timeout` 秒，如果在这段时间内项目不能得到，将引发 `Empty` 异常。反之 (`block` 是 `false`)，如果一个项目立即可得到，则返回一个项目，否则引发 `Empty` 异常 (这种情况下，`timeout` 将被忽略)。

#### 题目回顾

CLZ 的银行。

```
第一行 M 次操作（M具体的题目讲解，我们之前就已经讲解过了，这里我们主要是来看一下预置代码的方便性。

#### 完整代码

C++实现：

```cpp
#include 
#include 
using namespace std;

queue V;
queue N;

int main()
{
    int M;
    cin>>M;

    while(M--) //
    {
        string op,name,type;
        cin>>op;
        if(op=="IN")
        {
            cin>>name>>type;

            if(type=="V")
                V.push(name);

            else
                N.push(name);
        }
        else
        {
            cin>>type;

            if(type=="V")
                V.pop();
            else
                N.pop();

        }
    }

    while(V.size())
    {
        cout**Java 实现**

```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {

    static Queue V=new LinkedList();

    static Queue N=new LinkedList();

    public static void main(String[] args) {

        int M;
        Scanner in=new Scanner(System.in);
        M=in.nextInt();
        while(M>0) //
        {
            M--;
            String op,name,type;
            op=in.next();
            // System.out.println("op"+op);
            if(op.contains("IN"))
            {
                name=in.next();
                type=in.next();
                if(type.contains("V")) {
                    V.offer(name);
                }
                else {
                    N.offer(name);
                }
                // System.out.println("name:"+name+"type:"+type);

                // System.out.println(Vqueue);
            }
            else
            {
                type=in.next();
                if(type.contains("V")){
                    V.poll();
                }
                else {
                    N.poll();
                }
                // System.out.println("type"+type);
            }
        }

        while(V.size()!=0)
        {
            System.out.println(V.poll());
        }
        while(N.size()!=0)
        {
            System.out.println(N.poll());
        }
    }

}
```

**Python 实现**

```python
import queue

V = queue.Queue()
N = queue.Queue()

if __name__ == '__main__':

  M = 0
  M = int(input())
  while M > 0:
      M -= 1
      op = input().split()

      # print(op[0])

      if op[0] == 'IN':
          if op[2] == "V":
              V.put(op[1])
          else:
              N.put(op[1])
      else:
          if op[1] == "V":
              V.get()
          else:
              N.get()
          # print('out')
      # print("VVVVV",Vqueue)
      # print("NNNN",Nqueue)
      # print(M)

  while not (V.empty()):
      print(V.get())

  while not (N.empty()):
      print(N.get())
```

### Map 映射

在之前我们学习散列表的时候我们就接触过了映射，这里我们要讲的是一种类似的数据结构。

`map` 是一个关联容器，它提供一对一的 `hash`。

- 第一个可以称为关键字(`key`)，每个关键字只能在 `map` 中出现一次

- 第二个可能称为该关键字的值(`value`)

`map` 以模板（泛型）方式实现，可以存储任意类型的数据，包括使用者自定义的数据类型。`Map` 主要用于资料一对一映射（`one-to-one`）的情況，`map` 在 `C++` 的內部的实现自建一颗红黑树，这颗树具有对数据自动排序的功能。在 `map` 内部所有的数据都是有序的。

比如，像是管理班级内的学生，`Key` 值为学号，`Value` 放其他信息的结构体或者类。

#### C++ 中的 map

定义方式：

```cpp
map mymap1;
map mymap2;
```

一般用法：

- 看容量。

```cpp
int map.size();//查询map中有多少对元素
bool empty();// 查询map是否为空
```

- 插入。

```c
map.insert(make_pair(key,value));
//或者
map.insert(pair(key, value))
//或者
map[key]=value
```

- 取值。

```cpp
map map;

//如果map中没有关键字2233，使用[]取值会导致插入
//因此，下面语句不会报错，但会使得输出结果结果为空
cout

- 遍历操作

```cpp
map::iterator it;
for (it = mapSet.begin(); it != mapSet.end(); ++it)
{
    cout first second 

- 查找操作

```cpp
m.count(key)：//由于map不包含重复的key，因此m.count(key)取值为0，或者1，表示是否包含。
m.find(key)：//返回迭代器，判断是否存在。
```

**Java 中的 map**

定义方法：

```java
Map m1 = new TreeMap();
```

这里我们讲的是排序的 `map` 还有不排序的 `map`，`java` 里面叫 `hashmap`，`C++` 里叫 `unordered_map`，除了不排序，用法和功能都一样。

二者相差无几，大家如果不需要排序可以直接使用。

成员方法

| 方法名 | 方法描述 |
| --- | --- |
| void clear( ) | 从此映射中移除所有映射关系（可选操作）。 |
| boolean containsKey(Object k) | 如果此映射包含指定键的映射关系，则返回 true。 |
| boolean containsValue(Object v) | 如果此映射将一个或多个键映射到指定值，则返回 true。 |
| boolean equals(Object obj) | 比较指定的对象与此映射是否相等。 |
| Object get(Object k) | 返回指定键所映射的值；如果此映射不包含该键的映射关系，则返回 null。 |
| int hashCode( ) | 返回此映射的哈希码值。 |
| boolean isEmpty( ) | 如果此映射未包含键-值映射关系，则返回 true。 |
| Set keySet( ) | 返回此映射中包含的键的 Set 视图。 |
| Object put(Object k, Object v) | 将指定的值与此映射中的指定键关联 |
| Object remove(Object k) | 如果存在一个键的映射关系，则将其从此映射中移除（可选操作）。 |
| int size( ) | 返回此映射中的键-值映射关系数。 |
| Collection values( ) | 返回此映射中包含的值的 Collection 视图。 |

**Python 字典**

在 `Python` 中我们不叫映射，也不叫 `map`，我们称作字典。用法跟 `Java` 和 `c++` 都是有一定区别的。

- 字典的创建。

```python
massege={'小李':'123124543643','xiaohua':'17855666','LiMing':'1249699859456'}

#或者创建空的字典
empty_dict = {}
#或者使用元组作为key
group_dict = {(60, 99):'good', 100:'nice'}
```

- 字典的添加。

```python
# 如果字典内不含有相应的Key值，则会执行添加操作
dict[key]=value
```

- 字典的修改。

```python
# 如果字典内含有相应的Key值，则会执行更新操作
dict[key]=new_value

# 使用update()修改
# update() 方法可使用一个字典所包含的 key-value 对来更新己有的字典。如果有就修改，没有就添加。
dict.update({'key':123,'key2':234})
```

- 字典的删除。

```python
del dict['key']  # 删除键是'key'的条目
dict.clear()      # 清空字典所有条目
del dict          # 删除字典
```

- 字典的访问。

```python
dict = {'Name': 'Zara', 'Age': '7'}
print (dict['Name'])

#当然如果key值不存在，将会抛出异常
#也可以是用get()方法,不存在会返回None，但不会抛出异常
print(dict.get('Name'))
```

### 题目演练

《弗里石的的语言》

小发明家弗里想创造一种新的语言，众所周知，发明一门语言是非常困难的，首先你就要克服一个困难就是，有大量的单词需要处理，现在弗里求助你帮他写一款程序，判断是否出现重复的两个单词。

有重复就输出重复单词，重复就输出 `NO`，多个重复输出最先出现的哪一个。

输入：

第 $1$ 行，输入 $N$，代表共计创造了多少个单词 第 $2$ 行至第 $N+1$ 行，输入 $N$ 个单词

格式：

```
fjsdfgdfsg
fdfsgsdfg
bcvxbxfyres
```

现在有以下样例输入：

样例 1

```
输入：

6
1fagas
dsafa32j
lkiuopybncv
hfgdjytr
cncxfg
sdhrest

输出：

NO
```

样例 2

```
输入：

5
sdfggfds
fgsdhsdf
dsfhsdhr
sdfhdfh
sdfggfds

输出：

sdfggfds
```

这个题的思路在前面我们已经讲过了，这里我们换一种方式解题。

使用映射和字典解题，是的原来的代码减少了超过一半，但是思路还是一样，可以说是非常的巧妙且省力。

#### C++ 解法

```cpp
 #include 
 #include 
 using namespace std;

map mp;
int main ()
{

    int n;
    string ans="NO";
    cin>>n;
    for(int i=0;i>word;
        if(mp.count(word)){
            ans=word;
            break;
        }

        else mp[word]=1;
    }
    cout**Java 解法**

```java
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Main {

  static Map mp=new TreeMap();

  public static void main(String[] args)
  {

      int n;
      boolean flag=false;
      Scanner in=new Scanner(System.in);
      String ans="NO";
      n=in.nextInt();
      for(int i=0;i**Python 解法**

```python
dict={}
if __name__=='__main__':

  N=int (input())
  ans = 'NO'
  flag = False
  while N>0:
      N-=1
      word=input()
      if(not(flag)) :

          if(dict.get(word)!=None):
              flag=True
              ans=word
          else:
              dict[word]=True
  print(ans)
```

[← 下一篇 【蓝桥杯】练习题目汇总](/2024/03/22/DSA-LanqiaoProblemsCollection/)

[【蓝桥杯】组合数学 上一篇 →](/2024/03/21/DSA-Combinatorics/)

∧ [≡](#toc-div)
