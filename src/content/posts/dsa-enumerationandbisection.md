---
title: "【蓝桥杯】枚举法和尺取法"
pubDate: 2024-03-13
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---
# 【蓝桥杯】枚举法和尺取法

在之前的课程中，我们深入讨论了打表法与模拟法的暴力解法。提到暴力，我们通常会首先想到枚举。然而，枚举实际上是一门技术，要确保能够穷尽所有可能的情况并不容易。因此，在本节课中，我们将详细介绍枚举法的技巧，以确保能够完整地列举出所有情况，不漏一种。

#### 知识点

- 枚举法

简单型枚举

- 组合型枚举

- 排列型枚举

- 指数型枚举

- 尺取算法

## 枚举法

**枚举算法的思想：**

枚举算法的核心思想是将问题的所有可能成为答案的解一一列举，然后根据问题给定的条件判断这些解是否合适。对于符合条件的解，保留；反之则舍弃。

**枚举算法解题的基本思路：**

- **确定枚举解的范围和判断条件：** 在开始解题之前，需要明确枚举的解范围，并定义问题的判断条件。

- **选取合适的枚举方法：** 选择适当的枚举方式进行逐一枚举，确保覆盖所有可能的解。避免遗漏任何真正的解，同时注意防止重复。

- **使用判断条件检验解：** 在枚举过程中，应用事先确定的判断条件验证每个解的合法性，保留符合要求的解。

**枚举算法的一般步骤：**

- **确定范围和枚举方式：** 根据题目确定枚举的范围，并选择合适的枚举方式。确保不遗漏任何真正的解，同时避免重复。

- **优化解空间：** 查看是否存在优化的可能性，以缩小可能成为解的答案范围，提高解决问题的效率。

- **定义准确验证条件：** 根据问题找到准确、易编码的验证条件，用于检验每个可能的解。

- **枚举和判断：** 逐一枚举解并验证是否符合事先确定的条件，保留符合条件的解。

- **输出结果：** 按照要求输出枚举过程中留下的符合条件的解。

枚举法包含多种技巧和方法，本节课将深入探讨其中几种方法。

### 简单型枚举

简单型枚举是通过简单的 `for` 循环嵌套解决的问题类型。在之前的课程中，我们所讨论的题目通常属于简单型枚举的范畴。因此，简单型枚举是一种相对简单且大家接触最多的枚举方式。

这种枚举方式没有特定的固定枚举模式，而且相对简单。只需按照题目的要求设计代码即可完成解题。

让我们通过一个示例题目来复习一下。

### 42 点问题

**题目描述:**

众所周知在扑克牌中，有一个老掉牙的游戏叫做 2424 点，选取 44 张牌进行加减乘除，看是否能得出 2424 这个答案。

现在小蓝同学发明了一个新游戏，他从扑克牌中依次抽出 66 张牌，注意不是一次抽出，进行计算，看是否能够组成 4242 点，满足输出 *Y**E**S*，反之输出 *N**O*。

最先抽出来的牌作为第一个操作数，抽出牌做第二个操作数，运算结果在当作第一个操作数，继续进行操作。

除不尽的情况保留整数。

请设计一个程序对该问题进行解答。

**样例:**

```
输入：

K A Q 6 2 3

输出：

YES
```

对于上面的样例我们进行了如下计算；

```
1. K*A=K 即 13*1=13
2. 13/12=1 保留整数
3. 1+6=7
4. 7*2=14
5. 14*3=42
```

**运行限制:**

```
最大运行时间：1s
最大运行内存: 128M
```

**题目解析：**

这个题目我们可以依次枚举数字，然后在枚举数字间的符号即可。由于到结果之间进行了三步计算，所以我们这里需要进行一个递归操作，利用了上节课讲解的知识。

两重循环即可解决问题，伪代码如下：

```
op1 赋值为 第一个数

op(op[1] op[2])
{

    for op in [+ - * /]
       ans = 第一个操作数op1 操作 第二个操作数op2

        如果是第六个操作数，就检验是否符合要要求 ==42？ 如果是就返回True

        如果op(ans , op[3]) 返回 True，就返回True 因为找到了答案，否则就继续进行

    没有找到答案返回False
}
```

但是这样写，思路感觉很清晰，写起来却非常的复杂，我们使用我们讲过的 `Vector` 来优化这个枚举方式。

我们创建 5 个 `Vector` ，分别用来存放 1−51−5 次的运算结果，非常简单。我们答案就采用这种方式。

#### 答案解析

C++ 代码：

```cpp
#include 
#include 
using namespace std;
int a[10];
vector  ans[10];
int main()
{
    for(int i=0; i>c;
        if(c=='A')
            a[i]=1;
        else if(c=='J')
            a[i]=11;
        else if(c=='Q')
            a[i]=12;
        else if(c=='K')
            a[i]=13;
        else
            a[i]=(c-'0');
        //cout**Python 解题代码**

```python
ans = [[] for i in range(10)]
a = ['0']*10
if __name__ == '__main__':
c = input().split()
for i in range(6):
    if c[i] == 'A':
        a[i] = 1
    elif c[i] == 'J':
        a[i] = 11
    elif c[i] == 'Q':
        a[i] = 12
    elif c[i] == 'K':
        a[i] = 13
    else:
        a[i] = ord(c[i]) - ord('0')

ans[0].append(a[0])
for i in range(1, 6):
    for j in range(len(ans[i - 1])):
        ans[i].append(ans[i - 1][j] + a[i])
        ans[i].append(ans[i - 1][j] - a[i])
        ans[i].append(ans[i - 1][j] * a[i])
        ans[i].append(int(ans[i - 1][j] / a[i]))
flag = 0
for j in range(len(ans[5])):
    if ans[5][j] == 42:
        flag = 1
        break
if flag == 1:
    print("YES")
else:
    print("NO")
```

**Java 解题代码**

```java
import java.util.Scanner;
import java.util.Vector;

public class Main {

  static int[] a = new int[10];
  static Vector> ans = new Vector>();
  public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      for (int i = 0; i ());
      ans.get(0).addElement(a[0]);
      for(int i=1; i());
          for(int j = 0; j排列组合是大家都接触过的概念，而组合型枚举则是在 *n* 个元素中随机选出 *m* 个元素的问题。对于每一种可能的选择方案，我们需要确定选择了哪 *m* 个元素，这就                                                                                                                                   是组合型枚举。

具体而言，组合型枚举解决的是 *C**n**m* 问题，即从 *n* 个元素中选择 *m* 个元素的组合数量。

组合型枚举有一套固定的流程和算法模板，需要大家进行记忆。

```python
chosen = []
n = 0
m = 0

def calc(x):
  if len(chosen) > m:
      return
  if len(chosen) + n - x + 1  chosen = new Vector();
    static  void calc(int x) {
        if (chosen.size() > m || chosen.size() + (n - x + 1) 
using namespace std;
int n;//共计N个数
int m;//选m个数
vector chosen;
string s[1000];
void calc(int x) {
    if (chosen.size() > m || chosen.size() + (n - x + 1) >n>>m;
    for(int i=1;i>s[i];
    }
    calc(1);
}
```

大家有个疑虑，我这里全是数字而且是从 11 开始的能好用吗，我题目要是字母怎么办，那么请看下面的题目。

### 公平抽签

**题目描述:**

小 A 的学校，蓝桥杯的参赛名额非常有限，只有 *m* 个名额，但是共有 *n* 个人报名，其中 *m*≤*n*。作为老师非常苦恼，他不知道该让谁去，他在寻求一个绝对公平的方式。于是他准备让大家抽签决定，即 *m* 个签是去，剩下的是不去。

小 A 非常想弄明白最后的抽签结果是什么样子的，到底有多少种结果。

请设计一个程序帮助小 A。最后输出各种情况的人名即可，一行一种情况，每种情况的名字按照报名即输入顺序排序。

第一行 输入 *N*,*M*。

第二行 到 第 *N*+1 行 共输入 *N* 个人名

每种情况输出 *M* 个人名，空格隔开。

**样例:**

```
输入：

3  2
xiaowang
xiaoA
xiaoli
输出：

xiaowang xiaoA
xiaowang xiaoli
xiaoA xiaoli
```

**运行限制:**

```
1. 最大运行时间：1s
2. 最大运行内存：128M
```

**题目解析：**

实际上还是组合型枚举，但是输出元素为人名，我们可以将人名存起来，输出的时候，根据数字下标找到提前存好的人名，直接输出即可。

#### 答案解析

C++ 代码：

```cpp
#include 
#include 
using namespace std;

int n; //共计N个数
int m; //选m个数
vector name;
vector ans;
vector chosen;
void calc(int x)
{

    if (chosen.size() > m || chosen.size() + (n - x + 1) > n >> m;
    for (int i = 0; i > s;
        name.push_back(s);
    }
    calc(1);
    for (int i =0; i **Python 解题代码**

```python
name = []
ans = []
chosen = []
n = 0
m = 0

def calc(x):
    if len(chosen) > m:
        return

    if len(chosen) + n - x + 1 **Java 解题代码**

```java
import java.util.Scanner;
import java.util.Vector;

public class Main {

  static  int n;
  static int m;//选m个数
  static Vector name = new Vector();
  static Vector ans = new Vector();
  static Vector chosen = new Vector();

  static  void calc(int x) {

      if (chosen.size() > m || chosen.size() + (n - x + 1) 上面说过，组合型枚举就是让你在 *n* 个中，随机选出 *m* 个 ，问你有多少种方案，而且每一种方案选择了哪 $m$ 个，这就是组合型枚举。

而排列型枚举相对组合型枚举就简单了一点，就是 *n* 个的全排列，即从 *n* 个中选取 *n* 个但是关心内部的顺序。

相比较组合只关心有多少个集合，而排列是关心集合内的排列方式。即排列型枚举就是寻找 *A**n**n* 问题。

而且排列型枚举也是有着比较成熟的模板需要大家进行记忆。

```cpp
int n; //共计N个数
int order[20];
bool chosen[20];
void calc(int k)
{
    if (k == n + 1)
    {
        for (int i = 1; i > n;
    calc(1);
}
```

**Python 写法**

```python
order = [0] * 20
chosen = [0] * 20
n = 0
def calc(x):
  if x == n + 1:
      ansTem = ''
      for i in range(1, n + 1):
          print(order[i],end=' ')
      print('')
      return
  for i in range(1,n+1):
      if(chosen[i]==1) :
          continue
      order[x]=i
      chosen[i]=1
      calc(x+1)
      chosen[i]=0
      order[x]=0
if __name__ == '__main__':
  n = int(input())
  # print(name)
  calc(1)
```

**Java 写法**

```java
static  int n;
static int[] order =new int[20];
static boolean[] chosen =new boolean[20];
static  void calc(int x) {
    if (x == n + 1) { //选够了m个数输出
        String ansTem = "";
        for (int i = 1; i 不少同学问我 2020 够不够，排列问题是阶乘阶的时间复杂度，如果超过这个复杂度，那么这个题也就不用做了，算不出来。

所以肯定够用。

```
4
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1
```

44 的排列就已经这么多了，大家可以尝试跑一下 1010。

同样，我们再来看一个的问题来进行加深理解。

### 座次问题

**题目描述:**

小 *A* 的学校，老师好不容易解决了蓝桥杯的报名问题，现在老师又犯愁了。现在有 *N* 位同学参加比赛，但是老师想给他们排座位，但是排列方式太多了。老师非常想弄明白最后的排座次的结果是什么样子的，到底有多少种结果。

请设计一个程序帮助老师。

最后输出各种情况的人名即可，一行一种情况，每种情况的名字按照报名即输入顺序排序。

第一行 输入 *N*； 第二行 到 第 *N*+1 行 共输入 *N* 个人名。

由于小 A 学校承办能力实在有限，所以其中 *N* 小于等于 1010 人。

**样例:**

```
输入：

3
xiaowang
xiaoA
xiaoli
输出：

xiaowang xiaoA xiaoli
xiaowang xiaoli xiaoA
xiaoA xiaowang xiaoli
xiaoA xiaoli xiaowang
xiaoli xiaowang xiaoA
xiaoli xiaoA xiaowang
```

**运行限制:**

```
1. 最大运行时间：1s
2. 最大运行内存：128M
```

**题目解析：**

实际上还是排列型枚举，但是输出元素为人名，我们可以将人名存起来，输出的时候，根据数字下标找到提前存好的人名，就是按照上一道题的方式处理即可。

#### 答案解析

C++ 代码：

```cpp
#include 
#include 
using namespace std;

int n; //共计N个数
vector name;
int order[20];
bool chosen[20];
void calc(int k)
{
    if (k == n + 1)
    {
        for (int i = 1; i > n;
    for (int i = 0; i > s;
        name.push_back(s);
    }
    calc(1);
}
```

**Python 解题代码**

```python
name = []

order = [0] * 20
chosen = [0] * 20
n = 0

def calc(x):

  if x == n + 1:
      ansTem = ''

      for i in range(1, n + 1):
          ansTem = ansTem + name[order[i]-1] + ' '

      print(ansTem)

      return
  for i in range(1,n+1):
      if(chosen[i]==1) :
          continue

      order[x]=i
      chosen[i]=1
      calc(x+1)
      chosen[i]=0
      order[x]=0

if __name__ == '__main__':

  n = int(input())
  for i in range(n):
      s = input()

      name.append(s)

  # print(name)
  calc(1)
```

**Java 解题代码**

```java
package com.company;

import java.util.Scanner;
import java.util.Vector;

public class Main {

  static  int n;
  static Vector name = new Vector();
  static int[] order =new int[20];
  static boolean[] chosen =new boolean[20];

  static  void calc(int x) {

      if (x == n + 1) { //选够了m个数输出
          String ansTem = "";

          for (int i = 1; i 尺取法（双指针法、two pointers）是一种常用的优化技巧，特别适用于解决序列的区间问题。它的操作简单，易于编程，是一种线性高效的算法。

尺取法的核心思想是维护一个区间（*L*,*R*），其中 L* 为起点，R* 为终点，该区间是序列内以 L* 为起点的最短合法区间。关键在于 R* 随着 L* 的增大而增大。通过不断枚举*L*，同时求解相应的*R*，可以高效地解决问题。

具体的实现步骤是，不断移动 *L* 指针，同时更新 *R* 指针，直到 *R* 随着 *L* 的增大而增大。因为 *R* 随着 *L* 的增大而增大，所以总的时间复杂度为 O*(*n*)。

通过维护两个指针，即左指针 *l* 和右指针 r*。通过不断确定区间的左端点，让右指针 r* 不断向右移动，直到满足条件停下，然后维护答案。这个过程重复进行，直到左指针 *l* 超过右指针 *r* 或满足其他特定情况（根据题目而定）。

尺取法的应用范围广泛，特别适用于需要寻找满足某种条件的连续子序列的问题。通过灵活运用尺取法，可以在保持算法简洁的同时，提高解题效率。

### 例题 奇怪的的动物园

#### 题目描述

动物园正在展出由世上最受欢迎的 *m* 种动物组成的精彩展览。

游客在购买门票时必须说明两个数字，*a* 和 *b*，代表他们希望观看的展览范围，从第 *a* 种动物到第 *b* 种动物（包含*a*,*b*）。门票的价格是按照观看的动物数量计算的，即每种动物一元。

小明希望在最小化购票花费的同时，能够欣赏到所有受欢迎的动物。

请计算他应该选择哪些动物范围，即 *a* 和 *b*。

若存在多组解，输出其中 *a* 最小的那组。

#### 输入格式

第一行包含两个整数 *n* 和 *m*，分别表示动物园内的动物总数以及受欢迎的动物种类数量。

第二行包含 *n* 个整数 *a***i*，表示第 *i* 种动物的种类。

#### 输出格式

一行包含两个整数 *a*,*b*。

样例输入

```
12 5
2 5 3 1 3 2 4 1 1 5 4 3
```

样例输出

```
2 7
```

### 思路与算法

这是一道使用尺取法（Two Pointers）的题目。我们维护两个指针 `l` 和 `r`，分别表示当前选择区间的左右端点。通过不断调整右指针 `r`，保证区间内包含所有受欢迎的动物。在滑动窗口的过程中，记录最小购票范围。

具体的实现细节如下：

- 使用 `I` 函数加入第 `x` 种动物的画，同时更新相应的计数和唯一动物数量。

- 使用 `D` 函数删除第 `x` 种动物的画，同时更新相应的计数和唯一动物数量。

- 不断移动右指针 `r`，并在保证区间内包含所有受欢迎的动物的前提下，更新最小购票范围。

- 移动左指针 `l`，直到无法再删除动物，保证区间仍然包含所有受欢迎的动物。

#### 复杂度分析

由于每个动物最多被插入和删除一次，算法的时间复杂度为 *O*(*n*)，其中 *n* 是动物的数量。

#### 代码

```cpp
#include 
using namespace std;

const int MAXN = 1000005;

int n, m, a[MAXN], b[MAXN], cnt, ans, ansl, ansr;

// 加入第x种动物
inline void I(int x) {
    if (b[x] == 0) cnt++; // 如果该动物没有在当前区间中出现过，增加唯一动物数量
    b[x]++; // 动物x的数量加1
}

// 删除第x种动物
inline void D(int x) {
    if (b[x] == 1) cnt--; // 如果删除后该动物不再在当前区间中出现，减少唯一动物数量
    b[x]--; // 动物x的数量减1
}

int main() {
    scanf("%d%d", &n, &m);
    for (int i = 1; i 这个算法通过维护两个指针，实现了在 *O*(*n*) 的时间复杂度内找到最小购票范围的目标。尺取法的思想在滑动窗口的过程中，通过不断调整左右指针来满足特定条件。

[← 下一篇 【蓝桥杯】差分与前缀和](/2024/03/14/DSA-DifferenceAndPrefixSum/)

[【蓝桥杯】搜索算法 上一篇 →](/2024/03/12/DSA-SearchAlgorithms/)

∧ [≡](#toc-div)
