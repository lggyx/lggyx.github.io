---
title: "【蓝桥杯】贪心算法"
pubDate: 2024-03-17
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

贪心算法（Greedy algorithm），又称贪婪算法。是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而使得问题得到全局最优解。

贪心的算法的设计就是要遵循某种规则，不断地选取当前最优解的算法设计方法。这节实验将会通过多个问题的来讲解贪心算法。

#### 知识点

- 贪心算法的基本概念

- 贪心算法的适用范围

- 贪心算法的设计步骤

- 贪心算法的题目讲解

## 贪心算法基本概念

贪心算法与枚举法的不同之处在于每个子问题都选择最优的情况，然后向下继续进行，且不能回溯。枚举法是将所有情况都考虑然后选出最优的情况。

贪心算法，在解决问题时，不从整体考虑，而是采用一种一眼看到局部最优解的选择方式。并且，贪心算法没有固定的模板可以遵循，每个题目都有不同的贪心策略，所以算法设计的关键在于贪心策略的选择。

贪心算法有一个必须注意的事情。贪心算法对于问题的要求是，所有的选择必须是无后效性的，**即当前的选择不能影响后续选择对于结果的影响**。

贪心算法主要适用于最优化问题，例如：最小生成树问题。有时候贪心算法并不能得到最优答案，但是能得到精确答案的近似结果。有时可以辅助其他算法得到不那么精确的结果。

### 适用范围

**符合贪心策略：**

所谓贪心选择性质是指所求问题的整体最优解可以通过一系列局部最优的选择，即贪心选择来达到。这是贪心算法可行的第一个基本要素，也是贪心算法与动态规划算法的主要区别。

贪心选择性质就是指，该问题的每一步选择都在选择最优的情况下能够导致最终问题的答案也是最优。

或者说是无后效性，如果该问题的每一步选择都对后续的选择没有影响，就可以应用贪心算法。

### 贪心算法的设计步骤

按照定义设计：

- 证明原问题的最优解之一可以由贪心选择得到。

- 将最优化问题转化为这样一个问题，即先做出选择，再解决剩下的一个子问题。

- 对每一子问题一一求解，得到子问题的局部最优解；

- 将子问题的解局部最优解合成原问题的一个解。

**伪代码：**

关于 Question Q：

```java
while(Q.hasNextStep)
{
    Select(Q.nowBestSelect);
    Q.NextStep
}

Select(Q.nowBestSelect);
```

### 贪心相关题目讲解

我们在正式将题目前，聊一个大家都懂的常见的知识，也是一个常见的题目。

#### 找零问题

题目如下：

假设商店老板需要找零 $n$ 元钱。

钱币的面额有：$100$ 元、$50$ 元、$20$ 元、$5$ 元、$1$ 元、如何找零使得所需钱币的数量最少？

注意：$n$ 可能为 $0$，也能为几百元（别问，问就是来着里微信提现来了）

**输入:**

输入解法:

在第一行给出测试例个数 $N$。

代表需要找零的钱数。

输入样例：

```
365
```

**输出：**

输出解法

有 $5$ 行输出数据，每一行输出数据输出找零的金额与数量，详情看样例。

输出样例：

```
100:3
50:1
20:0
5:3
1:0
```

**运行限制:**

```
最大运行时间：1s
最大运行内存：128M
```

**题目解析：**

关于这个题，如果是正常人都知道从大的钱开始找钱。这就是一种贪心的思想，将大问题转化为一个个小的子问题，每次选择最大的钱数使得总量最小。

其实再生活中贪心思想的例子还有很多，像是“自助餐“这种的都是贪心算法的印证。贪心算法其实离我们很近，掌握不会很困难的。

我们先看一下上一道题目的代码题解是什么。

**答案解析：**

C++ 解法：

```cpp
#include 
#include 
#include
using namespace std;

//面值
int t[5]={100, 50, 20, 5, 1};

//张数
int m[5];

void change(int n)
{

    for(int i=0;i>N;

    change(N);

    for(int i=0;i**Python 解法**

```python
t = [100, 50, 20, 5, 1]

# 钱的面值

def change(t, n):
  # m是张数
  m = [0 for _ in range(len(t))]
  # print(m) #[0, 0, 0, 0]
  for i, money in enumerate(t):
      # print(i) #0 1 2 3
      # print(money)
      # i是当前的编号  举个例子 n是376 money是100
      m[i] = n // money  # 商3
      # n还剩多少取余
      n = n % money  # 取余76 76不够100的
      # print(m)
      # print(n)
  return m

if __name__ == '__main__':
  N = int(input())

  m = change(t,N)

  for i in range(len(m)):
      print(t[i], end=':')

      print(m[i])
```

**Java 解法**

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

import static java.lang.Integer.max;

public class Main {

  //面值
  static  int t[] = new int[]{100, 50, 20, 5, 1};

  //张数
  static int m[] = new int[5];

  static void change(int n) {

      for (int i = 0; i **题目如下:**

小 `B` 的宿舍楼沿着走廊南北向的两边各有 $200$ 个房间。

如图所示：

```
[房间1][房间3][房间5][房间7][房间9 ]...[房间399]
----------------------------------------------
                   走廊
----------------------------------------------
[房间2][房间4][房间6][房间8][房间10]...[房间400]
```

最近，由于转专业和专业分流的原因，宿舍将迎来新的调整，以便组成新的班级后方便管理。

但是由于走廊狭窄，走廊里只能通过一个搬运的物品（可以同向也可以反向），因此必须指定高效的搬运计划。

老师给了每位同学下达了以下要求，让同学们体现收拾好行李，然后给每位同学 $10$ 分钟的时间搬运。

当房间 $i$ 搬运行李到 $j$ 时，$i$ 与 $j$ 之间的走廊都会被占用。所以，$10$ 分钟之内同一段走廊最多$1$个人同时搬运，不重叠的走廊也可以同时搬运。

小 $B$ 的老师是个数学老师，经过运筹学一通计算他得到了最优的搬运计划。

虽然计划不唯一，但是最优值唯一，请问这个最短时间是多少？

**输入:**

输入解法:

输入数据有 $T$ 组测试例，在第一行给出测试例个数 $T$。

每个测试例的第一行是一个整数 $N$（$1≤N≤200$)，表示要搬运行李的人数。接下来 $N$ 行，每行两个正整数 $s$ 和 $t$，表示一个人，将行李是从房间号码 $s$ 移到到房间号码 $t$。

输入样例:

```
3
4
10 20
30 40
50 60
70 80
2
1 3
2 200
3
10 100
20 80
30 50
```

**输出：**

输出解法

每组输入都有一行输出数据，为一整数 $T$，表示完成任务所花费的最小时间。

输出样例:

```
10
20
30
```

**运行限制:**

```
最大运行时间：1s 最大运行内存：128M
```

**题目解析：**

不难发现，相对应的两个房间其实是占用一段走廊的，我们可以将将房间号映射为走廊号，然后再考虑上面的解析。

该题属于贪心算法，因为它尽可能使搬运办公桌同时进行，以便使单独安排的搬运次数最少。这样用的时间最少，即所用最少时间为不能同时搬运桌子的次数，即某一段走廊使用次数最多（贪心标准）即为即为最少搬运时间。 **答案解析：**

C++ 解法：

```cpp
#include 
#include 
#include
using namespace std;

int main()
{
    int move[200];
//搬运次数
    int N;
    int T;
    cin>>T;
    while(T--)
    {
        //每次搬运的起点和终点
        int from, to;
        int maxAns=0;

        scanf("%d", &N);
        memset(move, 0, sizeof(move));
        for(int i = 0; i  to)
            {
                int temp = from;
                from = to;
                to = temp;
            }
//统计占用走廊情况，并统计最大值
            for(int j = from; j **Python 解法**

```python
#include 
#include 
#include
using namespace std;

int main()
{
    int move[200];
//搬运次数
    int N;
    int T;
    cin>>T;
    while(T--)
    {
        //每次搬运的起点和终点
        int from, to;
        int maxAns=0;

        scanf("%d", &N);
        memset(move, 0, sizeof(move));
        for(int i = 0; i  to)
            {
                int temp = from;
                from = to;
                to = temp;
            }
//统计占用走廊情况，并统计最大值
            for(int j = from; j **Java 解法**

```java
import java.util.Scanner;
import static java.lang.Integer.max;

public class Main {

  public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
//搬运次数
      int N;
      int T;
      T = in.nextInt();
      while (T > 0) {
          T--;

          //每次搬运的起点和终点
          int from, to;
          int maxAns = 0;
          N = in.nextInt();
          int[] move = new int[205];

          for (int i = 0; i  to) {
                  int temp = from;
                  from = to;
                  to = temp;
              }
//统计占用走廊情况，并统计最大值
              for (int j = from; j **题目如下:**

小 $B$ 同学呢，想去吃自助餐，但是他是那种比较节俭的的人，既不想浪费食物，又想尽可能吃的贵一点，他于是私下里做了调查。

小蓝餐厅的自助餐有 $n$ 种食材，每种食材都有它的价格。

而且也能估计出每一份的重量，所以他列了一个表格。

```
红烧牛肉  30元    300g
油闷大虾  8元     5g
四喜丸子  4元     8g
三文鱼    5元     3g
排骨      18元    200g
麻辣兔头  20元    120g
高汤海参  40元    70g
扇贝粉丝  8元     32g
牛排      79元    240g
...
```

现在小 $B$ 想知道在他到底最多吃多少钱的菜品。

假设自助餐厅的菜品供应同样的菜品每个人只能取一份。

小B的饭量假设为 $C$，单位为 $g$。

现在请你设计一个程序帮助小 $B$ 计算他的最多吃了多少钱。

**输入:**

输入解法

第一行输入 $n,C（0&lt;=n&lt;=1000）（0&lt;=C&lt;=10000）$

其中 $n$ 为菜品数量，$C$ 为小 $B$ 的肚子容量。

第二行输入两个数 $V，W$

第一个数 $V[i]$ 是第 $i$ 个菜品的价值$（0&lt;=v[i]&lt;=10000）$

第二个数 $V[i]$ 是第 $i$ 个菜品的质量$（0&lt;=w[i]&lt;=10000）$

输入样例:

```
20 1000
1 22
2 43
123 214
12 2
123 432
21 223
22 16
77 49
34 78
34 9
43 677
21 34
23 23
12 56
332 56
21 99
123 545
389 33
12 999
23 88
```

**输出：**

输出一行数据，表示最大的价值，保留三位小数。

输出样例：

```
1204.114
```

**运行限制:**

```
最大运行时间：1s 最大运行内存：128M
```

**题目解析：**

可拆分背包的一般解法为：

这里有 n 种不同值 $v[i]$ 和权重 $w[i]$ 的对象（如果选择该对象的 $w[i]$ 可以获得值 $v[i]$）。

你有一个容器来挑选它们。你可以根据自己的需要把它们分成任意大小的碎片。可以拾取的对象的最大重量给定为 $w$。请计算您能得到的最大值。

就像是这个题目，要想吃回本就要捡着贵的吃，但是贵只是一方面，人会饱，所以用价格除以质量所获的价格商才是贪心准则，应按照价格商优先进行选取。

于是这个题，就要用的我们之前学的知识了。这里因为要整体排序，所以要先创建一个类，然后自定义 `cmp` 函数，在使用 `sort` 排序。

**答案解析：**

C++ 解法：

```cpp
#include 
#include 
#include
using namespace std;

//需要一个结构体，通过性价比，能够查找到重量和价值。

//做一个排序，需要将性价比由高到底排序，排序的过程中重量和（价值）要对应上

struct Food
{
    double w;
    double v;
    double aver;

};
//C++一般用 struct，因为默认都是public的

bool cmp(Food a, Food b)
{
    return a.aver > b.aver;
    //助记大于号就是从大到小排序，小于号就是从小到大排序
}

int main()
{
    Food foods[1009];
    int n;
    double C;
    double Value = 0;
    cin >> n >> C;
    for (int i = 0; i > foods[i].v>>foods[i].w;
        //求性价比
        foods[i].aver = foods[i].v / foods[i].w;
        //cout **Python 解法**

```python
class Food:

   def __init__(self, w, v, aver):
       self.w = w
       self.v = v
       self.aver = aver

   def __repr__(self):
       # print(11)
       return repr((self.w, self.v, self.aver))

# def cmp(foodA: Food, foodB: Food):
#     if foodA.aver >= foodB.aver:
#         return True
#
#     else:
#         return False
#
#
# 当然 python 的 sort 是不需要写 cmp 函数的，这里我们使用 sorted 就不用 cmp 函数了

if __name__ == '__main__':

   foods = []
   C = 0.0
   Value = 0.0
   n, C = map(int, input().split())
   for i in range(n):
       food = Food(0, 0, 0)
       food.v, food.w = map(int, input().split())
       food.aver = food.v / food.w
       foods.append(food)
       # print(food.aver)
       # print(foods)
   # 性价比排序
   foods.sort(key=lambda f: f.aver, reverse=True)
   # for i in range(n):
   #     print(foods[i].aver)
   sum=0
   for i in range(n):
       sum+= foods[i].w
   # 当背包（肚子）能装下所有物品（菜）时，直接输出所有的物品（菜品）价值之和
   if sum**Java 解法**

```java
class Food:

   def __init__(self, w, v, aver):
       self.w = w
       self.v = v
       self.aver = aver

   def __repr__(self):
       # print(11)
       return repr((self.w, self.v, self.aver))

# def cmp(foodA: Food, foodB: Food):
#     if foodA.aver >= foodB.aver:
#         return True
#
#     else:
#         return False
#
#
# 当然 python 的 sort 是不需要写 cmp 函数的，这里我们使用 sorted 就不用 cmp 函数了

if __name__ == '__main__':

   foods = []
   C = 0.0
   Value = 0.0
   n, C = map(int, input().split())
   for i in range(n):
       food = Food(0, 0, 0)
       food.v, food.w = map(int, input().split())
       food.aver = food.v / food.w
       foods.append(food)
       # print(food.aver)
       # print(foods)
   # 性价比排序
   foods.sort(key=lambda f: f.aver, reverse=True)
   # for i in range(n):
   #     print(foods[i].aver)
   sum=0
   for i in range(n):
       sum+= foods[i].w
   # 当背包（肚子）能装下所有物品（菜）时，直接输出所有的物品（菜品）价值之和
   if sum贪心算法的最主要的特征就是无后效性，就像是自助餐那个题目，如果说吃了某一样食物，就不能吃另一个食物了，那么这就有了后效性，那就不能使用贪心算法进行解决问题了。

本节课举了三个贪心算法的例子进行讲解，贪心算法是算法竞赛中最入门的算法。没接触过感觉很深奥，接触过了也就那样，简单的贪心伸伸手就可以写出来，其实非常简单，大家也不要过分的担心。

[← 下一篇 【蓝桥杯】动态规划](/posts/dsa-dynamicprogramming/)

[【蓝桥杯】二分算法 上一篇 →](/posts/dsa-binarysearchalgorithm/)

