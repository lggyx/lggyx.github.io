---
title: "【蓝桥杯】搜索算法"
pubDate: 2024-03-12
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

## 深度优先搜索

Depth First Search 即 DFS，意为深度优先搜索，是所有的搜索手段之一。它是从某个状态开始，不断进行状态转移，直到不能转移后，向后回退，一直到遍历完所有的状态。

本章题目难度较大，请大家仔细研读讲解和代码。

## 知识点

1.DFS 算法设计原理与实现方法 2.经典题型精讲

## 深度优先搜索基本概念

作为搜索算法的一种，DFS 主要是用于解决 `NP` 完全问题。但是，深度优先搜索算法的时间复杂度较高，深度优先搜索是 $O(n!)$ 的阶乘级算法，它的效率非常低，在数据规模变大时，此算法就难以解决当前的问题了。

所以搜索算法使用于状态节点较小规模的问题。

## DFS 的设计步骤

按照定义设计：

- 

确定该题目的状态（包括边界）

- 

找到状态转移方式

- 

找到问题的出口，计数或者某个状态

- 

设计搜索

伪代码：

```c
int check(参数)
{
    if(满足条件)
        return 1;
    return 0;
}
bool pd(参数){
    相应操作
}
void dfs(int step)
{
        判断边界pd()
        {
            不在边界内，即回溯
        }
        尝试每一种可能
        {
               满足check条件

               标记

               继续下一步dfs(step+1)

               恢复初始状态（回溯的时候要用到）
        }
}
```

## DFS 题目讲解

### 状态搜索代表： N 皇后问题

[题目链接](https://www.lanqiao.cn/problems/1508/learning/)

难度: 简单

标签: DFS

**题目描述:**

在 $N\times N$ 的方格棋盘放置了 $N$ 个皇后，使得它们不相互攻击（即任意 $2$ 个皇后不允许处在同一排，同一列，也不允许处在与棋盘边框成 $45$ 角的斜线上。你的任务是，对于给定的 $N$，求出有多少种合法的放置方法。

**输入描述:**

输入中有一个正整数 $N≤10$，表示棋盘和皇后的数量

**输出描述:**

为一个正整数，表示对应输入行的皇后的不同放置数量。

**输入输出样例:**

**示例:**

**输入:**

```
5
```

**输出:**

```
10
```

**运行限制:**

```
最大运行时间：1s 最大运行内存: 256M
```

**解题思路:**

下面是用递归的深度优先搜索求解 $n$ 皇后问题的算法描述：

这里用一个 $N \times N$ 的矩阵来表示棋盘，但是我们不需要定义这样的数组，只要心中有 $N \times N$ 的期盼即可。

- 

**算法开始：**

当前行设为第一行，当前列设为第一列，从第一行第一列开始搜索，即只能让皇后从第一行放到第 $n$ 行。

这样在每次判断是否满足情况时我们不用去判断是否皇后在相同行。

我们只用判断之前的 $1$ 到 $a-1$ 个皇后的位置和当前第 $a$ 个皇后的位置是否属于同一列或者斜线，判断是否同一列。

- 

**判断边界：**

在当前行，当前列的位置上判断是否满足条件(即保证经过这一点的行,列与斜线上都没有两个皇后)，若不满足，跳到第 $5$ 步，即不符合边界条件。

首先说一下，什么叫不符合边界条件，不只是跳出了搜索范围，剪枝也可以从这里开始，比如这里不满足条件，向下继续搜索也不会再有结果。

这可以理解为超出边界的剪枝，我们的边界只得可能存在解的范围，这里已经超出有解的范围，必然要被踢出。

判断条件：

我们用数组 $x[a]=i$ 来表示第 $a$ 个皇后的位置在第 $a$ 行第 $i$ 列，我们不用考虑是否在同一行的问题你，我们只用判断之前的 $1$ 到 $a-1$ 个皇后的位置和当前第 $a$ 个皇后的位置是否属于同一列或者斜线。

判断是否属于同一列： 就判断 $x[a]$ 是否等于 $x[i]$; 判断是否属于同一斜线：等同于判断行之差是否等于列之差也，即 $abs(x[k]-x[i]) \neq abs(k-i)$。

- 

**搜索过程：**

调用 `Check` 函数。

如果 边界条件，就继续调用放下一个皇后的位置

- 

**`Check` 函数:**

如果当搜索到第 $N+1$ 行的时候，即代表前 $N$ 行已经搜索完了，所以这个时候正好求出了一个解，记录加一。

- 

在当前位置上不满足条件的情形，进行回溯。

C++ 语言描述:

```cpp
#include 
#include 
using namespace std;
int x[15] = {0};
int sum,n;

int PD(int k)
{

    for(int i=1; in)
        sum++;
    else
        return 0;
    return 1;
}

void DFS(int a)
{
    if(check(a))
        return ;
    else
        for(int i=1; i>n;
    //表示几个皇后
    DFS(1);
    //每次都从第一个皇后开始
    coutPython 语言描述：

```python
 x = [0] * 15
n = 0
sum = 0
def pd(k):
    for i in range(1, k):
        if abs(k - i) == abs(x[k] - x[i]):
            return 0
        elif x[k] == x[i]:
            return 0
        # 即判断是否符合条件来放,i表示皇后所在的行数，x[i]表示所在的列数，
        # 所以前面那个条件用来判断两个皇后是否在对角线上,后面用来判断是否在同一列上。
        # 行数不需要判断，因为他们本身的i就代表的是行数
    return 1

def check(a):
    if a > n:
        global sum
        sum += 1
    else:
        return False
    return True

def DFS(a):

    if check(a):
        return
    else:
        for i in range(1, n + 1):
            x[a] = i
            # 第a个皇后放的列数
            if pd(a):
                # 判断是否能放这步
                DFS(a + 1)
                # 能的话进行下一个皇后的放置
            else:
                continue
                #   不能就下一列

if __name__ == '__main__':

    n = int(input())
    # 不能就下一列
    DFS(1)
    # 每次都从第一个皇后开始
    print(sum)
```

Java 语言描述:

```java
import java.util.Scanner;
import static java.lang.Math.abs;
public class Main {
    static int x[] = new int[15];
    static int sum, n;
    static boolean PD(int k) {
        for (int i = 1; i  n)
            sum++;
        else
            return false;
        return true;
    }

    static void DFS(int a) {
        if (check(a))
            return;
        else
            for (int i = 1; i [题目链接](https://www.lanqiao.cn/problems/89/learning/)

难度: 中等

标签: DFS, 2016, 国赛

**题目描述:**

小明冒充 $X$ 星球的骑士，进入了一个奇怪的城堡。

城堡里边什么都没有，只有方形石头铺成的地面。

假设城堡地面是 $n \times n$ 个方格。如下图所示。

![地图](/images/DSA-SearchAlgorithms/uid1580206-20210202-1612248935564.png)

按习俗，骑士要从西北角走到东南角。可以横向或纵向移动，但不能斜着走，也不能跳跃。每走到一个新方格，就要向正北方和正西方各射一箭。（城堡的西墙和北墙内各有 $n$ 个靶子）同一个方格只允许经过一次。但不必走完所有的方格。如果只给出靶子上箭的数目，你能推断出骑士的行走路线吗？有时是可以的，比如上图中的例子。

本题的要求就是已知箭靶数字，求骑士的行走路径（测试数据保证路径唯一）

**输入:**

第一行一个整数 $N$ ($0  \leq  N  \leq  20$)，表示地面有 $N \times N$ 个方格。

第二行 $N$ 个整数，空格分开，表示北边的箭靶上的数字（自西向东）

第三行 $N$ 个整数，空格分开，表示西边的箭靶上的数字（自北向南）

**输出：**

输出一行若干个整数，表示骑士路径。

为了方便表示，我们约定每个小格子用一个数字代表，从西北角开始编号: 0,1,2,3 $\cdots$

**输入输出样例：**

输入

```
4
2 4 3 4
4 3 3 3
```

比如，上图中的方块编号为：

| 箭靶 | 2 | 4 | 3 | 4 |
| --- | --- | --- | --- | --- |
| 4 | 0 | 1 | 2 | 3 |
| 3 | 4 | 5 | 6 | 7 |
| 3 | 8 | 9 | 10 | 11 |
| 3 | 12 | 13 | 14 | 15 |

输出

```
0 4 5 1 2 3 7 11 10 9 13 14 15
```

**运行限制:**

```
最大运行时间：1s 最大运行内存: 128M
```

**解题思路:**

这里用一个 $N \times N$ 的矩阵来表示城堡的位置，横向、纵向标号 $1-N$。

我们采用逆推法，既然原题目是走到哪里射一支箭，那我们就走到那里之后拔一支箭，如果最后得到所有的靶子上都没有箭了，由于题目的路径唯一，那就证明我们找到了题目所要求的路径。

- 

算法开始：

当前行设为第一行，当前列设为第一列，从第一行第一列开始搜索。

然后从左上角初始位置，按照题目意思进行寻路。

- 

判断边界：

在当前行，当前列的位置上判断是否满足条件，若不满足，跳到第 $5$ 步，即不符合边界条件。 判断条件如下：

$flag[x][y]$==1 标记数组已经被标记,已被走过，不能再走，超出边界

- $xn$ 从右侧走出方格。

- $yn$ 从下侧走出方格。

- $col[x]

- 

搜索过程：

调用 `Check` 函数。 如果边界条件满足，就继续调用搜索，找到下一步的位置

- 

check(参数):

如果当搜索到 $x=n,y=n$ 时，且靶子上的箭都没了，按就找到了答案。

按照题目输出即可。

- 

在当前位置上不满足条件的情形，进行回溯，并还原现场

C++ 语言描述:

```cpp
#include 

using namespace std;

struct PII
{
    int first;
    int second;
};

const int N = 30;
int rol[N];
int col[N];
int n;//格子数 长宽从1到n
bool flag[N][N]; //用来标记是否走过
vector

 res;

//---------图的路径搜索常用方向移动表示-------

int dx[4]= {0,1,-1,0};
int dy[4]= {1,0,0,-1};

// 两两组合形成上下左右四个方向
//      1------------------> x
//      |
//      |
//      |
//      |
//      |
//      |
//      |
//      ↓
//      y

// dx[0]=0 dy[0]=1 那么代表向下的方向
// dx[1]=1 dy[1]=0 那么代表向右的方向
// dx[2]=-1 dy[0]=0 那么代表向左的方向
// dx[3]=0 dy[1]=-1 那么代表向上的方向

//--------------------------------------------

bool  check(int x, int y) //判断走过的路径的箭靶数是否与目标相同
{
    if(x==n && y==n)
    {
        for(int i=1; in)
        return 0;
    //从右侧走出方格
    else if(y2n)
        return 0;
    //从下侧走出方格
    else if(col[x2]> n;
    for(int i=1; i> rol[i];
    for(int i=1; i> col[i];
    flag[1][1]=true;
    col[1]--;
    rol[1]--;
    res.push_back({1,1});
    dfs(1,1);
    return 0;
}
```

Python 语言描述:

```python
n = 0
flag = [[0 for i in range(26)] for i in range(27)]
resX = [0 for i in range(1000)]
resY = [0 for i in range(1000)]
resCount = 0

# ---------图的路径搜索常用方向移动表示-------

dx = [0, 1, -1, 0]
dy = [1, 0, 0, -1]

# 两两组合形成上下左右四个方向
#      1------------------> x
#      |
#      |
#      |
#      |
#      |
#      |
#      |
#      ↓
#      y

# dx[0]=0 dy[0]=1 那么代表向下的方向
# dx[1]=1 dy[1]=0 那么代表向右的方向
# dx[2]=-1 dy[0]=0 那么代表向左的方向
# dx[3]=0 dy[1]=-1 那么代表向上的方向
# --------------------------------------------

def check(x, y):
    global n
    if x == n & y == n:
        # print("check point1")
        for i in range(1, n + 1):
            if (col[i] != 0):
                return False
                # 如果箭靶上的数目不为0，根据逆推，我们通过当前路径得不到箭靶上的结果
        for i in range(1, n + 1):
            if (rol[i] != 0):
                return False
        for i in range(0, resCount):
            x2 = resX[i]
            # x 轴坐标
            y2 = resY[i]
            # y 轴坐标
            sum = n * (x2 - 1) + y2 - 1
            # 通过计算的到为题目要求的坐标系
            print(sum, end=" ")

        return False
        # 成功终止
    else:
        return True  # 继续搜索
        # 关于终止还是继续我们交给判定即可

def pd(x2, y2):
    global n
    # print("x2 :", x2,"y2 :", y2, " n ", n)
    if flag[x2][y2] == 1:
        # print("checkPoint3")
        return False
        # 已被走过，不能再走，超出边界
    elif x2  n:
        # print("checkPoint6")
        return False
    # 从右侧走出方格
    elif col[x2]  n:
        # print("y2 :",y2," n ",n)
        return False
    # 从下侧走出方格
    elif rol[y2] 然而需要注意的是上面代码会超时，我们要对其进行优化，因为同样的计算 Python 运行时间相比 C++ 要长很多，这里给 C++ 和 Python 相同的时间，确实是难为 Python 了。 因为上面是为了给大家系统的将一个框架，而这道题目的时间复杂度相对较高，Python 的运行时间是 C++ 10 倍甚至几十倍，这个题目，同样的复杂度，Python 给的时间是不好通过这个题目的，我优化了十几遍，确实通过不了。

Java 语言描述:

```java
import java.util.Scanner;
import java.util.Vector;

import static java.lang.Math.abs;

public class Main {

    static final int N = 30;
    static int rol[]=new int [N];
    static int col[]=new int [N];
    static int n;//格子数 长宽从1到n
    static  boolean flag[][]=new boolean[N][N]; //用来标记是否走过
    static int resX[]=new int [1000];
    static int resY[]=new int [1000];
    static int resCount=0;

//---------图的路径搜索常用方向移动表示-------

    static int dx[]= {0,1,-1,0};
    static  int dy[]= {1,0,0,-1};

// 两两组合形成上下左右四个方向
//      1------------------> x
//      |
//      |
//      |
//      |
//      |
//      |
//      |
//      ↓
//      y

// dx[0]=0 dy[0]=1 那么代表向下的方向
// dx[1]=1 dy[1]=0 那么代表向右的方向
// dx[2]=-1 dy[0]=0 那么代表向左的方向
// dx[3]=0 dy[1]=-1 那么代表向上的方向

//--------------------------------------------

    static boolean  check(int x, int y) //判断走过的路径的箭靶数是否与目标相同
    {
        if(x==n && y==n)
        {
            for(int i=1; in)
            return false;
            //从右侧走出方格
        else if(y2n)
            return false;
            //从下侧走出方格
        else if(col[x2]给定一个正整数 $N$ 。你可以对 $N$ 的任意一位数字执行任意次以下 $2$ 种操 作：

- 

将该位数字加 $1$ 。如果该位数字已经是 $9$ , 加 $1$ 之后变成 $0$ 。

- 

将该位数字减 $1$ 。如果该位数字已经是 $0$ , 减 $1$ 之后变成 $9$ 。

你现在总共可以执行 $1$ 号操作不超过 $A$ 次, $2$ 号操作不超过 $B$ 次。 请问你最大可以将 $N$ 变成多少?

**解题思路:**

看上去 $N$ 的范围貌似很大，达到了 `1e17` 的范围，但其实我们最多只需要考虑这最多 `17` 位数，所以可以想到爆搜得到答案。

一个数的大小是从左到右依次判断，所以我们从最左边开始枚举，我们无需关注后面的数，要利用自己的 `1` 号操作和 `2` 号操作 **保证当前这个数位的数一定要尽可能最大**

然后分别考虑两种操作，首先两种操作不可能混用，因为它们是抵消的效果，所以要么对这个数全使用 `1` 操作，要么 `2` 操作。假设某个数位的值为 `x`,首先考虑 `1` 号操作，使用后可以让该数位变大，出于**贪心**考虑，我们想让它变成 `9`，那么需要进行 `9-x` 次 `1` 号操作，当然可能此时 `1` 号操作并不足以让我们将 `x` 变成 `9`，但我们还是使用剩余的全部的次数将其变大，所以每次考虑 `1` 号操作应该使用的操作数 `t` 应该为 `t=min(n,9-x)`,此时 `x` 将变为 `x+t`，然后进行下一位的判断。

其次我们考虑 `2` 号操作，这个的判断比较简单，它是让某个值减小，唯一能让某个数变大的机会就是将其减到 `0` 后再减就会变成 `9`。那么这样操作需要的次数就是 `x+1`，如果操作次数不够，那我们宁愿不使用，因为这只会让这个数位变得更小。

在深搜 `dfs` 的过程中，参数记录遍历到第几个数位以及此时累计的和，当搜索完所有数位后，将此时的和与答案进行一个取 `max`，最后的值则为答案。

C++ 语言描述：

```c
#include
using namespace std;
typedef long long LL;

char c[20];
LL ans=0;
//n:1号操作剩余次数  m:2号操作剩余次数
int n,m;
void dfs(int i,LL v){
    int x=c[i]-'0';
    if(c[i]){
        //应该使用的操作次数
        int t=min(n,9-x);
        n-=t;
        dfs(i+1,v*10+x+t);
        //回溯
        n+=t;
        //考虑操作2是否能够使用
        if(m>x){
            m-=x+1;
            dfs(i+1,v*10+9);
            //回溯
            m+=x+1;
        }
    }else{
        //答案取max
        ans=max(ans,v);
    }
}
int main()
{
    scanf("%s%d%d",c,&n,&m);
    dfs(0,0);
    printf("%lld\n",ans);
    return 0;
}
```

Java 语言描述:

```java
import java.io.*;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static PrintWriter out = new PrintWriter(new OutputStreamWriter(System.out));
    static String t;
    static int a, b, m;
    static long ans = 0;

    // i 表示考虑到第i位  v表示当前的值是多少
    static void dfs(int i, long v) {
        if (i == m) {
            ans = Math.max(ans, v);
            return;
        }
        int c = t.charAt(i) - '0';
        //考虑第一种使用
        int g = Math.min(a, 9 - c);
        a -= g;
        dfs(i + 1, v * 10 + c + g);
        //回溯
        a += g;
        //考虑第二种使用   我一定要减到9  只有b>c 才能减到9
        if (b > c) {
            b -= c + 1;
            dfs(i + 1, v * 10 + 9);
            //回溯
            b += c + 1;
        }
    }

    public static void main(String[] args) throws IOException {
        String[] s = br.readLine().trim().split(" ");
        t = s[0];
        m = t.length();
        a = Integer.parseInt(s[1]);
        b = Integer.parseInt(s[2]);
        dfs(0, 0);
        out.println(ans);
        out.flush();
    }
}
```

Python 语言描述:

```python
import sys

t = ""
a = 0
b = 0
m = 0
ans = 0

def dfs(i, v):
    global ans, a, b, t
    if i == m:
        ans = max(ans, v)
        return
    c = int(t[i])
    # 考虑第一种使用
    g = min(a, 9 - c)
    a -= g
    dfs(i + 1, v * 10 + c + g)
    # 回溯
    a += g
    # 考虑第二种使用   我一定要减到9  只有b>c 才能减到9
    if b > c:
        b -= c + 1
        dfs(i + 1, v * 10 + 9)
        # 回溯
        b += c + 1

def main():
    global ans, a, b, t, m
    line = sys.stdin.readline().strip()
    s = line.split()
    t = s[0]
    m = len(t)
    a = int(s[1])
    b = int(s[2])
    dfs(0, 0)
    print(ans)

if __name__ == "__main__":
    main()
```

## 实验总结

DFS 是一种非常重要的回溯算法，它是通过递归设计转移状态，再加上边界判断，与结果检查，构成的基本搜索框架。

DFS 最重要的就是设计回溯，所谓回溯就是还原现场，保证在执行另一分支的时候能够确保所有的改变只受当前状态的影响，所以在一条路走不通时就要修改。特殊的修改可以达到特殊的回溯效果，回溯时剪枝，回溯时调整路线，都是可以的。

DFS 是算法学习的基础工具，很重要，必须要学会。

show: step version: 1.0 enable_checker: true

## 广度优先搜索

BFS，其英文全称是 Breadth First Search，意为广度优先搜索，是所有的搜索手段之一。它是从某个状态开始，将所有节点加入一个先进先出的队列，然后一层一层进行状态转移，并且展开节点。

本章题目难度较大，请大家仔细研读讲解和代码。

## 知识点

1.BFS 算法设计原理与实现方法 2.经典题型精讲

## 广度优先搜索基本概念

作为搜索算法的一种，BFS 相较于 DFS 而言，BFS 是一层一层展开的，那么对于有多个终态时，最先找到的一定是最短的。

## 广度优先搜索算法的设计步骤

按照定义设计：

- 

确定该题目的状态（包括边界）

- 

找到状态转移方式

- 

找到问题的出口，计数或者某个状态

- 

设计搜索

会发现我们前期要找到的参数基本一致，所以在一般情况下 BFS 和 DFS 可以相互转换。

伪代码：

```c
int check(参数)
{
    if(满足条件)
        return 1;
    return 0;
}
bool pd(参数){
    相应操作
}
void bfs()
{
    1. 把根节点放入队列尾端
    2. 每次从队列中取出一个节点
    3. Check 判断是不是答案，如果是结束算法 return;
    4. 把当前取出的节点扩展，如果扩展后的节点经Pd()后符合要求，就放入队列，不符合就不放。
    5. 转到步骤2，循环执行
}

如果所有节点被扩展完了，没有找到答案就无解。
```

### 长草

[题目链接](https://www.lanqiao.cn/problems/149/learning/)

难度: 简单

标签: 模拟, BFS, 2020, 省模拟赛

**题目描述:**

小明有一块空地，他将这块空地划分为 $n$ 行 $m$ 列的小块，每行和每列的长度都为 1。

小明选了其中的一些小块空地，种上了草，其他小块仍然保持是空地。

这些草长得很快，每个月，草都会向外长出一些，如果一个小块种了草，则它将向自己的上、下、左、右四小块空地扩展，

这四小块空地都将变为有草的小块。请告诉小明，$k$ 个月后空地上哪些地方有草。

**输入描述:**

输入的第一行包含两个整数 $n, m$。

接下来 $n$ 行，每行包含 $m$ 个字母，表示初始的空地状态，字母之间没有空格。如果为小数点，表示为空地，如果字母为 $g$，表示种了草。

接下来包含一个整数 $k$。 其中，$2   \leq   n, m   \leq   1000，1   \leq   k   \leq   1000$。

**输出描述:**

输出 $n$ 行，每行包含 $m$ 个字母，表示 $k$ 个月后空地的状态。如果为小数点，表示为空地，如果字母为 $g$，表示长了草。

**输入输出样例:**

**示例:**

**输入:**

```
4 5
.g...
.....
..g..
.....
2
```

**输出:**

```
gggg.
gggg.
ggggg
.ggg.
```

**运行限制:**

```
最大运行时间：1s 最大运行内存: 256M
```

**解题思路:**

这个题目简直就是为了广度优先搜索设置模板题，由于这个题目时输出广度优先搜索 `K` 次扩展后的终态，那我们就不用设置 `Check` 函数。

这里用一个 $N\times M$ 的矩阵来表示草地。

- 

算法开始：

将字母为 `g` 的草地的位置加入队列，然后向下执行

- 

判断边界：

判断是否已经长了草，判断是否超出边界范围

- 

搜索过程：

不断从队列取出一个节点，进行上下左右的扩展，执行 `2` 判断边界，符合就放入队列，不符合就跳过。

执行 K 次扩展，输出草地状态。

- 

check(参数)：

这里不需要进行 `Check`

C++ 语言描述:

```cpp
#include 
using namespace std;
const int M = 1005;
struct PII
{
    int first;
    int second;
};
// C++ 有个数据类型叫 pair 上面的就可以定义为 pair 用起来比较方便。
PII tempPair;//临时结点
char Map[M][M];
//---------图的路径搜索常用方向移动表示-------
int dx[4]= {0,1,-1,0};
int dy[4]= {1,0,0,-1};
// 两两组合形成上下左右四个方向
//      1------------------> x
//      |
//      |
//      |
//      |
//      |
//      |
//      |
//      ↓
//      y

// dx[0]=0 dy[0]=1 那么代表向下的方向

// dx[1]=1 dy[1]=0 那么代表向右的方向

// dx[2]=-1 dy[0]=0 那么代表向左的方向

// dx[3]=0 dy[1]=-1 那么代表向上的方向

int n;// n 行
int m;// m 列
int k;// k 次

queue

 q; //广度优先搜索所用的队列

int len;//记录节点数量方便后续k的计算
bool pd(int x, int y)
{
    if(xn)
        return 0;
    //x 轴坐标 右侧越界
    else  if(ym)
        return 0;
    //y 轴坐标 下侧越界
    else if(Map[x][y]=='g')
        return 0;
    //已经长草了
    else return 1;
    // 在范围内，且没长草
}

void BFS()
{
    //BFS
    while(!q.empty()&&k>0)
    {
        tempPair = q.front();
        q.pop();
        //这两步是取出队首的节点

        int x = tempPair.first;//横坐标
        int y = tempPair.second;//纵坐标

        for(int i=0; i>n>>m;
    for(int i=1; i>Map[i][j];
            if(Map[i][j]=='g')
            {
                tempPair.first=i;
                tempPair.second=j;
               // cout>k;
    BFS();
    for(int i=1; iPython 语言描述:

```python
# 请在此输入您的代码
from queue import Queue

dx = [0, 1, -1, 0]
dy = [1, 0, 0, -1]

# 两两组合形成上下左右四个方向
#      1------------------> x
#      |
#      |
#      |
#      |
#      |
#      |
#      |
#      ↓
#      y

# dx[0]=0 dy[0]=1 那么代表向下的方向
# dx[1]=1 dy[1]=0 那么代表向右的方向
# dx[2]=-1 dy[0]=0 那么代表向左的方向
# dx[3]=0 dy[1]=-1 那么代表向上的方向

Map = []

q = Queue()

n = 0
m = 0
k = 0

length = 0

def pd(x, y):
    global n, m, Map
    if x = n:
        return False
    # x 轴坐标右侧越界
    elif y = m:
        return False
    # y 轴坐标下侧越界
    elif Map[x][y] == 'g':
        return False
    # 已经长草了
    else:
        return True
    # 在范围内，且没长草

def BFS():

    global k, q, n, m, Map, length
    while k > 0 & (not q.empty()):
        tempPair = q.get()
        x = tempPair[0]  # 横坐标
        y = tempPair[1]  # 纵坐标
        nowx=x+1
        if (pd(nowx, y)):
            q.put((nowx, y))
            Map[nowx][y] = 'g'

        nowx=x-1
        if (pd(nowx, y)):
            q.put((nowx, y))
            Map[nowx][y] = 'g'

        nowy=y+1
        if (pd(x, nowy)):
            q.put((nowx, nowy))
            Map[x][nowy] = 'g'

        nowy=y-1
        if (pd(x, nowy)):
            q.put((nowx, nowy))
            Map[x][nowy] = 'g'

        length -= 1
        if length == 0:
            k -= 1
            length = q.qsize()

if __name__ == '__main__':

    n, m = map(int, input().split())
    Map = [[0 for _ in range(m)] for _ in range(n)]  # Python 动态开数组会减少运行时间
    for i in range(n):
        input_ = input()
        for j in range(m):
            Map[i][j] = input_[j]
            if Map[i][j] == 'g':
                q.put((i, j))

    k = int(input())
    length = q.qsize()
    BFS()
    for i in range(n):
        str_temp = ''
        for j in range(m):
            str_temp += Map[i][j]
        print(str_temp)
```

**重点:**

Python 的 Queue 非常耗费时间，强烈建议大家使用 list 进行模拟

下面是用 List 模拟，使用 Queue 耗时 3000 ms , 使用 list 模拟仅消耗 54 ms 所以大家使用 Python 编写代码的时候还是使用 List 尽量避免 Queue 的使用。

```python
# 请在此输入您的代码
from queue import Queue

dx = [0, 1, -1, 0]
dy = [1, 0, 0, -1]

# 两两组合形成上下左右四个方向
#      1------------------> x
#      |
#      |
#      |
#      |
#      |
#      |
#      |
#      ↓
#      y

# dx[0]=0 dy[0]=1 那么代表向下的方向
# dx[1]=1 dy[1]=0 那么代表向右的方向
# dx[2]=-1 dy[0]=0 那么代表向左的方向
# dx[3]=0 dy[1]=-1 那么代表向上的方向

Map = []

q = []
qfront = 0
qend = 0

n = 0
m = 0
k = 0

length = 0

def pd(x, y):
    if x = n:
        return False
    # x 轴坐标右侧越界
    elif y = m:
        return False
    # y 轴坐标下侧越界
    elif Map[x][y] == 'g':
        return False
    # 已经长草了
    else:
        return True
    # 在范围内，且没长草

def BFS():
    global k, q, n, m, Map, length, qend, qfront
    # print("K Length", k, length)
    while k > 0 and length > 0:
        tempPair = q[qfront]
        qfront += 1
        x = tempPair[0]  # 横坐标
        y = tempPair[1]  # 纵坐标
        for i in range(4):

            nowx = x + dx[i]  # 扩展后的横坐标
            nowy = y + dy[i]  # 扩展后的纵坐标

            if (pd(nowx, nowy)):
                q.append((nowx,nowy))
                qend += 1
                Map[nowx][nowy] = 'g'
        length -= 1
        if length == 0:
            k -= 1
            length = qend - qfront

if __name__ == '__main__':

    n, m = map(int, input().split())
    Map = [[0 for _ in range(m)] for _ in range(n)]  # Python 动态开数组会减少运行时间

    for i in range(n):
        input_ = input()
        for j in range(m):
            Map[i][j] = input_[j]
            if Map[i][j] == 'g':
                q.append((i,j))
                qend += 1

    k = int(input())
    length = qend - qfront
    BFS()
    for i in range(n):
        str_temp = ''
        for j in range(m):
            str_temp += Map[i][j]
        print(str_temp)
```

Java 语言描述:

```java
import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;
import static java.lang.Math.abs;

public class Main {

    static final int M = 1005;
    static class PII
    {
        public int first;
        public int second;
    };

    static String Map[]=new String[M];
//---------图的路径搜索常用方向移动表示-------
    static int dx[]= {0,1,-1,0};
    static  int dy[]= {1,0,0,-1};

// 两两组合形成上下左右四个方向
//      1------------------> x
//      |
//      |
//      |
//      |
//      |
//      |
//      |
//      ↓
//      y

// dx[0]=0 dy[0]=1 那么代表向下的方向
// dx[1]=1 dy[1]=0 那么代表向右的方向
// dx[2]=-1 dy[0]=0 那么代表向左的方向
// dx[3]=0 dy[1]=-1 那么代表向上的方向

    static int n;// n 行
    static int m;// m 列
    static int k;// k 次

    static Queue

 q= new LinkedBlockingQueue<>();
    //广度优先搜索所用的队列

    static int len;//记录节点数量方便后续k的计算
    static boolean pd(int x, int y)
    {

        if(xn)
            return false;
            //x 轴坐标 右侧越界
        else  if(ym)
            return false;
            //y 轴坐标 下侧越界
        else if(Map[x].charAt(y)=='g')
            return false;
            //已经长草了
        else return true;
        // 在范围内，且没长草
    }

    static void BFS()
    {
        //BFS
        while(q.size()!=0&&k>0)
        {
            PII tempPair= q.peek();
            q.poll();
            //这两步是取出队首的节点
//            System.out.println(q.size());
            int x = tempPair.first;//横坐标
            int y = tempPair.second;//纵坐标
            for(int i=0; i[题目链接](https://www.lanqiao.cn/problems/1216/learning/)

难度: 简单

标签: BFS

**题目描述:**

给定一个 $N\times M$ 的网格迷宫 $G$。$G$ 的每个格子要么是道路，要么是障碍物（道路用 $1$ 表示，障碍物用 $0$ 表示）。

已知迷宫的入口位置为 $(x_1,y_1)$，出口位置为 $(x_2 , y_2)$。问从入口走到出口，最少要走多少个格子。

**输入:**

输入第 $1$ 行包含两个正整数 $N,M$，分别表示迷宫的大小。

接下来输入一个 $N\times M$ 的矩阵。若 $G_{i,j}=1$ 表示其为道路，否则表示其为障碍物。

最后一行输入四个整数 $x_1,y_1,x_2,y_2$，表示入口的位置和出口的位置。

$1\leq N,M\leq10^2$，$0\leq G_{i,j}\leq 1$，$1\leq x_1,x_2\leq N$，$1\leq y_1,y_2\leq M$。

**输出：**

输出仅一行，包含一个整数表示答案。

若无法从入口到出口，则输出 $-1$。

**输入输出样例：**

输入

```
5 5
1 0 1 1 0
1 1 0 1 1
0 1 0 1 1
1 1 1 1 1
1 0 0 0 1
1 1 5 5
```

输出

```
8
```

**运行限制:**

```
最大运行时间：1s 最大运行内存: 128M
```

**解题思路:**

- 

**算法开始：**

我们以起点开始做 BFS ，将入口压入栈开始执行 BFS 算法

- 

**判断边界：**

在当前行，当前列的位置上判断是否满足条件，若不满足，跳到第 5 步，即不符合边界条件。 判断条件如下：

$vis[x][y]$ >= 1 标记数组已经被标记，已被走过，不能再走，超出边界

- 

$x $x > n$ 从右侧走出方格

- 

$y $y > n$ 从下侧走出方格

- 

$map[x][y]$ != 1 没有路不能走

- 

**搜索过程：**

调用 Check 函数。

如果边界条件满足，就继续调用搜索，找到下一步的位置

每次找到下一个位置的时候，令其 $Vis[nextx][nexty]$ = 当前 $Vis + 1$

这样既能用 $vis$ 数组标记又能使用 $vis$ 数组存步数，从 $1$ 开始，即开始节点是 $1$ ，所以最后要减去 $1$ 。

- 

**check(参数)：**

如果当搜索到 $x = 终点 x$, $y = 终点 y$ 时，就找到了终点，此时他的 $Vis$ 数组就存储了他的步数，但是是从 $1$ 开始的。

C++ 语言描述:

```cpp
#include 
using namespace std;

int vis[150][150]; //用于存储是否访问过，并且存储长度

char G[150][150]; //用于存储题目给出的地图

int n,m,ans=0;

int dx[4] = {0,0,-1,1};

int dy[4] = {1,-1,0,0};

//上下左右移动，不会的看前面的代码

struct node
{
    int x;
    int y;
};

node Start,End;
bool pd(int x,int y)
{

    if(xn)
        return 0;
    //从右侧走出方格

    else if(ym)
        return 0;
    //从下侧走出方格

    else if( vis[x][y]!=0)
        //已经访问了
        return 0;
    else if(G[x][y]!='1') return 0;
    //不是路不能走
    else return 1;
}

bool  check(int x, int y)
{

    if(x == End.x&& y == End.y)   //找到终点，把距离给他
    {
        ans  =  vis[x][ y];
        return 1;
    }

    else    return 0;

}
void bfs()
{
    queueq;

    node now,next;

    q.push(Start);     //将起点压人队列中

    vis[Start.x][Start.y] = 1;

    while(!q.empty())
    {
        now = q.front();

        if(check(now.x,now.y))
            return ;

        q.pop();     //将队列最前面的弹出。

        for(int i=0; i>n>>m;
    //memset(vis,0,sizeof(vis));
    for(int i=1; i>G[i][j];
        }
    }

    cin>>Start.x>>Start.y>>End.x>>End.y;

    ans = 0;

    bfs();
    coutPython 语言描述:

```python
dx = [0, 1, -1, 0]

dy = [1, 0, 0, -1]

G = []

Vis = []

# --------队列模拟-----------
q = []                   # |
                         # |
qfront = 0               # |
                         # |
qend = 0                 # |
# --------队列模拟-----------

n = 0
m = 0
ans = 0

startX=0
startY=0

endX=0
endY=0

def pd(x, y):
    if x  n:
        return False
    # x 轴坐标右侧越界

    elif y  m:
        return False
    # y 轴坐标下侧越界

    elif Vis[x][y]!=0:
        return False
    #已经访问了
    elif G[x][y] != '1':
        return False
    # 已经访问了
    else:
        return True

    # 在范围内，且没长草

def check( x,  y):

    global ans
    if x == endX and y == endY :  #找到终点，把距离给他

        ans  =  Vis[x][y];

        return True;

    else   :
        return False;

def BFS():

    global qend ,qfront

    q.append((startX,startY))

    qend+=1

    Vis[startX][startY]=1

    while qend-qfront!=0:

        tempPair = q[qfront]
        qfront+=1

        x = tempPair[0]  # 横坐标

        y = tempPair[1]  # 纵坐标
        if check(x,y):
            return

        for i in range(4):

            nowx = x + dx[i]  # 扩展后的横坐标

            nowy = y + dy[i]  # 扩展后的纵坐标

            if (pd(nowx, nowy)):

                q.append((nowx,nowy))
                qend+=1

                Vis[nowx][nowy] = Vis[x][ y] + 1

if __name__ == '__main__':

    n, m = map(int, input().split())

    G = [[0 for _ in range(m+10)] for _ in range(n+10)]  # Python 动态开数组会减少运行时间

    Vis = [[0 for _ in range(m+10)] for _ in range(n+10)]  # Python 动态开数组会减少运行时间

    for i in range(n):
        input_ = input().split()
        for j in range(m):
            G[i+1][j+1] = input_[j]

    startX ,startY , endX ,endY = map(int, input().split())

    BFS()

    print(ans-1)
```

Java 语言描述:

```java
import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;

import static java.lang.Math.abs;

public class Main {

    static final int M = 1005;
    static class node {
        public int x;
        public int y;

        public node(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }
    static int n, m, ans = 0;
    static int vis[][] = new int[150][150]; //用于存储是否访问过，并且存储长度
    static int G[][] = new int[150][150];  //用于存储题目给出的地图
    static node Start, End;
//---------图的路径搜索常用方向移动表示-------
    static int dx[] = {0, 1, -1, 0};
    static int dy[] = {1, 0, 0, -1};
    static Queue q = new LinkedBlockingQueue<>();
    //广度优先搜索所用的队列
    static boolean pd(int x, int y) {

        if (x  n)
            return false;
            //x 轴坐标 右侧越界
        else if (y  m)
            return false;
            //y 轴坐标 下侧越界
        else if (vis[x][y] != 0)
            //已经访问了
            return false;
        else if (G[x][y] != 1)
            //不能走
            return false;
        else return true;
        // 在范围内，且没长草
    }

    static boolean check(int x, int y) {
        if (x == End.x && y == End.y)   //找到终点，把距离给他
        {
            ans = vis[x][y];
            return true;
        } else return false;
    }

    static void BFS() {
        q.add(Start);
        vis[Start.x][Start.y] = 1;
        node now, next;
        while (q.size() != 0) {
            now = q.peek();
            if (check(now.x, now.y))
                return;
            q.poll();
            //这两步是取出队首的节点
            for (int i = 0; i 下图给出了一个迷宫的平面图，其中标记为 $1$ 的为障碍，标记为 $0$ 的为可以通行的地方。

```
010000
000100
001001
110000
```

迷宫的入口为左上角，出口为右下角，在迷宫中，只能从一个位置走到这个它的上、下、左、右四个方向之一。

对于上面的迷宫，从入口开始，可以按 `DRRURRDDDR` 的顺序通过迷宫， 一共 $10$ 步。其中 $D、U、L、R$ 分别表示向下、向上、向左、向右走。 对于下面这个更复杂的迷宫（$30$ 行 $50$ 列），请找出一种通过迷宫的方式，其使用的步数最少，在步数最少的前提下，请找出字典序最小的一个作为答案。

请注意在字典序中 $D&lt;L&lt;R&lt;U$。

```
01010101001011001001010110010110100100001000101010
00001000100000101010010000100000001001100110100101
01111011010010001000001101001011100011000000010000
01000000001010100011010000101000001010101011001011
00011111000000101000010010100010100000101100000000
11001000110101000010101100011010011010101011110111
00011011010101001001001010000001000101001110000000
10100000101000100110101010111110011000010000111010
00111000001010100001100010000001000101001100001001
11000110100001110010001001010101010101010001101000
00010000100100000101001010101110100010101010000101
11100100101001001000010000010101010100100100010100
00000010000000101011001111010001100000101010100011
10101010011100001000011000010110011110110100001000
10101010100001101010100101000010100000111011101001
10000000101100010000101100101101001011100000000100
10101001000000010100100001000100000100011110101001
00101001010101101001010100011010101101110000110101
11001010000100001100000010100101000001000111000010
00001000110000110101101000000100101001001000011101
10100101000101000000001110110010110101101010100001
00101000010000110101010000100010001001000100010101
10100001000110010001000010101001010101011111010010
00000100101000000110010100101001000001000000000010
11010000001001110111001001000011101001011011101000
00000110100010001000100000001000011101000000110011
10101000101000100010001111100010101001010000001000
10000010100101001010110000000100101010001011101000
00111100001000010000000110111000000001000000001011
10000001100111010111010001000110111010101101111000
```

**解题思路:**

本题是一道简单的搜索题，需要注意的是要按照题目给定的字典序进行搜索，最后输出路径。

我们使用 $BFS$ 搜索记录路径，用 $DFS$ 打印路径。

C++ 语言描述：

```c
#include
using namespace std;
#define maxn 2000

string maze[maxn]= {
                  "01010101001011001001010110010110100100001000101010",
                  "00001000100000101010010000100000001001100110100101",
                  "01111011010010001000001101001011100011000000010000",
                  "01000000001010100011010000101000001010101011001011",
                  "00011111000000101000010010100010100000101100000000",
                  "11001000110101000010101100011010011010101011110111",
                  "00011011010101001001001010000001000101001110000000",
                  "10100000101000100110101010111110011000010000111010",
                  "00111000001010100001100010000001000101001100001001",
                  "11000110100001110010001001010101010101010001101000",
                  "00010000100100000101001010101110100010101010000101",
                  "11100100101001001000010000010101010100100100010100",
                  "00000010000000101011001111010001100000101010100011",
                  "10101010011100001000011000010110011110110100001000",
                  "10101010100001101010100101000010100000111011101001",
                  "10000000101100010000101100101101001011100000000100",
                  "10101001000000010100100001000100000100011110101001",
                  "00101001010101101001010100011010101101110000110101",
                  "11001010000100001100000010100101000001000111000010",
                  "00001000110000110101101000000100101001001000011101",
                  "10100101000101000000001110110010110101101010100001",
                  "00101000010000110101010000100010001001000100010101",
                  "10100001000110010001000010101001010101011111010010",
                  "00000100101000000110010100101001000001000000000010",
                  "11010000001001110111001001000011101001011011101000",
                  "00000110100010001000100000001000011101000000110011",
                  "10101000101000100010001111100010101001010000001000",
                  "10000010100101001010110000000100101010001011101000",
                  "00111100001000010000000110111000000001000000001011",
                  "10000001100111010111010001000110111010101101111000"};
bool vis[maxn][maxn];//标记
int dir[4][2]={{1,0},{0,-1},{0,1},{-1,0}};//D L R U

bool in(int x,int y)
{
    return x=0&&y>=0&&y q;

    now.x=x;
    now.y=y;
    now.d=0;
    q.push(now);

    vis[x][y]=true;
    while(!q.empty())
    {
        now=q.front();
        q.pop();
        for(int i=0;iJava 语言描述:

```java
import java.util.*;
public class Main {
    private static String[] nn= {
                  "01010101001011001001010110010110100100001000101010",
                  "00001000100000101010010000100000001001100110100101",
                  "01111011010010001000001101001011100011000000010000",
                  "01000000001010100011010000101000001010101011001011",
                  "00011111000000101000010010100010100000101100000000",
                  "11001000110101000010101100011010011010101011110111",
                  "00011011010101001001001010000001000101001110000000",
                  "10100000101000100110101010111110011000010000111010",
                  "00111000001010100001100010000001000101001100001001",
                  "11000110100001110010001001010101010101010001101000",
                  "00010000100100000101001010101110100010101010000101",
                  "11100100101001001000010000010101010100100100010100",
                  "00000010000000101011001111010001100000101010100011",
                  "10101010011100001000011000010110011110110100001000",
                  "10101010100001101010100101000010100000111011101001",
                  "10000000101100010000101100101101001011100000000100",
                  "10101001000000010100100001000100000100011110101001",
                  "00101001010101101001010100011010101101110000110101",
                  "11001010000100001100000010100101000001000111000010",
                  "00001000110000110101101000000100101001001000011101",
                  "10100101000101000000001110110010110101101010100001",
                  "00101000010000110101010000100010001001000100010101",
                  "10100001000110010001000010101001010101011111010010",
                  "00000100101000000110010100101001000001000000000010",
                  "11010000001001110111001001000011101001011011101000",
                  "00000110100010001000100000001000011101000000110011",
                  "10101000101000100010001111100010101001010000001000",
                  "10000010100101001010110000000100101010001011101000",
                  "00111100001000010000000110111000000001000000001011",
                  "10000001100111010111010001000110111010101101111000"};
    private static char[][] tu=new char[30][50];
    private static int[][] dis=new int[30][50];
    private static int[][] step= {{1,0},{0,-1},{0,1},{-1,0}};
    private static char[] direction= {'D','L','R','U'};
//    保存经过的每一个点位置信息，采用(x)*m+y的公式表示(x,y);x,y从0开始，位置也是从来开始。m:大于最长边的随便一个数
//    起点:0;终点:29*50-49
    private static Queue location=new LinkedList();
//    广度优先遍历求每一个位置到终点的距离，并存放在dis中
//    广度优先遍历寻找所有从终点到起点的路线
    public static void bfs() {//x,y当前位置;
        int x,y;//当前位置坐标
        //不为空，继续循环
        while(!location.isEmpty()) {
            int l=location.poll();//获取当前位置的坐标
            x=l/50;//获取当前位置x
            y=l%50;//获取当前位置y
            for(int i=0;i=0&&xx=0&&yy=0&&xx=0&&yyPython 语言描述:

```python
from collections import deque
n,m=30,50
M=[[int(i) for i in input()]for j in range(n)]
vis=[[0]*m for i in range(n)]
go=[['']*m for i in range(n)]
q=deque([(0,0)])
vis[0][0]=1
while q:
    x,y=q.popleft()
    if x==n-1 and y==m-1:
        print(go[-1][-1])
        break
    for i,j,k in [[1,0,'D'],[0,-1,'L'],[0,1,'R'],[-1,0,'U']]:
        a,b=x+i,y+j
        if 0BFS 是广度优先搜索，是将某节点所有的“枝蔓”加入搜索队列，然后去除队列的首部的节点，重复进行该动作，这样就能由开始状态“一圈一圈的查找”。 BFS 拥有一个性质，那么就是先找到的节点，所经过的步骤一定最短。它一般用于寻找在近的状态，也是一个非常基础的算法，希望大家认真学习。

[← 下一篇 【蓝桥杯】枚举法和尺取法](/posts/dsa-enumerationandbisection/)

[【蓝桥杯】递推法与递归法 上一篇 →](/posts/dsa-recurrenceandrecursive/)

