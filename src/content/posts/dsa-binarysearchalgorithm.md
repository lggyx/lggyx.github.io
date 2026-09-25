---
title: "【蓝桥杯】二分算法"
pubDate: 2024-03-16
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

## 二分查找算法

#### 知识点

- 二分查找原理讲解

- 在单调递增序列 `a` 中查找 `x` 或 `x` 的后继

- 在单调递增序列 `a` 中查找 `x` 或 `x` 的前驱

## 二分查找算法讲解

枚举查找即顺序查找，实现原理是逐个比较数组 `a[0:n-1]` 中的元素，直到找到元素 `x` 或搜索整个数组后确定 `x` 不在其中。最坏情况下需要比较 `N` 次，时间复杂度是 `O(n)`，属于线性阶算法。

```java
class Solution {  
    public int search(int[] nums, int target) {  
        int left = 0, right = nums.length;  
        while (left > 1); // 无符号右移等同于除以2取整  
            if (nums[mid] == target)  
                return mid;  
            else if (nums[mid]  target)  
                right = mid - 1; // 修改这里，应该是 mid - 1  
        }  
        return -1; // 如果循环结束还没有找到，说明目标值不存在于数组中  
    }  
}
```

**折半查找的基本思想：**

在有序表中（`low, high, low

- 若给定值与中间记录的关键码相等，则查找成功。

- 若给定值小于中间记录的关键码，则在中间记录的左半区继续查找。

- 若给定值大于中间记录的关键码，则在中间记录的右半区继续查找。

不断重复上述过程，直到查找成功或所查找的区域无记录，查找失败。

**二分查找的特征：**

- 答案具有单调性。

- 二分答案的问题往往有固定的问法，例如：令最大值最小（最小值最大），求满足条件的最大（小）值等。

**折半查找一般过程：**

![图片描述](/images/DSA-BinarySearchAlgorithm/83f052e54f7e7907738ba7730a9b3297-0.png)

```
Step 1:

假设存在一个有序数组：
下标[ 0   1   2   3   4   5   6   7   8    9    10   11   12 ]
数据[ 7   14  18  21  23  29  31  35   38   42   46   49  52 ]
      ↑                                                   ↑
    low=0                                              high=12

                            mid=(low+high)/2
                            mid=(0+12)/2
                            mid=6
                            [mid]=31 > 14，所以选择左半部分

操作：
    此时令low不变，high=mid-1=5

Step 2:

下标[ 0   1   2   3   4   5   6   7   8    9    10   11   12 ]
数据[ 7   14  18  21  23  29  31  35   38   42   46   49  52 ]
      ↑                   ↑
   low=0                 high=5

            mid=(low+high)/2
            mid=(0+6)/2
            mid=3
            [mid]=21 > 14，所以选择左半部分

操作：
    此时令low不变，high=mid-1=2

Step 3:

下标[ 0   1   2   3   4   5   6   7   8    9    10   11   12 ]
数据[ 7   14  18  21  23  29  31  35   38   42   46   49  52 ]
      ↑       ↑
   low=0    high=2

            mid=(low+high)/2
            mid=(0+2)/2
            mid=1
            [mid]=14 = 14  找到答案

操作：
    返回下标
```

这个文本看起来更加清晰，修正了一些不规范的表达。

### 整数二分法常用算法模板

#### C++ 语言描述

```cpp
// 在单调递增序列a中查找>=x的数中最小的一个（即x或x的后继）
while (low = x)
        high = mid;

    else
        low = mid + 1;
}

// 在单调递增序列a中查找**Python 语言描述**

```python
#在单调递增序列a中查找>=x的数中最小的一个（即x或x的后继）
while low=x):
      high=mid

  else:
      low=mid+1

#在单调递增序列a中查找**Java 语言描述**

```java
// 在单调递增序列a中查找>=x的数中最小的一个（即x或x的后继）
while (low = x)
      high= mid;

  else
      low = mid + 1;
}

// 在单调递增序列a中查找此处我们先分整数的二分查找法的常用模版，关于实数的部分，我们后面再讲。

下面可能会有同学会疑问道：为什么采用这一套代码的而不是采用查找等于的 X？

是因为这样的适用范围更广，当有 X 时这套代码就返回 X 的位置。如果没有 X，就返回 &lt;=x 的数中最大的一个或者 &gt;=x 的数中最小的一个。

### 分巧克力

[2017 年省赛真题链接](https://www.lanqiao.cn/problems/99/learning/)。

**题目描述:** 儿童节那天有 K 位小朋友到小明家做客。小明拿出了珍藏的巧克力招待小朋友们。

小明一共有 $N$ 块巧克力，其中第 $i$ 块是 $H_i \times Wi$ 的方格组成的长方形。为了公平起见，

小明需要从这 $N$ 块巧克力中切出 K 块巧克力分给小朋友们。切出的巧克力需要满足：

- 形状是正方形，边长是整数;

- 大小相同;

例如一块 6x5 的巧克力可以切出 6 块 2x2 的巧克力或者 2 块 3x3 的巧克力。

当然小朋友们都希望得到的巧克力尽可能大，你能帮小明计算出最大的边长是多少么？

**输入描述:**

第一行包含两个整数 $N,K$ ($1  \leq  N, K  \leq  10^5$)。

以下 N 行每行包含两个整数 $H_i,W_i$ ($1  \leq  H_i, W_i  \leq  10^5$)。

输入保证每位小朋友至少能获得一块 1x1 的巧克力。

**输出描述:**

输出切出的正方形巧克力最大可能的边长。

**输入输出样例:**

**示例:**

输入

```
2 10 6 5 5 6
```

输出

```
2
```

**运行限制:**

- 最大运行时间：2s

- 最大运行内存: 256M

注意：

- 请严格按要求输出，不要画蛇添足地打印类似：“请您输入…”的多余内容。

- 不要调用依赖于编译环境或操作系统的特殊函数。

- 所有依赖的函数必须明确地在源文件中

- 不能通过工程设置而省略常用头文件。

#### 题目分析

简单思路，边长的最大规模为 $100000$；我们可以枚举出所有的情况。按从大到小的顺序进行切割，直到找到满足要求的巧克力边长。

在判断边长是否满足条件时：求一块长方形$（h * w）$最多被分成的正方形$（len * len）$巧克力个数为：

$cnt = (h / len) * (w / len)$

```python
import os
import sys
import heapq

a = []
b = []

n, k = map(int, input().split())

for _ in range(n):
    x, y = map(int, input().split())
    a.append(x)
    b.append(y)

q = []

for i in range(n - 1):
    heapq.heappush(q, (a[i], i))

t = k
ans = 0

while t > 0:
    w, i = heapq.heappop(q)
    heapq.heappush(q, (b[i], i))
    ans += w
    t -= 1

ans2 = 0
if k >= n:
    ans2 += sum(a) + (k - n) * min(b)

if k >= n:
    print(min(ans, ans2))
else:
    print(ans)
```

即用在单调递增序列 $a$ 中查找 $&lt;=x$ 的数中最大的一个（即 $x$ 或 $x$ 的前驱）即可，原本这里的条件是 $&lt;=x$ ，我们将其换成验证即可。

#### 代码解答

C++ 实现：

```c
#include

using namespace std;
const int MAXN=100010;
int n,k;
int h[MAXN],w[MAXN];

bool pd(int l)
{
    int sum=0;
    for(int i=0; i=k)
        {
            return true;
        }
    }
    return false;
}

int main()
{
    cin>>n>>k;
    for(int i=0; i>h[i]>>w[i];

    //找到二分查找的上界
    int high=0;

    for(int i=0; i查找上界这里可以直接输入的时候查询，这道题实际上是可以少次操作的，代码如下。

**Python 实现**

```python
N=K=0
h=[]
w=[]
def pd(l):

 sum1=0
 for i in range(N):

   sum1+= (h[i]//l)* (w[i]//l)
   # Java C++ 的除法都是自己取整，Python会换成小数，Python的取整除法是//

   if sum1>=K :
       return True

 return False

if __name__ == '__main__':

   inFor = input().split()

   N=int(inFor[0])
   K=int(inFor[1])

   #找到二分查找的上界
   high=0

   for _ in range(N):
       wi, hi = map(int, input().split())
       w.append(wi)
       h.append(hi)
       high=max(high,max((hi,wi)))

   # 二分下届由题意可得至少为1
   low=1
   #由于本题目就是求符合要求的Mid 值所以要将mid定义在二分查找外边
   mid=0

   while low**Java 实现**

```java
import java.util.Scanner;
import static java.lang.Integer.max;

public class Main {

  static int n, k;
  static int h[] = new int[100005];
  static int w[] = new int[100005];
  static boolean pd(int l) {
      int sum = 0;
      for (int i = 1; i = k) {
              return true;
          }
      }
      return false;
  }

  public static void main(String[] args) {

      Scanner in = new Scanner(System.in);
      n = in.nextInt();
      k = in.nextInt();
      //找到二分查找的上界
      int high = 0;

      for (int i = 1; i **模板中的  都可以换成其他判定条件，像上面根据题目分析即可。**

## M 次方根

**题目描述:**

小 A 最近在学高等数学，他发现了一道题，求$\sqrt[3]{27}$ 。现在已知，小 A 开始计算，$1$ 的三次方得$1$，$2$ 的三次方得$8$，$3$ 的三次方得$27$，然后他很高兴的填上了$3$。

接着他要求$\sqrt[5]{164}$ 。然后他开始$1$ 的三次方得$1$，$2$ 的三次方得$8$，$3$ 的三次方得$27$…

直到他算到了秃头，也没有找到答案。

这时一旁的小 B 看不下去了，说这题答案又不是个整数。小 A 震惊，原来如此。作为程序高手的小 A，打算设计一个程序用于求解 $M$ 次根下$N$的值。

但是由于要考虑精度范围，答案必须要保留 $7$ 位小数，连三次根号下$27$都要掰手指的小 A 又怎么会设计呢。请你帮小 A 设计一个程序用于求解 $M$ 次根号$N$。

数据范围：

$1 \leq N \leq 1e5$ $1 \leq M \leq 100$ 且 $M &lt; N$

**要求输入:**

```
输入描述:

第一行输入整数 N 和 M，数据间用空格隔开。
```

**要求输出：**

```
输出描述: 输出一个整数，并保留 7 位小数。
```

**样例:**

```
输入样例：

27 3

输出样例：

3.000000
```

**运行限制:**

```
最大运行时间：1s
最大运行内存: 256M

注意：
1. 请严格按要求输出，不要画蛇添足地打印类似：“请您输入…” 的多余内容。
2. 不要调用依赖于编译环境或操作系统的特殊函数。
3. 所有依赖的函数必须明确地在源文件中。
4. 不能通过工程设置而省略常用头文件。
```

#### 题目分析

前面讲的都是整数二分，其实二分法还是可以用于实数。这个题目比较难，很多同学可能想不明白，想不明白就多读题，写写画画理解一下。这个题还有很多解法，现在告诉你了这道理用二分可以解答，请设计一个二分程序。

首先是这道题我们怎么下手：

根据前面的知识，我们要找到一个具有单调性的数列，去二分。这个题的关键是我们要去二分什么，这里可以二分的是 $a^M$ 中的 $a$，所以我们要先想办法设计出用于处理实数二分的代码。

这里给大家两个模板，都可以大家选择一个使用即可：

C++ 模版：

```cpp
//模版一：实数域二分，设置eps法

//令 eps 为小于题目精度一个数即可。比如题目说保留4位小数，0.0001 这种的。那么 eps 就可以设置为五位小数的任意一个数 0.00001- 0.00009 等等都可以。

//一般为了保证精度我们选取精度/100 的那个小数，即设置 eps= 0.0001/100 =1e-6

while (l + eps **Python 模版:**

```python
# 实数域二分，设置eps法
# 令eps 为小于题目精度一个数即可，比如题目说保留4位小数，0.0001 这种的。那么eps 就可以设置为五位小数的任意一个数 0.00001- 0.00009 等等都可以。一般为了保证精度我们选取精度/100 的那个小数

eps = 1e-6
while l + eps **Java 模版:**

```java
//令eps 为小于题目精度一个数即可。

//比如题目说保留4位小数，0.0001 这种的。那么eps 就可以设置为五位小数的任意一个数 0.00001- 0.00009 等等都可以。一般为了保证精度我们选取精度 /100 的那个小数，即设置  eps= 0.0001/100 =1e-6。

while (l + eps 模板讲完了，然后我们就要考虑判定条件了，怎样判定是否存在满足大于平均值的区间。当然这个题你可以使用语言中自带开方软件，但是我们还是联系一下实数的二分代码。

关于判定条件，我们应该设计一个代码用于比较 $a^m$ 和 $N$ 的大小关系。

在我们代码中：

```cpp
if (pd(mid))
    r = mid;
else
    l = mid;
```

$pd$ 成功的情况，一定是 $pd$ 的 $mid$ 符合条件，且小于 $mid$ 的一定符合条件。因此我们要在大于 $mid$ 中继续查找，找到更大的 $mid$。

所以我们可以设计出如下判定条件:

```cpp
double pd(double a,int m)
{
    double c=1;
    while(m>0)
    {
        c=c*a;
        m--;
    }
    if(c>=n)
        return true;
    else
        return false;
}
```

#### 代码解答

C++ 实现：

```c
#include 
#include 
#include //用于浮点数输出
using namespace std;

double n,l,r,mid;
double eps=1e-8;

bool pd(double a,int m)
{
    double c=1;
    while(m>0)
    {
        c=c*a;
        m--;
    }
    if(c>=n)
        return true;
    else
        return false;
}

int main()
{
    int m;
    cin>>n>>m;
//设置二分边界
    l=0,r=n;
//实数二分
    while (l + eps 查找上界这里可以直接输入的时候查询，这道题实际上是可以少次操作的，代码如下。

**Python 实现**

```python
n = 0.0
m = 0
l = 0.0
r = 0.0
mid = 0.0
eps = 0.00000001

def pd(a, m):
  c = 1.0
  cnt = int(m)

  while cnt > 0:
      c = c * a
      cnt -= 1

  if c >= n:
      return True

  else:
      return False

if __name__ == '__main__':

  n, m = input().split()

  l = 0
  r=n=int(n)

  while l + eps **Java 实现**

```java
package com.company;
import java.util.Scanner;

public class Main {

  static double n, l, r, mid;
  static double eps = 1e-8;

  static boolean pd(double a, int m) {
      double c = 1;
      while (m > 0) {
          c = c * a;
          m--;
      }

      if (c >= n)
          return true;
      else
          return false;
  }

  public static void main(String[] args) {

      int m;
      Scanner in =new Scanner(System.in);
      n=in.nextDouble();
      m=in.nextInt();
//设置二分边界
      l = 0;
      r = n;
//实数二分
      while (l + eps 二分的题目主要是必须要求是单调的，一般会有条件等字眼。做这种题目主要还是找到递增或者递减的序列，然后关于序列的判定条件。或者通过观察时间复杂度来看是否可以使用二分，二分法的题目相对来说比较明显，设计起来也比较简单，模板不用死记硬背，理解一下，很快就可以独立写出来。

## 二分法的使用场景：

前提：有序数组，也就是需要排序，且数组中没有重复元素
区间的定义：
    左闭右闭[left,right]
    左闭右开[left,right]
针对上面两种区间，以下是两种二分的写法实现

## 二分法的第一种写法

定义target在一个左闭右闭[left,right]区间中
满足：
    while(left&lt;=right)
    if(nums[middle]&gt;target)  right要赋值为middle-1

```python
# 定义 Solution 类
class Solution:
    def search(self, nums, target):
        left = 0
        right = len(nums) - 1
        while left  target:
                right = middle - 1
            elif nums[middle] & nums, int target) {
        int left = 0;
        int right = nums.size() - 1; // 定义target在左闭右闭的区间里，[left, right]
        while (left  target) {
                right = middle - 1; // target 在左区间，所以[left, middle - 1]
            } else if (nums[middle]  nums[nums.length - 1]) {
            return -1;
        }
        int left = 0, right = nums.length - 1;
        while (left > 1);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid]  target)
                right = mid - 1;
        }
        return -1;
    }
}
```

## 二分法的第二种写法

定义target在一个左闭右开[left,right]区间中
满足：
    while(left&lt;right)
    if(nums[middle]&gt;target)  right要赋值为middle

```python
# 定义 Solution 类
class Solution:
    def search(self, nums, target):
        left = 0
        right = len(nums) - 1
        while left  target:
                right = middle
            elif nums[middle] & nums, int target) {
        int left = 0;
        int right = nums.size(); // 定义target在左闭右开的区间里，即：[left, right)
        while (left > 1);
            if (nums[middle] > target) {
                right = middle; // target 在左区间，在[left, middle)中
            } else if (nums[middle] > 1);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid]  target)
                right = mid;
        }
        return -1;
    }
}
```

## 一、什么是[二分查找](https://so.csdn.net/so/search?q=%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE&spm=1001.2101.3001.7020)与遍历查找

### 1、二分查找

当我们谈论二分查找时，实际上是在谈论一种[高效的](https://so.csdn.net/so/search?q=%E9%AB%98%E6%95%88%E7%9A%84&spm=1001.2101.3001.7020)搜索算法，特别适用于有序排列的数据。二分查找的核心思想是将查找区间每次减半，从而快速定位目标值。

想象一下你在一个电话簿中查找某人的电话号码。而电话簿是按照姓氏字母顺序排列的。通常，你不会从第一页开始翻起，而是会打开电话簿的中间位置，根据你寻找的人名的字母顺序来决定接下来去左边还是右边的页面。这样每一次翻页都可以把你寻找的范围缩小一半，直到你找到目标为止。这就是二分查找的思路。

现在，让我们用一个有趣的例子来进一步理解二分查找。

假设你是一名特工，你被派遣到一个庞大的迷宫中去寻找宝藏。这个迷宫是按照字母顺序排列的，并且每个房间门上都标有字母。你手上有一张地图，上面标有目标宝藏的位置，而且地图上也按照字母顺序标有每个房间的位置。你不知道整个迷宫的结构，但你可以根据地图上的信息来进行搜索。

为了查找宝藏，你可以这样做：

- 先进入迷宫的中间房间，看看地图上宝藏的位置在左边还是右边。

- 如果在左边，那么你就可以放弃右边的所有房间，只需把搜索范围缩小到左边的一半。

- 接着，你再进入左半部分的中间房间，然后根据地图继续缩小搜索范围。

- 重复这个过程，每次都缩小一半的搜索范围，直到你找到宝藏所在的房间。

这个例子很好地展示了二分查找的思路：不断缩小搜索范围，直到找到目标。这种方法非常高效，因为每次搜索都可以将候选范围减半。

### 2、遍历查找

遍历查找是一种简单直观的搜索方法，它的核心思想是逐个检查数据，直到找到目标为止。在遍历查找中，我们从数据集的第一个元素开始，逐个与目标值进行比较，直到找到目标或者搜索整个数据集。

现在，让我们通过一个有趣的例子来更好地理解遍历查找。假设你是一名探险家，被派遣到一个神秘的迷宫中去寻找失落的宝藏。迷宫中布满了各种陷阱和暗道，而你手上有一份简陋的地图，上面标有宝藏可能的位置。

为了找到宝藏，你可以这样做：

- 你开始在迷宫的入口处，从第一个房间开始，逐个检查每个房间，看是否有线索指向宝藏的可能位置。

- 如果你没有在第一个房间找到线索，那么你就继续前进到下一个房间，继续检查。

- 你可能需要沿着迷宫的各个路径不断前行，直到找到宝藏或者搜索完整个迷宫。

在这个例子中，你通过逐个检查每个房间，来尝试找到宝藏的可能位置。这种方法非常直接，但在大型迷宫中效率较低，因为需要逐个检查每个房间。

## 二、对比遍历查找和二分查找

二分查找和遍历查找（也叫线性查找）是两种常用的[搜索算法](https://so.csdn.net/so/search?q=%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95&spm=1001.2101.3001.7020)，它们在不同的场景和数据集下各有优劣。下表列出了二分查找和遍历查找的对比：![a524c3dc083c4d558cd57288069aa60d.png](/images/DSA-BinarySearchAlgorithm/a524c3dc083c4d558cd57288069aa60d.png)

![2bf9edea036f4ba0be72f54badc89c1b.png](/images/DSA-BinarySearchAlgorithm/2bf9edea036f4ba0be72f54badc89c1b.png)

## 三、程序示例

现在我们以一个查找数字的简单程序来理解：

### 二分查找：

```cpp
#include 
 
int main() {
    int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; // 升序的数组
    int k = 0;
    printf("请输入需要查找的数：");
    scanf("%d", &k);
 
    // 计算数组的长度
    int sz = sizeof(arr) / sizeof(arr[0]);
    int left = 0; // 左边界
    int right = sz - 1; // 右边界
 
  // 开始二分查找
    while (left  k) 
        { // 如果中间元素大于k，则在左半部分查找
            right = mid - 1; // 更新右边界
        }
    }
    if (left > right) 
    { // 如果左边界大于右边界，表示未找到
        printf("找不到\n"); // 输出未找到
    }
 
    return 0;
}
```

```python
def binary_search(arr, k):  
    left = 0  
    right = len(arr) - 1  
  
    while left 假设要找到数字7，查找7的过程如下：
首先，我们得到初始的左边界（边界为数组下标） left 为0，右边界 right为9（数组的长度-1）。然后算出中间位置 mid 为4=（(0+9)/2）。中间位置的元素是5&lt;7，因此我们更新左边界为mid + 1，即left为5,此时查找范围变为{5,9}。
接着，我们再次计算中间位置 mid 为7 =（(5+9)/2），中间位置的元素是8，大于7，因此我们更新右边界为mid - 1，即right为6，此时查找范围变为{5,6}。
然后我们再次计算中间位置 mid 为5 =（5+6）/2，中间位置的元素是6，因此我们更新左边界为mid + 1，即left为6，此时查找范围变为{6,6}。

我们再次计算中间位置 mid 为6=（(6+6)/2），中间元素为7，arr[mid]==k，我们找到了目标数，结束查找，输出找到的位置。综上，找到了数字7进行了4次查找，每次查找之后，查找范围都会缩小。

### 遍历查找：

```cpp
#include 
 
int main() {
    int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; // 升序的数组
    int k = 0;
    // 从用户处输入要查找的数字
    printf("请输入要查找的数字：");
    scanf("%d", &k);
    int sz = sizeof(arr) / sizeof(arr[0]); // 获取数组长度
    int i = 0;
    // 遍历数组查找目标数
    for (i = 0; i 在这个代码中，我们假设要查找的数是7。由于数组是升序排列，7位于数组的第6个位置上。因此，即使在最坏的情况下（目标数位于数组的最后一个位置），我们仍然只需要遍历6次就能找到目标数。

## 四、代码优化

使用了一个无限循环 `while(1)`。该循环会一直执行，直到输入特定值（这里是 `-1`）结束程序。

利用了 `while(1)` 循环和 `break` 语句的组合，能够实现多次数据输入和在任意时刻结束程序。

```cpp
#include 
 
int main() {
    int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }; // 升序的数组
    int k = 0;
    // 从用户处输入要查找的数字
    printf("请输入要查找的数字：");
    scanf("%d", &k);
    int sz = sizeof(arr) / sizeof(arr[0]); // 获取数组长度
    int i = 0;
    // 遍历数组查找目标数
    for (i = 0; i 原文链接：[http://t.csdnimg.cn/rbeG1](http://t.csdnimg.cn/rbeG1)

[← 下一篇 【蓝桥杯】贪心算法](/2024/03/17/DSA-GreedyAlgorithm/)

[【Python】内置函数 上一篇 →](/2024/03/16/Python-BuiltInFunctions/)

∧ [≡](#toc-div)
