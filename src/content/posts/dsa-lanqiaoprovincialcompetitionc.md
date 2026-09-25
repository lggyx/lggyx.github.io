---
title: "【蓝桥杯】23年省赛C组"
pubDate: 2024-03-31
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

## 题目总览

- 1.求和

- 2.分糖果

- 3.三国游戏

- 4.平均

- 5.填充

- 6.棋盘

- 7.子矩阵

- 8.公因数匹配

- 9.异或和之差

- 10.太阳

## [3.求和 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3493/learning/?page=1&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B)

### 问题描述

求 $1$ （含）至 $20230408$ （含）中每个数的和。

### 答案提交

这是一道结果填空的题，你只需要算出结果后提交即可。本题的结果为一个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 1s | 256M |
| C | 1s | 256M |
| Java | 2s | 256M |
| Python3 | 3s | 256M |
| PyPy3 | 3s | 256M |
| Go | 3s | 256M |
| JavaScript | 3s | 256M |

总通过次数: 7339  |  总提交次数: 8165  |  通过率: 89.9%

难度: 中等   标签: 2023, 模拟, 省赛

### 参考答案

```python
print(sum(range(20240409)))
```

计算结果是204634714038436

## [0分糖果 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/4124/learning/?page=3&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B)

### 问题描述

两种糖果分别有 $9$ 个和 $16$ 个，要全部分给 $7$ 个小朋友，每个小朋友得到的糖果总数最少为 $2$ 个最多为 $5$ 个，问有多少种不同的分法。糖果必须全部分完。

只要有其中一个小朋友在两种方案中分到的糖果不完全相同，这两种方案就算作不同的方案。

### 答案提交

这是一道结果填空的题，你只需要算出结果后提交即可。本题的结果为一个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。

### 运行限制

- 最大运行时间：1s

- 最大运行内存: 256M

总通过次数: 2122  |  总提交次数: 2351  |  通过率: 90.3%

难度: 困难   标签: 2023, 枚举, 省赛, DFS

### 参考答案

```python
ans = 0
def dfs(depth, n, m):
    global ans
    if depth == 7:
        if n == 0 and m == 0:
            ans += 1
        return
    for i in range(n + 1):
        for j in range(m + 1):
            if 2 计算结果是5067671

## [10.三国游戏 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3518/learning/?page=2&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B)

### 问题描述

小蓝正在玩一款游戏。游戏中魏($X$)、蜀($Y$)、吴($Z$)三个国家各自拥有一定数量的士兵$X, Y, Z$（一开始可以认为都为 $0$）。游戏有 $n$ 个可能会发生的事件，每个事件之间相互独立且最多只会发生一次，当第 $i$ 个事件发生时会分别让 $X, Y, Z$ 增加$A_i, B_i,C_i$。

当游戏结束时（所有事件的发生与否已经确定），如果 $X, Y, Z$ 的其中一个大于另外两个之和，我们认为其获胜。例如，当 $X &gt; Y + Z$ 时，我们认为魏国获胜。小蓝想知道游戏结束时如果有其中一个国家获胜，最多发生了多少个事件?如果不存在任何能让某国获胜的情况，请输出 $-1$。

### 输入格式

输入的第一行包含一个整数 $n$。

第二行包含 $n$ 个整数表示 $A_i$，相邻整数之间使用一个空格分隔。

第三行包含 $n$ 个整数表示 $B_i$，相邻整数之间使用一个空格分隔。

第四行包含 $n$ 个整数表示 $C_i$，相邻整数之间使用一个空格分隔。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
3
1 2 2
2 3 2
1 0 7
```

### 样例输出

```
2
```

### 评测用例规模与约定

对于 $40$% 的评测用例，$n \leq 500$；

对于 $70$% 的评测用例，$n \leq 5000$；

对于所有评测用例，$1 \leq n \leq 10^5$，$1 \leq A_i, B_i, C_i \leq 10^9$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 1s | 256M |
| C | 1s | 256M |
| Java | 2s | 256M |
| Python3 | 3s | 256M |
| PyPy3 | 3s | 256M |
| Go | 3s | 256M |
| JavaScript | 3s | 256M |

总通过次数: 2106  |  总提交次数: 3250  |  通过率: 64.8%

难度: 困难   标签: 2023, 贪心, 排序, 省赛

### 参考答案

​    首先明确游戏结束时（所以发事情发生与否已经确定）仅仅只表示一次游戏会发生1，2…n这几件事情。可能在过程中会出现比如X&gt;Y+Z的情况，此时并不表示某魏国获胜了。而是要等到全部事情发生后比对X与Y+Z的情况才能判断。理解后难度就直线下降了。因此可以枚举魏、蜀、吴三个国家想要获胜最多事情数量，然后取最大值即是答案。    假设魏国获胜：令new_X =[ Ai - Bi - Ci].  1&lt;=i&lt;=n    为使发生的事件最多，需要从new_Xi最大的地方开始发生，sum_X += new_Xi    当sum_X&lt;=0时，结束。

```python
n = int(input())
A = list(map(int,input().split()))
B = list(map(int,input().split()))
C = list(map(int,input().split()))
new_X = sorted([ A[_] - B[_] - C[_] for _ in range(n) ],reverse=True)
new_Y = sorted([ B[_] - A[_] - C[_] for _ in range(n) ],reverse=True)
new_Z = sorted([ C[_] - A[_] - B[_] for _ in range(n) ],reverse=True)
ans,resX,resY,resZ,sum_X,sum_Y,sum_Z = 0,0,0,0,0,0,0
for i in range(n):
    sum_X,sum_Y,sum_Z =  sum_X + new_X[i], sum_Y + new_Y[i], sum_Z + new_Z[i]
    resX = resY = resZ = i + 1
    if sum_X>0:ans = max(ans,resX)
    if sum_Y>0:ans = max(ans,resY)
    if sum_Z>0:ans = max(ans,resZ)
    if sum_X有一个长度为 $n$ 的数组（$n$ 是 $10$ 的倍数），每个数 $a_i$ 都是区间 $[0, 9]$ 中的整数。小明发现数组里每种数出现的次数不太平均，而更改第 $i$ 个数的代价为 $b_i$，他想更改若干个数的值使得这 $10$ 种数出现的次数相等（都等于 $\frac{n}{10}$），请问代价和最少为多少。

### 输入格式

输入的第一行包含一个正整数 $n$。

接下来 $n$ 行，第 $i$ 行包含两个整数 $a_i, b_i$ ，用一个空格分隔。

### 输出格式

输出一行包含一个正整数表示答案。

### 样例输入

```
10
1 1
1 2
1 3
2 4
2 5
2 6
3 7
3 8
3 9
4 10
```

### 样例输出

```
27
```

### 样例说明

只更改第 $1, 2, 4, 5, 7, 8$ 个数，需要花费代价 $1 + 2 + 4 + 5 + 7 + 8 = 27$。

### 评测用例规模与约定

对于 $20$% 的评测用例，$n \leq 1000$；

对于所有评测用例，$n \leq 10^5$，$0 &lt; b_i \leq 2 \times 10^5$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 4s | 512M |
| Python3 | 5s | 512M |
| PyPy3 | 5s | 512M |
| Go | 5s | 512M |
| JavaScript | 5s | 512M |

### 参考答案

```python
n = int(input())
lst = []
num = n / 10
dic = {}
for i in range(n):
    a, b = map(int, input().split())
    lst.append((a, b))
    if a in dic.keys():#记录a的数量
        dic[a] += 1
    else:
        dic[a] = 1
lst = sorted(lst, key=lambda x: x[1]) #以代价大小进行排序
value = 0
for i in range(n):
    a, b = lst[i]#取出最小代价的a
    if dic.get(a, 0) > num: #判断a的数量是否大于num
        value += b    
        dic[a]-=1  #计算完a的数量要减1
print(value)
```

## [1.填充 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3519/learning/?page=1&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B&name=%E5%A1%AB%E5%85%85)

### 问题描述

有一个长度为 $n$ 的 $01$ 串，其中有一些位置标记为 $?$，这些位置上可以任意填充 $0$ 或者 $1$，请问如何填充这些位置使得这个 $01$ 串中出现互不重叠的 $00$ 和 $11$ 子串最多，输出子串个数。

### 输入格式

输入一行包含一个字符串。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
1110?0
```

### 样例输出

```
2
```

### 样例说明

如果在问号处填 $0$ ，则最多出现一个 $00$ 和一个 $11$：$111000$。

### 评测用例规模与约定

对于所有评测用例，$1 \leq n \leq 10^6$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 1s | 256M |
| C | 1s | 256M |
| Java | 2s | 256M |
| Python3 | 3s | 256M |
| PyPy3 | 3s | 256M |
| Go | 3s | 256M |
| JavaScript | 3s | 256M |

总通过次数: 2622  |  总提交次数: 3071  |  通过率: 85.4%

难度: 中等   标签: 2023, 贪心, 省赛, 动态规划

### 参考答案

```python
import os
import sys

s=input()
n=len(s)
'''
judge=['00','11','0?','1?','?0','?1','??']
ans=0
i=1
while i小蓝拥有 $n\times n$ 大小的棋盘，一开始棋盘上全都是白子。小蓝进行了 $m$ 次操作，每次操作会将棋盘上某个范围内的所有棋子的颜色取反（也就是白色棋子变为黑色，黑色棋子变为白色）。请输出所有操作做完后棋盘上每个棋子的颜色。

### 输入格式

输入的第一行包含两个整数 $n$，$m$，用一个空格分隔，表示棋盘大小与操作数。

接下来 $m$ 行每行包含四个整数 $x_1$，$y_1$，$x_2$，$y_2$，相邻整数之间使用一个空格分隔，表示将在 $x_1$ 至 $x_2$ 行和 $y_1$ 至 $y_2$ 列中的棋子颜色取反。

### 输出格式

输出 $n$ 行，每行 $n$ 个 $0$ 或 $1$ 表示该位置棋子的颜色。如果是白色则输出 $0$，否则输出 $1$。

### 样例输入

```
3 3
1 1 2 2
2 2 3 3
1 1 3 3
```

### 样例输出

```
001
010
100
```

### 评测用例规模与约定

对于 $30$% 的评测用例，$n,m\leq 500$ ；

对于所有评测用例，$1\leq n,m\leq 2000$，$1\leq x_1\leq x_2\leq n$，$1\leq y_1\leq y_2\leq m$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 4s | 512M |
| Python3 | 10s | 512M |
| PyPy3 | 10s | 512M |
| Go | 10s | 512M |
| JavaScript | 10s | 512M |

### 参考答案

​	第一种方法：（超时） 这部分代码通过输入获取棋盘大小 n 和操作数 m。 然后创建一个 n x n 大小的二维数组 board，并将其所有元素初始化为0。 接下来，执行 m 次操作：对于每次操作，从输入中获取操作的范围 x1, y1, x2, y2。 在指定的范围内，对棋盘上的棋子颜色进行取反操作，即白变黑，黑变白。 最后，遍历 board 中的每一行，并使用 join() 和 map() 将每行中的数字连接成字符串并打印出来，确保数字之间有空格分隔。 整个代码的功能是模拟了对一个棋盘进行了 m 次操作，每次操作对指定范围内的棋子颜色进行了取反，并输出了最终每个位置的棋子颜色。

​	 第二种方法：（优化） 在这段代码中，可能的性能瓶颈在于对棋盘的操作。对于每次操作，它使用了两层嵌套的循环来更新棋盘范围内的所有棋子颜色。这样的做法在棋盘较大且操作次数较多的情况下可能会导致性能问题。 一种改进方式是尝试避免在每次操作时都对指定范围内的棋子颜色进行更新。你可以考虑使用差分数组（Difference Array）来优化这一过程。 差分数组是一个数组，用于记录相邻两个元素之间的差值。在这个问题中，可以利用差分数组来记录每一行每个位置的颜色变化次数，而不是直接更新整个棋盘。 这段代码中，我们使用了一个 (n + 1) x (n + 1) 大小的二维数组 diff 来表示差分数组。在操作输入时，我们只更新了差分数组中的值，最后根据差分数组的值计算出最终的棋盘状态。这种方式能够减少更新棋盘的次数，从而提高效率。

```python
# 这段代码会超时，下面使用差分方法进行优化
# n,m = map(int,input().split())
# chessboard = [[0]*n for _ in range(n)]
# for _ in range(m):
#   x1,y1,x2,y2 = map(int,input().split())
#   for i in range(x1-1,x2):
#     for j in range(y1-1,y2):
#       chessboard[i][j] = 1 - chessboard[i][j]
# for row in chessboard:
#     print(''.join(map(str, row)))
n, m = map(int, input().split())

# 初始化一个全为0的(n + 1) x (n + 1)的二维数组来表示差分数组
diff = [[0] * (n + 2) for _ in range(n + 2)]

# 执行m次操作
for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    # 更新差分数组的操作范围
    diff[x1][y1] += 1
    diff[x1][min(y2 + 1, n + 1)] -= 1
    diff[min(x2 + 1, n + 1)][y1] -= 1
    diff[min(x2 + 1, n + 1)][min(y2 + 1, n + 1)] += 1

# 计算最终棋盘状态
for i in range(1, n + 1):
    for j in range(1, n + 1):
        diff[i][j] += diff[i][j - 1] + diff[i - 1][j] - diff[i - 1][j - 1]
        # 棋盘上该位置为偶数时为0，奇数时为1
        print(1 if diff[i][j] % 2 == 1 else 0, end='')
    print()
```

​	用差分前缀和的思想，二维转化为一维一维地处理，由于数据量不大，是可以接受的。另外转换棋子可以使用异或的思想，运行可以快一些。

```python
n, m = map(int, input().split())
mp = [[0] * n for _ in range(n)]

for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(x1, x2+1):
        mp[i-1][y1-1] ^= 1
        if y2 != n: 
            mp[i-1][y2] ^= 1

for i in range(n):
    for j in range(1, n):
        mp[i][j] ^= mp[i][j-1]
    print(*mp[i], sep='')
```

## [2.子矩阵 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3521/learning/?page=1&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B&name=%E5%AD%90)

### 问题描述

给定一个 $n \times m$ （$n$ 行 $m$ 列）的矩阵。设一个

矩阵的价值为其所有数中的最大值和最小值的乘积。求给定矩阵的所有大小为 $a \times b$ （$a$ 行 $b$ 列）的子矩阵的价值的和。

答案可能很大，你只需要输出答案对 $998244353$ 取模后的结果。

### 输入格式

输入的第一行包含四个整数分别表示 $n$，$m$，$a$，$b$，相邻整数之间使用一个空格分隔。接下来

$n$ 行每行包含 $m$ 个整数，相邻整数之间使用一个空格分隔，表示矩阵中的每个数 $A_{i,j}$。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

2 3 1 2
1 2 3
4 5 6

### 样例输出

```
58
```

### 样例说明

$1 \times 2 + 2 \times 3 + 4 \times 5 + 5 \times 6 = 58$。

### 评测用例规模与约定

对于 $40$% 的评测用例，$1 \leq n,m \leq 100$；

对于 $70$% 的评测用例，$1 \leq n,m \leq 500$；

对于所有评测用例，$1 \leq a \leq n \leq 1000$，$1 \leq b \leq m \leq 1000$，$1 \leq A_{i,j} \leq 10^9$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 2s | 256M |
| C | 2s | 256M |
| Java | 4s | 256M |
| Python3 | 4s | 256M |
| PyPy3 | 4s | 256M |
| Go | 4s | 256M |
| JavaScript | 4s | 256M |

总通过次数: 648  |  总提交次数: 1534  |  通过率: 42.2%

难度: 困难   标签: 2023, 单调队列, 省赛

### 参考答案

​    暴力是显然不能通过全部测试数据的，需要得到每一个a*b大小的矩阵的最大值和最小值，可以先考虑得到每一行长度为b的窗口中的最大值和最小值，然后在这个基础上求出每一列长度为a的窗口的最大值和最小值。就可以预处理出来每个子矩阵中的最大值和最小值。要求一个滑动窗口中的最大值和最小值是一个基本的单调队列问题。

```python
n, m, a, b = map(int, input().split())
s,num_max,num_min,n_max,n_min,res = [[0] * (n + 2) for _ in range(n + 2)],[],[],[],[],0
for i in range(1, n + 1):
    s[i][1:m + 1] = map(int, input().split())
def get_min(a, k, m):
    tep,q,hh,tt = [],[0]*1010,0,-1
    for i in range(1, m + 1):
        if hh = 0: tep.append(a[q[hh]])
    return tep
def get_max(a, k, m):
    tep,q,hh,tt = [],[0]*1010,0,-1
    for i in range(1, m + 1):
        if hh = a[q[tt]]: tt -= 1
        tt,q[tt] = tt + 1,i
        if i - k >= 0: tep.append(a[q[hh]])
    return tep
for i in range(1, n + 1):
    temp = [0] + get_max(s[i][:m + 1], b, m)
    num_max.append(temp)
    temp = [0] + get_min(s[i][:m + 1], b, m)
    num_min.append(temp)
for i in range(1, m - b + 2):
    t1 = [0]
    for _ in range(n):
        t1.append(num_max[_][i])
    t1.append(0)
    temp = get_max(t1, a, n)
    n_max.append(temp)
    t2 = [0]
    for _ in range(n):
        t2.append(num_min[_][i])
    t2.append(0)
    temp = get_min(t2, a, n)
    n_min.append(temp)
for i in range(len(n_max)):
    for j in range(len(n_max[0])):
        res += n_max[i][j] * n_min[i][j]
print(res)
```

## [1.公因数匹配 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3525/learning/?page=1&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B&name=%E5%85%AC)

### 问题描述

给定 $n$ 个正整数 $A_i$，请找出两个数 $i$，$j$ 使得 $i &lt; j$ 且 $A_i$ 和 $A_j$ 存在大于 $1$ 的公因数。

如果存在多组 $i$，$j$，请输出 $i$ 最小的那组。如果仍然存在多组 $i$，$j$，请输出 $i$ 最小的所有方案中 $j$ 最小的那组。

### 输入格式

输入的第一行包含一个整数 $n$。

第二行包含 $n$ 个整数分别表示 $A_1$，$A_2$，$\ldots$，$A_n$，相邻整数之间使用一个空格分隔。

### 输出格式

输出一行包含两个整数分别表示题目要求的 $i$，$j$，用一个空格分隔。

### 样例输入

```
5
5 3 2 6 9
```

### 样例输出

```
2 4
```

### 评测用例规模与约定

对于 $40$% 的评测用例，$n \leq 5000$；

对于所有评测用例，$1 \leq n \leq 10^5$，$1 \leq A_i \leq 10^6$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 256M |
| C | 3s | 256M |
| Java | 4s | 256M |
| Python3 | 5s | 256M |
| PyPy3 | 5s | 256M |
| Go | 5s | 256M |
| JavaScript | 5s | 256M |

### 参考答案

```python
import os
import sys
# 核心方法：任何一个正整数都可以等于多个质数的乘积 所以将每一个输入分解成质因数，然后输出质因数相同的最小输入位置 该位置通过一个dict储存
# 请在此输入您的代码
prime=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009]
dic={}
le = int(input())
li = list(map(int,input().split()))
resi = le # i dic[a]:
        resi = dic[a]
        resj = i + 1# 将此位置用resj存储
  for j in prime:# 遍历质数表 进行求质因数过程
    if a  dic[j]:
          resi = dic[j]
          resj = i + 1
print(resi,resj)
```

```python
N = int(1e5 + 5)
index = {}  # prime : first index
a = [0 for i in range(N)]
len = 0

def devidePrime(x: int) -> int:
    global index, a, len
    pos = len + 1
    n = a[x]
    i = 2
    while (i * i 给定一个含有 $n$ 个元素的数组 $A_i$，你可以选择两个不相交的子段。求出这两个子段内的数的异或和的差值的最大值。

### 输入格式

输入的第一行包含一个整数 $n$。

第二行包含 $n$ 个整数 $A_i$，相邻整数之间使用一个空格分隔。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
6
1 2 4 9 2 7
```

### 样例输出

```
14
```

### 样例说明

两个子段可以分别选 $1$ 和 $4,9,2$，差值为 $15-1=14$。

### 评测用例规模与约定

对于 $40%$ 的评测用例，$n \leq 5000$；

对于所有评测用例，$2 \leq n \leq 2 \times 10^5$，$0 \leq A_i \leq 2^{20}$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 1s | 256M |
| C | 1s | 256M |
| Java | 2s | 256M |
| Python3 | 10s | 256M |
| PyPy3 | 10s | 256M |
| Go | 10s | 256M |
| JavaScript | 10s | 256M |

### 参考答案

```python
ii = lambda: int(input())  
si = lambda: input().split()
mi = lambda: map(int, si())
li = lambda: list(mi())

from typing import List
n = ii()
a = li()
b_length = max(a).bit_length()+1
class TrieNode:
    def __init__(self):
        self.children = [None, None]

    def insert(self, num: int):
        node = self
        for i in range(b_length, -1, -1):
            bit = (num >> i) & 1
            if not node.children[bit]:
                node.children[bit] = TrieNode()
            node = node.children[bit]

    def query_max(self, num: int) -> int:
        node = self
        res = 0
        for i in range(b_length, -1, -1):
            bit = (num >> i) & 1
            if node.children[1 - bit]:
                res += (1  int:
        node = self
        res = 0
        for i in range(b_length, -1, -1):
            bit = (num >> i) & 1
            if node.children[bit]:
                node = node.children[bit]
            else:
                res += (1 ​	01字典树+前缀异或和+后缀异或和 具体实现时：以某一个数字为分界线，分别计算以其为结尾以及以其为起点的最大/最小前缀异或和以及最大/最小后缀异或和，共四个数组，最后答案就是针对各分界点的左侧最大-右侧最小以及右侧最大-左侧最小之间的最大值 ps：pypy提交能过，但python会超时

```python
n = int(input())
nums = [0] + list(map(int, input().split()))
N, cnt = int(2e5+10), 0
trie = [[0, 0] for _ in range(4 * N)]  # 建立01字典树

def insert(x):
    global cnt
    p = 0
    for i in range(20, -1, -1):
        y = (x >> i) & 1  # 计算二进制形式的x在当前位上是0还是1
        # 任何数与1做与操作，奇数得1，偶数得0
        if not trie[p][y]:  # 如果当前结点未建立
            cnt += 1
            trie[p][y] = cnt
        p = trie[p][y]

def query_max(x):
    p = res = 0
    for i in range(20, -1, -1):
        y = (x >> i) & 1
        if trie[p][not y]:
            res += 2 ** i
            p = trie[p][not y]
        else:
            p = trie[p][y]
    return res

def query_min(x):
    p = res = 0
    for i in range(20, -1, -1):
        y = (x >> i) & 1
        if trie[p][y]:
            p = trie[p][y]
        else:
            p = trie[p][not y]
            res += 2 ** i
    return res

rmx, rmn = [0] * N, [0] * N  # 前缀异或和最大值，最小值
rmn[0] = float('inf')
sumv = 0
for j in range(1, n + 1):  # j作为枚举量枚举左边界
    insert(sumv)
    sumv ^= nums[j]
    rmx[j] = max(rmx[j - 1], query_max(sumv))
    rmn[j] = min(rmn[j - 1], query_min(sumv))

trie = [[0, 0] for _ in range(4 * N)]
cnt = 0
lmx, lmn = [0] * N, [0] * N
lmn[n + 1] = float('inf')
sumv = 0  # j作为枚举量枚举右边界
for j in range(n, -1, -1):
    insert(sumv)
    sumv ^= nums[j]
    lmx[j] = max(lmx[j + 1], query_max(sumv))
    lmn[j] = min(query_min(sumv), lmn[j + 1])
ans = 0
for i in range(1, n):
    ans = max(ans, lmx[i] - rmn[i + 1], rmx[i] - lmn[i + 1])
print(ans)
```

## [1.太阳 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3529/learning/?page=1&first_category_id=1&second_category_id=3&tags=2023,%E7%9C%81%E8%B5%9B&name=%E5%A4%AA%E9%98%B3)

### 问题描述

这天，小蓝在二维坐标系的点 $(X, Y)$ 上放了一个太阳，看做点光源。他拿来了 $n$ 条线段，将它们平行于 $x$ 轴放置在了坐标系中，第 $i$ 条线段的左端点在 $(x_i, y_i)$，长度为 $l_i$。线段之间不会有重合或部分重合的情况（但可能出现端点相交）。小蓝想知道有多少条线段能被太阳照亮（一条线段有长度大于 $0$ 的部分被照亮就算）。

### 输入格式

输入的第一行包含三个正整数 $n$, $X$, $Y$，相邻整数之间使用一个空格分隔。

接下来 $n$ 行，第 $i$ 行包含三个整数 $x_i$, $y_i$, $l_i$，相邻整数之间使用一个空格分隔。

### 输出格式

输出一行包含一个正整数表示答案。

### 样例输入

```
3 10 2000000
5 3 5
6 2 4
0 1 10
```

### 样例输出

```
2
```

### 样例说明

第一条线段在最上面被照亮，第二条线段被第一条完全挡住，第三条线段左边的一段能被照亮。

### 评测用例规模与约定

对于 $30$% 的评测用例，$n \leq 1000$；

对于所有评测用例，$1 \leq n \leq 100000$，$0 \leq x_i, X \leq 10^7$，$0 &lt; y_i \leq 10^5$，$0 &lt; l_i \leq 100$，$10^6 &lt; Y \leq 10^7$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 2s | 256M |
| C | 2s | 256M |
| Java | 3s | 256M |
| Python3 | 4s | 256M |
| PyPy3 | 4s | 256M |
| Go | 4s | 256M |
| JavaScript | 4s | 256M |

总通过次数: 170  |  总提交次数: 421  |  通过率: 40.4%

难度: 中等   标签: 2023, 思维, 省赛, 计算几何

### 参考答案

```python
n, X, Y = map(int, input().split())

class Seg:
    def __init__(self, x, y, i):
        self.x = x
        self.y = y
        self.i = i

    def __lt__(self, other):
        a = 1 * other.y * self.x
        b = 1 * self.y * other.x
        return a  0:
        st.add((t.y, t.i))
    else:
        st.remove((t.y, -t.i))

ans = sum(vis)
print(ans)
```

[← 下一篇 【蓝桥杯】23年省赛B组](/posts/dsa-lanqiaoprovincialcompetitionb/)

[【蓝桥杯】练习题目汇总 上一篇 →](/posts/dsa-lanqiaoproblemscollection/)

