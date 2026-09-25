---
title: "【蓝桥杯】国赛知识梳理"
pubDate: 2024-05-24
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

## 动态规划

## 基础

### 线性DP

![image-20240526132127462](/images/DSA-KnowledgeOrganization/image-20240526132127462.png)

![image-20240526132140926](/images/DSA-KnowledgeOrganization/image-20240526132140926.png)

![image-20240526132149001](/images/DSA-KnowledgeOrganization/image-20240526132149001.png)

#### 动态规划分析步骤

![image-20240526132222766](/images/DSA-KnowledgeOrganization/image-20240526132222766.png)

#### 模板题——[破损的楼梯](https://www.lanqiao.cn/problems/3367/learning)

```python
"""
3367 破损的楼梯
https://www.lanqiao.cn/problems/3367/learning

这是一个典型的线性DP问题，dp[i]表示到达第i阶楼梯的方法数
状态转移方程：dp[i]=dp[i-1]+dp[i-2]
状态压缩：dp[i]只与dp[i-1]和dp[i-2]有关，所以可以压缩
时间复杂度：O(n)
空间复杂度：O(n)
"""
N = int(1e5 + 10)
mod = int(1e9 + 7)
n, m = map(int, input().split())
a = list(map(int, input().split()))
vis = [0] * N
for i in a: vis[i] = 1
dp = [0] * N
dp[0] = 1
dp[1] = 1 - vis[1]
for i in range(2, n + 1):
    if vis[i]:
        continue
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod
print(dp[n])
```

```python
n,m=map(int,input().split())
a=list(map(int,input().split()))
dp=[0]*(n+1)
tp=[0]*(n+1)
for i in a:
  tp[i]=1
dp[0]=1
dp[1]=1-tp[1]
for i in range(2,n+1):
  if tp[i]==1:
    continue
  dp[i]=dp[i-1]+dp[i-2]
mod=10**9+7
print(dp[i]%mod)
```

### 二维DP

![image-20240526132351934](/images/DSA-KnowledgeOrganization/image-20240526132351934.png)

#### 分析步骤

![image-20240526132407561](/images/DSA-KnowledgeOrganization/image-20240526132407561.png)

#### 模板题——[数字三角形](https://www.lanqiao.cn/problems/1536/learning)

```python
import os
import sys

# 请在此输入您的代码
N = int(input())
dp = [list(map(int, input().split())) for _ in range(N)]
for i in range(1, N):
    for j in range(i + 1):
        if j == 0:
            dp[i][j] += dp[i - 1][j]
        elif j == i:
            dp[i][j] += dp[i - 1][j - 1]
        else:
            dp[i][j] += max(dp[i - 1][j - 1], dp[i - 1][j])
print(max(dp[N - 1]))
```

![image-20240526132533080](/images/DSA-KnowledgeOrganization/image-20240526132533080.png)

![image-20240526132546231](/images/DSA-KnowledgeOrganization/image-20240526132546231.png)

#### 模板题——[摆花](https://www.lanqiao.cn/problems/389/learning)

```python
'''
n种花凑 m盆 每种[选数异或](https://www.lanqiao.cn/problems/3711/learning)

```python
n,x = map(int,input().split())
a = [0] + list(map(int,input().split()))
Mod = 998244353
'''
 dp[i][j]前i个正整数有j个子序列异或成 j 的方案；答案dp[n][x]
 dp[i][j] = 选第i个数字 + 不选第i个数字
          = dp[i - 1][j ^ a[i]] + dp[i - 1][j]   
          (因为如果选了第i个数字，那么a[i] ^ 前数 = j, 所以：前数 = j ^ a[i])
'''
dp = [[0] * (64) for _ in range(n + 1)]
# 初始化为 0
dp[0][0] = 1

for i in range(1, n + 1):
    for j in range(64):
        dp[i][j] = (dp[i-1][j] + dp[i-1][j ^ a[i]]) % Mod
print(dp[n][x])
```

### LIS

#### 最长上升子序列

![image-20240526132915221](/images/DSA-KnowledgeOrganization/image-20240526132915221.png)

![image-20240526132923043](/images/DSA-KnowledgeOrganization/image-20240526132923043.png)

#### 模板题——[蓝桥勇士](https://www.lanqiao.cn/problems/2049/learning)

```python
n=int(input())
a=[0]+list(map(int,input().split()))
dp=[1]*(n+1)
for i in range(1,n):
  for j in range(i+1,n+1):
    if a[i][合唱队形](https://www.lanqiao.cn/problems/742/learning)

```python
n = int(input())
a = [0] + list(map(int, input().split()))
dp1 = [0] * (n + 1)  # dp1[i]表示以i结尾的最长上升子序列长度
dp2 = [0] * (n + 1)  # dp2[i]表示以i出发的最长下降子序列长度

for i in range(1, n + 1):
    dp1[i] = 1
    for j in range(1, i):
        if a[i] > a[j]:
            dp1[i] = max(dp1[i], dp1[j] + 1)

for i in range(n, 0, -1):
    dp2[i] = 1
    for j in range(i + 1, n + 1):
        if a[i] > a[j]:
            dp2[i] = max(dp2[i], dp2[j] + 1)

ans = max((dp1[i] + dp2[i] - 1) for i in range(1, n + 1))
print(n-ans)
```

### LCS

#### 最长公共子序列

![image-20240526133212404](/images/DSA-KnowledgeOrganization/image-20240526133212404.png)

![image-20240526133222560](/images/DSA-KnowledgeOrganization/image-20240526133222560.png)

#### 模板题——[最长公共子序列](https://www.lanqiao.cn/problems/1189/learning)

```python
import os
import sys
# 这段代码实现的是计算两个序列（a 和 b）的最长公共子序列（Longest Common Subsequence, LCS）的长度。LCS 是一种在计算两个序列相似度时常用的度量方法。这个问题通常通过动态规划来解决。现在，我将逐步解释这段代码的各个部分：

# 输入处理
n, m = map(int, input().split())
a = [0] + list(map(int, input().split()))
b = [0] + list(map(int, input().split()))
# 首先，通过 input().split() 获取两个整数 n 和 m，分别表示序列 a 和 b 的长度。
# 接着，读取这两个序列，并在序列前面各自加上一个 0 作为哨兵值。这样做是为了让序列的索引从 1 开始，方便后续操作。
# 初始化动态规划数组
dp = [[0] * (m + 1) for _ in range(2)]  # 注意这里是 m，不是 n
now = 0; old = 1
# 初始化一个二维动态规划数组 dp，但这里只用到了两行（range(2)），目的是节省空间。因为在计算当前状态时，只需要用到前一行（即上一状态）的数据。m + 1 是因为考虑到从 0 开始到 m 的所有可能位置。
# now 和 old 变量用来在这两行之间切换，表示当前行和上一行。
# 动态规划过程
for i in range(1, n + 1):
    now, old = old, now
    for j in range(1, m + 1):
        dp[now][j] = max(dp[now][j - 1], dp[old][j])
        if a[i] == b[j]: 
            dp[now][j] = max(dp[now][j], dp[old][j - 1] + 1)
# 这部分是动态规划的核心。
# 外层循环遍历序列 a，内层循环遍历序列 b。
# dp[now][j] = max(dp[now][j - 1], dp[old][j])：当前状态是基于之前状态的最大值，这表示如果当前字符不匹配，LCS 长度不变。
# 如果当前位置的字符相等（a[i] == b[j]），则检查上一个状态的值并加一，即 dp[now][j] = max(dp[now][j], dp[old][j - 1] + 1)。这反映了找到了一个公共元素，因此当前的最长公共子序列长度增加了 1。
# 输出结果
print(dp[now][m])
# 最后，打印出最长公共子序列的长度，即在遍历完两个序列后，dp 数组最后一个元素（dp[now][m]）的值。
# 通过这种方式，代码高效地计算了两个序列的最长公共子序列的长度，同时通过只使用两行的动态规划数组大大减少了空间复杂度。
```

![image-20240526133424736](/images/DSA-KnowledgeOrganization/image-20240526133424736.png)

## 背包DP

### 01背包

![image-20240526133609206](/images/DSA-KnowledgeOrganization/image-20240526133609206.png)

![image-20240526133623292](/images/DSA-KnowledgeOrganization/image-20240526133623292.png)

![image-20240526133631379](/images/DSA-KnowledgeOrganization/image-20240526133631379.png)

#### 模板题——[小明的背包1](https://www.lanqiao.cn/problems/1174/learning)

```python
#dp[i][j]    前i件物品，总体积不超过j 的最大价值

n,v=map(int,input().split())
dp=[[0]*(v+1) for i in range(n+1)]

for i in range(1,n+1):
    wi,vi=map(int,input().split())
    for j in range(0,v+1):
        if j>=wi:
            dp[i][j]=max(dp[i-1][j],dp[i-1][j-wi]+vi)
        else:
            dp[i][j]=dp[i-1][j]
            
print(dp[n][v])
```

##### 滚动数组优化

![image-20240526133913024](/images/DSA-KnowledgeOrganization/image-20240526133913024.png)

![image-20240526133922038](/images/DSA-KnowledgeOrganization/image-20240526133922038.png)

![image-20240526133928502](/images/DSA-KnowledgeOrganization/image-20240526133928502.png)

```python
n,V=map(int,input().split())
dp=[0]*(V+1)
for i in range(1,n+1):
  w,v=map(int,input().split())
  for j in range(V,w-1,-1):
    dp[j]=max(dp[j],dp[j-w]+v)
print(dp[V])
```

### 完全背包

![image-20240526134436937](/images/DSA-KnowledgeOrganization/image-20240526134436937.png)

![image-20240526134445527](/images/DSA-KnowledgeOrganization/image-20240526134445527.png)

![image-20240526134453737](/images/DSA-KnowledgeOrganization/image-20240526134453737.png)

![image-20240526134501798](/images/DSA-KnowledgeOrganization/image-20240526134501798.png)

#### 模板题——[小明的背包2](https://www.lanqiao.cn/problems/1175/learning)

![image-20240526134640485](/images/DSA-KnowledgeOrganization/image-20240526134640485.png)

```python
# dp[i][j]=max(dp[i-1][j],dp[i][j-wi]+vi)  不取或在先前基础上取第i种（所以可以取多次）

n,v=map(int,input().split())
dp=[[0]*(v+1) for i in range(n+1)]
for  i in range(1,n+1):
    wi,vi=map(int,input().split())
    for j in range(0,v+1):
        if (j>=wi):
            dp[i][j]=max(dp[i-1][j],dp[i][j-wi]+vi)
        else:
            dp[i][j]=dp[i-1][j]
print(dp[n][v])
```

##### 滚动数组优化

```python
import os
import sys
N, V = map(int, input().split())
items = []
for _ in range(N):
    w, v = map(int, input().split())
    items.append((w, v))
dp = [0] * (V + 1)
for i in range(1, V + 1):
    for w, v in items:
        if i >= w:
            dp[i] = max(dp[i], dp[i - w] + v)
print(dp[V])
'''
读取输入的商场物品数量N和小明的背包容量V，以及每种物品的体积和价值。
初始化一个长度为V+1的动态规划数组dp，dp[i]表示背包容量为i时所能获得的最大价值。
使用动态规划求解，外层循环遍历背包容量从1到V，内层循环遍历每种物品，更新dp[i]的值为dp[i-w]+v和当前dp[i]的较大值。
输出dp[V]即为小明所能获得的最大价值。
'''
```

### 多重背包

![image-20240526134702358](/images/DSA-KnowledgeOrganization/image-20240526134702358.png)

![image-20240526134710379](/images/DSA-KnowledgeOrganization/image-20240526134710379.png)

#### 模板题——[小明的背包3](https://www.lanqiao.cn/problems/1176/learning)

![image-20240526134904431](/images/DSA-KnowledgeOrganization/image-20240526134904431.png)

![image-20240526134915203](/images/DSA-KnowledgeOrganization/image-20240526134915203.png)
![image-20240526134922223](/images/DSA-KnowledgeOrganization/image-20240526134922223.png)
![image-20240526134930677](/images/DSA-KnowledgeOrganization/image-20240526134930677.png)

```python
#dp[i][j] =max(dp[i][j],dp[i-1][j-k*wi]+k*vi)  k属于(0，si)

n,v=map(int,input().split())
dp=[[0]*(v+1) for i in range(n+1)]
for i in range(1,n+1):
    wi,vi,si=map(int,input().split())
    for j in range(0,v+1):
        for k in range(0,min(si,j//wi)+1):

            dp[i][j]=max(dp[i][j],dp[i-1][j-k*wi]+k*vi)

print(dp[n][v])
```

##### 滚动数组优化

```python
N,V=map(int,input().split())
w,v,s=[[0]*(N+1) for _ in range(3)]
dp=[0 for _ in range(V+1)]
for i in range(1,N+1):
  w[i],v[i],s[i]=map(int,input().split())
for i in range(1,N+1):
  for j in range(s[i]):
    for k in range(V,0,-1):
      if w[i]![image-20240526135531593](/images/DSA-KnowledgeOrganization/image-20240526135531593.png)

![image-20240526135538566](/images/DSA-KnowledgeOrganization/image-20240526135538566.png)

#### 模板题——[小蓝的神秘行囊](https://www.lanqiao.cn/problems/3937/learning)

```python
import sys

n, v, m = map(int, sys.stdin.readline().split())
dp = [[0]*(v + 1) for _ in range(m + 1)]
for _ in range(n):
    volume, mass, value = map(int, sys.stdin.readline().split())
    for i in range(m, 0, -1):
        for j in range(v, 0, -1):
            if i >= mass and j >= volume:
                dp[i][j] = max(dp[i][j], dp[i-mass][j-volume] + value)
print(dp[m][v])
```

```python
n,v,m=map(int,input().split())
dp=[[0]*(m+1) for i in range(v+1)]

for i in range(1,n+1):
    vi,mi,wi=map(int,input().split())
    for j in range(v,vi-1,-1):
        for k in range(m,mi-1,-1):
            dp[j][k] =max(dp[j][k],dp[j-vi][k-mi]+wi)
           
print(dp[v][m])
```

## 树形DP

### 自上而下树形DP

```python
from collections import defaultdict

n = int(input())
val = [0] + [int(x) for x in input().split()]
edges = defaultdict(list)
f = [[0, val[i]] for i in range(n + 1)]

def add_edge(from_node, to_node):
    edges[from_node].append(to_node)

def dfs(u, fa):
    for v in edges[u]:
        if v == fa:
            continue
        dfs(v, u)
        f[u][0] += max(f[v][0], f[v][1])
        f[u][1] += f[v][0]

for _ in range(n - 1):
    u, v = map(int, input().split())
    add_edge(u, v)
    add_edge(v, u)

dfs(1, 0)
print(max(f[1][0], f[1][1]))
```

### 自下而上树形DP

```python
import sys
from collections import defaultdict

N = 100005
a = [0]*N
dp = [[0]*2 for _ in range(N)]
e = defaultdict(list)

def dfs(u):
    for v in e[u]:
        dfs(v)
        dp[u][1] += dp[v][0]
        dp[u][0] += max(dp[v])
    dp[u][1] += a[u]

def main():
    global N, a, dp, e
    n = int(sys.stdin.readline())
    st = set(range(1, n+1))
    for i in range(1, n+1):
        a[i] = int(sys.stdin.readline())
    for _ in range(1, n):
        x, y = map(int, sys.stdin.readline().split())
        e[y].append(x)
        st.discard(x)
    rt = st.pop()
    dfs(rt)
    print(max(dp[rt]))

if __name__ == "__main__":
    main()
```

### 路径相关树形DP

```python
N = 2005
e = [[] for _ in range(N)]
w = [[] for _ in range(N)]
dp = [0]*N
n, m, k = 0, 0, 0
dep = [0]*N
f = [0]*N
t = []

def dfs(u):
    global dp, e, w
    for v in e[u]:
        dfs(v)
        dp[u] += dp[v]
    for t in w[u]:
        sum = dp[u]
        for nw in t['vec']:
            sum -= dp[nw]
            for v in e[nw]:
                sum += dp[v]
        dp[u] = max(dp[u], sum + t['val'])

def main():
    global n, m, f, e, dep, dp, w, t
    n, m = map(int, input().split())
    for i in range(2, n+1):
        f[i] = int(input())
        e[f[i]].append(i)
        dep[i] = dep[f[i]] + 1
    for i in range(1, m+1):
        x, y, val = map(int, input().split())
        t.clear()
        while x != y:
            if dep[x] > dep[y]:
                t.append(x)
                x = f[x]
            else:
                t.append(y)
                y = f[y]
        t.append(x)
        w[x].append({'vec': list(t), 'val': val})
    dfs(1)
    print(dp[1])

if __name__ == "__main__":
    main()
```

### 换根DP

```python
from collections import defaultdict
def dfs(u, dep, fa):  # 传入当前节点u,深度，父节点
    global sum_depth
    sum_depth += dep  # 加上当前节点u的深度
    # 遍历u的所有子节点
    for v in e[u]:
        if v == fa:
            continue
        dfs(v, dep + 1, u)  # 遍历到子节点
        siz[u] += siz[v]  # 通过这一步，可以统计u所有子节点数
def dfs2(u, fa):  # 用来跟新其余节点为根的解
    for v in e[u]:
        if v == fa:
            continue
        # dp[v] = dp[u] - siz[v] + (n - siz[v])
        dp[v] = dp[u] - 2 * siz[v] + n  # 当前节点v的解=左边变化值+右边变化值
        dfs2(v, u)

n = int(input())
dp = [0] * (n + 1)  # 用来更新不同节点为根时的深度和
siz = [1] * (n + 1)  # 以i为根节点，其左子树的节点数，初始值为1表示仅包含该节点
# 建树
e = defaultdict(list)
for _ in range(n - 1):
    u, v = map(int, input().split())
    e[u].append(v)
    e[v].append(u)
# 第一遍dfs,找到以1为根节点的深度和
sum_depth = 0  # 用来记录深度和
dfs(1, 0, 0)
# 第二遍dfs，求出其余点作为根的答案
dp[1] = sum_depth  # 6
dfs2(1, 0)  # dp=[0, 6, 5, 9, 8, 8]
print(max(dp))
```

## 区间DP

![image-20240526140152840](/images/DSA-KnowledgeOrganization/image-20240526140152840.png)

![image-20240526140205963](/images/DSA-KnowledgeOrganization/image-20240526140205963.png)

### 普通区间DP

#### 模板题——[石子合并](https://www.lanqiao.cn/problems/1233/learning)

```python
n = int(input())
a = [0] + list(map(int, input().split()))
f = [[float('inf')] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    f[i][i] = 0
    a[i] += a[i-1]

for length in range(2, n+1):
    for i in range(1, n-length+2):
        j = i + length - 1
        for k in range(i, j):
            f[i][j] = min(f[i][j], f[i][k] + f[k+1][j] + a[j] - a[i-1])

print(f[1][n])
```

#### 模板题——[涂色](https://www.lanqiao.cn/problems/926/learning)

```python
s = input()
n = len(s)
f = [[float('inf')] * n for _ in range(n)]

for i in range(n):
    f[i][i] = 1

for length in range(2, n+1):
    for i in range(n - length + 1):
        j = i + length - 1
        if s[i] == s[j]:
            f[i][j] = min(f[i + 1][j], f[i][j - 1])
        else:
            for k in range(i, i + length - 1):
                f[i][j] = min(f[i][j], f[i][k] + f[k + 1][j])

print(f[0][n - 1])
```

#### 模板题——[制作回文串](https://www.lanqiao.cn/problems/1547/learning)

```python
m, n = map(int, input().split())
s = input()
w1 = [0] * 30
w2 = [0] * 30
f = [[0] * n for _ in range(n)]

for i in range(m):
    ch, weight1, weight2 = input().split()
    w1[ord(ch) - ord('a')] = int(weight1)
    w2[ord(ch) - ord('a')] = int(weight2)

for length in range(2, n+1):
    for i in range(n - length + 1):
        j = i + length - 1
        if s[i] == s[j]:
            if length == 2:
                f[i][j] = 0
            else:
                f[i][j] = f[i + 1][j - 1]
        else:
            f[i][j] = min(
                f[i + 1][j] + min(w1[ord(s[i]) - ord('a')], w2[ord(s[i]) - ord('a')]),
                f[i][j - 1] + min(w1[ord(s[j]) - ord('a')], w2[ord(s[j]) - ord('a')])
            )

print(f[0][n - 1])
```

### 环形区间DP

#### 模板题——[能量项链](https://www.lanqiao.cn/problems/557/learning)

```python
n = int(input())
v = [0] * (2 * n + 2)
a = [0] + list(map(int, input().split()))

for i in range(1, n + 1):
    v[i] = a[i]
    v[i + n] = v[i]

f = [[0] * (2 * n + 1) for _ in range(2 * n + 1)]

for length in range(2, n + 1):
    for i in range(1, 2 * n - length + 2):
        j = i + length - 1
        for k in range(i, j):
            f[i][j] = max(f[i][j], f[i][k] + f[k + 1][j] + v[i] * v[k + 1] * v[j + 1])

ans = 0
for i in range(1, n + 1):
    ans = max(ans, f[i][i + n - 1])

print(ans)
```

## 状压DP

![image-20240526141319988](/images/DSA-KnowledgeOrganization/image-20240526141319988.png)

![image-20240526141327177](/images/DSA-KnowledgeOrganization/image-20240526141327177-1716704007699-3.png)

#### 模板题——例1

![image-20240526141355192](/images/DSA-KnowledgeOrganization/image-20240526141355192.png)

```python
MAXN = 105
N, M, K = map(int, input().split())
a = [0] * MAXN
f = [float('inf')] * (1  MAXN:
            continue
        f[S | a[i]] = min(f[S | a[i]], f[S] + 1)

print(f[(1 ![image-20240526141422932](/images/DSA-KnowledgeOrganization/image-20240526141422932.png)

```python
import math

maxn = 2100000
f = [float('inf')] * maxn
lowbit = [0] * maxn
line = [[0] * 20 for _ in range(20)]
x = [0.0] * maxn
y = [0.0] * maxn
eps = 1e-8

def equ(a1, b1, c1, a2, b2, c2):
    y = (a1 * c2 - a2 * c1) / (a1 * b2 - a2 * b1)
    x = (c1 - b1 * y) / a1
    return x, y

for i in range(1, (1 ![image-20240524154910861](/images/DSA-KnowledgeOrganization/image-20240524154910861.png)

![image-20240524154926348](/images/DSA-KnowledgeOrganization/image-20240524154926348.png)
![image-20240524154959997](/images/DSA-KnowledgeOrganization/image-20240524154959997.png)

#### 模板题——[约瑟夫环](https://www.lanqiao.cn/problems/1111/learning)

```python
n,k,m=map(int,input().split())
a=list(range(1,n+1))
i=k-1
while a:
    i=(i+(m-1))%len(a)
    print(a.pop(i))
```

### 栈

![image-20240524155117734](/images/DSA-KnowledgeOrganization/image-20240524155117734.png)

#### 模板题——[小蓝的括号串1](https://www.lanqiao.cn/problems/2490/learning)

```python
n=int(input())
s=input()
a=[]
ok=True
for c in s:
    if c == '(':
        a.append(c)
    else:
        if len(a) == 0:
            ok = False
            break
        a.pop()
if ok and len(a) == 0:
    print('Yes')
else:
    print('No')
```

### 队列

![image-20240524173345373](/images/DSA-KnowledgeOrganization/image-20240524173345373.png)

![image-20240524173355058](/images/DSA-KnowledgeOrganization/image-20240524173355058.png)

![image-20240524173423272](/images/DSA-KnowledgeOrganization/image-20240524173423272.png)

#### 模板题——[队列操作](https://www.lanqiao.cn/problems/1519/learning/)

```python
N=int(input())
a=[]
for i in range(N):
    s=list(map(int,input().split()))
    if s[0]==1:
        a.append(s[1])
    elif s[0]==2:
        if a:
            print(a.pop(0))
        else:
            print("no")
    else:
        print(len(a))
```

## 堆

![image-20240524175734507](/images/DSA-KnowledgeOrganization/image-20240524175734507.png)

![image-20240524175709055](/images/DSA-KnowledgeOrganization/image-20240524175709055.png)

![image-20240524180001397](/images/DSA-KnowledgeOrganization/image-20240524180001397.png)

### 优先队列

![image-20240524182115097](/images/DSA-KnowledgeOrganization/image-20240524182115097.png)

![image-20240524182127911](/images/DSA-KnowledgeOrganization/image-20240524182127911.png)

![image-20240524182141588](/images/DSA-KnowledgeOrganization/image-20240524182141588.png)

#### 模板题——[小蓝的神奇复印机](https://www.lanqiao.cn/problems/3749/learning)

```python
from queue import PriorityQueue,Queue
N,X=map(int,input().split())
a=list(map(int,input().split()))
q=Queue()
pq=PriorityQueue()
for i,x in enumerate(a):
  q.put((i,x))
  pq.put(-x)
time=0
while True:
  i,x=q.get()
  if -x==pq.queue[0]:
    pq.get()
    time+=1
    if i==X:
      print(time)
      break
  else:
    q.put((i,x))
```

## ST表

##### RMQ问题

![image-20240524183506581](/images/DSA-KnowledgeOrganization/image-20240524183506581.png)
![image-20240524183726055](/images/DSA-KnowledgeOrganization/image-20240524183726055.png)
![image-20240524183742068](/images/DSA-KnowledgeOrganization/image-20240524183742068.png)
![image-20240524183753258](/images/DSA-KnowledgeOrganization/image-20240524183753258.png)
![image-20240524183803151](/images/DSA-KnowledgeOrganization/image-20240524183803151.png)

## 并查集

### 基础并查集

#### 基础

![image-20240524194242229](/images/DSA-KnowledgeOrganization/image-20240524194242229.png)

![image-20240524194253527](/images/DSA-KnowledgeOrganization/image-20240524194253527.png)
![image-20240524194301781](/images/DSA-KnowledgeOrganization/image-20240524194301781.png)
![image-20240524194309669](/images/DSA-KnowledgeOrganization/image-20240524194309669.png)
![image-20240524194317881](/images/DSA-KnowledgeOrganization/image-20240524194317881.png)

##### 模板题——[蓝桥幼儿园](https://www.lanqiao.cn/problems/1135/learning)

```python
# def Findroot(x):
#     while x!=p[x]:
#         x=p[x]
#     return x
'''使用路径压缩'''
def Findroot(x):
    if x==p[x]:return x
    #路径压缩
    p[x]=Findroot(p[x])
    return p[x]
def Merge(x,y):
    rootx,rooty=Findroot(x),Findroot(y)
    p[rootx]=rooty
def Query(x,y):
    rootx,rooty=Findroot(x),Findroot(y)
    return rootx==rooty
n,m=map(int,input().split())
p=list(range(n+1))
for _ in range(m):
    op,x,y=map(int,input().split())
    if op ==1:
        Merge(x,y)
    else:
        if Query(x,y):
            print("YES")
        else:
            print("NO")
```

#### 路径压缩

![image-20240524195007281](/images/DSA-KnowledgeOrganization/image-20240524195007281.png)

##### 模板题——[星球大战](https://www.lanqiao.cn/problems/828/learning/)

```python
import os
import sys
M = 200010; N = 2 * M
n, m = map(int, input().split())
father = [0] * (n + 10)                 #并查集板块
def init():
    for i in range(n + 10):
        father[i] = i
def find_father(x):
    if x != father[x]: father[x] = find_father(father[x])
    return father[x]
def unite(x, y):
    father[find_father(x)] = find_father(y)
come = [0] * N; to = [0] * N;   #存储每个边
g = [[] for _ in range(N)]      #邻接表
for i in range(m):
    a, b = map(int, input().split())
    g[a].append(b); g[b].append(a)
    come[i] = a; to[i] = b 
broken = [0] * (n + 10)                     #记录每个点是否被修坏
destroy = []
k = int(input())
for i in range(k):
    b = int(input())
    broken[b] = 1
    destroy.append(b)
init()
res = n - k             #先计算所有剩下星球的连通块数，(最后一轮的结果)
for i in range(m):
    l = come[i]; r = to[i]
    fl, fr = find_father(l), find_father(r)
    if not broken[l] and not broken[r] and fl != fr:
        res -= 1
        #unite(l, r)
        father[fl] = fr
ans = [res]
for i in range(len(destroy) - 1, -1, -1):       #顺序破坏，相当于倒序修建
    c = destroy[i]
    broken[c] = 0
    res += 1                                    #修好一个星球，连通块会多一个
    for j in g[c]:
        fc, fp = find_father(c), find_father(j)
        if not broken[j] and fc != fp:
            res -= 1
            father[fc] = fp
    ans.append(res)
for i in range(len(ans) - 1, -1, -1):           #倒序输出结果
    print(ans[i])
```

### 可撤销并查集

![image-20240524203431727](/images/DSA-KnowledgeOrganization/image-20240524203431727.png)

![image-20240524203449967](/images/DSA-KnowledgeOrganization/image-20240524203449967.png)

![image-20240524203621861](/images/DSA-KnowledgeOrganization/image-20240524203621861.png)

![image-20240524203634004](/images/DSA-KnowledgeOrganization/image-20240524203634004.png)
![image-20240524203643547](/images/DSA-KnowledgeOrganization/image-20240524203643547.png)
![image-20240524203712193](/images/DSA-KnowledgeOrganization/image-20240524203712193.png)

![image-20240524203728659](/images/DSA-KnowledgeOrganization/image-20240524203728659.png)

![image-20240524203741431](/images/DSA-KnowledgeOrganization/image-20240524203741431.png)

![image-20240524203752845](/images/DSA-KnowledgeOrganization/image-20240524203752845.png)

![image-20240524203808480](/images/DSA-KnowledgeOrganization/image-20240524203808480.png)

![image-20240524203837465](/images/DSA-KnowledgeOrganization/image-20240524203837465.png)

![image-20240524203855506](/images/DSA-KnowledgeOrganization/image-20240524203855506.png)

![image-20240524203906020](/images/DSA-KnowledgeOrganization/image-20240524203906020.png)

#### 可撤销并查集定义

![image-20240524203916807](/images/DSA-KnowledgeOrganization/image-20240524203916807.png)

![image-20240524203959912](/images/DSA-KnowledgeOrganization/image-20240524203959912.png)
![image-20240524204009818](/images/DSA-KnowledgeOrganization/image-20240524204009818.png)
![image-20240524204018333](/images/DSA-KnowledgeOrganization/image-20240524204018333.png)
![image-20240524204035190](/images/DSA-KnowledgeOrganization/image-20240524204035190.png)
![image-20240524204043804](/images/DSA-KnowledgeOrganization/image-20240524204043804.png)
![image-20240524204055615](/images/DSA-KnowledgeOrganization/image-20240524204055615.png)
![image-20240524204106056](/images/DSA-KnowledgeOrganization/image-20240524204106056.png)
![image-20240524204120154](/images/DSA-KnowledgeOrganization/image-20240524204120154.png)

#### 算法原理

![image-20240524204147436](/images/DSA-KnowledgeOrganization/image-20240524204147436.png)
![image-20240524204158246](/images/DSA-KnowledgeOrganization/image-20240524204158246.png)

### 带权并查集

![image-20240526102401075](/images/DSA-KnowledgeOrganization/image-20240526102401075.png)

![image-20240526102412755](/images/DSA-KnowledgeOrganization/image-20240526102412755.png)

![image-20240526102423880](/images/DSA-KnowledgeOrganization/image-20240526102423880.png)

![image-20240526102443080](/images/DSA-KnowledgeOrganization/image-20240526102443080.png)

![image-20240526102451528](/images/DSA-KnowledgeOrganization/image-20240526102451528.png)

## 树上问题

### 树的基本概念

![image-20240526102633616](/images/DSA-KnowledgeOrganization/image-20240526102633616.png)
![image-20240526102641495](/images/DSA-KnowledgeOrganization/image-20240526102641495.png)
![image-20240526102651200](/images/DSA-KnowledgeOrganization/image-20240526102651200.png)

![image-20240526102714548](/images/DSA-KnowledgeOrganization/image-20240526102714548.png)

#### 二叉树

![image-20240526102917869](/images/DSA-KnowledgeOrganization/image-20240526102917869.png) 	
![image-20240526102815444](/images/DSA-KnowledgeOrganization/image-20240526102815444.png)

![image-20240526102945303](/images/DSA-KnowledgeOrganization/image-20240526102945303.png)

#### 模板题——[完全二叉树的权值](https://www.lanqiao.cn/problems/183/learning)

```python
import math

s = []
n = int(input())
x = list(map(int, input().split()))

deep = int(math.log(n, 2)) + 1  # 完全二叉树求深度公式
for i in range(deep):  # 按层数来遍历
    s.append(sum(x[2 ** i - 1:2 ** i + 2 ** i - 1]))  # 切片出每层的节点，并计算其权值
print(s.index(max(s)) + 1)  # 找出权值最大的层级，并返回其索引
```

![image-20240526103231454](/images/DSA-KnowledgeOrganization/image-20240526103231454.png)

### 树的遍历

![image-20240526103255622](/images/DSA-KnowledgeOrganization/image-20240526103255622.png)

#### 先序遍历

![image-20240526103305459](/images/DSA-KnowledgeOrganization/image-20240526103305459.png)

![image-20240526103325159](/images/DSA-KnowledgeOrganization/image-20240526103325159.png)

#### 中序遍历

![image-20240526103335871](/images/DSA-KnowledgeOrganization/image-20240526103335871.png)

#### 后序遍历

![image-20240526103352924](/images/DSA-KnowledgeOrganization/image-20240526103352924.png)

#### 层序遍历

![image-20240526103409405](/images/DSA-KnowledgeOrganization/image-20240526103409405.png)

#### 树的遍历

![image-20240526103902993](/images/DSA-KnowledgeOrganization/image-20240526103902993.png)

![image-20240526103916051](/images/DSA-KnowledgeOrganization/image-20240526103916051.png)
![image-20240526103926976](/images/DSA-KnowledgeOrganization/image-20240526103926976.png)

#### 模板题——[欧涛爬树](https://www.lanqiao.cn/problems/3039/learning/)

```python
import sys
sys.setrecursionlimit(100000)
input=sys.stdin.readline
def dfs(u,fa):#进行判断是否是叶子节点
    path.append(s[u])
    flag=True
    for v in G[u]:
        if v==fa:continue
        dfs(v,u)
        flag=False
    if flag:
        S.add(''.join(path))
    path.pop()

while True:
    try:
        n=int(input())
        #邻接表进行存放树
        G=[[] for _ in range(n+1)]
        s=' '+input()
        for _ in range(n-1):
            u,v=map(int,input().split())
            G[u].append(v)
            G[v].append(u)
        path=[]
        S=set()
        dfs(1,-1)
        print(len(S))
    except:
        break
```

```python
def read():
    import sys
    return sys.stdin.readline().strip()

def dfs(root, fa):
    path.append(s[root])
    flag = True
    for to in vis[root]:
        if to == fa:
            continue
        dfs(to, root)
        flag = False
    if flag:
        result.add("".join(path))
    path.pop()

# 多次输入模板
while True:
    try:
        n = int(read())
        s = read()
        vis = [[] for _ in range(n)]
        for _ in range(n - 1):
            u, v = map(int, read().split())
            u -= 1
            v -= 1
            vis[u].append(v)
            vis[v].append(u)
        result = set()
        path = []
        dfs(0, -1)
        print(len(result))
    except:
        break
```

### 树的直径与重心

#### 树的直径

![image-20240526104404857](/images/DSA-KnowledgeOrganization/image-20240526104404857.png)

![image-20240526104428203](/images/DSA-KnowledgeOrganization/image-20240526104428203.png)

![image-20240526104454203](/images/DSA-KnowledgeOrganization/image-20240526104454203.png)

#### 模板题——[直径](https://www.lanqiao.cn/problems/1394/learning)

```python
import os
import sys

input = sys.stdin.readline
sys.setrecursionlimit(100000)
def dfs(u, fa, pre=None):
    global S
    if d[u] > d[S]: S = u
    for v, w in G[u]:
        if v == fa: continue
        d[v] = d[u] + w
        if pre: pre[v] = u
        dfs(v, u, pre)
n = int(input())
G = [[] for i in range(n + 1)]
d = [0] * (n + 1)
pre = [0] * (n + 1)
for _ in range(n - 1):
    u, v, w = map(int, input().split())
    G[u].append([v, w])
    G[v].append([u, w])
S = 1
dfs(1, 0)
d[S] = 0
dfs(S, 0, pre)
L = [S]
L_list = set()
while S != 0:
    L_list.add(S)
    S = pre[S]
for u in L_list:
    for i, (v, w) in enumerate(G[u]):
        if v in L_list:
            G[u][i] = [v, w - 1]
S = 1
dfs(1, 0)
d[S] = 0
dfs(S, 0)
L2 = d[S]
print(L)
print(L - L2)
```

![image-20240526105912364](/images/DSA-KnowledgeOrganization/image-20240526105912364.png)

### LCA

#### 最近公共祖先

![image-20240526105959804](/images/DSA-KnowledgeOrganization/image-20240526105959804.png)

![image-20240526110010233](/images/DSA-KnowledgeOrganization/image-20240526110010233.png)

![image-20240526110018355](/images/DSA-KnowledgeOrganization/image-20240526110018355.png)
![image-20240526110031858](/images/DSA-KnowledgeOrganization/image-20240526110031858.png)
![image-20240526110040710](/images/DSA-KnowledgeOrganization/image-20240526110040710.png)
![image-20240526110052606](/images/DSA-KnowledgeOrganization/image-20240526110052606.png)

#### 模板题——[最近公共祖先LCA查询](https://www.lanqiao.cn/problems/4385/learning)

```python
import os
import sys

#设置deep数组表示深度。
#front数组，表示节点u,前2**i层的爹是谁？？？
n=int(input())
tree=[[] for _ in range(n+1)]
fornt=[[0]*(21) for _ in range(n+1)]#如果你是0你就是孤儿。
deep=[0]*(n+1)#0节点没有层数。
for i in range(n-1):
  u,v=map(int,input().split())
  tree[u].append(v)

def dfs(er,die):
  if die==0:
    deep[er]=1#这是第一层,同时，第一层也没有爹啊，也不需要更新如何层数相关节点。

  else:
    deep[er]=deep[die]+1#更新层数。
    fornt[er][0]=die#上一层的点，就是die。
    for cc in range(1,21):
      if fornt[fornt[er][cc-1]][cc-1]!=0:

        fornt[er][cc]=fornt[fornt[er][cc-1]][cc-1]
        #倍增法。2**i层之上的点=
        #2**(cc-1)上面的点的上面2**(cc-1)的点。就，无限套娃。
  
  for i in tree[er]:
    dfs(i,er)#儿子变成新的爹。
dfs(1,0)#儿子是根，爹不存在。

def find(x,y):
  #第一步，拉升。将x拉到和y一个水平。一开始走2**20步，太大，就走2**19步，然后走一半，再走一半
  #就像那个乌龟与跑步哥一样。二进制原理使得这个步数遍历后一定是一个高度。
  for i in range(20,-1,-1):
    if deep[fornt[x][i]]>=deep[y] and fornt[x][i]!=0:
      x=fornt[x][i]#自动判断能走不能走，能走则走一大步。x提升到别的节点。

  #此时提升必定一样了。
  if x==y:
    return x#原来你就是我爹！
  
  else:#不是？我们再度提升吧！神明！
    for i in range(20,-1,-1):
      if fornt[x][i]!=fornt[y][i] and fornt[x][i]!=0 and fornt[y][i]!=0:#相等反而不能决定什么，因为可能不是最近的公共祖先
        x=fornt[x][i]
        y=fornt[y][i]
    return fornt[y][0]#最后，y上面的就是自己的公共祖先。
q=int(input())
for i in range(q):
  x,y=map(int,input().split())
  if deep[x]![image-20240526110829760](/images/DSA-KnowledgeOrganization/image-20240526110829760.png)
![image-20240526110840432](/images/DSA-KnowledgeOrganization/image-20240526110840432.png)
![image-20240526110850262](/images/DSA-KnowledgeOrganization/image-20240526110850262.png)
![image-20240526110859590](/images/DSA-KnowledgeOrganization/image-20240526110859590.png)

#### 问题引入

![image-20240526110924343](/images/DSA-KnowledgeOrganization/image-20240526110924343.png)

![image-20240526110933963](/images/DSA-KnowledgeOrganization/image-20240526110933963.png)

![image-20240526110943437](/images/DSA-KnowledgeOrganization/image-20240526110943437.png)

![image-20240526110952759](/images/DSA-KnowledgeOrganization/image-20240526110952759.png)

![image-20240526111012615](/images/DSA-KnowledgeOrganization/image-20240526111012615.png)

![image-20240526111135950](/images/DSA-KnowledgeOrganization/image-20240526111135950.png)

#### 模板题——

```python
import sys
import math
from collections import defaultdict

maxn = 110000
n, k = map(int, sys.stdin.readline().split())
maxx = int(math.log2(n))
edge = defaultdict(list)
head = [0] * (n + 1)
dep = [0] * (n + 1)
dlt = [0] * (n + 1)
fa = [[0] * 20 for _ in range(n + 1)]
cnt = 0

def add_edge(a, b, dis):
    global cnt
    cnt += 1
    edge[cnt] = [head[a], b, dis]
    head[a] = cnt
    cnt += 1
    edge[cnt] = [head[b], a, dis]
    head[b] = cnt

for _ in range(n - 1):
    a, b, dis = map(int, sys.stdin.readline().split())
    add_edge(a, b, dis)

dfs(1)

for _ in range(k):
    a, b, x = map(int, sys.stdin.readline().split())
    dlt[a] += x
    dlt[b] += x
    c = lca(a, b)
    dlt[c] -= 2 * x

dfs1(1)

for i in range(1, n + 1):
    print(dlt[i], end=' ')
print()
```

### DFS序

![image-20240526111342883](/images/DSA-KnowledgeOrganization/image-20240526111342883.png)

![image-20240526111358571](/images/DSA-KnowledgeOrganization/image-20240526111358571.png)

![image-20240526111411449](/images/DSA-KnowledgeOrganization/image-20240526111411449.png)

![image-20240526111421595](/images/DSA-KnowledgeOrganization/image-20240526111421595.png)

![image-20240526111429485](/images/DSA-KnowledgeOrganization/image-20240526111429485.png)

![image-20240526111439242](/images/DSA-KnowledgeOrganization/image-20240526111439242.png)

![image-20240526111454557](/images/DSA-KnowledgeOrganization/image-20240526111454557.png)

![image-20240526111510842](/images/DSA-KnowledgeOrganization/image-20240526111510842.png)

![image-20240526111525573](/images/DSA-KnowledgeOrganization/image-20240526111525573.png)

![image-20240526111537764](/images/DSA-KnowledgeOrganization/image-20240526111537764.png)

![image-20240526111549957](/images/DSA-KnowledgeOrganization/image-20240526111549957.png)

![image-20240526111604828](/images/DSA-KnowledgeOrganization/image-20240526111604828.png)

![image-20240526111613985](/images/DSA-KnowledgeOrganization/image-20240526111613985.png)
![image-20240526111621233](/images/DSA-KnowledgeOrganization/image-20240526111621233.png)
![image-20240526111628644](/images/DSA-KnowledgeOrganization/image-20240526111628644.png)
![image-20240526111634702](/images/DSA-KnowledgeOrganization/image-20240526111634702.png)
![image-20240526111645145](/images/DSA-KnowledgeOrganization/image-20240526111645145.png)
![image-20240526111654060](/images/DSA-KnowledgeOrganization/image-20240526111654060.png)

#### 模板题——[异或和](https://www.lanqiao.cn/problems/3549/learning)

##### dfs序和树状数组

```python
n, m = map(int, input().split())
v = [0] + list(map(int, input().split()))
g = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    u, va = map(int, input().split())
    g[u].append(va)
    g[va].append(u)

tree = [0] * (n + 1)
a = [[0, 0] for _ in range(n + 1)] # 存dfs序
cnt = 0
def dfs(node, fa):
    global cnt
    cnt += 1
    a[node][0] = cnt
    for i in g[node]:
        if i != fa:
            dfs(i, node)
    a[node][1] = cnt
dfs(1, 0)

def lowbit(x):
    return x & (-x)

def update(x, d):
    while x  dep[node]:
            li.append(a[i])
            dfs(i)

def query(n):
    global li
    li = [a[n]]
    dfs(n)
    ans = li[0]
    for i in range(1, len(li)):
        ans = ans ^ li[i]
    print(ans)

def change(x, y):
    a[x] = y

for _ in range(m):
    o = list(map(int, input().split()))
    if o[0] == 2: query(o[1])
    else: change(o[1], o[2])
```

利用邻接表打印树结构，然后根据子树根节点寻找打印子树的元素，存到列表中，最后对列表的所有元素（即子树的所有点）进行异或和运算

```python
import os
import sys

n, m = map(int, input().split())  # 读取输入的 n 和 m
value = list(map(int, input().split()))  # 读取输入的值列表
value.insert(0, 0)  # 在值列表的最前面插入 0,根节点为1，索引从1开始
yihuo = []  # 存储异或运算结果的列表
tree = [[] for _ in range(n + 1)]  # 初始化邻接表,表示树结构
for i in range(n - 1):  # 读取 n-1 次输入
    a, b = map(int, input().split())
    a, b = min(a, b), max(a, b)
    tree[a].append(b)  # 在 a 结点的邻接表中添加 b 结点，说明b为a的子节点
for i in range(m):  # 读取 m 次操作输入
    op = list(map(int, input().split()))
    if op[0] == 1:  # 如果是操作 1
        value[op[1]] = op[2]  # 更新点权
    else:  # 如果是操作 2
        x = op[1]#子树根节点
        vis = [x]  # 把子树存到该列表里
        qfront = 0  # 队列的头指针
        qend = 1  # 队列的尾指针
        while qfront != qend:  # 当队列不为空时
            if tree[vis[qfront]] != []:  # 该节点有子节点
                vis.extend(tree[vis[qfront]])  # 将子节点存到子树中
                qend += len(tree[vis[qfront]])  # 更新队列的尾指针
            qfront += 1  # 更新队列的头指针
        ans = value[vis[0]]  # 初始化异或运算的结果
        for i in range(1, len(vis)):  # 遍历访问列表中的结点
            ans ^= value[vis[i]]  # 对每个结点的值进行异或运算
        yihuo.append(ans)  # 将异或运算的结果加入到结果列表中
for i in yihuo:  # 遍历结果列表
    print(i)  # 输出每个异或运算的结果
```

### 树链剖分

![image-20240526112353706](/images/DSA-KnowledgeOrganization/image-20240526112353706.png)

![image-20240526112401255](/images/DSA-KnowledgeOrganization/image-20240526112401255.png)

#### 重链部分

![image-20240526112422998](/images/DSA-KnowledgeOrganization/image-20240526112422998.png)

![image-20240526112438353](/images/DSA-KnowledgeOrganization/image-20240526112438353.png)

![image-20240526112446340](/images/DSA-KnowledgeOrganization/image-20240526112446340.png)

![image-20240526112453669](/images/DSA-KnowledgeOrganization/image-20240526112453669.png)

![image-20240526112501407](/images/DSA-KnowledgeOrganization/image-20240526112501407.png)

![image-20240526112511133](/images/DSA-KnowledgeOrganization/image-20240526112511133-1716693912043-1.png)

![image-20240526112520973](/images/DSA-KnowledgeOrganization/image-20240526112520973.png)

![image-20240526112528251](/images/DSA-KnowledgeOrganization/image-20240526112528251.png)

![image-20240526112534620](/images/DSA-KnowledgeOrganization/image-20240526112534620.png)
![image-20240526112540265](/images/DSA-KnowledgeOrganization/image-20240526112540265.png)
![image-20240526112547668](/images/DSA-KnowledgeOrganization/image-20240526112547668.png)
![image-20240526112554018](/images/DSA-KnowledgeOrganization/image-20240526112554018.png)
![image-20240526112600918](/images/DSA-KnowledgeOrganization/image-20240526112600918.png)
![image-20240526112606842](/images/DSA-KnowledgeOrganization/image-20240526112606842.png)
![image-20240526112612323](/images/DSA-KnowledgeOrganization/image-20240526112612323.png)
![image-20240526112617087](/images/DSA-KnowledgeOrganization/image-20240526112617087.png)
![image-20240526112624067](/images/DSA-KnowledgeOrganization/image-20240526112624067.png)
![image-20240526112632456](/images/DSA-KnowledgeOrganization/image-20240526112632456.png)
![image-20240526112636784](/images/DSA-KnowledgeOrganization/image-20240526112636784.png)
![image-20240526112641641](/images/DSA-KnowledgeOrganization/image-20240526112641641.png)
![image-20240526112646496](/images/DSA-KnowledgeOrganization/image-20240526112646496.png)
![image-20240526112653107](/images/DSA-KnowledgeOrganization/image-20240526112653107.png)
![image-20240526112657735](/images/DSA-KnowledgeOrganization/image-20240526112657735.png)
![image-20240526112703078](/images/DSA-KnowledgeOrganization/image-20240526112703078.png)
![image-20240526112709755](/images/DSA-KnowledgeOrganization/image-20240526112709755.png)

#### 树链部分的性质

![image-20240526112730804](/images/DSA-KnowledgeOrganization/image-20240526112730804.png)

![image-20240526112737253](/images/DSA-KnowledgeOrganization/image-20240526112737253.png)

![image-20240526112746989](/images/DSA-KnowledgeOrganization/image-20240526112746989.png)
![image-20240526112753152](/images/DSA-KnowledgeOrganization/image-20240526112753152.png)
![image-20240526112759297](/images/DSA-KnowledgeOrganization/image-20240526112759297.png)
![image-20240526112805144](/images/DSA-KnowledgeOrganization/image-20240526112805144.png)
![image-20240526112810692](/images/DSA-KnowledgeOrganization/image-20240526112810692.png)
![image-20240526112816453](/images/DSA-KnowledgeOrganization/image-20240526112816453.png)

![image-20240526112839302](/images/DSA-KnowledgeOrganization/image-20240526112839302.png)
![image-20240526112846421](/images/DSA-KnowledgeOrganization/image-20240526112846421.png)
![image-20240526112851218](/images/DSA-KnowledgeOrganization/image-20240526112851218.png)
![image-20240526112856579](/images/DSA-KnowledgeOrganization/image-20240526112856579.png)
![image-20240526112901873](/images/DSA-KnowledgeOrganization/image-20240526112901873.png)
![image-20240526112907428](/images/DSA-KnowledgeOrganization/image-20240526112907428.png)
![image-20240526112913595](/images/DSA-KnowledgeOrganization/image-20240526112913595.png)
![image-20240526112918708](/images/DSA-KnowledgeOrganization/image-20240526112918708.png)
![image-20240526112923449](/images/DSA-KnowledgeOrganization/image-20240526112923449.png)

## 树形数据结构

### 树状数组基础

#### lowbit操作

![image-20240526113101030](/images/DSA-KnowledgeOrganization/image-20240526113101030.png)

#### 树状数组

![image-20240526113114986](/images/DSA-KnowledgeOrganization/image-20240526113114986.png)

![image-20240526113123838](/images/DSA-KnowledgeOrganization/image-20240526113123838.png)

![image-20240526113132131](/images/DSA-KnowledgeOrganization/image-20240526113132131.png)

![image-20240526113141135](/images/DSA-KnowledgeOrganization/image-20240526113141135.png)

#### 模板题——[单点修改，区间查询](https://www.lanqiao.cn/problems/2340/learning/)

```python
N = 100100
#初始化树状数组 为0
f = [0] * N

#求下标为x的最小区间长度
def lowbit(x):
    return x & (-x)

#树状数组更新函数
def upd(pos,v):#pos：下标 v：值
    #在下标为pos的区间加上v 并且在每个有包含pos的大区间加上v
    #包含当前区间的大区间：在pos的位置上加lowbit(pos)便能得到大区间
    while pos  0:#加上组成pos每一个区间的和
        res += f[pos]
        pos -= lowbit(pos)
    return res

n = int(input())
data = input().split()

for i in range(0,n):
    x = int(data[i])
    #树状数组初始化都为0，需要将原数组每个值通过upd方法将每个值加入树状数组
    upd(i+1,x)

m = int(input())
for _ in range(m):
    opt,a,b = map(int,input().split())
    if opt == 1:
        upd(a,b)#更新
    else:
        #区间[a,b] = [1,b] - [1,a-1]
        print(get(b) - get(a-1))
```

```python
import os
import sys
N = int(input())
n = list(map(int,input().split()))
m = int(input())
for i in range(m):
  s,a,b = map(int,input().split())
  if s == 1:
    n[a-1] += b
  if s == 2:
    print(sum(n[a-1:b]))
```

![image-20240526113358856](/images/DSA-KnowledgeOrganization/image-20240526113358856.png)

#### 树状数组

![image-20240526113430755](/images/DSA-KnowledgeOrganization/image-20240526113430755.png)

#### 模板题——[殷老师排队](https://www.lanqiao.cn/problems/3620/learning/)

```python
import os
import sys

def lowbit(x):
  return x & (-x)
def query(x):
  ans = 0
  while x:
    ans += tree[x]
    x -= lowbit(x)
  return ans 
def add(x,y):
  while x ![image-20240526113722203](/images/DSA-KnowledgeOrganization/image-20240526113722203.png)

![image-20240526113730769](/images/DSA-KnowledgeOrganization/image-20240526113730769.png)

![image-20240526113742110](/images/DSA-KnowledgeOrganization/image-20240526113742110.png)
![image-20240526113748208](/images/DSA-KnowledgeOrganization/image-20240526113748208.png)
![image-20240526113754750](/images/DSA-KnowledgeOrganization/image-20240526113754750.png)

#### 模板题——

![image-20240526113904670](/images/DSA-KnowledgeOrganization/image-20240526113904670.png)

### 树状数组上二分

![image-20240526113950824](/images/DSA-KnowledgeOrganization/image-20240526113950824.png)
![image-20240526113958446](/images/DSA-KnowledgeOrganization/image-20240526113958446.png)
![image-20240526114007562](/images/DSA-KnowledgeOrganization/image-20240526114007562.png)
![image-20240526114020291](/images/DSA-KnowledgeOrganization/image-20240526114020291.png)
![image-20240526114102890](/images/DSA-KnowledgeOrganization/image-20240526114102890.png)
![image-20240526114113384](/images/DSA-KnowledgeOrganization/image-20240526114113384.png)
![image-20240526114124229](/images/DSA-KnowledgeOrganization/image-20240526114124229.png)
![image-20240526114131782](/images/DSA-KnowledgeOrganization/image-20240526114131782.png)

#### 模板题——

```python
maxn = 110000
ans = [0] * maxn
tree = [0] * maxn
a = [0] * maxn

def lowbit(x):
    return x & -x

def add(pos, x):
    while pos  0:
        res += tree[pos]
        pos -= lowbit(pos)
    return res

n = int(input())
nums = list(map(int, input().strip().split()))
for i in range(1, n + 1):
    a[i] = nums[i - 1]
    add(i, 1)

for i in range(n, 0, -1):
    l, r = 1, n
    while l ![image-20240526121216936](/images/DSA-KnowledgeOrganization/image-20240526121216936.png)

![image-20240526121240169](/images/DSA-KnowledgeOrganization/image-20240526121240169.png)

![image-20240526121250475](/images/DSA-KnowledgeOrganization/image-20240526121250475.png)

![image-20240526121357462](/images/DSA-KnowledgeOrganization/image-20240526121357462.png)

![image-20240526121408234](/images/DSA-KnowledgeOrganization/image-20240526121408234.png)

![image-20240526121446955](/images/DSA-KnowledgeOrganization/image-20240526121446955.png)

![image-20240526121517887](/images/DSA-KnowledgeOrganization/image-20240526121517887.png)

![image-20240526121505465](/images/DSA-KnowledgeOrganization/image-20240526121505465.png)

![image-20240526121533131](/images/DSA-KnowledgeOrganization/image-20240526121533131.png)

![image-20240526121542078](/images/DSA-KnowledgeOrganization/image-20240526121542078.png)

#### 例题

![image-20240526121653108](/images/DSA-KnowledgeOrganization/image-20240526121653108.png)

```c
struct Tree {
    int l, r, n, ls, rs;
}

void update(int &t, int l, int r, int pos, int n) {
    if (!t) {
        t = ++ cnt;
        tree[t].l = l;
        tree[t].r = r;
    }
    if (l == r) {
        tree[t].n = n;
        return;
    }
    int mid = (l + r) >> 1;
    if (pos > 1;
    if (r  mid) {
        return getnum(tree[t].rs, l, r);
    } else {
        return getnum(tree[t].ls, l, mid) + getnum(tree[t].rs, mid + 1, r);
    }
}
```

### 线段树-标记永久化

![image-20240526121717724](/images/DSA-KnowledgeOrganization/image-20240526121717724.png)

![image-20240526121729855](/images/DSA-KnowledgeOrganization/image-20240526121729855.png)

![image-20240526121746997](/images/DSA-KnowledgeOrganization/image-20240526121746997.png)

![image-20240526121821681](/images/DSA-KnowledgeOrganization/image-20240526121821681.png)

![image-20240526121831175](/images/DSA-KnowledgeOrganization/image-20240526121831175.png)

![image-20240526121847400](/images/DSA-KnowledgeOrganization/image-20240526121847400.png)

![image-20240526121855524](/images/DSA-KnowledgeOrganization/image-20240526121855524.png)

![image-20240526121904894](/images/DSA-KnowledgeOrganization/image-20240526121904894.png)

![image-20240526121912575](/images/DSA-KnowledgeOrganization/image-20240526121912575.png)

#### 案例

```c
void build(int t, int l, int r, int *v) {
    _l[t] = l;
    _r[t] = r;
    if (l == r) {
        _v[t] = v[l];
        return ;
    }
    int mid = (l + r) >> 1;
    build(t > 1;
    if (r  mid) {
        update(t > 1;
    if (r  mid) {
        return getv(t ![image-20240526124453903](/images/DSA-KnowledgeOrganization/image-20240526124453903.png)

![image-20240526124459467](/images/DSA-KnowledgeOrganization/image-20240526124459467.png)

![image-20240526124505523](/images/DSA-KnowledgeOrganization/image-20240526124505523.png)
![image-20240526124509905](/images/DSA-KnowledgeOrganization/image-20240526124509905.png)

![image-20240526124524019](/images/DSA-KnowledgeOrganization/image-20240526124524019.png)
![image-20240526124529840](/images/DSA-KnowledgeOrganization/image-20240526124529840.png)
![image-20240526124537171](/images/DSA-KnowledgeOrganization/image-20240526124537171.png)
![image-20240526124545230](/images/DSA-KnowledgeOrganization/image-20240526124545230.png)

```c++
void build(int t, int l, int r) {
    _l[t] = l;
    _r[t] = r;
    _v[t] = _E;
    if (l == r) {
        return ;
    }
    int mid = (l + r) >> 1;
    build(t > 1;
    if (pos > 1;
    if (r  mid) {
        return getv(t ![image-20240526124653609](/images/DSA-KnowledgeOrganization/image-20240526124653609.png)

![image-20240526124700848](/images/DSA-KnowledgeOrganization/image-20240526124700848.png)

![image-20240526124710439](/images/DSA-KnowledgeOrganization/image-20240526124710439.png)

![image-20240526124717847](/images/DSA-KnowledgeOrganization/image-20240526124717847.png)

![image-20240526124726230](/images/DSA-KnowledgeOrganization/image-20240526124726230.png)

![image-20240526124754241](/images/DSA-KnowledgeOrganization/image-20240526124754241.png)

```python
bs1= []
bs2= []
mod1 = 998244353
mod2 = 19260817
bas = 233
s = []

class asdf:
    def __init__(self, h1, h2, length):
        self.h1 = h1
        self.h2 = h2
        self.length = length
    
    def __add__(self, c):
        return asdf((self.h1 * bs1[c.length] + c.h1) % mod1, (self.h2 * bs2[c.length] + c.h2) % mod2, self.length + c.length)
    
    def __eq__(self, c):
        return self.h1 == c.h1 and self.h2 == c.h2 and self.length == c.length

def build(l, r, rt):
    if l == r:
        s[rt] = asdf(ord(a[l]), ord(a[l]), 1)
        return s[rt]
    s[rt] = build(l, (l + r) // 2, rt * 2) + build((l + r) // 2 + 1, r, rt * 2 + 1)
    return s[rt]

def query(l, r, rt, x, y):
    if x  (l + r) // 2:
        return query((l + r) // 2 + 1, r, rt * 2 + 1, x, y)
    return query(l, (l + r) // 2, rt * 2, x, y) + query((l + r) // 2 + 1, r, rt * 2 + 1, x, y)

def modify(l, r, rt, ad, ch):
    if l == r:
        s[rt] = asdf(ord(ch), ord(ch), 1)
        return s[rt]
    if ad ![image-20240526122146448](/images/DSA-KnowledgeOrganization/image-20240526122146448.png)

![image-20240526122158524](/images/DSA-KnowledgeOrganization/image-20240526122158524.png)

![image-20240526122211004](/images/DSA-KnowledgeOrganization/image-20240526122211004.png)

![image-20240526122219620](/images/DSA-KnowledgeOrganization/image-20240526122219620.png)

![image-20240526122228761](/images/DSA-KnowledgeOrganization/image-20240526122228761.png)

![image-20240526122248198](/images/DSA-KnowledgeOrganization/image-20240526122248198.png)

![image-20240526122258158](/images/DSA-KnowledgeOrganization/image-20240526122258158.png)

![image-20240526122329330](/images/DSA-KnowledgeOrganization/image-20240526122329330.png)
![image-20240526122339224](/images/DSA-KnowledgeOrganization/image-20240526122339224.png)

![image-20240526122353739](/images/DSA-KnowledgeOrganization/image-20240526122353739.png)

#### 可持久化线段树

```c
struct NODE {
    int v, ls, rs;
}

struct SEGTREE {
    int cnt = 0;
    int root[MAXN > 1;
    if (pos > 1;
    if (r  mid) {
        return getV(node[t].rs, mid + 1, _r, l, r);
    } else {
        return getV(node[t].ls, _l, mid, l, mid)
            + getV(node[t].rs, mid + 1, _r, mid + 1, r);
    }
}
```

#### 模板题——[区间第k小](https://www.lanqiao.cn/problems/1132/learning/)

```c
#include
using namespace std;
#define lc(x) tr[x].l
#define rc(x) tr[x].r
const int N=2e5+6;
int n,m,a[N],b[N];
struct Node {
 int l,r,s;//左右儿子，该节点在值域中的个数
}tr[N*20];
int idx,root[N];
void build(int &x,int l,int r)
{
    x=++idx;
    if(l==r)return ;
    int mid=(l+r)>>1;
    build(lc(x),l,mid);
    build(rc(x),mid+1,r);
}
void update(int x,int &y,int l,int r,int v)
{
    y=++idx;
    tr[y]=tr[x];
    tr[y].s++;
    if(l==r)return;
    int mid=(l+r)>>1;
    if(v>1;
    int s=tr[lc(y)].s-tr[lc(x)].s;
    if(k>n>>m;
    for(int i=1;i>a[i];
        b[i]=a[i];
    }
    sort(b+1,b+1+n);
    int bn=unique(b+1,b+1+n)-b-1;
    build(root[0],1,bn);
    for(int i=1;i>l>>r>>k;
        int id=query(root[l-1],root[r],1,bn,k);
        cout![image-20240526122721288](/images/DSA-KnowledgeOrganization/image-20240526122721288.png)
![image-20240526122730203](/images/DSA-KnowledgeOrganization/image-20240526122730203.png)

![image-20240526122740484](/images/DSA-KnowledgeOrganization/image-20240526122740484.png)

![image-20240526122748677](/images/DSA-KnowledgeOrganization/image-20240526122748677.png)

![image-20240526122757899](/images/DSA-KnowledgeOrganization/image-20240526122757899.png)

#### 二维数点

![image-20240526122820094](/images/DSA-KnowledgeOrganization/image-20240526122820094.png)

![image-20240526122808099](/images/DSA-KnowledgeOrganization/image-20240526122808099.png)

![image-20240526122858486](/images/DSA-KnowledgeOrganization/image-20240526122858486.png)

```c++
#include
using namespace std;
#define maxn 110000
struct Point{
    int x,y;
}point[maxn];
struct Rect{
    int p1,p2,q1,q2,id;
}rect[maxn];
int n,m,ans[maxn];
int len[maxn],cnt;
bool cmp(const Point &a,const Point &b){
    return a.x >1;
    if(xmid)add(rt>1;
    int ans=0;
    if(xmid)ans+=query(rtpoint[pos+1].x&&pos=point[pos+1].x&&pos![image-20240526122034271](/images/DSA-KnowledgeOrganization/image-20240526122034271.png)

![image-20240526122046309](/images/DSA-KnowledgeOrganization/image-20240526122046309.png)

![image-20240526122055269](/images/DSA-KnowledgeOrganization/image-20240526122055269.png)

![image-20240526122104347](/images/DSA-KnowledgeOrganization/image-20240526122104347.png)

### 平衡树-FHQ_Treap

#### 无旋Treap

![image-20240526115339167](/images/DSA-KnowledgeOrganization/image-20240526115339167.png)
![image-20240526115350766](/images/DSA-KnowledgeOrganization/image-20240526115350766.png)
![image-20240526115359404](/images/DSA-KnowledgeOrganization/image-20240526115359404.png)

#### 无旋Treap的结构

![image-20240526115559180](/images/DSA-KnowledgeOrganization/image-20240526115559180.png)

#### 基本操作

![image-20240526115614042](/images/DSA-KnowledgeOrganization/image-20240526115614042.png)

![image-20240526115623744](/images/DSA-KnowledgeOrganization/image-20240526115623744.png)

![image-20240526115634558](/images/DSA-KnowledgeOrganization/image-20240526115634558.png)

![image-20240526115644061](/images/DSA-KnowledgeOrganization/image-20240526115644061.png)
![image-20240526115650541](/images/DSA-KnowledgeOrganization/image-20240526115650541.png)
![image-20240526115656903](/images/DSA-KnowledgeOrganization/image-20240526115656903.png)
![image-20240526115703005](/images/DSA-KnowledgeOrganization/image-20240526115703005.png)
![image-20240526115710056](/images/DSA-KnowledgeOrganization/image-20240526115710056.png)
![image-20240526115715945](/images/DSA-KnowledgeOrganization/image-20240526115715945.png)
![image-20240526115721051](/images/DSA-KnowledgeOrganization/image-20240526115721051.png)
![image-20240526115727235](/images/DSA-KnowledgeOrganization/image-20240526115727235.png)
![image-20240526115734944](/images/DSA-KnowledgeOrganization/image-20240526115734944.png)
![image-20240526115740418](/images/DSA-KnowledgeOrganization/image-20240526115740418.png)
![image-20240526115746149](/images/DSA-KnowledgeOrganization/image-20240526115746149.png)
![image-20240526115751158](/images/DSA-KnowledgeOrganization/image-20240526115751158.png)
![image-20240526115755059](/images/DSA-KnowledgeOrganization/image-20240526115755059.png)
![image-20240526115800730](/images/DSA-KnowledgeOrganization/image-20240526115800730.png)
![image-20240526115804490](/images/DSA-KnowledgeOrganization/image-20240526115804490.png)
![image-20240526115808715](/images/DSA-KnowledgeOrganization/image-20240526115808715.png)
![image-20240526115813454](/images/DSA-KnowledgeOrganization/image-20240526115813454.png)
![image-20240526115817884](/images/DSA-KnowledgeOrganization/image-20240526115817884.png)
![image-20240526115823342](/images/DSA-KnowledgeOrganization/image-20240526115823342.png)
![image-20240526115830400](/images/DSA-KnowledgeOrganization/image-20240526115830400.png)
![image-20240526115835300](/images/DSA-KnowledgeOrganization/image-20240526115835300.png)
![image-20240526115839426](/images/DSA-KnowledgeOrganization/image-20240526115839426.png)
![image-20240526115847061](/images/DSA-KnowledgeOrganization/image-20240526115847061.png)
![image-20240526115851600](/images/DSA-KnowledgeOrganization/image-20240526115851600.png)
![image-20240526115858903](/images/DSA-KnowledgeOrganization/image-20240526115858903.png)
![image-20240526115904405](/images/DSA-KnowledgeOrganization/image-20240526115904405.png)
![image-20240526115910595](/images/DSA-KnowledgeOrganization/image-20240526115910595.png)![image-20240526115916421](/images/DSA-KnowledgeOrganization/image-20240526115916421.png)![image-20240526115922564](/images/DSA-KnowledgeOrganization/image-20240526115922564.png)![image-20240526115926736](/images/DSA-KnowledgeOrganization/image-20240526115926736.png)![image-20240526115931678](/images/DSA-KnowledgeOrganization/image-20240526115931678.png)![image-20240526115936852](/images/DSA-KnowledgeOrganization/image-20240526115936852.png)![image-20240526115942072](/images/DSA-KnowledgeOrganization/image-20240526115942072.png)![image-20240526115948947](/images/DSA-KnowledgeOrganization/image-20240526115948947.png)![image-20240526115954070](/images/DSA-KnowledgeOrganization/image-20240526115954070.png)![image-20240526115959511](/images/DSA-KnowledgeOrganization/image-20240526115959511.png)![image-20240526120003232](/images/DSA-KnowledgeOrganization/image-20240526120003232.png)

![image-20240526120022163](/images/DSA-KnowledgeOrganization/image-20240526120022163.png)![image-20240526120026713](/images/DSA-KnowledgeOrganization/image-20240526120026713.png)![image-20240526120031817](/images/DSA-KnowledgeOrganization/image-20240526120031817.png)![image-20240526120036416](/images/DSA-KnowledgeOrganization/image-20240526120036416.png)![image-20240526120040832](/images/DSA-KnowledgeOrganization/image-20240526120040832.png)

![image-20240526120053497](/images/DSA-KnowledgeOrganization/image-20240526120053497.png)![image-20240526120100194](/images/DSA-KnowledgeOrganization/image-20240526120100194.png)![image-20240526120104721](/images/DSA-KnowledgeOrganization/image-20240526120104721.png)![image-20240526120109696](/images/DSA-KnowledgeOrganization/image-20240526120109696.png)

#### 案例

```c
struct NODE {
    int val;
    int cnt;
    int rev;
    int prio;
    int size;
    int ch[2];
}

struct FHQTREAP {
    int root;
    int size;
    NODE node[MAXN];
}

pair split_by_val(int t, int val) {
    if (!t) {
        return {0, 0};
    }
    check_rev(t);
    if (node[t].val  split_by_rank(int t, int k) {
    if (!t) {
        return {0, 0, 0};
    }
    check_rev(t);
    int lt, mt, rt;
    if (k  node[node[t]].ch[0].size() + node[t].cnt) {
        tie(lt, mt, rt) = split_by_rank(node[t].ch[1], k - node[node[t].ch[0]].size() - node[t].cnt);
        node[t].ch[1] = lt;
        update_size(t);
        return {t, mt, rt};
    } else {
        lt = node[t].ch[0];
        rt = node[t].ch[1];
        check_rev(lt);
        check_rev(rt);
        node[t].ch[0] = 0;
        upda[t].ch[1] = 0;
        update_size(t);
        return {lt, t, rt};
    }
}

int merge(int lt, int rt) {
    if (!lt) {
        return rt;
    } else if (!rt) {
        return lt;
    }
    check_rev(lt);
    check_rev(rt);
    if (node[lt].prio ![image-20240526114259208](/images/DSA-KnowledgeOrganization/image-20240526114259208.png)

![image-20240526114322817](/images/DSA-KnowledgeOrganization/image-20240526114322817.png)

#### 模板题——[百亿富翁](https://www.lanqiao.cn/problems/1142/learning/)

```python
def right_bigger():
  ans=[-1]*n
  stack=[]
  for i in range(n):
    while stack and h[stack[-1]]![image-20240526100046139](/images/DSA-KnowledgeOrganization/image-20240526100046139.png)

![image-20240526100057701](/images/DSA-KnowledgeOrganization/image-20240526100057701.png)![image-20240526100110562](/images/DSA-KnowledgeOrganization/image-20240526100110562.png)

### KMP算法

![image-20240526100136410](/images/DSA-KnowledgeOrganization/image-20240526100136410.png)

![image-20240526100148837](/images/DSA-KnowledgeOrganization/image-20240526100148837.png)

![image-20240526100157890](/images/DSA-KnowledgeOrganization/image-20240526100157890.png)

 ![image-20240526100211778](/images/DSA-KnowledgeOrganization/image-20240526100211778.png)
 ![image-20240526100221657](/images/DSA-KnowledgeOrganization/image-20240526100221657.png)

#### 模板题——[斤斤计较的小Z](https://www.lanqiao.cn/problems/2047/learning)

```python
Next = [0] * 1000010
def get_next(T):
    for i in range(1,len(T)):
        j = Next[i]
        while j > 0 and T[i] != T[j]:
            j = Next[j]
        if T[i] == T[j]:
            Next[i + 1] = j + 1
        else:
            Next[i + 1] = 0
def KMP(s,t):
    get_next(t)
    ans = 0
    j = 0
    for i in range(len(s)):
        while j > 0 and s[i] != t[j]:
            j =  Next[j]
        if s[i] == t[j]:
            j += 1
        if j == len(t):
            ans += 1
            j =  Next[j]
    return ans
t = input()
s = input()
print(KMP(s,t))
```

```python
print((lambda s: input().count(s))(input()))
```

### 字符串哈希

![image-20240526100452881](/images/DSA-KnowledgeOrganization/image-20240526100452881.png)

![image-20240526100509262](/images/DSA-KnowledgeOrganization/image-20240526100509262.png)

#### 模板题——[斤斤计较的小Z](https://www.lanqiao.cn/problems/2047/learning)

```python
t = input()
s = input()
m,n = len(t), len(s)
B = 26
mod = 1000000007
hash = [0] * (n + 1)
for i in range(1,n + 1):
    hash[i] = hash[i - 1] * B + ord(s[i - 1]) - ord('A')
    hash[i] %= mod

numT = 0
for c in t:
    numT = numT * B + ord(c) - ord('A')
    numT %= mod
    
p = (B ** m) % mod
ans = 0
for l in range(1,n +1):
    r = l + m - 1
    if r > n:
        break
    if (hash[r] - hash[l - 1] * p % mod + mod) % mod == numT:
        ans += 1
print(ans)
```

## Manacher

![image-20240526101919972](/images/DSA-KnowledgeOrganization/image-20240526101919972.png)
![image-20240526101929004](/images/DSA-KnowledgeOrganization/image-20240526101929004.png)
![image-20240526101944468](/images/DSA-KnowledgeOrganization/image-20240526101944468.png)
![image-20240526101953533](/images/DSA-KnowledgeOrganization/image-20240526101953533.png)

### 模板

![image-20240526102101694](/images/DSA-KnowledgeOrganization/image-20240526102101694.png)

## 字典树基础

![image-20240526123731966](/images/DSA-KnowledgeOrganization/image-20240526123731966.png)

![image-20240526123744464](/images/DSA-KnowledgeOrganization/image-20240526123744464.png)

![image-20240526123847593](/images/DSA-KnowledgeOrganization/image-20240526123847593.png)

#### 模板题——[前缀判定](https://www.lanqiao.cn/problems/1204/learning)

```python
class TreeNode():
  def __init__(self):
    self.nodes = {}
  
  #插入
  def insert(self,s):
    curr = self
    for i in s:
      if i not in curr.nodes.keys():
        curr.nodes[i] = TreeNode()
      #往下走
      curr = curr.nodes[i]
  
  #检查是否为前缀
  def pre(self,s):
    curr = self
    for i in s:
      if i not in curr.nodes.keys():
        return False
      curr = curr.nodes[i]
    return True

n,m = map(int,input().split())
tree = TreeNode()
for _ in range(n):
  s = input()
  tree.insert(s)
for _ in range(m):
  t = input()
  if tree.pre(t):
    print('Y')
  else:
    print('N')
```

#### 模板题——[依依的瓶中信](https://www.lanqiao.cn/problems/3751/learning)

```python
'''
多个字符串，求公共前缀长度问题，用字典树
同一个字符串不可与自身比较：构建树的时候打标记，查找的时候清除标记，若标记为0，则说明当前在于自己比较，直接返回。
'''

class TreeNode():
  def __init__(self):
    self.nodes = {}          #用于存放以当前点为根的子树
    self.value = 1           #每可子树的权值，初始为1

  def insert(self,s):#建树
    for c in s:
      if c not in self.nodes.keys():     #若不存在，则添加该子树
        self.nodes[c] = TreeNode()
      else:
        self.nodes[c].value +=1       #若存在，则该子树的权值+1，
      self = self.nodes[c]          #进入下一层
#{1,a:{2,b:{2,c:{1,}}},b:{1,c:{1}}}

  def commen_pre(self,t):  #查找
    cnt = 0
    for c in t:           #该题不用判断c是否存在，因为每个点都存在
      if self.nodes[c].value -1 == 0:    #如果走到自己独有的节点上时，就返回其与其它子串的公共前缀长
        return cnt
      cnt += 1
      self = self.nodes[c]   #进入下一层
    return cnt    #若自己本身就是某个串的前缀，则返回自己的长度

n = int(input())
S =[]
tree = TreeNode() #实例化根节点
for i in range(n):  #建树
  s = input()
  S.append(s)
  tree.insert(s)

for s in S:      #查找、统计
  print(tree.commen_pre(s))
```

## 01tire

![image-20240526124139861](/images/DSA-KnowledgeOrganization/image-20240526124139861.png)

![image-20240526124148215](/images/DSA-KnowledgeOrganization/image-20240526124148215.png)![image-20240526124153033](/images/DSA-KnowledgeOrganization/image-20240526124153033.png)
![image-20240526124201442](/images/DSA-KnowledgeOrganization/image-20240526124201442.png)
![image-20240526124207236](/images/DSA-KnowledgeOrganization/image-20240526124207236.png)
![image-20240526124211551](/images/DSA-KnowledgeOrganization/image-20240526124211551.png)

```python
maxn = 210000
ch = [[0]*2 for _ in range(maxn)]
val = [0]*maxn
n, ans, tot = 0, 0, 0

def insert(x):
    global tot
    now = 0
    for j in range(31, -1, -1):
        pos = ((x >> j) & 1)
        if ch[now][pos] == 0:
            tot += 1
            ch[now][pos] = tot
        now = ch[now][pos]
    val[now] = x

def query(x):
    now = 0
    for j in range(31, -1, -1):
        pos = ((x >> j) & 1)
        if ch[now][pos ^ 1] != 0:
            now = ch[now][pos ^ 1]
        else:
            now = ch[now][pos]
    return val[now]

n = int(input())
for i in range(1, n+1):
    x = int(input())
    insert(x)
for i in range(1, n+1):
    ans = max(ans, query(val[i]))
print(ans)
```

## 图论

## 基础

### 基本概念

![image-20240526124949289](/images/DSA-KnowledgeOrganization/image-20240526124949289.png)

![image-20240526124958064](/images/DSA-KnowledgeOrganization/image-20240526124958064.png)

![image-20240526125006396](/images/DSA-KnowledgeOrganization/image-20240526125006396.png)

![image-20240526125013800](/images/DSA-KnowledgeOrganization/image-20240526125013800.png)

### DFS&BFS

![image-20240526125134400](/images/DSA-KnowledgeOrganization/image-20240526125134400.png)

![image-20240526125142643](/images/DSA-KnowledgeOrganization/image-20240526125142643.png)

#### DFS模板题——[帮派弟位](https://www.lanqiao.cn/problems/3891/learning)

```python
n,m=map(int,input().split())
G=[[] for i in range(n+1)]#bfs和图的结合
rudu=[0]*(n+1) #计数，根结点是没有rudu的
biaoji=[0]*(n+1)
sum=[[0,i] for i in range(n+1)] #注意是二元组，记录子数数量，是先按数量排，再按序号排.然后是包括他自己的，所以初始化为1
for _ in range(n-1):
    l,r=map(int,input().split()) #表示序号为l的人附属于r
    G[r].append(l) #表示r下面有l 可以看出r和谁相邻
    rudu[l]+=1 #表明l头上是有父亲的
for i in range(1,n+1): #找出谁的rudu为0，即找出谁是根结点
    if rudu[i]==0:
        root=i

def dfs(u):
    biaoji[u]=1 #打上标记
    sum[u][0]=-1#为什么这里设置成-1，而不是1呢，因为题目要求如果手下相同的，序号小的排在前面，设置成-1就可以这样了。！
    for v in G[u]: #遍历和u相邻的每个节点
        if biaoji[v]==0: #如果没有打上标记
            dfs(v)#遍历和u相邻的节点，就是遍历子节点
            sum[u][0]+=sum[v][0] #遍历v子节点的同时，可以把v下的子节点也加上去

dfs(root)
sum.sort()
for i,(x,y) in enumerate(sum,start=1):#输出小明的排列
    if y==m:
        print(i)
        break
```

![image-20240526125335820](/images/DSA-KnowledgeOrganization/image-20240526125335820.png)

![image-20240526125344854](/images/DSA-KnowledgeOrganization/image-20240526125344854.png)

#### BFS模板题——[最少操作数](https://www.lanqiao.cn/problems/1509/learning)

```python
from collections import deque

def bfs(s,t):
    '''
    :param s: 起点
    :param t: 终点
    :return:
    '''
    dis = [-1]*100001
    queue = deque()
    #1、将起点塞入到队列中，打上标记
    queue.append(s)
    dis[s] = 0
    #2、当队列非空
    while len(queue) != 0:
        # 2.1 取出队首元素u
        u = queue.popleft()
        #2.2 判断u是否为终点
        if u == t:
            return dis[u]
        #2.3 将u相连的所有点v，只要v未标记，则入队列
        for v in [u-1,u+1,u*2]:
            #特判：未越界、未标记
            if 0![image-20240526125845566](/images/DSA-KnowledgeOrganization/image-20240526125845566.png)

![image-20240526125853909](/images/DSA-KnowledgeOrganization/image-20240526125853909.png)

![image-20240526125908891](/images/DSA-KnowledgeOrganization/image-20240526125908891.png)![image-20240526125916425](/images/DSA-KnowledgeOrganization/image-20240526125916425.png)

#### 模板题——[走多远](https://www.lanqiao.cn/problems/1337/learning)

```python
import os
import sys

from collections import deque
# INF = 0x3f3f3f3f
# 针对有向无环图，在进行拓扑排序时，可以进行状态转移
def topo():
    q = deque()
    # 1。将入度为0的点加入队列中
    for i in range(1, n + 1):
        if ru[i] == 0:
            q.append(i)
    # 2. 当队列非空
    while len(q) != 0:
        # 2.1 取出队首元素
        u = q.popleft()
        # 2.2 对于和u相连的每个点v
        for v in G[u]:
            # 从u走到v，说明dp[v]可以从dp[u]+1转移
            dp[v] = max(dp[v], dp[u] + 1)
            # 进行动态规划
            ru[v] -= 1
            if ru[v] == 0:
                q.append(v)

n, m = map(int, input().split())
# 图的存储——邻接表
G = [[] for i in range(n+1)]
ru = [0] * (n + 1)
for i in range(m):
    u, v = map(int, input().split())
    G[u].append(v)
    ru[v] += 1
# dp[i]表示走到i的最长路/最大值
dp = [0] * (n + 1)
topo()
print(max(dp))
```

#### 模板题——[最小字典序排列](https://www.lanqiao.cn/problems/3351/learning)

```python
import os
import sys

# 3351 最小字典序排列
# 拓扑排序+优先队列
# 需要字典序最小的拓扑序列，只需要将普通队列转换成优先队列即可
from collections import deque
from queue import PriorityQueue

def topo():
    q = PriorityQueue()
    # 1。将入度为0的点加入队列中
    for i in range(1, n + 1):
        if ru[i] == 0:
            q.put(i) # append改为put
    # 2. 当队列非空
    ans = []
    while not q.empty(): # 判断优先队列q是否非空
    # while len(q.queue) != 0:
        # 2.1 取出队首元素
        u = q.get()  # popleft改为put
        ans.append(u)
        # 2.2 对于和u相连的每个点v
        for v in G[u]:
            # 进行动态规划
            ru[v] -= 1
            if ru[v] == 0:
                q.put(v)
    if len(ans) != n:
        print(-1)
    else:
        print(*ans, sep = ' ')

n, m = map(int, input().split())
# 图的存储——邻接表
G = [[] for i in range(n+1)]
ru = [0] * (n + 1)
for i in range(m):
    u, v = map(int, input().split())
    G[u].append(v)
    ru[v] += 1
topo()
```

## 最短路

### Floyd

![image-20240526130244161](/images/DSA-KnowledgeOrganization/image-20240526130244161.png)

![image-20240526130253653](/images/DSA-KnowledgeOrganization/image-20240526130253653.png)

#### 模板题——[ 蓝桥公园](https://www.lanqiao.cn/problems/1121/learning)

```python
import sys
input=sys.stdin.readline
n,m,q=map(int,input().split())
inf=int(1e18)
dp=[[inf]*(n+1) for i in range(n+1)]
for i in range(1,n+1):
  dp[i][i]=0
for i in range(1,m+1):
  u,v,w=map(int,input().split())
  dp[u][v]=dp[v][u]=min(dp[u][v],w)
#Floyd 模板
for k in range(1,n+1):
  for i in range(1,n+1):
    for j in range(1,n+1):
      dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])

for i in range(1,n+1):
    for j in range(1,n+1):
      if dp[i][j]==inf:
        dp[i][j]=-1

for _ in range(q):
  s,e=map(int,input().split())
  print(dp[s][e])
```

```python
# Floyd 算法  多个起点--多个终点  多源最短路算法（多对多）
# 最简单的最短路径算法
# 存图:最简单的矩阵存图
# 效率不高，不能用于大图

# 动态规划：求图上两点i,j之间的最短距离，按‘从小图到全图’的步骤，在逐步扩大图的过程中计算和更新最短路
# 定义状态：dp[k][i][j]: i,j,k是点的编号，范围1--n
# 状态dp[k][i][j]表示在包含1--k点的子图上，点对i,j之间的最短路
# 状态转移方程 从子图1-k-1 扩展到子图 1-k
# dp[k][i][j]=min(dp[k-1][i][j],dp[k-1][i][k]+dp[k-1][k][j])
# 初始值：i,j直连 就是他们的边长； 若不直连，赋值为无穷大 / 0x3f3f3f3f3f3f3f3f
# 滚动数组优化：dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])
#                           不经过k     经过k
# for k in range(1,n+1):
# for i in range(1,n+1):
# for j in range(1,n+1):
# dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])
# 只能用于n![image-20240526131011122](/images/DSA-KnowledgeOrganization/image-20240526131011122.png)

![image-20240526131022596](/images/DSA-KnowledgeOrganization/image-20240526131022596.png)

![image-20240526131034522](/images/DSA-KnowledgeOrganization/image-20240526131034522.png)

#### 模板题——[蓝桥王国](https://www.lanqiao.cn/problems/1122/learning)

```python
import os
import sys

# 请在此输入您的代码
# 1122_蓝桥王国_Dijkstra算法
from queue import PriorityQueue  # 导入优先队列
from collections import deque

INF = 1e18

def dijkstra(s):
    # 返回从s出发到所有点的最短路
    # d[i]表示从s到i的最短路
    d = [INF] * (n + 1)
    # vis[i]表示是否出队列（注：与传统BFS不同）
    vis = [0] * (n + 1)
    q = PriorityQueue()

    # 1.将起点入队列，更新距离
    d[s] = 0
    # 将距离放在前面，才能对距离使用优先队列
    q.put((d[s], s))  # 入队用put()
    # 当队列非空
    while not q.empty():  # 或者写为： while len(q.queue) != 0:
        dis, u = q.get()
        # 每个点只有第一次出队列是有用的
        if vis[u]: continue
        vis[u] = 1  # 出队列打标记
        # 对于从u出发，到达v，权重为w的边
        for v, w in G[u]:
            if d[v] > d[u] + w:
                d[v] = d[u] + w
                q.put((d[v], v))
    for i in range(1, n + 1):
        if d[i] == INF:
            d[i] = -1
    # d.pop(0)
    return d[1::] # 从1到最后

# 皇宫编号为1
# 输入
n, m = map(int, input().split())
G = [[] for i in range(n + 1)]  # 图的存储：邻接表。此题N为10^5，不能用邻接矩阵存图

for i in range(m):
    u, v, w = map(int, input().split())
    G[u].append((v, w))
print(*dijkstra(1)) # 列表前面加星号作用是将列表解开（unpacke）成多个独立的参数，传入函数。
```

#### 模板题——[混境之地3](https://www.lanqiao.cn/problems/3818/learning)

```python
import os
import sys
# 3818 混境之地  Dijkstra
from queue import PriorityQueue
# 数据较大时可以进行如下优化
import sys
input = sys.stdin.readline
INF = 1e18
def get(c):
    if c == '.':
        return 0
    else:
        s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for i in range(len(s)):
            if c == s[i]:
                return i + 1
        # return ord(c) - ord('A') + 1
def dijkstra():
    d = [[INF] * m for _ in range(n)]
    vis = [[0] * m for _ in range(n)]
    q = PriorityQueue()  # 创建优先队列
    # 1.将起点塞入队列
    d[x1][y1] = 0
    q.put((d[x1][y1], x1, y1))
    # 2.当队列非空
    while not q.empty():
        dis, x, y = q.get()
        if x == x2 and y == y2:
            return dis
        # 每个点只有第一次出队列是有用的
        if vis[x][y]:
            continue
        vis[x][y] = 1  # 出队列打标记
        for d elta_x, delta_y in [[1, 0], [0, 1], [-1, 0], [0, -1]]:
            xx, yy = x + delta_x, y + delta_y
            # 判断未越界、未标记、非障碍物
            if 0  d[x][y] + get(Map[xx][yy]):  # 写一个get函数获取权重
                    d[xx][yy] = d[x][y] + get(Map[xx][yy])
                    q.put((d[xx][yy], xx, yy))
    return INF
# 输入
n, m = map(int, input().split())  # 地图大小
x1, y1, x2, y2 = map(int, input().split())  # 起始点坐标
x1, y1, x2, y2 = x1 - 1, y1 - 1, x2 - 1, y2 - 1
# 地图
Map = [input() for i in range(n)]
e = int(input())  # 剩余能量
# 如果能量支撑到达终点，返回Yes，否则，返回No.
if e >= dijkstra():  # 不传参，使用全局变量
    print('Yes')
else:
    print('No')
```

## 生成树

### Kruskal

![image-20240526131621641](/images/DSA-KnowledgeOrganization/image-20240526131621641.png)

![image-20240526131631028](/images/DSA-KnowledgeOrganization/image-20240526131631028.png)

#### 模板题——[繁忙的都市](https://www.lanqiao.cn/problems/889/learning)

```python
def kruskal():
    # 初始化
    n, m = map(int, input().split())
    Map = []
    for _ in range(m):
        u, v, w = map(int, input().split())
        Map.append([w, u, v])  # 注意第一个参数是边权
    Map.sort()

    # 并查集
    p = list(range(n+1))
    def root(x):
        if x != p[x]:
            p[x] = root(p[x])
        return p[x]

    # 非连环时更新
    _sum, _max = 0, 0
    for w, u, v in Map:
        root_u = root(u)
        root_v = root(v)
        if root_u != root_v:
            p[root_u] = root_v
            _sum += 1
            _max = max(_max, w)
    return _sum, _max
print(*kruskal())
```

### Prim

![image-20240526131818064](/images/DSA-KnowledgeOrganization/image-20240526131818064.png)

![image-20240526131825567](/images/DSA-KnowledgeOrganization/image-20240526131825567.png)

![image-20240526131840546](/images/DSA-KnowledgeOrganization/image-20240526131840546.png)

![image-20240526131848626](/images/DSA-KnowledgeOrganization/image-20240526131848626.png)

#### 模板题——[繁忙的都市](https://www.lanqiao.cn/problems/889/learning)

```python
import os
import sys
n,m=map(int,input().split())
e=[]
for  _ in range(m):
  u,v,w=map(int,input().split())
  e.append((w,u,v))
#边按照权重进行排序
e.sort()
#需要一个并查集
p=list(range(n+1))

def findroot(x):
  if x==p[x]:return x
  else:
    p[x]=findroot(p[x])
    return p[x]
ans=0
#进行遍历所有的边，进行合并：
for w,u,v in e:
  #只要u和v不在同一集合内就可以进行合并：
  rootu=findroot(u)
  rootv=findroot(v)
  if rootu!=rootv:
    p[rootu]=rootv
    ans=max(ans,w)
print(n-1,ans)
```

![image-20240526132045604](/images/DSA-KnowledgeOrganization/image-20240526132045604.png)

[← 下一篇 【服务器】Ubuntu安装部署](/posts/server-ubuntuinstall/)

[【Asp.Net】BookShop说明文档 上一篇 →](/posts/asp-net-bookshop/)

