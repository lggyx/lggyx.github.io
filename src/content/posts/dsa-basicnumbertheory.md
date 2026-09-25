---
title: "【蓝桥杯】简单数论"
pubDate: 2024-03-20
chapter: algorithms
tags: ["蓝桥杯"]
legacy: true
---

## 1 模运算

- 定义：模运算为 a 除以 m 的余数，记为 a mod m，有 a mod m = a % m。

- 模运算是大数运算中的常用操作。

- 如果一个数太大，无法直接输出，或者不需要直接输出，可以把它取模后，缩小数值再输出。

- Python 虽然能直接计算大数，不用担心数据溢出，但是大数乘法太耗时，所以也常用取模来缩小数值。

- 一个简单应用，判断奇偶：a%2=0，a 是偶数；a%2=1，a 是奇数

### 例题：刷题统计 2022 年第十三届省赛，lanqiaoOJ 题号 2098

【问题描述】 小明决定从下周一开始努力刷题准备蓝桥杯竞赛。他计划周一至周五每天做 a 道题目，周六和周日每天做 b 道题目。请你帮小明计算，按照计划他将在第几天实现做题数大于等于 n 题？

【输入格式】 输入一行包含三个整数 a, b 和 n。

【输出格式】 输出一个整数代表天数。

【评测用例规模与约定】 对于 50%的评测用例，1 ≤ a, b, n ≤ 106106；对于 100%的评测用例，1 ≤ a, b, n ≤ 10181018。

### 题目解析

求余数的简单题，利用求余，把计算复杂度降为 O(1)。

**C++ 代码：**

```c
#include
using namespace std;
typedef long long ll;
int main(){
    ll a,b,n; cin>>a>>b>>n;
    ll week = a*5+b*2;     //每周做题
    ll days = (n/week)*7;  //周数
    n %= week;             //剩下的做题数
    if(n**Java 代码：**

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long a = sc.nextLong(), b = sc.nextLong(), n = sc.nextLong();
        long week = a * 5 + b * 2;  //每周做题
        long days = (n / week) * 7; //周数*7天
        n %= week;                  //余下不够一周的做题数
        if (n **Python 代码：**

```python
a, b, n = map(int, input().split())
week = a * 5 + b * 2  #每周做题
days = (n // week) * 7  #天数
n %= week  #余数
if n 幂运算 an，当 n 很大时，如果一个个乘，时间是 O(n) 的，速度很慢，此时可以用快速幂，在 O(logn) 的时间内算出来。 快速幂的一个解法：分治法，算 a2，然后再算(a2) 2，…，一直算到 an，代码也容易写。

- 标准的快速幂：用位运算实现。

- 基于位运算的快速幂，原理是倍增。

### 快速幂原理

以 a11a11 为例说明如何用倍增法做快速幂。

（1）幂次与二进制的关系。把 a11a11 分解成幂 a8、a2、a1a8、a2、a1 的乘积：a11=a8+2+1=a8×a2×a1a11=a8+2+1=a8×a2×a1。其中a1、a2、a4、a8…a1、a2、a4、a8…的幂次都是 2 的倍数，所有的幂 aiai 都是倍乘关系，逐级递推，代码： a *= a

（2）幂次用二进制分解。如何把 11 分解为 8+2+1？利用数的二进制的特征，n = 1110 = 10112 = 23+21+20 = 8+2+1，把 n 按二进制处理就可以。

（3）如何跳过那些没有的幂次？例如 1011 需要跳过 a4a4。做个判断，用二进制的位运算实现：

- n & 1 取 n 的最后一位，并且判断这一位是否需要跳过。

- n >>= 1 把 n 右移一位，目的是把刚处理过的 n 的最后一位去掉。 幂运算的结果往往很大，一般会先取模再输出。 根据取模的性质有：an mod m=(a mod m)n mod manmodm=(amodm)nmodm

### 例题：快速幂 lanqiaoOJ 题号 1514

【题目描述】给定 b, p, k，求(bp) mod k。其中 2≤b, p, k≤109。 【输入描述】三个整数 b，p，k。 【输出描述】输出(bp) mod k。

### 题目解析

**C++ 代码：**

```c
#include
using namespace std;
typedef long long ll;     //变量改用较大的long long
ll fastPow(ll a, ll n, ll mod){
    ll ans = 1;
    a %= mod;          //重要，防止下面的ans*a越界
    while(n) {
        if(n & 1)   ans = (ans*a) % mod;   //取模
        a = a*a % mod;                     //取模
        n >>= 1;
    }
    return ans;
}
int main(){
    ll b,p,k;    cin>>b>>p>>k;
    cout **Java 代码：**

```java
import java.util.Scanner;

public class Main {
    static long fastPow(long a, long n, long mod) {
        long ans = 1;
        a %= mod;   //重要，防止下面的ans*a越界
        while (n > 0) {
            if ((n & 1) == 1) {
                ans = (ans * a) % mod;  //取模
            }
            a = (a * a) % mod;  //取模
            n >>= 1;
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long b = sc.nextLong(), p = sc.nextLong(), k = sc.nextLong();
        System.out.println(fastPow(b, p, k));
        sc.close();
    }
}
```

**Python 代码：**

```python
def fast_pow(a, n, mod):
    ans = 1
    a %= mod  #重要，防止下面的ans*a越界
    while n > 0:
        if n & 1 == 1:
            ans = (ans * a) % mod  #取模
        a = (a * a) % mod  #取模
        n >>= 1
    return ans

b, p, k = map(int, input().split())
print(fast_pow(b, p, k))
```

## GCD 定义、性质

最大公约数 Greatest Common Divisor(GCD)：整数 a 和 b 的 GCD 是指能同时整除 a 和 b  的最大整数，记为 gcd(a, b)。由于-a 的因子和 a 的因子相同，因此 gcd(a, b) = gcd(|a|,  |b|)。编码时只关注正整数的最大公约数。 性质： （1）gcd(a, b) = gcd(a, a+b) = gcd(a, k·a+b) （2）gcd(ka, kb) = k·gcd(a, b) （3）定义多个整数的最大公约数：gcd(a, b, c) = gcd(gcd(a, b), c)。 （4）若 gcd(a, b) = d，则 gcd(a/d, b/d) = 1，即 a/d 与 b/d 互素。这个定理很重要。 （5）gcd(a+cb, b) = gcd(a, b)

**C++福利：** c++函数 std::__gcd()，可以返回负数，可以带多个参数。

```cpp
#include
using namespace std;
int main(){
    cout手写 gcd 函数，常用欧几里得算法。 辗转相除法求 gcd： `gcd(a, b) = gcd(b, a mod b)` 这是最常用的方法，极为高效。 设 a &gt; b，辗转相除法的计算复杂度为O((log2a)3)O((log2a)3)。

可输出负数，和库函数一样:

```c
#include
using namespace std;
int gcd(int a, int b){     return b? gcd(b, a%b):a; }
int main(){
    cout最小公倍数 LCM (the Least Common Multiple) 。· a 和 b 的最小公倍数 lcm(a,b)(a,b),从算术基本定理推理得到。 算术基本定理：任何大于 1 的正整数 n 都可以唯一分解为有限个素数的乘积：

n=p1c1p2c2…pmcm\rm{n}=\rm{p}_1^{c1}\rm{p}_2^{c2}\ldots\rm{p}*m^{cm}n=p1c1p2c2…pmcm,其中c1c1 都是正整数，pi\rm{p}*{\rm{i}}pi 都是素数且从小到大。

推导 LCM： 设:a=p1c1p2c2…pmcm,b=p1f1p2f2…pmfm:a=p1c1p2c2…pmcm,b=p1f1p2f2…pmfm

那么：gcd(a, b)=p1min⁡c1,f1p2min⁡c2,f2…pmmin⁡cm,fmb)=p1minc1,f1p2minc2,f2…pmmincm,fm

Icm(a,b)=p1max⁡c1,f1p2max⁡c2,f2…pmmax⁡cm,fm(a,b)=p1maxc1,f1p2maxc2,f2…pmmaxcm,fm

推出：gcd(a, b)*lcm(a, b)=a*b

即：

lcm(a,b):=:a∗b/gcd(a,b):=:a/gcd(a,:b)∗b.lcm(a,b):=:a∗b/gcd(a,b):=:a/gcd(a,:b)∗b.

### lcm()手写代码

```c
//c or c++
int lcm(int a, int b){    //需要的时候把int改成long long
   return a / gcd(a, b) * b;  //先做除法再做乘法，防止先做乘法溢出
}

# Python
def lcm(a, b):
    return a // gcd(a, b) * b  #先做除法再做乘法，防止先做乘法溢出

//java
static int lcm(int a, int b) {
    return a / gcd(a, b) * b; //先做除法再做乘法，防止先做乘法溢出
}
```

### 核桃的数量 2013 年第四届省赛 lanqiaoOJ 题号 210

【题目描述】小张是软件项目经理，他带领 3  个开发组。工期紧，今天都在加班呢。为鼓舞士气，小张打算给每个组发一袋核桃（据传言能补脑）。他的要求是： 1.各组的核桃数量必须相同  2.各组内必须能平分核桃（当然是不能打碎的） 3.尽量提供满足 1, 2 条件的最小数量（节约闹革命嘛） 【输入格式】输入三个正整数 a, b, c，表示每个组正在加班的人数，用空格分开（a,b,c&lt; 30）
【输出格式】输出一个正整数，表示每袋核桃的数量。

### 题目解析

简单题，答案就是三个数字的最小公倍数。

```c
#include
using namespace std;
int lcm(int a, int b){ return a / __gcd(a, b) * b;}
int main(){
    int a,b,c;    cin>>a>>b>>c;
    int k = lcm(a,b);
    cout素数定义：只能被 1 和自己整除的正整数。注：1 不是素数，最小素数是 2。

判断一个数 n 是不是素数：当n≤1014n≤1014时，用试除法；n &gt; 1014 时，试除法不够用，需 要用高级算法，例如 Miller Rabin 算法。

**试除法：** 用[2,n-1]内的所有数去试着除 n，如果都不能整除，就是素数。 优化：把[2,n-1]缩小到[2,n][2,n]。证明：若 n = axb, 设 a≤nn ,则 b≥nn,如果 a 是 n 的因子，说明 n 不是素数，b 不用再试且 b 一定也是。

### C++ 实现：

```cpp
#include 
#include 

bool is_prime(long long n){
    if(n 素数的筛选：给定 n，求 2~n 内所有的素数。 一个个地判断很慢，所以用“筛子”筛所有的整数，把非素数筛掉，剩下的就是素数。 常用两种筛法：埃氏筛、欧拉筛。

**埃氏筛:**

初始队列{2、3，4，5，6，7，8，9，10，11，12，13，…，n}，操作步骤： （1）输出最小的素数 2，筛掉 2 的倍数，得{2，3，4，5，6，7，8，9，10，11，12，13，…} （2）输出最小的素数 3，筛掉 3 的倍数，得{2，3，4，5，6，7，8，9，10，11，12，13，…} （3）输出最小的素数 5，筛掉 5 的倍数，得{2，3，4，5，6，7，8，9，10，11，12，13，…} 继续以上步骤，直到队列为空。

### C++ 实现：

```cpp
int primes[N],cnt;
bool bprime[N];
void getPrime(int n){
    memset(bprime,false,sizeof(bprime));
    bprime[0]=true;
    bprime[1]=true;

    for(int i=2;i**但是埃氏筛法的缺点：例如 6 会被 3 整除，6 会被 2 整除，会被筛两次，所以我们再给出欧氏线性筛法：**

### C++ 实现：

```cpp
int primes[N],cnt;
bool bPrime[N];
void getPrimes(int n){
    memset(bPrime,false,sizeof(bPrime));

    for(int i=2;i【题目描述】给定一个正整数 N，请你输出 N 以内（不包含 N）的质数以及质数的个数。 【输入描述】一个正整数 N，n&lt;1000 【输出描述】两行，第 1 行包含若干个素数，从小到大输出，用空格分开。第 2 行一个整数，表示素数个数。

输入： 10

输出： 2 3 5 7 4

题目为模板题目，实现方式如下，其中：

- bprime[i]记录数 i 的状态，若 bprime [i]=1，表示它被筛掉，不是素数。

- 用 primes[]存放素数，prime[0]是第一个素数 2。

- Cnt 是素数个数计数

### C++ 实现：

```cpp
#include
using namespace std;
const int N = 1e6;
int primes[N],cnt;
bool bprime[N]; //true表示被筛掉，不是素数
void getPrimes(int n){ //埃氏筛，计算[2, n]内的素数
        memset(bprime,false,sizeof(bprime));
        bprime[0]=true;
        bprime[1]=true;

        for(int i=2;i>n;
    getPrimes(n-1);
    for(int i=0;i任何一个正整数 n 都可以唯一地分解为有限个素数的乘积：n=p1c1p2c2…pmcmn=p1c1p2c2…pmcm,其中cici都是正整数，p*i 都是素数且从小到大。 分解质因子也可以用试除法。求 n 的质因子：

- 第一步，求最小质因子p1p1。逐个检查从2到 nn 的所有素数，如果它能整除 n，就是最小质因子。然后连续用 p1p1除 n，目的是去掉 n 中的 p1p1,得到 n1n1。

- 第二步，再找 n1n1的最小质因子。逐个检查从 p1p1 到 n1n1 的所有素数。从 p1p1开始试除， 是因为 n1n1没有比 p1p1小的素因子，而且 n1n1的因子也是 n 的因子。

- 继续以上步骤，直到找到所有质因子。

我们直接看一个例题：

【题目描述】求出区间[a,b]中所有整数的质因数分解。 【输入描述】输入一行，包含 2 个整数 a，b。2&lt;=a&lt;=b&lt;=10000 【输出描述】每行输出一个数的分解，形如 k=a1×a2×a3×…，k 从小到大，a 从小到大。

输入： 3 10

输出： 

$\begin{aligned} &amp;\text{3=} \text{3}  \ &amp;\text{4=} 2\times2  \ &amp;\text{5=}  \text{5}  \ &amp;6=2\times3 \ &amp;\text{7=7} \  &amp;8=2\times2\times2 \ &amp;9=3\times3 \ &amp;10=2\times5  \end{aligned}$

直接对每个数进行分解，然后打印出它的因数。

### C++ 实现：

```cpp
#include
using namespace std;
int p[20];  //p[]记录因子，p[1]是最小因子。一个int数的质因子最多有10几个
int c[40];  //c[i]记录第i个因子的个数。一个因子的个数最多有30几个
int factor(int n){
    int m = 0;
    for(int i = 2; i 1)                           //没有被除尽，是素数
        p[++m] = n, c[m] = 1;
    return m;                         //共m个因子
}
int main(){
    int a,b;   cin>>a>>b;
    for(int i=a;i 1) {
            p[++m] = n;
            c[m] = 1;
        }
        return m;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        for (int i = a; i  1:
        m += 1
        p[m], c[m] = n, 1
    return m

a, b = map(int, input().split())
for i in range(a, b+1):
    m = factor(i)
    print(f'{i}=', end='')
    for j in range(1, m+1):
        for k in range(1, c[j]+1):
            print(p[j], end='')
            if k [15 届蓝桥杯 14 天省赛冲刺营 1 期 - 简单数论 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/courses/31015/learning/?id=1927004&compatibility=false)

[← 下一篇 【蓝桥杯】组合数学](/posts/dsa-combinatorics/)

[【蓝桥杯】图论入门 上一篇 →](/posts/dsa-introductiontographtheory/)

