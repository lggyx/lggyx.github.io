---
title: "【蓝桥杯】进阶-线性动态规划问题&背包问题进阶策略详解"
pubDate: 2024-05-06
chapter: algorithms
tags: ["蓝桥杯", "动态规划"]
legacy: true
---
# 【蓝桥杯】进阶-线性动态规划问题&背包问题进阶策略详解

## 1. DP 概述

DP（dynamic Progamming），动态规划算法，是一类常见、常考的算法。

在算法竞赛中，DP的考法多而杂，并且难度可以从简单到超难，主要难在状态的设计，以及思考如何转移；但是在蓝桥杯比赛中，涉及到的往往都是简单，基础的DP考点，十分考验基本功。

动态规划是一种通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。

由于动态规划并不是某种具体的算法，而是一种解决特定问题的方法，因此它会出现在各式各样的数据结构中，与之相关的题目种类也更为繁杂。

在算法类竞赛中，计数等非最优化问题的递推解法也常被不规范地称作 DP。

## 2. 主要思想以及条件

DP 将原问题划分划分为若干个重叠的子问题，并且逐层递进，每个子问题在求解的过程中，都会被抽象为“阶段”，也叫做“状态”，在完成前一个阶段的计算后，才能进行下一阶段的计算。

最广泛运用的例子就是数字三角形问题：

给定一个三角形，第 $i$ 行有 $i$ 个元素，如下图：

​        5 
​      5   4 
    8   9   0 

你初始在第一行的第一个元素位置，每一次，可以选择左下，或者右下的位置进行移动，每次移动到一个位置上，可以获得相应的分数。问：你可以任意规划自己的路线，请问在走到最后一行时，能够获得的最大分数是多少？

同学们可以自行计算一下，当然，很多同学可以一眼看出来，答案是 $5 + 5 + 9 = 19$。从第一行开始，往左边，然后往右边。

如果利用动态规划的思想，应该如下考虑：

而对于每一个点，它的下一步决策只有两种：往左下角或者往右下角（如果存在）。因此只需要记录当前点的最大权值，用这个最大权值执行下一步决策，来更新后续点的最大权值。**即，对于每一个点，当作一种状态，代表的意义是：到达当前点能累积的最大分数。**

如果你理解了这一步，并且认为其设计的十分有道理，那么我们来剖析一下其中原理：

### 2.1 条件

能用动态规划解决的问题，需要满足三个条件：最优子结构，无后效性和子问题重叠。

- 无后效性

已经求解的子问题，不会再受到后续决策的影响，即后续状态不会影响前序状态，也说明了求解的有序性。

- 子问题重叠

子问题 A 和子问题 B 可能存在共同的子问题 C，那么我们可以将一些重叠的子问题存储下来，特别来说，重叠的越多，我们的空间利用率越高。

- 最优子结构

当前问题的最优解一定可以由子问题的最优解导出。

再抽象一点，其实大部分的 DP 问题，都可以抽象为数字三角形问题，结构图如下：

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713337518314.png)

箭头源代表子问题，箭头指向，代表后续问题。

例如：$\lbrace 1 \rbrace$ 同时是 $\lbrace 2,3 \rbrace$ 的子问题，并且 $2$ 问题的解可以由 $1$ 导出。

总结：**动态规划对状态的遍历，构成了一张有向无环图，遍历顺序（或者求解顺序）应该是该图的一个拓扑序**。

## 3. 关于比赛中的状态设计

DP 的难点在于状态的设计和子结构的发掘，即使学界讨论了诸多DP转移的状态设计和优化手段，但是如何把问题形式化为状态空间，往往是一件考察智力而非套路的事情。

但是在蓝桥杯的赛题中，考察的是选手的基本功，与一点点的拔高，所以不会太难，可以遵循某些套路。

笔者按照经验，先讲授一些自己常用的状态设计思路，然后结合例题讲解。

设计一个状态分为如下几步：

- 尝试找到题目中的需要优化的值，例如最小值，最大值，次数等，做为目标，也是就是状态的最优值。

- 尝试找到题目中的条件，例如长度，区间数量等，做为状态设计。

- 尝试模拟题目中的求解步骤，这往往是题目中的条件，例如对某个数加一，或者在占领某些土地。作为转移的部分。

- 尝试结合将 1，2，3 结合起来，看能否找到一个合理的最优结构，并且无后向性。

- 如果不是最优，尝试这加大状态的条件，例如在补上一个必要的量，在进行3步骤。

笔者还有一些习惯，例如在看到某个题目时，如果准备尝试用DP解题，就是按照题目中的量进行一个简单尝试。例如，题目中有三个量，就会尝试写出 $dp_{i,j,k}$ ，然后尝试读出其代表的实际意义。如果可行，就进行优化或者细化。

一般而言，常见的线性DP，都能用此种方法解决，对于较难的问题，往往很难一下子设计出一个较好的状态，这就需要大量的经验以及一些天赋。

例如，你可以尝试设计这两个问题的状态：

- 

[蓝桥云课-青蛙吃虫](https://www.lanqiao.cn/problems/3601/learning/)

- 

[蓝桥算法赛-食堂](https://www.lanqiao.cn/problems/17004/learning/)

可以很明显的感觉出设计的难点。

## 4. 线性DP

本部分将结合一些题，来不断的重复上述建立 DP 状态的方法，意图帮助读者强化一些简单的DP状态设计。

### 4.1 [蓝桥云课-青蛙吃虫](https://www.lanqiao.cn/problems/3601/learning/)

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713337799031.png)

- 找到题目中的需要优化的值，“最多吃多少昆虫”，完美符合要求，我们将这个最大值作为状态的最优值，也就是说，如果我们设计了一个状态 $s$，那么我们的 $dp_s$ 所代表的意义大概率在 $s$ 情况下的吃虫的最大虫数。

- 尝试找到题目中的条件，路径长度为 $N$，最多跳 $K$ 次。

- 尝试模拟题目中的求解步骤，这往往是题目中的条件。每次跳 $T$ 格，但是满足 $A \le T \le B$，可以看作跳一次，就是一次转移。

尝试结合将 1，2，3 结合起来，看能否找到一个合理的最优结构，并且无后向性。

得到的状态以及转移如下：

定义 $dp_{i,j}$ 为跳跃了 $i$ 次后，当前处在 $j$ 位置能吃到的最大昆虫数量。

那么由定义得到 $dp_{0,0} = 0$，这是初始状态，代表的意义是在未跳跃前的状态，很明显符合定义（初始状态的定义，往往是需要对应于真实情况）。

我们思考如何转移，由于转移的过程为题目中的求解条件：每次跳跃一些格子，那么跳跃就是转移的过程。

我们思路如何得到 $dp_{i,j}$ ，复习定义：跳跃了 $i$ 次后，当前处在 $j$ 位置能吃到的最大昆虫数量。

那么这个状态的前一个状态是什么，也是就说，他的子问题是什么，根据实际情况，我们可以得到上一个状态一定是 $dp_{i-1,j’}$，定义为 跳跃了 $i-1$ 次后，到达位置为 $j’$ 的位置，如果满足跳一次可以到达 $j$，那么必须满足 $A \le j-j’ \le B$。

有了这个过程，那么我们实际上就得到了转移的逻辑，你完全可以根据这个思路写出代码核心：

- C++

```cpp
memset(dp, -0x3f3f3f3f, sizeof(dp)); 
for (int i = 1; i 

- Java

```java
for (int[] row : dp) { 
    for (int j = 0; j 

- Python

```python
dp[0][0] = 0 
for i in range(1, K + 1): 
    for j in range(1, n + 1): 
        for k in range(A, B + 1): 
            if j - k 我们可以写出更具规整的转移： $dp_{0,0} = 0 \ dp_{i,j} = \max_{A \le k \le B}(dp_{i-1,k})$ 我们要求的答案为 $\underset{0 \le i \le k, 0 \le j \le n}{\max}(dp_{i,j})$。

### 4.2 [蓝桥算法赛-奇怪的段](https://www.lanqiao.cn/problems/12112/learning/)

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713337554344.png)

我们继续重复上述解题方法：

- 

找到题目中的需要优化的值，“加权和值最大”，完美符合要求，我们将这个最大值作为状态的最优值，也就是说，如果我们设计了一个状态 $s$，那么我们的 $dp_s$ 所代表的意义大概率在 $s$ 情况下的最大加权和值。

- 

尝试找到题目中的条件，序列长度为 $n$，划分出 $k$ 个区间。

- 

尝试模拟题目中的求解步骤，这往往是题目中的条件。在本题中，划分区间就是一次转移。

- 

尝试结合将1，2，3结合起来，看能否找到一个合理的最优结构，并且无后向性。

我们可以尝试建立如下转移：

定义状态 $dp_{i,j}$ 表示处理到第 $i$ 个数字，分出 $j$ 个区间的最大值。

初始状态为 $dp_{0,0} = 0$。这个代表初始情况下，未划分区间的最大值，是符合实际情况，并且是符合定义的。

由于一次划分就是一次转移，我们考虑 $dp_{i,j}$，他的上一次划分一定是 $dp_{i’,j-1}$，所代表的意义是，划分 $j-1$ 段时，最后一个元素是 $i$ 的情况。

那么我们的转移就是 $dp_{i,j} = dp_{i’,j-1} + p_j \times \sum _{y=i’+1} ^i a_y$。

当然，我们要求的是最大值，所以我们需要加一个条件： $dp_{i,j} = \underset {j \le i’ \le i} {\max}  (dp_{i’,j-1} + p_j \times \sum _{y=i’+1} ^i a_y)$ 状态是 $n \times k$ 个，每次转移的代价是 $n$ 次，那么这个转移的复杂度为 $O(n^2 \times k)$。

当然，对于这个题来说，复杂度太高了，无法通过本题，由于是算法赛，所以无法通过，**如果是蓝桥大赛的题，那么大概率能得到 $50$ % 的分数。** 当然需要一些优化策略，不然求和的这一部分也会增加复杂度，同学们自行思考（提示：前缀和，或者边循环边算）。

如果要解决本题，我们考虑优化

将式子拆开

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713348601655.png)

上述的理解为，将 $a_i$ 新开一个区间，还是并入旧区间。

转移的复杂度为：$O(n\times k)$。

实现过程中用了滚动数组，用来节约空间，当然也可以不用。

滚动数组： 由于每次转移 $dp_{i,j}$ 只与 $dp_{i-1, j’}$ 有关，对于第一维来说， $dp_i$ 只与 $dp_{i-1}$ 有关，所以，我们用两个量来表示当前的 $dp_i$ 和 $dp_{i-1}$ 即可。在代码中用 $dp_{now}$ 和 $dp_{pre}$ 表示。

代码如下：

- C++

```cpp
#include  
#include  
using namespace std; 
const int N = 1e5+100; 
using ll = long long; 
ll dp[2][204]; 
int n, k; 
int a[N], b[204]; 

int main() { 
    cin >> n >> k; 
    for (int i = 1; i > a[i]; 
    for (int i = 1; i > b[i]; 
    memset(dp, -0x3f, sizeof(dp)); 
    int now = 0, pre = 1; 
    dp[now][0] = 0; 
    for (int i = 1; i 

- Java

```java
import java.util.Scanner; 

public class std { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 
        int N = 100500; 
        long[][] dp = new long[2][205]; 
        int n = scanner.nextInt(); 
        int k = scanner.nextInt(); 
        int[] a = new int[N]; 
        int[] b = new int[205]; 
        for (int i = 1; i 

- Python

```python
N = 100500 
dp = [[-float('inf')] * 205 for _ in range(2)] 
n, k = map(int, input().split()) 
a = [0] + list(map(int, input().split())) 
b = [0] + list(map(int, input().split())) 
now, pre = 0, 1 
dp[now][0] = 0 
for i in range(1, n + 1): 
    now, pre = pre, now 
    dp[now] = [-float('inf')] * 205 
    for j in range(1, k + 1): 
        dp[now][j] = max(dp[pre][j], dp[pre][j - 1]) + a[i] * b[j] 
print(dp[now][k])
```

## 5. 背包

背包问题是老生常谈的经典问题了。

原始模型如下：

有 $n$ 个物品和一个容量为 $m$ 的背包，每个物品有一个价值 $p$ 和 体积 $v$ 。问在总容量不超过 $m$ 的情况下，你能装载的最大价值和为多少？

背包有多种模型：

- 0/1 背包，在这种情况下，每个物品只有一个。

- 完全背包，在这种情况下，每个物品有无穷个。

- 多重背包，在这种情况下，每个物品有 $c_i$ 个，$c_i$ 为第 $i$ 个物品的数量。

- 分组背包，在这种情况下，存在 $n$ 个组别，每个组别有若干个物品，但是每组至多只能选择一个。

- 依赖背包，在这种情况下，某些物品之间存在依赖关系。

最基础的属于 0/1 背包和完全背包。

其模板代码如下：

### 5.1 0/1 背包

- C++

```cpp
// 二维数组版本
for (int i = 1; i = 0; --j) { 
        dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + p[i]); 
    } 
} 

// 一维数组版本
for (int i = 1; i = 0; --j) { 
        dp[j] = max(dp[j], dp[j - v[i]] + p[i]); 
    } 
} 
// dp[i][j] 代表处理到第 i 个物品，容量为 j 时的最大值。
```

- Java

```java
// 二维数组版本
for (int i = 1; i = 0; --j) { 
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - v[i]] + p[i]); 
    } 
} 

// 一维数组版本
for (int i = 1; i = 0; --j) { 
        dp[j] = Math.max(dp[j], dp[j - v[i]] + p[i]); 
    } 
} 
// dp[i][j] 代表处理到第 i 个物品，容量为 j 时的最大值。
```

- Python

```python
# 二维数组版本
for i in range(1, n + 1): 
    for j in range(m, v[i] - 1, -1): 
        dp[i][j] = max(dp[i][j], dp[i - 1][j - v[i]] + p[i]) 

# 一维数组版本
for i in range(1, n + 1): 
    for j in range(m, v[i] - 1, -1): 
        dp[j] = max(dp[j], dp[j - v[i]] + p[i])
```

### 5.2 完全背包

- C++

```cpp
// 一维数组版本
for (int i = 1; i 

- Java

```java
// 一维数组版本
for (int i = 1; i 

- Python

```python
for i in range(1, n + 1): 
    for j in range(v[i], m + 1): 
        dp[j] = max(dp[j], dp[j - v[i]] + p[i])
```

### 5.3 多重背包

多重背包可以转化为 $0/1$ 背包。

首先我们可以将每个物品的 $c_i$ 个全部拆出来，变成0/1 背包，但是这样的话复杂度就变成了 $O(m \times \sum c_i)$。

还有另外一种方式，我们可以将 $c_i$ 按照进制拆分，分为 $\lbrace 1, 2, 4, 8, … \rbrace$ 个，例如，如果是 $5$ 个，每个物品的容量为 $v$，价值为 $p$，那么划分为 $\lbrace 1, 2, 2\rbrace$，将这 $5$ 个物品划分为 $3$ 个物品，第一个物品容量为 $v$，价格为 $p$，第二个物品容量为 $2v$，价格为 $2p$，第三个物品容量为 $2v$，价格为 $2p$，这样就将复杂度降低为了 $O(m \sum \log_2(c_i))$。

这样的划分，可以拼凑出 $0 \sim c_i$ 所有数量的物品。因为是按照二进制划分的，假设划分的最大数量是 $2^k$，那么最后一个是 $x = c_i-2^{k+1} + 1$。

我们首先可以用前 $k$ 个拼凑出 $0 \sim 2 ^{k+1} - 1$ 种情况，并且 $x \lt 2^{k+1}$，所以其他数可以先加上 $x$ ，然后再加上 $0 \sim 2^{k+1} - 1$ 中的一个，那么就可以拼凑出 $0 \sim c_i$ 所有的数量了。

拆分代码：

- C++

```cpp
// index 为新的物品编号
index = 0; 
for (int i = 1; i > p >> v >> c; 
    while (c > cnt) { 
        c -= cnt; 
        list[++index].p = c * p; 
        list[index].v = c * v; 
        cnt *= 2; 
    } 
    list[++index].p = c * p; 
    list[index].v = c * v; 
} 
// list 存储所有新的物品
```

- Python

```python
for _ in range(m): 
    cnt = 1 
    p, v, c = map(int, input().split()) 
    while c > cnt: 
        c = c - cnt 
        list.append((c * p, c * v)) 
        cnt = cnt * 2 
    list.append((c * p, c * v))
```

- Java

```java
Scanner scanner = new Scanner(System.in); 
p = scanner.nextInt(); 
v = scanner.nextInt(); 
c = scanner.nextInt(); 
while (c > cnt) { 
    c -= cnt; 
    index++; 
    list[index].p = c * p; 
    list[index].v = c * v; 
    cnt *= 2; 
} 
index++; 
list[index].p = c * p; 
list[index].v = c * v;
```

#### 5.3.1 [小明的背包4](https://www.lanqiao.cn/problems/1177/learning/)

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713349006255.png)

算是一个多重背包模板题，套用上述模板解题即可。

当然，本题中存在无限的数量，可以有两种考虑方法，对于无穷数量，我们定义会满载的数量，例如 $\frac{V}{w_i}$；或者在分完多重背包后，在进行完全背包。

都可以，推荐同学们两种都试试。

- C++

```cpp
#include  
using namespace std; 
int idx = 0; 
int w[40003], v[40003]; 
int N, V; 
int dp[2003]; 

int main() { 
    cin >> N >> V; 
    int ww, vv, c; 
    while (N --) { 
        cin >> ww >> vv >> c; 
        if (c == 0) c = V / ww; 
        int cnt = 1; 
        while (c > cnt) { 
            idx ++; 
            c -= cnt; 
            w[idx] = cnt * ww; 
            v[idx] = cnt * vv; 
            cnt *= 2; 
        } 
        idx ++; 
        w[idx] = c * ww; 
        v[idx] = c * vv; 
    } 
    for (int i = 1; i = 0; --j) { 
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]); 
        } 
    } 
    cout 

- Java

```java
import java.util.Scanner; 

public class std { 
    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 
        int idx = 0; 
        int[] w = new int[40003]; 
        int[] v = new int[40003]; 
        int N = scanner.nextInt(); 
        int V = scanner.nextInt(); 
        int[] dp = new int[2003]; 
        while (N-- > 0) { 
            int ww = scanner.nextInt(); 
            int vv = scanner.nextInt(); 
            int c = scanner.nextInt(); 
            if (c == 0) c = V / ww; 
            int cnt = 1; 
            while (c > cnt) { 
                idx++; 
                c -= cnt; 
                w[idx] = cnt * ww; 
                v[idx] = cnt * vv; 
                cnt *= 2; 
            } 
            idx++; 
            w[idx] = c * ww; 
            v[idx] = c * vv; 
        } 
        for (int i = 1; i = 0; --j) { 
                dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i]); 
            } 
        } 
        System.out.println(dp[V]); 
    } 
}
```

- Python

```python
idx = 0 
w = [0] * 40003 
v = [0] * 40003 
N, V = map(int, input().split()) 
dp = [0] * 2003 

for _ in range(N): 
    ww, vv, c = map(int, input().split()) 
    if c == 0: 
        c = V // ww 
    cnt = 1 
    while c > cnt: 
        idx += 1 
        c -= cnt 
        w[idx] = cnt * ww 
        v[idx] = cnt * vv 
        cnt *= 2 
    idx += 1 
    w[idx] = c * ww 
    v[idx] = c * vv 

for i in range(1, idx + 1): 
    for j in range(V, w[i] - 1, -1): 
        dp[j] = max(dp[j], dp[j - w[i]] + v[i]) 

print(dp[V])
```

### 5.4 分组背包

给定 $n$ 组物品，第 $i$ 组中有 $c_i$ 个物品，第 $i$ 组中第 $j$ 个物品的价值为 $p_{i,j}$ ，体积为 $v_{i,j}$，每组物品最多只能选择一个。

背包大小为 $m$ ，问装载的最大价值。

这个问题与原始的 $0/1$ 背包十分相似，复习下，原始的 $0/1$ 背包如何建立的状态转移：$dp_{i,j}$ 为处理到第 $i$ 个物品，装载体积为 $j$ 的最大价值。

其转移为 $dp_{i,j} = \max(dp_{i-1, j} , dp_{i-1,j-v_i} + p_i)$

我们只要稍作思考，就可以完成转化：

我们定义：$dp_{i,j}$ 为处理到第 $i$ **组**物品，装载体积为 $j$ 的最大价值。

那么转移为： $dp_{i,j} = \max(dp_{i-1, j} , \max_{1 \le j \le c_i}(dp_{i-1,j-v_{i,j}} + p_{i,j}))$ 观察到了吗，这两种甚至没有区别，只有再处理每一组的过程中进行了一次选择，逻辑通顺，完美转移！

我们来看一道例题：

#### 5.4.1 [金明的预算](https://www.lanqiao.cn/problems/558/learning/)

![图片描述](/images/DSA-DynamicProgrammingPlus/uid1792586-20240417-1713347341038.png)

我们简化一下题意：

有 $m$ 块钱，$n$ 件物品，每个物品的价值为 $p_i \times v_i$，价格为 $v_i$。有一些物品存在依赖关系，想要购买当前物品，就一定要购买前置物品。

问能购买的最大价值。

**条件**：每一件物品最多只有**两件**附属物品。

看起来是一个依赖有关的背包问题，但是仔细思考就会发现，如果 $A$ 物品有两件附属物品 $B,C$，那么对于这三件物品，只有这么几种情况 $\lbrace \varnothing \rbrace,\lbrace A \rbrace,\lbrace A,B \rbrace,\lbrace A, C \rbrace,\lbrace A, B, C \rbrace$，并且对于这三个物品的组合，只能选择**一种**。对于有一个附属物品和没有附属物品的情况，类似考虑。

回过头来，是不是发现，很想分组背包的感觉。

我们重新描绘一下题意：

有 $m$ 块钱，$n$ 组物品，每组物品数量不超过三，每个物品有价值、价格。每组物品只能选择**一种**组合。问能购买的最大价值。

完美转换为分组背包。

代码如下：

- C++

```cpp
#include  
#include  
using namespace std; 

int n, m; 
vector G[65]; 
int v[65], p[65], q[65]; 
int dp[33000]; 

int main() { 
    cin >> n >> m; 
    for (int i = 1; i > v[i] >> p[i] >> q[i]; 
        p[i] *= v[i]; 
        if (q[i]) { 
            G[q[i]].push_back(i); 
        } 
    } 
    for (int i = 1; i = 0; --j) { 
                if (j - v[i] >= 0) dp[j] = max(dp[j], dp[j - v[i]] + p[i]); 
                if (G[i].size() > 0 && j - v[i] - v[G[i][0]] >= 0) 
                    dp[j] = max(dp[j], dp[j - v[i] - v[G[i][0]]] + p[i] + p[G[i][0]]); 
                if (G[i].size() > 1 && j - v[i] - v[G[i][1]] >= 0) 
                    dp[j] = max(dp[j], dp[j - v[i] - v[G[i][1]]] + p[i] + p[G[i][1]]); 
                if (G[i].size() > 1 && j - v[i] - v[G[i][0]] - v[G[i][1]] >= 0) 
                    dp[j] = max(dp[j], dp[j - v[i] - v[G[i][0]] - v[G[i][1]]] + p[i] + p[G[i][0]] + p[G[i][1]]); 
            } 
        } 
    } 
    cout 

- Java

```java
import java.util.ArrayList; 
import java.util.List; 
import java.util.Scanner; 

public class Main { 
    static int n, m; 
    static List[] G = new ArrayList[65]; // 使用ArrayList数组来表示图 
    static int[] v = new int[65], p = new int[65], q = new int[65]; 
    static int[] dp = new int[33000]; 

    public static void main(String[] args) { 
        Scanner scanner = new Scanner(System.in); 
        n = scanner.nextInt(); 
        m = scanner.nextInt(); 
        // 初始化G数组 
        for (int i = 0; i (); 
        } 
        for (int i = 1; i = 0; j--) { 
                    if (j - v[i] >= 0) dp[j] = Math.max(dp[j], dp[j - v[i]] + p[i]); 
                    // 处理后继节点 
                    for (int k = 0; k = 0) { 
                            dp[j] = Math.max(dp[j], dp[j - v[i] - v[nextItem]] + p[i] + p[nextItem]); 
                        } 
                    } 
                    if (G[i].size() > 1) { 
                        int p1 = G[i].get(0), p2 = G[i].get(1); 
                        if (j - v[i] - v[p1] - v[p2] >= 0) { 
                            dp[j] = Math.max(dp[j], dp[j - v[i] - v[p1] - v[p2]] + p[i] + p[p1] + p[p2]); 
                        } 
                    } 
                } 
            } 
        } 
        System.out.println(dp[n]); 
        scanner.close(); 
    } 
}
```

- Python

```python
n, m = map(int, input().split()) 
G = [[] for _ in range(65)] 
v = [0] * 65 
p = [0] * 65 
q = [0] * 65 
dp = [0] * 33000 

for i in range(1, m + 1): 
    v[i], p[i], q[i] = map(int, input().split()) 
    p[i] *= v[i] 
    if q[i]: 
        G[q[i]].append(i) 

for i in range(1, m + 1): 
    if q[i] == 0: 
        for j in range(n, -1, -1): 
            if j - v[i] >= 0: 
                dp[j] = max(dp[j], dp[j - v[i]] + p[i]) 
            if G[i]: 
                for k in range(len(G[i])): 
                    if j - v[i] - v[G[i][k]] >= 0: 
                        dp[j] = max(dp[j], dp[j - v[i] - v[G[i][k]]] + p[i] + p[G[i][k]]) 
            if len(G[i]) > 1 and j - v[i] - v[G[i][0]] - v[G[i][1]] >= 0: 
                dp[j] = max(dp[j], dp[j - v[i] - v[G[i][0]] - v[G[i][1]]] + p[i] + p[G[i][0]] + p[G[i][1]]) 

print(dp[n])
```

## 6. 依赖背包

这个比较复杂，一般来讲是树形的依赖关系，我们放在树形DP再讲。

## 7. 作业

| 考点 | 题目 |
| --- | --- |
| 线性 DP | [李白打酒-真题](https://www.lanqiao.cn/problems/2114/learning/) |
| 线性 DP | [保险箱-真题](https://www.lanqiao.cn/problems/3545/learning/) |
| 背包问题 | [健身-算法赛](https://www.lanqiao.cn/problems/5130/learning/) |
| 背包问题 | [包子凑数](https://www.lanqiao.cn/problems/98/learning/) |

[← 下一篇 【蓝桥杯】进阶-状态压缩动态规划的典型题型深入分析](/2024/05/06/DSA-DynamicProgrammingType/)

[【JavaScript】基础语法详解 上一篇 →](/2024/04/17/JavaScript-BaseStudy/)

∧ [≡](#toc-div)
