---
title: "【蓝桥杯】23年省赛B组"
pubDate: 2024-04-01
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---
# 【蓝桥杯】23年省赛B组

## 题目总览

- 2023

- 硬币兑换

- 松散子序列

- 管道

- 保险箱

- 树上选点

- T字消除

- 独一无二

- 异或和

- 混论的数组

## [2023 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/3496/learning/?page=1&first_category_id=1&tags=2023)

### 问题描述

请求出在 $12345678$ （含）至 $98765432$ （含）中，有多少个数中完全不包含 $2023$。

完全不包含 $2023$ 是指无论将这个数的哪些数位移除都不能得到 $2023$。例如 $20322175$，$33220022$ 都完全不包含 $2023$，而 $20230415$，$20193213$ 则含有 $2023$（后者取第 $1,2,6,8$ 个数位）。

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

总通过次数: 2971  |  总提交次数: 4174  |  通过率: 71.2%

难度: 中等   标签: 2023, 模拟, 枚举, 省赛

### 参考答案

```python
def ck(u):
    a=[]
    while u:
        a.append(u%10)
        u//=10
    a.reverse()
    n=len(a)
    cnt1,cnt2,cnt3=0,0,0
    for i in range(n):
        if a[i]==2:
            cnt1+=1
        if a[i]==0 and cnt1>0:
            cnt2+=1
        if a[i]==2 and cnt2>0:
            cnt3+=1
        if a[i]==3 and cnt3>0:
            return True
    return False
ans=0
for i in range(12345678,98765432+1):
    if ck(i):
        ans+=1
print((98765432-12345678+1)-ans)
```

## [硬币兑换 - 蓝桥云课](https://www.lanqiao.cn/problems/3501/learning/?page=2&first_category_id=1&tags=2023)

### 问题描述

小蓝手中有 $2023$ 种不同面值的硬币，这些硬币全部是新版硬币，其中第 $i(1 \leq i \leq 2023)$ 种硬币的面值为 $i$，数量也为 $i$ 个。硬币兑换机可以进行硬币兑换，兑换规则为：交给硬币兑换机两个新版硬币 $coin_1$ 和 $coin_2$，硬币兑换机会兑换成一个面值为 $coin_1 + coin_2$ 的旧版硬币。

小蓝可以用自己已有的硬币进行任意次数兑换，假设最终小蓝手中有 $K$ 种不同面值的硬币（只看面值，不看新旧）并且第 $i(1 \leq i \leq K)$ 种硬币的个数为 $sum_i$。小蓝想要使得 $\max{sum_1,sum_2,\dots,sum_K}$ 的值达到最大，请你帮他计算这个值最大是多少。

注意硬币兑换机只接受新版硬币进行兑换，并且兑换出的硬币全部是旧版硬币。

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

### 参考答案

```python
a=[0]*100000
ans=0
for i in range(1,2024):
    a[i]=i
for i in range(1,4501):
    res=0
    for j in range(1,i//2+1):
        k=i-j
        if j!=k:
            res+=min(a[j],a[k])
        else:
            res+=a[j]//2
    res+=a[i]
    ans=max(res,ans)
print(ans)
```

## [松散子序列 - 蓝桥云课](https://www.lanqiao.cn/problems/3543/learning/?page=1&first_category_id=1&tags=2023&name=%E6%9D%BE%E6%95%A3%E5%AD%90%E5%BA%8F%E5%88%97)

### 问题描述

给定一个仅含小写字母的字符串 $s$，假设 $s$ 的一个子序列 $t$ 的第 $i$ 个字符对应了原字符串中的第 $p_i$ 个字符。我们定义 $s$ 的一个松散子序列为：对于 $i &gt; 1$ 总是有 $p_i - p_{i-1} \geq 2$。设一个子序列的价值为其包含的每个字符的价值之和 ($a \sim z$ 分别为 $1 \sim 26$)。

求 $s$ 的松散子序列中的最大价值。

### 输入格式

输入一行包含一个字符串 $s$。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
azaazaz
```

### 样例输出

```
78
```

### 评测用例规模与约定

对于 $20$% 的评测用例，$|s| \leq 10$；

对于 $40$% 的评测用例，$|s| \leq 300$；

对于 $70$% 的评测用例，$|s| \leq 5000$；

对于所有评测用例，$1 \leq |s| \leq 10^6$，字符串中仅包含小写字母。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 12s | 512M |
| PyPy3 | 12s | 512M |
| Go | 12s | 512M |
| JavaScript | 12s | 512M |

总通过次数: 1367  |  总提交次数: 1668  |  通过率: 82%

难度: 困难   标签: 2023, 省赛, 动态规划

### 解题思路

根据题目要求，我们需要求出字符串 $s$ 的松散子序列中的最大价值。因此，我们可以使用动态规划的思想来解决这个问题。

#### 定义状态

我们可以使用 $f[i][0]$ 表示不选字符串 $s$ 的第 $i$ 个字符时的价值，$f[i][1]$ 表示选字符串 $s$ 的第 $i$ 个字符时的价值。

#### 属性

因为要求价值最大，所以我们需要取最大值。

#### 状态计算

因为有 $p_i-p_{i-1}\ge2$ 的限制，所以 $f[i][1]=max(f[i-2][1], f[i-2][0])+val$，只能从隔了 $1$ 个的开始选。

$f[i][0]=max(f[i-1][1], f[i-1][0])$，因为第 $i$ 个字符没有选，那么我们就用前一个来更新。

最终的答案即为 $max(f[n-1][1], f[n-1][0])$。

#### 时间复杂度分析

该题的时间复杂度为 $O(n)$。

### AC_Code

- C++

```cpp
#include 
#include 
#include 
#include 

using namespace std;
const int N=1e6+5;
int f[N][2];
int main() {
    string s;
    cin >> s;
    int n = s.length();

    unordered_map values;
    for (int i = 0; i 

- Java

```java
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    static int N=(int)1e6+5;
    static int[][] f = new int[N + 1][2];
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.next();
        int n = s.length();

        Map values = new HashMap<>();
        for (int i = 0; i =2)  f[i][1] = Math.max(f[i - 2][1], f[i - 2][0]) + values.get(s.charAt(i));
            f[i][0] = Math.max(f[i - 1][1], f[i - 1][0]);
        }

        System.out.println(Math.max(f[n - 1][1], f[n - 1][0]));
    }
}
```

- Python

```python
s = input()
n = len(s)
f = [[0 for j in range(2)] for i in range(n+1)] 
values = {chr(i): ord(chr(i)) - ord('a') + 1 for i in range(97, 97+26, 1)}

f[0][0] = 0
f[0][1] = values[s[0]]

for i in range(1, len(s), 1):
    f[i][1] = max(f[i-2][1], f[i-2][0]) + values[s[i]]
    f[i][0] = max(f[i-1][1], f[i-1][0])

print(max(f-1][1], f[n-1][0]))
```

## [管道 - 蓝桥云课](https://www.lanqiao.cn/problems/3544/learning/?page=1&first_category_id=1&tags=2023&name=%E7%AE%A1%E9%81%93)

### 问题描述

有一根长度为 $\text{len}$ 的横向的管道，该管道按照单位长度分为 $\text{len}$ 段，每一段的中央有一个可开关的阀门和一个检测水流的传感器。

一开始管道是空的，位于 $L_i$ 的阀门会在 $S_i$ 时刻打开，并不断让水流入管道。

对于位于 $L_i$ 的阀门，它流入的水在 $T_i$ ($T_i \geq S_i$) 时刻会使得从第 $L_i - (T_i - S_i)$ 段到第 $L_i + (T_i - S_i)$ 段的传感器检测到水流。

求管道中每一段中间的传感器都检测到有水流的最早时间。

### 输入格式

输入的第一行包含两个整数 $n,\text{len}$，用一个空格分隔，分别表示会打开的阀门数和管道长度。

接下来 $n$ 行每行包含两个整数 $L_i,S_i$，用一个空格分隔，表示位于第 $L_i$ 段管道中央的阀门会在 $S_i$ 时刻打开。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
3 10 1 1 6 5 10 2
```

### 样例输出

```
5
```

### 评测用例规模与约定

对于 $30$% 的评测用例，$n \leq 200$，$S_i, \text{len} \leq 3000$；

对于 $70$% 的评测用例，$n \leq 5000$，$S_i, \text{len} \leq 10^5$；

对于所有评测用例，$1 \leq n \leq 10^5$，$1 \leq S_i,\text{len} \leq 10^9$，$1 \leq L_i \leq \text{len}$，$L_{i-1} &lt; L_i$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 12s | 512M |
| PyPy3 | 12s | 512M |
| Go | 12s | 512M |
| JavaScript | 12s | 512M |

总通过次数: 1124  |  总提交次数: 1560  |  通过率: 72.1%

难度: 简单   标签: 2023, 贪心, 省赛, 二分

### 解题思路

对于一个时间点 $x$，如果此时所有传感器都能检测到水流，那么当时间点大于 $x$ 时也一定保证所有传感器都能检测到水流。题目要求我们找到满足条件的最小时间点，因为答案具有二段性，所以我们可以想到二分答案。

有了二分的思路后，问题转换为对于一个确定的时间点 $x$，我们如何判断此时所有传感器都能检测到水流？仔细思考，当时间确定后，对于一个位于 $a_i$ 且开启时间为 $S_i(S_i \leq x)$ 的阀门，它的水流实际就是一条覆盖区间 $[a_i-(x-S_i),a_i+(x-S_i)]$ 的线段。

我们可以将所有 $S_i \leq x$ 的阀门都进行转换，实际上得到的就是若干条线段。判断所有传感器是否都能检测到水流，等价于判断能否用这若干条线段覆盖区间 $[1,\text{len}]$，问题接着转换为区间覆盖问题。

区间覆盖是一个经典问题。我们可以按区间的左端点来排序这些区间。接下来，我们检查这些区间是否覆盖了整个管道。如果第一个区间的左端点大于 $1$，那么表示管道的开始部分没有被覆盖，直接返回 `false`。否则我们设一个变量 $r$ 表示可到达的最远距离，$r$ 的初始值为第一个区间的右端点。我们接着检查其他区间是否与 $r$ 相邻或重叠。如果当前区间和 $r$ 相邻或重叠，我们将当前区间的右端点和 $r$ 取最大值。最后如果 $r \geq \text{len}$ 则说明成功覆盖所有区间，否则说明没有。

回过头来考虑如何书写二分，设 $l$ 为答案的下界，$r$ 为答案的上界，如果二分得到的时间点 $\text{mid}$ 符合条件，因为大于 $\text{mid}$ 的时间点也一定符合条件，所以更新 $r=\text{mid}$，否则更新 $l=\text{mid+1}$。我们重复这个过程，直到搜索范围的左右端点相等，此时就找到了最早的时间。 当然 $l,r$ 的初始值我们也需要思考，$l$ 显然为 $1$，而 $r$ 我们需要考虑极限情况，即只存在一个最左或最右的阀门在最晚的时间点打开，显然此时需要的时间为 $2 \times 10^9$，所以 $r$ 的初始值为 $2 \times 10^9$。

时间复杂度：$O(n\log n^2)$。

### AC_Code

- C++

```cpp
#include
using namespace std;
typedef long long LL;
#define sz(s) ((int)s.size())

int n, m;
int main()
{
    ios_base :: sync_with_stdio(false);
    cin.tie(0); cout.tie(0);
    cin >> n >> m;
    vector a(n), s(n);
    for (int i = 0; i > a[i] >> s[i];
    }
    auto check = [&](LL t) {
        std::vector

> v;
        for (int i = 0; i = s[i]) v.push_back({a[i] - (t - s[i]), a[i] + (t - s[i])});
        }
        sort(v.begin(), v.end());
        if (sz(v) == 0 || v[0].first > 1) return false;
        LL r = v[0].second;
        for (int i = 1; i = m;
    };
    LL l = 1, r = 2e9;
    while (l > 1;
        if (check(mid)) r = mid;
        else l = mid + 1;
    }
    cout 

- Java

```java
import java.util.*;

public class Main {
    static int n, m;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        int[] a = new int[n];
        int[] s = new int[n];
        for (int i = 0; i >> 1;
            if (check(mid, a, s)) r = mid;
            else l = mid + 1;
        }
        System.out.println(r);
    }

    private static boolean check(long t, int[] a, int[] s) {
        List

> v = new ArrayList<>();
        for (int i = 0; i = s[i]) {
                v.add(new Pair<>(a[i] - (t - s[i]), a[i] + (t - s[i])));
            }
        }
        v.sort(Comparator.comparingLong(Pair::getKey));
        if (v.size() == 0 || v.get(0).getKey() > 1) return false;
        long r = v.get(0).getValue();
        for (int i = 1; i = m;
    }

    static class Pair {
        private final K key;
        private final V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() {
            return key;
        }

        public V getValue() {
            return value;
        }
    }
}
```

- Python

```python
n, m = map(int, input().split())
a = []
s = []
for i in range(n):
    a_i, s_i = map(int, input().split())
    a.append(a_i)
    s.append(s_i)

def check(t):
    v = []
    for i in range(n):
        if t >= s[i]:
            v.append((a[i] - (t - s[i]), a[i] + (t - s[i])))
    v.sort()
    if len(v) == 0 or v[0][0] > 1:
        return False
    r = v[0][1]
    for i in range(1, len(v)):
        if v[i][0] = m

l = 1
r = 2_000_000_000
while l 小蓝有一个保险箱，保险箱上共有 $n$ 位数字。

小蓝可以任意调整保险箱上的每个数字，每一次操作可以将其中一位增加 $1$ 或减少 $1$。

当某位原本为 $9$ 或 $0$ 时可能会向前（左边）进位/退位，当最高位（左边第一位）上的数字变化时向前的进位或退位忽略。

例如： $00000$ 的第 $5$ 位减 $1$ 变为 $99999$； $99999$ 的第 $5$ 位减 $1$ 变为 $99998$； $00000$ 的第 $4$ 位减 $1$ 变为 $99990$； $97993$ 的第 $4$ 位加 $1$ 变为 $98003$； $99909$ 的第 $3$ 位加 $1$ 变为 $00009$。

保险箱上一开始有一个数字 $x$，小蓝希望把它变成 $y$，这样才能打开它，问小蓝最少需要操作的次数。

### 输入格式

输入的第一行包含一个整数 $n$。

第二行包含一个 $n$ 位整数 $x$。

第三行包含一个 $n$ 位整数 $y$。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
5 12349 54321
```

### 样例输出

```
11
```

### 评测用例规模与约定

对于 $30$% 的评测用例，$1 \leq n \leq 300$；

对于 $60$% 的评测用例，$1 \leq n \leq 3000$；

对于所有评测用例，$1 \leq n \leq 10^5$，$x,y$ 中仅包含数字 $0$ 至 $9$，可能有前导零。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 12s | 512M |
| PyPy3 | 12s | 512M |
| Go | 12s | 512M |
| JavaScript | 12s | 512M |

总通过次数: 724  |  总提交次数: 1125  |  通过率: 64.4%

难度: 简单   标签: 2023, 省赛, 动态规划

### 解题思路

题目问的是将一个 $n$ 位的数字从 $x$ 变成 $y$ 需要进行几次操作，每次操作可以任意选择一位进行 +1 或者 -1，并且除了最高位以外，操作产生的进位和退位会保留。

#### 暴力思路

最直接的解法是直接进行模拟，从最后一位数字开始进行比较，判断是加或减哪个能获得最小步骤，同时处理借位或退位的情况。

#### 动态规划状态设计

由于这个题目每次对一位进行了加和减的操作之后，会产生进位和退位的后继影响，所以我们可以考虑使用动态规划来解决这个问题。从最低位（从右向左）开始考虑，低位的改变会对高位产生影响，而每一位会存在三种可能性：进位、退位、不退不进。

因此我们可以使用一个 dp 数组对此进行记录：

- $dp[i][0]$表示第 $i$ 位既没有进位、也没有退位的最小所需操作数。

- $dp[i][1]$表示第 $i$ 位进行了进位的最小所需操作数。

- $dp[i][2]$表示第 $i$ 位进行了退位的最小所需操作数。

最后对三种可能性取一个最小值，即可得到答案。

#### 初始化和状态转移

将 $x$ 上第i位数字变成 $y$ 上第i位数字所需的最小操作数是当前位的操作数加上更低位的操作数，由于存在三种不同的情况，对于每一种情况，分别有以下几种转移：

```cpp
dp[i][0] = min(dp[i - 1][0] + abs(a[i] - b[i]), dp[i-1][1] + abs((a[i] + 1) - b[i]) ,  dp[i-1][2] + abs((a[i] - 1) - b[i]));

dp[i][1] = min(dp[i - 1][0] + (10 - a[i] + b[i]), dp[i-1][1] +  10 - (a[i] + 1) + b[i], dp[i - 1][2] + 10 - (a[i] - 1)+ b[i]);

dp[i][2] = min(dp[i - 1][0] + a[i] + 10 - b[i], dp[i - 1][1] + (a[i] + 1)+ 10 - b[i], dp[i - 1][2] + (a[i]-1) + 10 - b[i]);
```

这三种情况分别对应了当前位置不进不退、进行了进位、进行了退位和上一位不进不退、进行了进位、进行了退位的组合结果，一共有 $3\times3$ 种情况。

#### 最终答案

最后的答案是第 $n$ 位上的三种情况的最小值，也就是对 $dp[n][0]$, $dp[n][1]$ 和 $dp[n][2]$ 取最小值：

```cpp
ans = min(dp[n][0], dp[n][1], dp[n][2])
```

时间复杂度为 $O(n)$。

### AC_Code

- C++

```cpp
#include 
#include 
#include 
using namespace std;
const int INF = 1000000000;
int dp[1000010][3];
int n, a[1000010], b[1000010];
string x, y;

int main() {
    cin >> n >> x >> y;
    reverse(x.begin(), x.end());
    reverse(y.begin(), y.end());
    
    for (int i = 0; i 

- Java

```java
import java.util.Scanner;

public class Main {
    static final int INF = 1000000000;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        
        String x = new StringBuilder(scanner.nextLine()).reverse().toString();
        String y = new StringBuilder(scanner.nextLine()).reverse().toString();
        
        int[] a = new int[n];
        int[] b = new int[n];

        for (int i = 0; i 

- Python

```python
INF = 1000000000
dp = [[INF for _ in range(3)] for _ in range(1000010)]

n = int(input())
x = input()[::-1]
y = input()[::-1]

a = [0] * n
b = [0] * n

for i in range(n):
    a[i] = int(x[i])
    b[i] = int(y[i])

for i in range(n):
    if i == 0:
        dp[i][0] = abs(a[i] - b[i])
        dp[i][1] = 10 - a[i] + b[i]
        dp[i][2] = a[i] + 10 - b[i]
    else:
        dp[i][0] = min(dp[i - 1][0] + abs(a[i] - b[i]), dp[i - 1][1] + abs(a[i] + 1 - b[i]), dp[i - 1][2] + abs(a[i] - 1 - b[i]))
        dp[i][1] = min(dp[i - 1][0] + (10 - a[i] + b[i]), dp[i - 1][1] + 10 - (a[i] + 1) + b[i], dp[i - 1][2] + 10 - (a[i] - 1) + b[i])
        dp[i][2] = min(dp[i - 1][0] + a[i] + 10 - b[i], dp[i - 1][1] + (a[i] + 1) + 10 - b[i], dp[i - 1][2] + (a[i] - 1) + 10 - b[i])

ans = min(dp[n-1][0], dp[n-1][1], dp[n-1][2])
print(ans)
```

## [树上选点 - 蓝桥云课](https://www.lanqiao.cn/problems/3546/learning/?page=1&first_category_id=1&name=%E6%A0%91%E4%B8%8A%E9%80%89%E7%82%B9)

### 问题描述

给定一棵树，树根为 $1$，每个点的点权为 $V_i$。 你需要找出若干个点 $P_i$，使得：

- 每两个点 $P_x$、$P_y$ 互不相邻；

- 每两个点 $P_x$、$P_y$ 与树根的距离互不相同；

- 找出的点的点权之和尽可能大。

请输出找到的这些点的点权和的最大值。

### 输入格式

输入的第一行包含一个整数 $n$。

第二行包含 $n-1$ 个整数 $F_i$，相邻整数之间使用一个空格分隔，分别表示第 $2$ 至 $n$ 个结点的父结点编号。

第三行包含 $n$ 个整数 $V_i$，相邻整数之间使用一个空格分隔，分别表示每个结点的点权。

### 输出格式

输出一行包含一个整数表示答案。

### 样例输入

```
5 1 2 3 2 2 1 9 3 5
```

### 样例输出

```
11
```

### 评测用例规模与约定

对于 $40$% 的评测用例，$n \leq 5000$；

对于所有评测用例，$1 \leq n \leq 2 \times 10^5$，$1 \leq F_i &lt; i$，$1 \leq V_i \leq 10^4$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 20s | 512M |
| PyPy3 | 20s | 512M |
| Go | 20s | 512M |
| JavaScript | 20s | 512M |

总通过次数: 210  |  总提交次数: 457  |  通过率: 46%

难度: 简单   标签: 2023, 省赛, 动态规划

版权声明

部分题目由用户贡献，若您是著作权持有人，请与我们联系。

### 解题思路

这个问题可以使用动态规划的策略进行解决。首先，我们要解析并存储树的结构，然后从叶子节点开始，通过动态规划的方法，逐步向上更新每个节点被选中和不被选中时能得到的最大权值和。

**状态定义**

我们定义两种状态，$f[u][1]$ 和 $f[u][0]$。$f[u][1]$ 表示选择节点 $u$ 的最大权值，$f[u][0]$ 表示不选择节点 $u$ 的最大权值。

**状态转移**

对于每一个节点 $u$，我们有以下状态转移方程：

- 不选择当前节点 $u$：$f[u][0] = max(f[u][0], f[v][1])$，其中 $v$ 是 $u$ 的下一层节点，表示我们可以选择下一层的任何一个节点；

- 选择当前节点 $u$：$f[u][1] = max(f[u][1], a[u] + f[v][0])$，表示我们选择当前节点 $u$，并且我们不能选择其子节点 $v$，但是我们可以选择 $v$ 的子节点。

**具体实现**

首先，我们读取输入数据，存储树的结构，并初始化状态矩阵。然后，我们从叶子节点开始，逐步向上更新每一个节点的状态。对于每一层的节点，我们先更新不选择该节点的方案，然后再更新选择该节点的方案。为了减少时间复杂度，我们使用了 `multiset` 来存储每一层能够转移的所有状态，可以直接找到最大值。

**时间复杂度分析**

每个节点我们都进行了一次状态更新操作，所以时间复杂度为 $O(n)$。在更新状态时，我们使用了 `multiset` 进行最大值查询，时间复杂度为 $O(\log n)$，所以总的时间复杂度为 $O(n \log n)$。

### AC_Code

- C++

```c
//c++
#include 
using namespace std;
#define int long long
const int N = 200010;
vector g[N], depth[N];     // g[]用来存每个结点的儿子 , depth[] 用来存每一深度的结点
int d[N], a[N], f[N][2], fa[N]; // d[]记录每个结点的深度,a[]是每个结点的值,f[][]第一维表示结点、第二维表示是否选择该节点
multiset s[N];             // 存每一层能够转移的所有状态
signed main()
{
    int n;
    scanf("%lld", &n);
    d[1] = 1;          // 1是根，所以深度为1
    int max_depth = 0; // 记录最大深度
    for (int i = 2; i = 1; j--) // 从叶子结点开始更新结点最大值
    {
        for (auto u : depth[j]) // 本层结点大小更新
        {
            // 先来更新不选择该结点的方案
            if (s[j + 1].size())                               // 如果下一层存在能转移过来的状态
                f[u][0] = max(f[u][0], *prev(s[j + 1].end())); // 当前节点如果不选肯定选的是前一层的最大值(选或者不选都行)

            // 再来更新选择该节点的方案
            f[u][1] = a[u];     // 如果选择该结点,则该结点的最小值是结点本身的值
            for (auto v : g[u]) // 选择能够转移到现在这个状态的状态
            {
                s[j + 1].erase(s[j + 1].find(f[v][1])); // 因为不能选择相邻结点,把选取了它的儿子的方案除去,不能从这些最大值中更新
            }
            if (s[j + 1].size()) // 如果下一层存在能转移过来的状态
            {
                int mx = *prev(s[j + 1].end());    // 能够转移至这个状态的最大值
                f[u][1] = max(f[u][1], a[u] + mx); // 如果选这个节点,那么要从他非儿子中选一个最大的(不选或选)或者从他儿子中选一个不选的最大的
            }

            // 为下一次状态更新做准备
            for (auto v : g[u])
            {
                s[j + 1].insert(f[v][1]); // 刚刚为了更新选择该结点状态时删去了选它的儿子状态,现在再加回来,因为本层其他节点可能更新需要
            }
            s[j].insert(f[u][1]);
            s[j].insert(f[u][0]); // 当前节点或者不选都可以作为它们上一层节点的更新值
        }
    }
    printf("%lld", max(f[1][0], f[1][1])); // 在选和不选1结点中的方案中的最大值就是答案

    return 0;
}
```

- Java

```java
import java.util.*;

public class Main {
    private static final int N = 200010;
    private static List[] g = new ArrayList[N], depth = new ArrayList[N];
    private static int[] d = new int[N], a = new int[N], fa = new int[N];
    private static int[][] f = new int[N][2];
    private static TreeMap[] s = new TreeMap[N];

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        d[1] = 1;
        int max_depth = 0;

        for (int i = 1; i ();
            depth[i] = new ArrayList<>();
        }

        for (int i = 2; i ();
        }

        for (int j = max_depth; j >= 1; j--) {
            for (int u : depth[j]) {
                if (s[j + 1].size() > 0) {
                    f[u][0] = Math.max(f[u][0], s[j + 1].lastKey());
                }
                f[u][1] = a[u];
                for (int v : g[u]) {
                    remove(s[j + 1], f[v][1]);
                }
                if (s[j + 1].size() > 0) {
                    int mx = s[j + 1].lastKey();
                    f[u][1] = Math.max(f[u][1], a[u] + mx);
                }
                for (int v : g[u]) {
                    add(s[j + 1], f[v][1]);
                }
                add(s[j], f[u][1]);
                add(s[j], f[u][0]);
            }
        }

        System.out.println(Math.max(f[1][0], f[1][1]));
        scanner.close();
    }

    private static void add(TreeMap map, int x) {
        map.put(x, map.getOrDefault(x, 0) + 1);
    }

    private static void remove(TreeMap map, int x) {
        if (map.containsKey(x)) {
            if (map.get(x) == 1) {
                map.remove(x);
            } else {
                map.put(x, map.get(x) - 1);
            }
        }
    }
}
```

- Python

```python
from collections import Counter
from typing import List

N = 200010
g = [[] for _ in range(N)]
depth = [[] for _ in range(N)]
d = [0] * N
a = [0] * N
fa = [0] * N
f = [[0] * 2 for _ in range(N)]
s = [Counter() for _ in range(N)]

n = int(input())
d[1] = 1
max_depth = 0
arrt = [int(n) for n in input("").split()]
for i in range(2, n + 1):
    fa[i] = arrt[i - 2]#int(input())
    g[fa[i]].append(i)
    d[i] = d[fa[i]] + 1
    max_depth = max(max_depth, d[i])

arrt = [int(n) for n in input("").split()]

for i in range(1, n + 1):
    a[i] = arrt[i - 1] #int(input())

for i in range(1, n + 1):
    depth[d[i]].append(i)

for j in range(max_depth, 0, -1):
    for u in depth[j]:
        if s[j + 1]:
            f[u][0] = max(f[u][0], max(s[j + 1].keys()))

        f[u][1] = a[u]
        for v in g[u]:
            s[j + 1][f[v][1]] -= 1
            if s[j + 1][f[v][1]] == 0:
                del s[j + 1][f[v][1]]

        if s[j + 1]:
            mx = max(s[j + 1].keys())
            f[u][1] = max(f[u][1], a[u] + mx)

        for v in g[u]:
            s[j + 1][f[v][1]] += 1

        s[j][f[u][1]] += 1
        s[j][f[u][0]] += 1

print(max(f[1][0], f[1][1]))
```

## [T字消除 - 蓝桥云课](https://www.lanqiao.cn/problems/3547/learning/?page=1&first_category_id=1&tags=2023&name=T)

### 问题描述

小蓝正在玩一款游戏，游戏中有一个 $n \times n$ 大小的 $01$ 矩阵 $A_{i,j}$。 小蓝每次需要选择一个 $T$ 字型的区域，且这个区域内至少要有一个 $1$。选中后，这个区域内所有的元素都会变成 $0$。 给定游戏目前的矩阵，小蓝想知道他最多可以进行多少次上述操作。 $T$ 字型区域是指形如 $(x-1,y)\to(x,y)\to(x+1,y)\to(x,y+1)$ 的四个点所形成的区域。其旋转 $90^\circ,180^\circ,270^\circ$ 的形式同样也视作 $T$ 字形区域。

### 输入格式

输入包含多组数据。

输入的第一行包含一个整数 $D$ 表示数据组数。

对于每组数据，第一行包含一个整数 $n$。

接下来 $n$ 行每行包含 $n$ 个 $0$ 或 $1$，表示矩阵 $A_{i,j}$ 的每个位置的值。

### 输出格式

输出 $D$ 行，每行包含一个整数表示小蓝最多可以对当前询问中的矩阵操作的次数。

### 样例输入

```
1 3 001 011 111
```

### 样例输出

```
5
```

### 样例说明

我们用 $X$ 表示某次操作选中的 $T$ 字形，以下给出一种可行方案：

```
001 XXX 0X0 00X 0X0 X00 011 => 0X1 => XXX => 0XX => XX0 => XX0 111 111 111 11X 1X0 X00
```

### 评测用例规模与约定

对于 $10$% 的评测用例，$n = 3$；

对于 $40$% 的评测用例，$n \leq 30$；

对于所有评测用例，$3 \leq n \leq 2000$，矩阵中仅含 $0$ 和 $1$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 999s | 512M |
| PyPy3 | 999s | 512M |
| Go | 999s | 512M |
| JavaScript | 999s | 512M |

总通过次数: 44  |  总提交次数: 199  |  通过率: 22.1%

难度: 简单   标签: 2023, 模拟, 省赛

### 解题思路

这个问题可以使用动态规划的策略进行解决。首先，我们要解析并存储树的结构，然后从叶子节点开始，通过动态规划的方法，逐步向上更新每个节点被选中和不被选中时能得到的最大权值和。

**状态定义**

我们定义两种状态，$f[u][1]$ 和 $f[u][0]$。$f[u][1]$ 表示选择节点 $u$ 的最大权值，$f[u][0]$ 表示不选择节点 $u$ 的最大权值。

**状态转移**

对于每一个节点 $u$，我们有以下状态转移方程：

- 不选择当前节点 $u$：$f[u][0] = max(f[u][0], f[v][1])$，其中 $v$ 是 $u$ 的下一层节点，表示我们可以选择下一层的任何一个节点；

- 选择当前节点 $u$：$f[u][1] = max(f[u][1], a[u] + f[v][0])$，表示我们选择当前节点 $u$，并且我们不能选择其子节点 $v$，但是我们可以选择 $v$ 的子节点。

**具体实现**

首先，我们读取输入数据，存储树的结构，并初始化状态矩阵。然后，我们从叶子节点开始，逐步向上更新每一个节点的状态。对于每一层的节点，我们先更新不选择该节点的方案，然后再更新选择该节点的方案。为了减少时间复杂度，我们使用了 `multiset` 来存储每一层能够转移的所有状态，可以直接找到最大值。

**时间复杂度分析**

每个节点我们都进行了一次状态更新操作，所以时间复杂度为 $O(n)$。在更新状态时，我们使用了 `multiset` 进行最大值查询，时间复杂度为 $O(\log n)$，所以总的时间复杂度为 $O(n \log n)$。

### AC_Code

- C++

```c
//c++
#include 
using namespace std;
#define int long long
const int N = 200010;
vector g[N], depth[N];     // g[]用来存每个结点的儿子 , depth[] 用来存每一深度的结点
int d[N], a[N], f[N][2], fa[N]; // d[]记录每个结点的深度,a[]是每个结点的值,f[][]第一维表示结点、第二维表示是否选择该节点
multiset s[N];             // 存每一层能够转移的所有状态
signed main()
{
    int n;
    scanf("%lld", &n);
    d[1] = 1;          // 1是根，所以深度为1
    int max_depth = 0; // 记录最大深度
    for (int i = 2; i = 1; j--) // 从叶子结点开始更新结点最大值
    {
        for (auto u : depth[j]) // 本层结点大小更新
        {
            // 先来更新不选择该结点的方案
            if (s[j + 1].size())                               // 如果下一层存在能转移过来的状态
                f[u][0] = max(f[u][0], *prev(s[j + 1].end())); // 当前节点如果不选肯定选的是前一层的最大值(选或者不选都行)

            // 再来更新选择该节点的方案
            f[u][1] = a[u];     // 如果选择该结点,则该结点的最小值是结点本身的值
            for (auto v : g[u]) // 选择能够转移到现在这个状态的状态
            {
                s[j + 1].erase(s[j + 1].find(f[v][1])); // 因为不能选择相邻结点,把选取了它的儿子的方案除去,不能从这些最大值中更新
            }
            if (s[j + 1].size()) // 如果下一层存在能转移过来的状态
            {
                int mx = *prev(s[j + 1].end());    // 能够转移至这个状态的最大值
                f[u][1] = max(f[u][1], a[u] + mx); // 如果选这个节点,那么要从他非儿子中选一个最大的(不选或选)或者从他儿子中选一个不选的最大的
            }

            // 为下一次状态更新做准备
            for (auto v : g[u])
            {
                s[j + 1].insert(f[v][1]); // 刚刚为了更新选择该结点状态时删去了选它的儿子状态,现在再加回来,因为本层其他节点可能更新需要
            }
            s[j].insert(f[u][1]);
            s[j].insert(f[u][0]); // 当前节点或者不选都可以作为它们上一层节点的更新值
        }
    }
    printf("%lld", max(f[1][0], f[1][1])); // 在选和不选1结点中的方案中的最大值就是答案

    return 0;
}
```

- Java

```java
import java.util.*;

public class Main {
    private static final int N = 200010;
    private static List[] g = new ArrayList[N], depth = new ArrayList[N];
    private static int[] d = new int[N], a = new int[N], fa = new int[N];
    private static int[][] f = new int[N][2];
    private static TreeMap[] s = new TreeMap[N];

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        d[1] = 1;
        int max_depth = 0;

        for (int i = 1; i ();
            depth[i] = new ArrayList<>();
        }

        for (int i = 2; i ();
        }

        for (int j = max_depth; j >= 1; j--) {
            for (int u : depth[j]) {
                if (s[j + 1].size() > 0) {
                    f[u][0] = Math.max(f[u][0], s[j + 1].lastKey());
                }
                f[u][1] = a[u];
                for (int v : g[u]) {
                    remove(s[j + 1], f[v][1]);
                }
                if (s[j + 1].size() > 0) {
                    int mx = s[j + 1].lastKey();
                    f[u][1] = Math.max(f[u][1], a[u] + mx);
                }
                for (int v : g[u]) {
                    add(s[j + 1], f[v][1]);
                }
                add(s[j], f[u][1]);
                add(s[j], f[u][0]);
            }
        }

        System.out.println(Math.max(f[1][0], f[1][1]));
        scanner.close();
    }

    private static void add(TreeMap map, int x) {
        map.put(x, map.getOrDefault(x, 0) + 1);
    }

    private static void remove(TreeMap map, int x) {
        if (map.containsKey(x)) {
            if (map.get(x) == 1) {
                map.remove(x);
            } else {
                map.put(x, map.get(x) - 1);
            }
        }
    }
}
```

- Python

```python
from collections import Counter
from typing import List

N = 200010
g = [[] for _ in range(N)]
depth = [[] for _ in range(N)]
d = [0] * N
a = [0] * N
fa = [0] * N
f = [[0] * 2 for _ in range(N)]
s = [Counter() for _ in range(N)]

n = int(input())
d[1] = 1
max_depth = 0
arrt = [int(n) for n in input("").split()]
for i in range(2, n + 1):
    fa[i] = arrt[i - 2]#int(input())
    g[fa[i]].append(i)
    d[i] = d[fa[i]] + 1
    max_depth = max(max_depth, d[i])

arrt = [int(n) for n in input("").split()]

for i in range(1, n + 1):
    a[i] = arrt[i - 1] #int(input())

for i in range(1, n + 1):
    depth[d[i]].append(i)

for j in range(max_depth, 0, -1):
    for u in depth[j]:
        if s[j + 1]:
            f[u][0] = max(f[u][0], max(s[j + 1].keys()))

        f[u][1] = a[u]
        for v in g[u]:
            s[j + 1][f[v][1]] -= 1
            if s[j + 1][f[v][1]] == 0:
                del s[j + 1][f[v][1]]

        if s[j + 1]:
            mx = max(s[j + 1].keys())
            f[u][1] = max(f[u][1], a[u] + mx)

        for v in g[u]:
            s[j + 1][f[v][1]] += 1

        s[j][f[u][1]] += 1
        s[j][f[u][0]] += 1

print(max(f[1][0], f[1][1]))
```

## [异或和 - 蓝桥云课](https://www.lanqiao.cn/problems/3549/learning/?page=1&first_category_id=1&tags=2023&name=%E5%BC%82%E6%88%96%E5%92%8C)

### 问题描述

给一棵含有 $n$ 个结点的有根树，根结点为 $1$，编号为 $i$ 的点有点权 $a_i$（$i \in [1,n]$）。现在有两种操作，格式如下：

- $1\ x\ y$：该操作表示将点 $x$ 的点权改为 $y$。

- $2\ x$：该操作表示查询以结点 $x$ 为根的子树内的所有点的点权的异或和。

现有长度为 $m$ 的操作序列，请对于每个第二类操作给出正确的结果。

### 输入格式

输入的第一行包含两个正整数 $n,m$，用一个空格分隔。

第二行包含 $n$ 个整数 $a_1,a_2,\ldots,a_n$，相邻整数之间使用一个空格分隔。

接下来 $n-1$ 行，每行包含两个正整数 $u_i,v_i$，表示结点 $u_i$ 和 $v_i$ 之间有一条边。

接下来 $m$ 行，每行包含一个操作。

### 输出格式

输出若干行，每行对应一个查询操作的答案。

### 样例输入

```
4 4 1 2 3 4 1 2 1 3 2 4 2 1 1 1 0 2 1 2 2
```

### 样例输出

```
4 5 6
```

### 评测用例规模与约定

对于 $30$% 的评测用例，$n,m \leq 1000$；

对于所有评测用例，$1 \leq n,m \leq 100000$，$0 \leq a_i,y \leq 100000$，$1 \leq u_i,v_i,x \leq n$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 17s | 512M |
| PyPy3 | 17s | 512M |
| Go | 17s | 512M |
| JavaScript | 17s | 512M |

总通过次数: 367  |  总提交次数: 453  |  通过率: 81%

难度: 简单   标签: 2023, DFS序, 图论, 树状数组, 省赛

### 解题思路

考虑第二个操作，查询以节点 $x$ 为根的子树内的所有点的点权的异或和。

类似这种子树查询问题，我们通常使用 DFS 序对树进行预处理。具体地说，在 DFS 遍历中，我们从根节点开始，依次遍历它的每个子节点。对于每个子节点，我们首先遍历它的子树，然后回溯到该子节点，继续遍历它的兄弟节点。在遍历的过程中，我们可以记录每个节点在 DFS 序中的遍历顺序，即第一次遍历到该节点的时间戳和最后一次遍历到该节点的时间戳。这里的时间戳可以使用一个计数器来实现，每次遍历到一个新节点时，计数器加 $1$，表示当前节点的时间戳。当回溯到该节点时，表示当前节点的最后一次遍历时间戳。

这样操作有什么作用呢？假设我们有一个长度大于 $n$ 的数组 $a$，我们记进入每个点 $i$ 的时间戳为 $\text{in}[i]$，回溯到点 $i$ 的时间戳为 $\text{out}[i]$，同时将每个点的点权赋值到 $a[\text{in}[i]]$ 上。这样对于一个根为 $x$ 的子树内所有点的点权异或和就等价于 $a$ 数组区间 $[\text{in}[x],\text{out}[x]]$ 的异或和。这样我们就将复杂的树上询问，转化为我们熟悉的数组区间查询问题。

接下来考虑操作 $1$，将点 $x$ 的点权改为 $y$。

结合上述分析，该操作即是将 $a[\text{in}[x]]$ 改为 $y$。

综上所述，我们需要对 $a$ 数组进行一个单点修改和区间查询的操作，这个经典操作我们可以使用树状数组或者线段树来维护，代码中使用的是树状数组。具体地说，我们使用一个树状数组 $a$ 来维护树的 DFS 序的前缀异或序列，$a_i$ 表示区间 $[1,i]$ 的异或和。

- 操作 $1$：将 $a[\text{in}[x]]$ 修改为 $y$。

- 操作 $2$：求解 $[\text{in}[x],\text{out}[x]]$ 的异或和，根据异或性质 $[1,r] \oplus[1,l-1]=[l,r]$，我们只需要求解 $a_{\text{in}[x]-1} \oplus a_r$ 即可求得答案。

时间复杂度为 $O(n \log n)$。

### AC_Code

- C++

```cpp
#include
using namespace std;
const int N = 100010;

template 
struct Fenwick {
    int n;
    std::vector a;

    Fenwick(int n = 0) {
        init(n);
    }

    void init(int n) {
        this->n = n;
        a.assign(n + 1, T());
    }

    void add(int x, T v) {
        for (; x  e[N];
void dfs(int u, int fa) {
    in[u] = ++tot;
    for (auto v : e[u]) {
        if (v == fa) continue;
        dfs(v, u);
    }
    out[u] = tot;
}
int main()
{
    ios_base :: sync_with_stdio(false);
    cin.tie(0); cout.tie(0);
    cin >> n >> m;
    Fenwick tr(n);
    for (int i = 1; i > a[i];
    for (int i = 0; i > u >> v;
        e[u].push_back(v);
        e[v].push_back(u);
    }
    dfs(1, 0);
    for (int i = 1; i > op >> x;
        if (op == 1) {
            cin >> y;
            int v = tr.rangeSum(in[x] - 1, in[x]);
            tr.add(in[x], y ^ v);
        } else {
            cout 

- Java

```java
import java.util.*;
import java.io.*;
 
public class Main {
    static int N = 100010;
    static int n, m, tot;
    static int[] a = new int[N], in = new int[N], out = new int[N], b = new int[N];
    static List[] e = new List[N];
 
    static void add(int x, int v) {
        for (; x  0; x -= x & (-x)) {
            ans ^= b[x];
        }
        return ans;
    }
 
    static int rangeSum(int l, int r) {
        return sum(r) ^ sum(l);
    }
 
    static void dfs(int u, int fa) {
        in[u] = ++tot;
        for (int v : e[u]) {
            if (v == fa) continue;
            dfs(v, u);
        }
        out[u] = tot;
    }
 
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        String[] temp = reader.readLine().split(" ");
        n = Integer.parseInt(temp[0]);
        m = Integer.parseInt(temp[1]);
        temp = reader.readLine().split(" ");
        for (int i = 1; i ();
        }
        for (int i = 0; i 

- Python

```python
import sys

N = 100010
n, m, tot = 0, 0, 0
a = [0]*N
in_ = [0]*N
out = [0]*N
b = [0]*N
e = [[] for _ in range(N)]

def add(x, v):
    while x  0:
        ans ^= b[x]
        x -= x & (-x)
    return ans

def rangeSum(l, r):
    return sum_(r) ^ sum_(l)

def dfs(u, fa):
    global tot
    in_[u] = tot = tot + 1
    for v in e[u]:
        if v == fa:
            continue
        dfs(v, u)
    out[u] = tot

def main():
    global n, m, tot
    n, m = map(int, sys.stdin.readline().split())
    a[1:n+1] = map(int, sys.stdin.readline().split())
    for _ in range(n - 1):
        u, v = map(int, sys.stdin.readline().split())
        e[u].append(v)
        e[v].append(u)
    dfs(1, 0)
    for i in range(1, n+1):
        add(in_[i], a[i])
    for _ in range(m):
        op, x, *extra = map(int, sys.stdin.readline().split())
        if op == 1:
            y = extra[0]
            v = rangeSum(in_[x] - 1, in_[x])
            add(in_[x], y ^ v)
        else:
            print(rangeSum(in_[x] - 1, out[x]))

if __name__ == "__main__":
    main()
```

## [混乱的数组 - 蓝桥云课](https://www.lanqiao.cn/problems/3550/learning/?page=1&first_category_id=1&tags=2023&name=%E6%B7%B7%E4%B9%B1%E7%9A%84%E6%95%B0%E7%BB%84)

### 问题描述

给定一个正整数 $x$，请找出一个尽可能短的仅含正整数的数组 $A$，使得 $A$ 中恰好有 $x$ 对 $i, j$ 满足 $i &lt; j$ 且 $A_i &gt; A_j$。如果存在多个这样的数组，请输出字典序最小的那个。

### 输入格式

输入一行包含一个整数表示 $x$。

### 输出格式

输出两行。

第一行包含一个整数 $n$，表示所求出的数组长度。

第二行包含 $n$ 个整数 $A_i$，相邻整数之间使用一个空格分隔，依次表示数组中的每个数。

### 样例输入

```
3
```

### 样例输出

```
3 3 2 1
```

### 评测用例规模与约定

对于 $30$% 的评测用例，$x \leq 10$；

对于 $60$% 的评测用例，$x \leq 100$；

对于所有评测用例，$1 \leq x \leq 10^9$。

### 运行限制

| 语言 | 最大运行时间 | 最大运行内存 |
| --- | --- | --- |
| C++ | 3s | 512M |
| C | 3s | 512M |
| Java | 5s | 512M |
| Python3 | 12s | 512M |
| PyPy3 | 12s | 512M |
| Go | 12s | 512M |
| JavaScript | 12s | 512M |

总通过次数: 127  |  总提交次数: 411  |  通过率: 30.9%

难度: 简单   标签: 2023, 思维, 构造, 省赛

### 解题思路

#### 问题分析

题目要求我们构造出一个字典序最小且有 $x$ 个逆序对的可重复数字的数组。

我们可以假设一种特殊情况。我们知道，一个严格递减的数组一共有 $\dfrac{n\times(n-1)}{2}$ 个逆序对，也是长度为 $n$ 的序列最大逆序对数量，例如 $3,2,1$ 就有 $3$ 个逆序对。

因此我们可以通过该公式找出 $\ge x$ 的第一个严格递减数组。我们可以 $2$ 分 $n$，也可以暴力求 $n$，暴力求 $n$ 的复杂度是 $\sqrt{x}$。

#### 构造答案

如果 $\dfrac{n\times(n-1)}{2}$ 恰好等于 $x$，那么答案就是 $n \sim 1$。

如果 $\dfrac{n\times(n-1)}{2}$ 大于 $x$，则说明答案序列一定长度为 $n$。因为我们求出来 $\dfrac{n\times (n-1)}{2} \ge x &gt; \dfrac{(n-1)\times(n-2)}{2}$。

现在假设 $x=13$，则序列 $a=[6,5,4,3,2,1]$，该序列有 $15$ 个逆序对。我们将 $6$ 变为 $4$，该序列就有 $13$ 个逆序对了。也就是 $a=[4,5,4,3,2,1]$，但这并不是最小的答案，我们有如下修改方式：

- 我们将 $a[3]$ 修改为 $3$，序列为 $[4,5,3,3,2,1]$，可以发现 $a[3]$ 和 $a[4]$ 构成不了逆序对，但 $a[1]$ 和 $a[3]$ 构成了逆序对，此时逆序对数不变，字典序变小。

- 我们将 $a[4]$ 修改为 $2$，序列为 $[4,5,3,2,2,1]$，可以发现 $a[3]$ 和 $a[4]$ 构成了逆序对，$a[4]$ 和 $a[5]$ 构不成逆序对了。

因此我们若想修改 $a_i$，则 $1\sim i-1$ 中等于 $a_i$ 的数量要等于 $i+1\sim n$ 中等于 $a_i-1$ 的数量，就能在保持逆序对不变的情况下修改。继续按照上述结论修改为 $[4,5,3,2,1,1]$。

我们发现，$a[2]$ 修改为 $4$ 依旧不影响结果，现在序列变为 $[4,4,3,2,1,1]$。然后根据之前所述规则，将 $a[2]$ 改为 $3$，然后 $a[3]$ 也可以修改为 $2$，最终答案为 $[4,3,2,2,1,1]$。

从做题经验来说：构造题大多都是有规律的构造，而非暴力构造，我们可以尝试寻找规律：

对于 $x=(11\sim 14)$ 我们均可以一一尝试：

$\text{[2 4 3 2 1 1 ],[3 3 2 2 1 1 ],[4 3 2 2 1 1],[5 4 3 2 1 1 ]}$。到这里发现可能后缀很像，但是依旧无法解题，我们继续找规律：

$x=(16\sim21)$：

$\text{[2 5 4 3 2 1 1 ],[3 4 3 2 2 1 1],[4 3 3 2 2 1 1 ],[5 4 3 2 2 1 1],[6 5 4 3 2 1 1 ],[7,6,5,4,3,2,1]}$。

我们发现后缀是从 $\text{[1 1] [2 2 1 1] [3 3 2 2 1 1][2 2 1 1][1 1]}$ 这种形式出现。

而前缀规律为 $[2,5,4,3,2][3,4,3],[4],[5,4,3],[6,5,4,3,2]$。

因此前后缀规律出现，跟是否是当前一半有关，因此寻找出规律。

因此若 $x-\dfrac{n\times(n-1)}{2}\le \dfrac{n}{2}$，则我们首项填 $1+x-\dfrac{n\times(n-1)}{2}$，第二项从 $n-2$ 开始递减填充，最后填充值大小与首项一样，然后最后构造数量和 $x-\dfrac{n\times(n-1)}{2}$ 相关的 $[1,1][2,2][3,3]…$。

该方法成立原因如下：

以 $17,\text{[3 4 3 2 2 1 1]}$ 为例：

我们在末置部分构造 $\text{2 2 1 1}$，已经有 $4$ 个逆序对了，首项一定比末置部分构造要大，因此对首项贡献为 $4$ 个逆序对，然后第二项开始递减填充了 $2$ 次，末置部分构造对齐贡献了 $8$ 个逆序对，他们互相之间构造了 $1$ 个逆序对，因此答案为 $4+4+8+1=17$。设 $x-\dfrac{n\times(n-1)}{2}=x_1$，则末置部分构造长度为 $x_1\times2$，首项大小为 $x_1+1$，递减长度为 $n-x_1\times2-1$。则构造出的逆序对数量为： $\dfrac{(x_1\times(x1-1))}{2}\times 4+\dfrac{(x_1\times(x1-1))}{2}\times 4+(n-x_1\times2-1)\times\dfrac{(x_1\times(x1-1))}{2}\times 4+\dfrac{(n-x_1\times2-1)\times((n-x_1\times2-2))}{2}$ $\dfrac{(x_1\times(x1-1))}{2}\times 4$ 是末置部分构造出的逆序对数量。

$x-\dfrac{n\times(n-1)}{2}&gt;\dfrac{n}{2}$ 证明也同理。

综上，该方案是一个合理的构造方案。

### AC_Code

- C++

```cpp
#include 
using namespace std;
int x, n, a[100005], res, k, r;
int main() {
  scanf("%d", &x);
  n = 1;
  while (n * (n - 1) / 2 = 1; i--) a[i] = res + (r - i + 1);
    } else {
      res = n - res - 1;
      r = n;
      for (int i = 1; i = 2; i--) a[i] = res + (r - i + 1);
      a[1] = res + 1;
    }
  }
  for (int i = 1; i 

- Java

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int x = in.nextInt();
        int n = 1;
        
        while (n * (n - 1) / 2 = 1; i--) {
                    a[i] = res + (r - i + 1);
                }
            } else {
                res = n - res - 1;
                r = n;
                for (int i = 1; i = 2; i--) {
                    a[i] = res + (r - i + 1);
                }
                a[1] = res + 1;
            }
            
            for (int i = 1; i 

- Python

```python
x = int(input())
n = 1

while n * (n - 1) // 2 

[← 下一篇 【WinForm】EntityFramework框架](/2024/04/10/WinForm-EntityFramework/)

[【蓝桥杯】23年省赛C组 上一篇 →](/2024/03/31/DSA-LanqiaoProvincialCompetitionC/)

∧ [≡](#toc-div)
