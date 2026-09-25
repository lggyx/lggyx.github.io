---
title: "【蓝桥杯】图论入门"
pubDate: 2024-03-19
chapter: algorithms
tags: ["蓝桥杯", "图论"]
legacy: true
---

## 图论

本章节为图论最基本的内容，要求每位同学都要尽量掌握。

## 图的基本概念

图：由点(`node`，或者 `vertex`)和连接点的边(`edge`)组成。图是点和边构成的网。

树：特殊的图

树，即连通无环图树的结点从根开始，层层扩展子树，是一种层次关系，这种层次关系，保证了树上不会出现环路。两点之间的路径：有且仅有一条路径。最近公共祖先。

### 图的种类

（1）无向无权图，边没有权值、没有方向； （2）有向无权图，边有方向、无权值； （3）加权无向图，边有权值，但没有方向； （4）加权有向图； （5）有向无环图（Directed Acyclic Graph，DAG）。

### 图算法的时间分析

图算法的复杂度和边的数量 E、点的数量 V 相关。$O(V+E)$：几乎是图问题中能达到的最好程度。$O(V\log E)$、$O(E\log V)$：很好的算法。$O(V^2)$、$O(E^2)$或更高：不算是好的算法。

## 图的存储

能快速访问：图的存储，能让程序很快定位结点 `u` 和 `v` 的边`(u, v)` 。

- 数组存边：简单、空间使用最少；无法快递定位

- 邻接矩阵：简单、空间使用最大；定位最快 `dis[a][b]`

- 邻接表：空间很少，定位较快

- 链式前向星：空间更少，定位较快

**注： 存储方式跟题目相匹配，占用空间少定位快也不一定是问题的最优存储方式。**

### 数组存边

优点：简单、最省空间。 缺点：无法定位某条边。 应用：`bellman-ford` 算法、最小生成树的 `kruskal` 算法

- C++

```c
// c/c++实现
struct Edge{
    int from,to,dis;
}e[M]; //结构体数组存边

cin>>n>>m;

for(int i=1;i>e[i].from>>e[i].to>>e[i].dis;
```

- Java

```java
//Java实现
class Edge { int from; int to; int dis;

    public Edge(int from, int to, int dis) {
        this.from = from;
        this.to = to;
        this.dis = dis;
    }

}

Edge[] e = new Edge[M];

Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int m = sc.nextInt();

for (int i = 0; i 

- Python

```python
#python实现
class Edge:
    def init(self, f, t, d):
        self.from = f
        self.to = t
        self.dis = d

e = [Edge(0, 0, 0) for i in range(M)]

n, m = map(int, input().split())

for i in range(1, m + 1):
    e[i].from, e[i].to, e[i].dis = map(int, input().split())
```

### 邻接矩阵

二维数组： $graph[NUM ][NUM ]$ 无向图： $graph[i][j]=graph[j][i]。$ 有向图： $graph[i][j]\neq graph[j][i]。$ 权值： $graph[i][j]存结点i到j的边的权值。$ 例如 $graph[1][2]= 3，graph[2][1] = 5等等。$ 用 $graph[i][j]= INF表示i，j之间无边。$

优点：

- 适合稠密图；

- 编码非常简短；

- 对边的存储、查询、更新等操作又快又简单。

缺点：

- 存储复杂度 $O(V^2)$太高。V=10000 时，空间 100M。

- 不能存储重边。

### 邻接表和链式前向星

邻接表（指针或数组下标）和链式前向星（容器模拟）的思路一样，只是表达方式不同。

![图片描述](/images/DSA-IntroductionToGraphTheory/29bc6278e9e147f9597ba0c263fc1903-0.png)

- C++

```c
struct edge{
    int from, to; long long w; //起点，终点，权值。起点from并没有用到，e[i]的i就是from
    edge(int a, int b,long long c){from=a; to=b; w=c;}
};
vectore[N];          //用于存储图
```

- Java

```java
static class Edge {
    int from, to;
    long w;

    Edge(int a, int b, long c) {
        from = a;
        to = b;
        w = c;
    }
}
static ArrayList[] e = new ArrayList[N];
```

- Python

```
class Edge:
    def __init__(self, fr, to, w):
        self.fr = fr
        self.to = to
        self.w = w

e = [[] for _ in range(N)]
```

我们会在使用的时候进行讲解。

## 最短路问题

最广为人知的图论问题就是最短路径问题。

简单图的最短路径

- 树上的路径：任意 $2$ 点之间

只有一条路径

- 所有边长都为 $1$ 的图：用 `BFS` 搜最短路径，复杂度 $O(n+m)$

普通图的最短路径

- 边长：不一定等于 $1$，而且可能为负数

- 算法：`Floyd`、`Dijkstra`、`SPFA` 等，各有应用场景，不可互相替代

### 最短路算法比较

| 问题 | 边权 | 算法 | 时间复杂度 |
| --- | --- | --- | --- |
| 一个起点，一个终点 | 非负数；无边权（或边权为 1） | A* | 什么算法也不能解决存在负环图的最短路的问题！最多是判断是否存在，或者找到负环。

网站推荐：[CSAcademy Graph Editor](https://csacademy.com/app/graph_editor/?tdsourcetag=s_pctim_aiomsg)

![图片描述](/images/DSA-IntroductionToGraphTheory/5c77aaf44a27ba24fd4dfee6aa36a8ce-0.png)

方便图论的学习。

### Floyd 算法

- 最简单的最短路径算法，代码仅有 $4$ 行

- 存图：最简单的矩阵存图

- 易懂，比暴力的搜索更简单易懂。

- 效率不高，不能用于大图在某些场景下有自己的优势，难以替代。能做传递闭包问题（离散数学）

C++、Java

```c
//java 和 c++
for(int k=1; k

- Python

```python
#python
for k in range(1, n+1): #floyd的三重循环
    for i in range(1, n+1):
        for j in range(1, n+1): # k循环在i、j循环外面
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])
```

`Floyd算法`：`多源`最短路算法，一次计算能得到图中每一对结点之间（`多对多`）的最短路径。 `Dijkstra`、`Bellman-Ford`、`SPFA`算法：`单源`最短路径算法（`Single source shortest path algorithm`），一次计算能得到一个起点到其他所有点（`一对多`）的最短路径。在截止目前的蓝桥杯大赛中，`Floyd`算法是最常见的最短路径算法。 以上统计包括国赛和省赛，所以另外两种仍然要进行学习。

#### Floyd 算法思想：动态规划

下面为 `Floyd` 算法的原理，不看背代码也可以。

- 动态规划：求图上两点 `i`、`j` 之间的最短距离，按“从小图到全图”的步骤，在逐步扩大图的过程中计算和更新最短路。

- 定义状态：`dp[k][i][j]，i、j、k`是点的编号，范围 `1 ~ n`。状态`dp[k][i][j]`表示在包含 `1 ~ k` 点的子图上，点对 `i、j` 之间的最短路。

- 状态转移方程：从子图 `1 ~ k-1` 扩展到子图 `1 ~ k` $dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j])$

首先是包含 `1 ~ k-1` 点的子图。 $dp[k-1][i][j]$：不包含 `k` 点子图内的点对 `i、j` 的最短路； $dp[k-1][i][k] + dp[k-1][k][j]$：经过 k 点的新路径的长度，即这条路径从 `i` 出发，先到 `k`，再从 `k` 到终点 `j`。 比较：不经过 `k` 的最短路径$dp[k-1][i][j]$和经过 `k` 的新路径，较小者就是新的$dp[k][i][j]$。

所以 `Floyd` 的原理就是每次引入一个新的点，用它去更新其他点的最短距离。

`k` 从 `1` 逐步扩展到 `n`：最后得到的$dp[n][i][j]$是点对 `i、j` 之间的最短路径长度。 初值$dp[0][i][j]$：若 `i、j` 是直连的，就是它们的边长；若不直连，赋值为无穷大。 `i、j` 是任意点对：计算结束后得到了所有点对之间的最短路。

$dp[k][i][j] = min(dp[k-1][i][j], dp[k-1][i][k] + dp[k-1][k][j])$ 用滚动数组简化： $dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])$

**特点：**

- 在一次计算后求得所有结点之间的最短距离。

- 代码极其简单，是最简单的最短路算法。

- 效率低下，计算复杂度是 $O(n^3)$，只能用于 $n 

### Dijkstra 算法

- Dijkstra：单源最短路径问题。

- 优点：非常高效而且稳定。

- 缺点：只能处理不含有负权边的图。

- 思路：贪心思想+优先队列。

#### 算法思想

`Dijkstra` 算法算是贪心思想实现的，首先把起点到所有点的距离存下来找个最短的，然后松弛一次再找出最短的，所谓的松弛操作就是，遍历一遍看通过刚刚找到的距离最短的点作为中转站会不会更近，如果更近了就更新距离，这样把所有的点找遍之后就存下了起点到其他所有点的最短距离。

**为什么是每次都是找最小的？**

因为最小边的不会被其它的点松弛，只有可能最小边去松弛别人。 如果存在一个点 $K$ 能够松弛 $ab$ 的话那么一定有 $ak$ 距离加上 $kb$ 的距离小于 $ab$，已知 $ab$ 最短，所以不存在 $ak + kb &lt; ab$。

`Dijkstra` 算法应用了贪心法的思想，即“抄近路走，肯定能找到最短路径”。

算法高效稳定：

- `Dijkstra` 的每次迭代，只需要检查上次已经确定最短路径的那些结点的邻居，检查范围很小，算法是高效的；

- 每次迭代，都能得到至少一个结点的最短路径，算法是稳定的

优先队列实现：

- 每次往队列中放新数据时，按从小到大的顺序放，采用小顶堆的方式，复杂度是 $O(logn)$，保证最小的数总在最前面；

- 找最小值，直接取 `B` 的第一个数，复杂度是 $O(1)$。

- 复杂度：用优先队列时，`Dijkstra` 算法的复杂度是 $O(mlogn)$，是最高效的最短路算法。

维护两个集合：已确定最短路径的结点集合 `A`、这些结点向外扩散的邻居结点集合 `B`。

- 把起点 `s` 放到 `A` 中，把 `s` 所有的邻居放到 `B` 中。此时，邻居到 `s` 的距离就是直连距离。

- 从 `B` 中找出距离起点 `s` 最短的结点 `u`，放到 `A` 中。

- 把 `u` 所有的新邻居放到 `B` 中。显然，`u` 的每一条边都连接了一个邻居，每个新邻居都要加进去。其中 `u` 的一个新邻居 `v`，它到 `s` 的距离 `dis(s, v)` 等于 `dis(s, u) + dis(u, v)`。

- 重复(2)、(3)，直到 `B` 为空时，结束。

**Dijkstra 的局限性是边的权值不能为负数：**

Dijkstra 基于 `BFS`，计算过程是从起点 `s` 逐步往外扩散的过程，每扩散一次就用贪心得到到一个点的最短路。 扩散要求路径越来越长，如果遇到一个负权边，会导致路径变短，使扩散失效。

Dijkstra 模板如下：

- C++

```c
#include
using namespace std;
const long long INF = 0x3f3f3f3f3f3f3f3fLL;
//这样定义INF的好处是: INF e[N];          //用于存储图
struct s_node{
    int id; long long n_dis;   //id：结点；n_dis：这个结点到起点的距离
    s_node(int b,long long c){id=b; n_dis=c;}
    bool operator  a.n_dis;}
};
int n,m;
int pre[N];                                //记录前驱结点，用于生成路径
void print_path(int s, int t) {            //打印从s到t的最短路
    if(s==t){ printf("%d ", s); return; }  //打印起点
    print_path(s, pre[t]);                 //先打印前一个点
    printf("%d ", t);                      //后打印当前点。最后打印的是终点t
}
long long  dis[N];         //记录所有结点到起点的距离
void dijkstra(){
    int s = 1;             //起点s是1
    bool done[N]; //done[i]=true表示到结点i的最短路径已经找到
    for (int i=1;i Q;          //优先队列，存结点信息
    Q.push(s_node(s, dis[s]));          //起点进队列
    while (!Q.empty())   {
        s_node u = Q.top();             //pop出距起点s距离最小的结点u
        Q.pop();
        if(done[u.id])  continue;       //丢弃已经找到最短路径的结点。即集合A中的结点            
        done[u.id]= true;
        for (int i=0; i y.w + u.n_dis) {
                dis[y.to] = y.w + u.n_dis;
                Q.push(s_node(y.to, dis[y.to]));  //扩展新的邻居，放到优先队列中
                pre[y.to]=u.id;  //如果有需要，记录路径
            }
        }
    }
    // print_path(s,n);          //如果有需要，打印路径: 起点1，终点n
}
int main(){
    scanf("%d%d",&n,&m);
    for (int i=1;i=INF)  cout

- Java

```java
import java.util.*;
import java.io.*;

public class Main {
    static final long INF = 0x3f3f3f3f3f3f3f3fL;
    static final int N = 300005;
    static ArrayList[] e = new ArrayList[N];
    static int n, m;
    static int[] pre = new int[N];
    static long[] dis = new long[N];
    static boolean[] done = new boolean[N];

    static class Edge {
        int from, to;
        long w;

        Edge(int a, int b, long c) {
            from = a;
            to = b;
            w = c;
        }
    }

    static class SNode implements Comparable {
        int id;
        long n_dis;

        SNode(int b, long c) {
            id = b;
            n_dis = c;
        }

        public int compareTo(SNode o) {
            return Long.compare(n_dis, o.n_dis);
        }
    }

    static void printPath(int s, int t) {
        if (s == t) {
            System.out.print(s + " ");
            return;
        }
        printPath(s, pre[t]);
        System.out.print(t + " ");
    }

    static void dijkstra() {
        int s = 1;
        PriorityQueue Q = new PriorityQueue<>();
        Arrays.fill(dis, INF);
        dis[s] = 0;
        Q.offer(new SNode(s, dis[s]));
        while (!Q.isEmpty()) {
            SNode u = Q.poll();
            if (done[u.id])
                continue;
            done[u.id] = true;
            for (Edge y : e[u.id]) {
                if (done[y.to])
                    continue;
                if (dis[y.to] > y.w + u.n_dis) {
                    dis[y.to] = y.w + u.n_dis;
                    Q.offer(new SNode(y.to, dis[y.to]));
                    pre[y.to] = u.id;
                }
            }
        }
        // printPath(s, n);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        for (int i = 1; i ();
        for (int i = 1; i = INF)
                System.out.print("-1 ");
            else
                System.out.print(dis[i] + " ");
        }
    }
}
```

- Python

```
import heapq

INF = 0x3f3f3f3f3f3f3f3f
N = 300002

class Edge:
    def __init__(self, fr, to, w):
        self.fr = fr
        self.to = to
        self.w = w

class SNode:
    def __init__(self, id, n_dis):
        self.id = id
        self.n_dis = n_dis

    def __lt__(self, other):
        return self.n_dis  y.w + u.n_dis:
                dis[y.to] = y.w + u.n_dis
                heapq.heappush(pq, SNode(y.to, dis[y.to]))
                pre[y.to] = u.id
    for i in range(1, n+1):
        if dis[i] >= INF:
            print("-1", end=" ")
        else:
            print(dis[i], end=" ")

n, m = map(int, input().split())
e = [[] for _ in range(N)]
for i in range(m):
    u, v, w = map(int, input().split())
    e[u].append(Edge(u, v, w))

dijkstra()
```

### Bellman-Ford 算法

BFS 的扩散思想，每个人都去问自己的相邻节点到 `S` 点的距离最近是多少。

第一轮至少有一个点得到了到 `S` 的最短距离，即与 `S` 相邻的节点，标记为 `T1`

重复以上操作，那么必然至少又有一个节点找到了与 `S` 的最短距离，即与 `T1` 相邻的节点，标记为 `T2`

**一共需要几轮操作？**

每一轮操作，都至少有一个新的结点得到了到 `S` 的最短路径。所以，最多只需要 `n` 轮操作，就能完成 `n` 个结点。在每一轮操作中，需要检查所有 `m` 个边，更新最短距离。

Bellman-Ford 算法的复杂度：`O(nm)`。

**Bellman-Ford 能判断负圈：**

没有负圈时，只需要 `n` 轮就结束。

如果超过 `n` 轮，最短路径还有变化，那么肯定有负圈。

#### SPFA 算法

队列优化版的 Bellman-Ford

SPFA = 队列处理+Bellman-Ford。

Bellman-Ford 算法有很多低效或无效的操作。其核心内容，是在每一轮操作中，更新所有结点到起点 `S` 的最短距离。 计算和调整一个结点 `U` 到 `S` 的最短距离后，如果紧接着调整 `U` 的邻居结点，这些邻居肯定有新的计算结果；而如果漫无目的地计算不与 `U` 相邻的结点，很可能毫无变化，所以这些操作是低效的。

**改进：** 计算结点 `U` 之后，下一步只计算和调整它的邻居，能加快收敛的过程。 这些步骤用队列进行操作，这就是 SPFA。

（1）起点 `S` 入队，计算它所有邻居到 `S` 的最短距离。把 `S` 出队，状态有更新的邻居入队，没更新的不入队。 （2）现在队列的头部是 `S` 的一个邻居 `U`。弹出 `U`，更新它所有邻居的状态，把其中有状态变化的邻居入队列。 （3）继续以上过程，直到队列空。这也意味着，所有结点的状态都不再更新。最后的状态就是到起点 `S` 的最短路径。

弹出 `U` 之后，在后面的计算中，`U` 可能会再次更新状态（后来发现，`U` 借道别的结点去 `S`，路更近）。所以，`U` 可能需要重新入队列。 有可能只有很少结点重新进入队列，也有可能很多。这取决于图的特征。

**所以，SPFA 是不稳定的,所以根据题目的类型，我们要选择合适的算法。**

**SPFA 模板如下：**

- C++

```cpp
#include
using namespace std;
const long long INF = 0x3f3f3f3f3f3f3f3f;
const int N = 5e3+10;
struct edge{
    int to;    long long w;
    edge(int tt,long long ww) {to = tt; w = ww;}
};
long long dist[N];
int inq[N];
vector e[N];
void spfa(int s){
    memset(dist,0x3f,sizeof(dist));
    dist[s] = 0;      //起点到自己的距离是0
    queue q;
    q.push(s);        //从s开始，s进队列
    inq[s] = 1;       //起点在队列中
    while(!q.empty()) {
        int u = q.front();
        q.pop();
        inq[u] = 0;   //u已经不在队列中
        if(dist[u] == INF)     continue;
        for(int i = 0;i  dist[u]+w) {         //u的第i个邻居v，它借道u，到s更近
                dist[v] = dist[u]+w;          //更新邻居v到s的距离
                if(!inq[v]) {      //邻居v更新状态了，但v不在队列中，放进队列
                    q.push(v);
                    inq[v] = 1;
                }
            }
        }
    }
}
int main(){
    int n,m,s;cin>>n>>m>>s;
    for(int i = 1;i >u>>v>>w;
        e[u].push_back(edge(v,w));
    }
    spfa(s);
    for(int i = 1;i 

- Java

```java
import java.util.*;

public class Main {
    static final long INF = 0x3f3f3f3f3f3f3f3fL;
    static final int N = 5010;

    static long[] dist = new long[N];
    static int[] inq = new int[N];
    static List[] e = new ArrayList[N];

    static class edge {
        int to;
        long w;

        public edge(int tt, long ww) {
            to = tt;
            w = ww;
        }
    }

    static void spfa(int s) {
        Arrays.fill(dist, INF);
        dist[s] = 0;
        Queue q = new LinkedList<>();
        q.add(s);
        inq[s] = 1;
        while (!q.isEmpty()) {
            int u = q.poll();
            inq[u] = 0;
            if (dist[u] == INF) continue;
            for (int i = 0; i  dist[u] + w) {
                    dist[v] = dist[u] + w;
                    if (inq[v] == 0) {
                        q.add(v);
                        inq[v] = 1;
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        int s = in.nextInt();
        for (int i = 1; i ();
        }
        for (int i = 1; i 

- Python

```python
import heapq

INF = 0x3f3f3f3f3f3f3f3f
N = 5010

class Edge:
    def __init__(self, to, w):
        self.to = to
        self.w = w

dist = [INF] * N
inq = [0] * N
e = [[] for _ in range(N)]

def spfa(s):
    global dist
    global inq
    dist = [INF] * N
    dist[s] = 0
    q = []
    heapq.heappush(q, s)
    inq[s] = 1
    while q:
        u = heapq.heappop(q)
        inq[u] = 0
        if dist[u] == INF:
            continue
        for i in range(len(e[u])):
            v = e[u][i].to
            w = e[u][i].w
            if dist[v] > dist[u] + w:
                dist[v] = dist[u] + w
                if inq[v] == 0:
                    heapq.heappush(q, v)
                    inq[v] = 1

n, m, s = map(int, input().split())
for i in range(m):
    u, v, w = map(int, input().split())
    e[u].append(Edge(v, w))
spfa(s)
for i in range(1, n+1):
    if dist[i] == INF:
        print("-1", end=" ")
    else:
        print(dist[i], end=" ")
```

### 总结

Dijkstra：适用于权值为非负的图的单源最短路径，用斐波那契堆的复杂度 `O(E+VlgV)` BellmanFord：适用于权值有负值的图的单源最短路径，并且能够检测负圈，复杂度 `O(VE)` SPFA：适用于权值有负值，且没有负圈的图的单源最短路径。论文中的复杂度为 `O(kE)`, 其中 `k` 为每个节点进入队列的次数，且 `k` 一般 `**所以：**

单源最短路 (1)当权值为非负时，用 `Dijkstra`。 (2)当权值有负值，且没有负圈，则用 `SPFA`。`SPFA` 能检测负圈，但是不能输出负圈。 (3)当权值有负值，而且可能存在负圈需要输出，则用 `BellmanFord`。能够检测并输出负圈。 多源最短路使用 `Floyd`

## 最小生成树

在无向图中，连通而且不含有圈（环路）的图，称为树。 最小生成树 MST：一个有 `n` 个结点的连通图的生成树是原图的极小连通子图，包含原图中的所有 `n` 个结点，并且边的权值之和最小。

### Prim 算法

对点进行贪心操作：“最近的邻居一定在 MST 上”。 从任意一个点 `u` 开始，把距离它最近的点 `v` 加入到 MST 中；下一步，把距离 {`u, v`} 最近的点 `w` 加入到 MST 中；继续这个过程，直到所有点都在 MST 中。

- C++

```c
#include 
using namespace std;
const int INF = 0x3f3f3f3f;
const int MAXN = 1005;
vector demo;
int closest[MAXN],lowcost[MAXN],m,n;//m为节点的个数，n为边的数量
int G[MAXN][MAXN];//邻接矩阵
int prim()
{
    for(int i=0;i>a>>b>>c;

       G[b][a]=G[a][b]=c;

    }

    cout

- Java

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static final int INF = 0x3f3f3f3f;
    private static final int MAXN = 1005;
    private static int[] closest = new int[MAXN];
    private static int[] lowcost = new int[MAXN];
    private static int[][] G = new int[MAXN][MAXN];
    private static int m;
    private static List demo = new ArrayList();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        m = scanner.nextInt();
        int n = scanner.nextInt();

        for (int i = 0; i 

- Python

```python
INF = 0x3f3f3f3f
MAXN = 1005
closest = [0] * MAXN
lowcost = [0] * MAXN
G = [[INF] * MAXN for _ in range(MAXN)]
demo = []

m,n = map(int, input().split())

for i in range(n):
    a,b,c = map(int, input().split())
    G[b][a]=G[a][b]=c

def prim():
    global closest, lowcost, G, m
    for i in range(m):
        lowcost[i] = INF
        closest[i] = 0

    closest[0] = -1
    num = 0
    ans = 0
    e = 0

    while num 对边进行贪心操作：“最短的边一定在 `MST` 上”。 从最短的边开始，把它加入到 `MST` 中；在剩下的边中找最短的边，加入到 `MST` 中；继续这个过程，直到所有点都在 `MST` 中。

`kruskal` 算法的 2 个关键技术： （1）对边进行排序。 （2）判断圈，即处理连通性问题。这个问题用并查集简单而高效，并查集是 `kruskal` 算法的实现基础。

初始时最小生成树 `MST` 为空。开始的时候，每个点属于独立的集。

按边长从小到大进行边的遍历操作：

尝试将最小边加入最小生成树：

- 如果边的两个端点属于同一个集合，就说明这两个点已经被加入最小生成树。则不能将边加入，否则就会生成一个环。

- 如果两个端点不属于同一个集合，就说明该点还未纳入最小生成树，此边可以加入。

重复上述操作，直到加入 `n-1` 条边。

`kruskal` 算法的复杂度包括两部分：对边的排序 `O(ElogE)`，并查集的操作 `O(E)`，一共是 `O(ElogE + E)`，约等于 `O(ElogE)`，时间主要花在排序上。

如果图的边很多，`kruskal` 的复杂度要差一些。`kruskal` 适用于稀疏图，`prim` 适合稠密图。

**模板如下：**

- C++

```c
#include 
using namespace std;

int n,m;
int father[1100000];
struct node
{
    int x;
    int y;
    int k;
} Q[1100000];

int find(int x)
{
    if (father[x] == x)
        return x;
    return father[x] = find(father[x]);
}
bool cmp(node a, node b)
{
    return a.k 

- Java

```java
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    static int n, m;
    static int[] father;
    static Node[] Q;

    static class Node {
        int x;
        int y;
        int k;

        public Node(int x, int y, int k) {
            this.x = x;
            this.y = y;
            this.k = k;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();
        m = scanner.nextInt();

        father = new int[n + 1];
        Q = new Node[m];

        int cont = 0, sum = 0, st = 0;
        for (int i = 0; i  a.k - b.k);
        for (int i = 1; i 

- Python

```python
n, m = map(int, input().split())

father = [i for i in range(n+1)]

Q = []

cont = 0
sum = 0
st = 0

for i in range(m):
    x, y, k = map(int, input().split())
    Q.append({'x': x, 'y': y, 'k': k})
    cont += k

Q.sort(key=lambda x:x['k'])

def find(x):

    if father[x] == x :
        return x
    father[x] = find(father[x])
    return father[x]

for i in range(m):
    tx = find(Q[i]['x'])
    ty = find(Q[i]['y'])
    if tx != ty:
        sum += Q[i]['k']
        st += 1
        father[tx] = ty
        if st == n - 1:
            break
print(sum)
```

## 图论例题

## 蓝桥王国 lanqiaoOJ 题号 1122

**题目描述**

蓝桥王国一共有 $N$ 个建筑和 $M$ 条单向道路，每条道路都连接着两个建筑，每个建筑都有自己编号，分别为 $1 \sim N$。（其中皇宫的编号为 1）国王想让小明回答从皇宫到每个建筑的最短路径是多少，但紧张的小明此时已经无法思考，请你编写程序帮助小明回答国王的考核。

**输入描述**

输入第一行包含 2 个正整数 $N,M$。第 2 到 $M+1$ 行每行包含三个正整数 $u,v,w$，表示 $u \to v$ 之间存在一条距离为 $w$ 的路。$1 \leq N \leq 3 \times 10^5$，$1 \leq M \leq 10^6$，$1 \leq u_i , v_i \leq N$，$0 \leq w_i \leq 10^9$。

**输出描述**

输出仅一行，共 $N$ 个数，分别表示从皇宫到编号为 $1 \sim N$ 建筑的最短距离，两两之间用空格隔开。（如果无法到达则输出 −1）

**解题思路:**

本题为单源最短路的模板题，直接套模板即可，本题我们采用 Dijkstra。

C++ 语言描述:

```cpp
#include
using namespace std;
const long long INF = 0x3f3f3f3f3f3f3f3fLL;
//这样定义INF的好处是: INF e[N];          //用于存储图
struct s_node{
    int id; long long n_dis;   //id：结点；n_dis：这个结点到起点的距离
    s_node(int b,long long c){id=b; n_dis=c;}
    bool operator  a.n_dis;}
};
int n,m;
int pre[N];                                //记录前驱结点，用于生成路径
void print_path(int s, int t) {            //打印从s到t的最短路
    if(s==t){ printf("%d ", s); return; }  //打印起点
    print_path(s, pre[t]);                 //先打印前一个点
    printf("%d ", t);                      //后打印当前点。最后打印的是终点t
}
long long  dis[N];         //记录所有结点到起点的距离
void dijkstra(){
    int s = 1;             //起点s是1
    bool done[N]; //done[i]=true表示到结点i的最短路径已经找到
    for (int i=1;i Q;          //优先队列，存结点信息
    Q.push(s_node(s, dis[s]));          //起点进队列
    while (!Q.empty())   {
        s_node u = Q.top();             //pop出距起点s距离最小的结点u
        Q.pop();
        if(done[u.id])  continue;       //丢弃已经找到最短路径的结点。即集合A中的结点
        done[u.id]= true;
        for (int i=0; i y.w + u.n_dis) {
                dis[y.to] = y.w + u.n_dis;
                Q.push(s_node(y.to, dis[y.to]));  //扩展新的邻居，放到优先队列中
                pre[y.to]=u.id;  //如果有需要，记录路径
            }
        }
    }
    // print_path(s,n);          //如果有需要，打印路径: 起点1，终点n
}
int main(){
    scanf("%d%d",&n,&m);
    for (int i=1;i=INF)  coutPython 语言描述:

```python
import heapq

INF = 0x3f3f3f3f3f3f3f3f
N = 300002

class Edge:
    def __init__(self, fr, to, w):
        self.fr = fr
        self.to = to
        self.w = w

class SNode:
    def __init__(self, id, n_dis):
        self.id = id
        self.n_dis = n_dis

    def __lt__(self, other):
        return self.n_dis  y.w + u.n_dis:
                dis[y.to] = y.w + u.n_dis
                heapq.heappush(pq, SNode(y.to, dis[y.to]))
                pre[y.to] = u.id
    for i in range(1, n+1):
        if dis[i] >= INF:
            print("-1", end=" ")
        else:
            print(dis[i], end=" ")

n, m = map(int, input().split())
e = [[] for _ in range(N)]
for i in range(m):
    u, v, w = map(int, input().split())
    e[u].append(Edge(u, v, w))

dijkstra()
```

Java 语言描述:

```java
import java.util.*;
import java.io.*;

public class Main {
    static final long INF = 0x3f3f3f3f3f3f3f3fL;
    static final int N = 300005;
    static ArrayList[] e = new ArrayList[N];
    static int n, m;
    static int[] pre = new int[N];
    static long[] dis = new long[N];
    static boolean[] done = new boolean[N];

    static class Edge {
        int from, to;
        long w;

        Edge(int a, int b, long c) {
            from = a;
            to = b;
            w = c;
        }
    }

    static class SNode implements Comparable {
        int id;
        long n_dis;

        SNode(int b, long c) {
            id = b;
            n_dis = c;
        }

        public int compareTo(SNode o) {
            return Long.compare(n_dis, o.n_dis);
        }
    }

    static void printPath(int s, int t) {
        if (s == t) {
            System.out.print(s + " ");
            return;
        }
        printPath(s, pre[t]);
        System.out.print(t + " ");
    }

    static void dijkstra() {
        int s = 1;
        PriorityQueue Q = new PriorityQueue<>();
        Arrays.fill(dis, INF);
        dis[s] = 0;
        Q.offer(new SNode(s, dis[s]));
        while (!Q.isEmpty()) {
            SNode u = Q.poll();
            if (done[u.id])
                continue;
            done[u.id] = true;
            for (Edge y : e[u.id]) {
                if (done[y.to])
                    continue;
                if (dis[y.to] > y.w + u.n_dis) {
                    dis[y.to] = y.w + u.n_dis;
                    Q.offer(new SNode(y.to, dis[y.to]));
                    pre[y.to] = u.id;
                }
            }
        }
        // printPath(s, n);
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        for (int i = 1; i ();
        for (int i = 1; i = INF)
                System.out.print("-1 ");
            else
                System.out.print(dis[i] + " ");
        }
    }
}
```

## 随机数据下的最短路问题 lanqiaoOJ 题号 1366

**题目描述**

给定 $N$ 个点和 $M$ 条单向道路，每条道路都连接着两个点，每个点都有自己编号，分别为 $1 \sim N$。问你从 $S$ 点出发，到达每个点的最短路径为多少。

**输入描述**

输入第一行包含三个正整数 $N,M,S$。第 2 到 $M+1$ 行每行包含三个正整数 $u,v,w$，表示 $u \to v$ 之间存在一条距离为 $w$ 的路。$1 \leq N \leq 5 \times 10^3$，$1 \leq M \leq 5 \times 10^4$，$1 \leq u_i, v_i \leq N$，$0 \leq w_i \leq 10^9$。

**输出描述**

输出仅一行，共 $N$ 个数，分别表示从编号 $S$ 到编号为 $1 \sim N$ 点的最短距离，两两之间用空格隔开。（如果无法到达则输出 −1）

**解题思路:**

本题为单源最短路的模板题，直接套模板即可，本题我们采用 SPFA。

C++ 语言描述:

```c
#include
using namespace std;
const long long INF = 0x3f3f3f3f3f3f3f3f;
const int N = 5e3+10;
struct edge{
    int to;    long long w;
    edge(int tt,long long ww) {to = tt; w = ww;}
};
long long dist[N];
int inq[N];
vector e[N];
void spfa(int s){
    memset(dist,0x3f,sizeof(dist));
    dist[s] = 0;      //起点到自己的距离是0
    queue q;
    q.push(s);        //从s开始，s进队列
    inq[s] = 1;       //起点在队列中
    while(!q.empty()) {
        int u = q.front();
        q.pop();
        inq[u] = 0;   //u已经不在队列中
        if(dist[u] == INF)     continue;
        for(int i = 0;i  dist[u]+w) {         //u的第i个邻居v，它借道u，到s更近
                dist[v] = dist[u]+w;          //更新邻居v到s的距离
                if(!inq[v]) {      //邻居v更新状态了，但v不在队列中，放进队列
                    q.push(v);
                    inq[v] = 1;
                }
            }
        }
    }
}
int main(){
    int n,m,s;cin>>n>>m>>s;
    for(int i = 1;i >u>>v>>w;
        e[u].push_back(edge(v,w));
    }
    spfa(s);
    for(int i = 1;i Python 语言描述:

```python
import heapq

INF = 0x3f3f3f3f3f3f3f3f
N = 5010

class Edge:
    def __init__(self, to, w):
        self.to = to
        self.w = w

dist = [INF] * N
inq = [0] * N
e = [[] for _ in range(N)]

def spfa(s):
    global dist
    global inq
    dist = [INF] * N
    dist[s] = 0
    q = []
    heapq.heappush(q, s)
    inq[s] = 1
    while q:
        u = heapq.heappop(q)
        inq[u] = 0
        if dist[u] == INF:
            continue
        for i in range(len(e[u])):
            v = e[u][i].to
            w = e[u][i].w
            if dist[v] > dist[u] + w:
                dist[v] = dist[u] + w
                if inq[v] == 0:
                    heapq.heappush(q, v)
                    inq[v] = 1

n, m, s = map(int, input().split())
for i in range(m):
    u, v, w = map(int, input().split())
    e[u].append(Edge(v, w))
spfa(s)
for i in range(1, n+1):
    if dist[i] == INF:
        print("-1", end=" ")
    else:
        print(dist[i], end=" ")
```

Java 语言描述:

```java
import java.util.*;

public class Main {
    static final long INF = 0x3f3f3f3f3f3f3f3fL;
    static final int N = 5010;

    static long[] dist = new long[N];
    static int[] inq = new int[N];
    static List[] e = new ArrayList[N];

    static class edge {
        int to;
        long w;

        public edge(int tt, long ww) {
            to = tt;
            w = ww;
        }
    }

    static void spfa(int s) {
        Arrays.fill(dist, INF);
        dist[s] = 0;
        Queue q = new LinkedList<>();
        q.add(s);
        inq[s] = 1;
        while (!q.isEmpty()) {
            int u = q.poll();
            inq[u] = 0;
            if (dist[u] == INF) continue;
            for (int i = 0; i  dist[u] + w) {
                    dist[v] = dist[u] + w;
                    if (inq[v] == 0) {
                        q.add(v);
                        inq[v] = 1;
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        int s = in.nextInt();
        for (int i = 1; i ();
        }
        for (int i = 1; i ![图片描述](/images/DSA-IntroductionToGraphTheory/e77a71de068da604d1245d5231201326-0.png)

**解题思路:**

填空题对时间没有要求，用最简单的 floyd

C++ 语言描述:

```c
#include
typedef long long ll;
using namespace std;
const int N = 3000;
const ll INF = 1e18;
ll mp[N][N];
void floyd(int n){
    for(int k = 1;k Python 语言描述:

```python
import math

def lcm(a, b):
    return int(a * b / math.gcd(a, b))

n = 2021
g = [[0 for i in range(1, n + 2)] for j in range(1, n + 2)]
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == j:
            g[i][j] = g[j][i] = 0
        elif abs(i - j)  g[i][k] + g[k][j]:
                g[i][j] = g[i][k] + g[k][j]
print(g[1][n])
```

Java 语言描述:

```java
public class Main {

    static final int n = 2021;

    static int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    static int lcm(int a, int b) {
        return a * b / gcd(a, b);
    }

    public static void main(String[] args) {
        int[][] floyd = new int[n][n];
        for (int i = 0; i ![图片描述](/images/DSA-IntroductionToGraphTheory/6fab239959de9ee1ffb4d57d7654fabf-0.png)

**解题思路:**

![图片描述](/images/DSA-IntroductionToGraphTheory/a28b434cf3a3579931db1586e3d0d710-0.png)

我们这里给大家一个朴素的 dijkstra 的模板，大家感受一下，优先队列到底优化的那一部分。

C++ 语言描述:

```c
#include
using namespace std;
const int N=1010;

//邻接矩阵
int gra[N][N];
int dist[N];
int g[N];
bool st[N];
int n,m;
//朴素版dijkstra
int dijkstra()
{
     memset(dist, 0x3f, sizeof dist);
    dist[1] = 0;

    for (int i = 0; i  dist[j]))
                t = j;
        for (int j = 1; j >n>>m;
    for(int i=1;i>g[i];
    g[n]=0;
    memset(gra, 0x3f, sizeof gra);
    for(int i=1;i>u>>v>>c;
        gra[u][v]=g[v]+c;
        gra[v][u]=g[u]+c;
    }
    coutPython 语言描述:

```python
import sys
from typing import List

n, m = map(int, input().split())

# 邻接矩阵
gra = [[float('inf')] * (n+1) for _ in range(n+1)]
dist = [float('inf')] * (n+1)
g = [0] + list(map(int, input().split()))
g[n] = 0
st = [False] * (n+1)

# 朴素版 Dijkstra
def dijkstra() -> int:
    dist[1] = 0

    for _ in range(n - 1):
        t = -1
        for j in range(1, n + 1):
            if not st[j] and (t == -1 or dist[t] > dist[j]):
                t = j
        for j in range(1, n + 1):
            dist[j] = min(dist[j], dist[t] + gra[t][j])
        st[t] = True
    return dist[n]

for _ in range(m):
    u, v, c = map(int, input().split())
    gra[u][v] = g[v] + c
    gra[v][u] = g[u] + c

print(dijkstra())
```

Java 语言描述:

```java
import java.util.*;
public class Main {
    static int N = 1010;
    static int[][] gra = new int[N][N];
    static int[] dist = new int[N];
    static int[] g = new int[N];
    static boolean[] st = new boolean[N];
    static int n, m;
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        n = scan.nextInt();
        m = scan.nextInt();
        for(int i = 1; i  dist[j])) {
                    t = j;
                }
            }
            if(t == -1) break;
            for(int j = 1; j ![图片描述](/images/DSA-IntroductionToGraphTheory/ceeb52dc7e8b316134f2c9c7b74b1c11-0.png)

**解题思路:**

![图片描述](/images/DSA-IntroductionToGraphTheory/f77dcab941517e1b3648b7cb3c2fa740-0.png)

C++ 语言描述:

```c
#include 
using namespace std;
int a[5005], x[5005], y[5005], f[5005];
struct Edge{
    int x;
    int y;
    double w;
}edge[1000005];
int find(int x){
    if (x == f[x])
        return x;
    f[x] = find(f[x]);
    return f[x];
}
int cmp(Edge a, Edge b){
    return a.w > m;
    for (int i = 1; i > a[i];
    cin >> n;
    for (int i = 1; i > x[i] >> y[i];
    for (int i = 1; i =edge[i].w?max:edge[i].w;
        }
        if (num == n - 1)
            break;
    }
    int ans = 0;
    for (int i = 1; i = max)
            ans++;
    cout Python 语言描述:

```python
import math

class Edge:
    x = 0
    y = 0
    w = 0.0
    def __init__(self, x, y, w):
        self.x = x
        self.y = y
        self.w = w

def find(x):
    if f[x]==x:
        return f[x]
    else:
        f[x] = find(f[x])
        return f[x]

def merge(x,y):
    xx = find(x)
    yy = find(y)
    if xx!=yy:
        f[yy] = xx

if __name__ == '__main__':
    m = int(input())
    a = list(map(int, input().split()))
    n = int(input())
    x = [0 for i in range(n + 2)]
    y = [0 for i in range(n + 2)]
    for i in range(n):
        b = list(map(int, input().split()))
        x[i + 1] = b[0]
        y[i + 1] = b[1]
    edge_list = []
    maxvalue = 0
    num = 0
    for i in range(1, n + 1):
        for j in range(i + 1, n + 1):
            w = math.sqrt((x[i] - x[j]) * (x[i] - x[j]) + (y[i] - y[j]) * (y[i] - y[j]))
            edge =  Edge(i, j, w)
            edge_list.append(edge)

    edge_list.sort(key=lambda x: x.w)
    f = [i for i in range(n + 1)]
    for i in edge_list:
        if find(i.x)!=find(i.y):
            merge(i.x,i.y)
            maxvalue = max(maxvalue,i.w)
            num+=1
            if num==n-1:
                break
    ans = 0
    for i in range(m):
        if a[i]>=maxvalue:
            ans+=1
    print(ans)
```

Java 语言描述:

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    static int ans = 0;
    static int n;
    static int[] a;
    static int m;
    static int[] x;
    static int[] y;
    static double max;
    static int[] f;
    static int num = 0;
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
    static PrintWriter out = new PrintWriter(new OutputStreamWriter(System.out));
    public static void main(String[] args) throws IOException{
        m = Integer.parseInt(in.readLine().trim());
        a = new int[m];
        String[] s = in.readLine().trim().split(" ");
        for(int i=0;i list = new ArrayList<>();
        for(int i=0;i=max)
                ans++;
        System.out.println(ans);
    }
    static int find(int x) {
        if(f[x] == x)
            return f[x];
        f[x] = find(f[x]);
        return f[x];
    }
    static void merge(int x,int y) {
        int xx = find(x);
        int yy = find(y);
        if(xx!=yy)
            f[yy] = xx;
    }
}
class Edge implements Comparable{
    int x;
    int y;
    double w;
    public Edge(int x, int y, double w) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
    }
    @Override
    public int compareTo(Edge o) {
        // TODO Auto-generated method stub
        return this.w>o.w?1:-1;
    }
}
```

## 通电

![图片描述](/images/DSA-IntroductionToGraphTheory/e0bde279d708165b220cfdf8848e1467-0.png)

**解题思路:**

给了你 `n` 个节点，又给了你 `n` 个基点之间相互连接需要多少钱，现在要 `n` 个村庄都通电，只需要保证 `n` 个节点构成连通子图即可。

最小的连通子图是树，也就是构造一棵树，那么在图上构造一棵最最少花费的树的问题即为最小生成树。

C++ 语言描述:

```c
#include 
using namespace std;
const int INF = 0x3f3f3f3f;
const int MAXN = 1005;
vector demo;
double closest[MAXN], lowcost[MAXN];
int m, n;             // m为节点的个数，n为边的数量
double G[MAXN][MAXN]; // 邻接矩阵
double prim()
{
    for (int i = 0; i Python 语言描述:

```python
import os
import sys

import math
def caculate(x1,y1,h1,x2,y2,h2):
    return math.sqrt( (x1-x2)**2+(y1-y2)**2)+(h1-h2)**2\

def find(x):
    if x!=ufs[x]:
        ufs[x]=find(ufs[x])
    return ufs[x]

def kruskal():
    global ufs
    ufs=list(range(n+1))
    my_brige.sort(key=lambda x:x[2])
    ans=0
    cnt=0
    for a,b,w in my_brige:
        x=find(a)
        y=find(b)
        if x==y:
            continue
        cnt+=1
        ans+=w
        ufs[x]=y

        if cnt==n-1:
            return ans

n=int(input())
brige=[[] for i in range(n+1)]
for i in range(1,n+1):
    x,y,h=map(int,input().split())
    brige[i]=(x,y,h)

my_brige=[]
for i in range(1,n):
    for j in range(i+1,n+1):
        x1,y1,h1=brige[i]
        x2,y2,h2=brige[j]
        w=caculate(x1,y1,h1,x2,y2,h2)
        my_brige.append((i,j,w))
ans=kruskal()
print("{:.2f}".format(ans))
```

Java 语言描述:

```java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

public class Main {
    static int N = 1010;
    static List list = new ArrayList<>();
    static int[] x = new int[N], y = new int[N], z = new int[N];
    static int n;
    //并查集数组
    static int[] q = new int[N];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        for (int i = 0; i  a.w));
        for (int i = 0; i 这天, 小明在机房学习。

他发现机房里一共有 $n$ 台电脑, 编号为 1 到 $n$, 电脑和电脑之间有网线连 接, 一共有 $n-1$ 根网线将 $n$ 台电脑连接起来使得任意两台电脑都直接或者间 接地相连。

小明发现每台电脑转发、发送或者接受信息需要的时间取决于这台电脑和 多少台电脑直接相连, 而信息在网线中的传播时间可以忽略。比如如果某台电脑 用网线直接连接了另外 $d$ 台电脑, 那么任何经过这台电脑的信息都会延迟 $d$ 单 位时间 (发送方和接收方也会产生这样的延迟, 当然如果发送方和接收方都是 同一台电脑就只会产生一次延迟)。

小明一共产生了 $m$ 个疑问: 如果电脑 $u_{i}$ 向电脑 $v_{i}$ 发送信息, 那么信息从 $u_{i}$ 传到 $v_{i}$ 的最短时间是多少?

**解题思路:**

还是一道比较明显的求`LCA`(最近公共祖先)模型的题目,我们可以使用多种方法来解决该问题，这里我们使用更好写的离线的`tarjan`算法来解决该问题。

除去`tarjan`算法必用的基础数组，我们还有一个数组`d[]`,`d[i]`记录的是每个点的出度，也就是它的延迟时间，以及数组`w[]`,`w[i]`的含义是点`i`到根节点的延迟时间。在通过`dfs`求出每个点`i`的`w[i]`以后，在`tarjan`中我们该如何求出两点的延迟时间呢？

我们设点`i`到`j`的延迟时间为$f(x)$,当我们求得`i`与`j`的最近公共祖先为`anc`，我们首先让$f(x)=w[i]+w[j]$,但很明显，我们多加了两遍$w[anc]$，所以我们需要减去两倍的$w[anc]$，但延迟时间还包括经过`anc`的时间，所以还得加上一个$d[anc]$。**此处请结合`w[]`和`d[]`的含义理解。** 最后能得出式子:$f(x)=w[i]+w[h]-w[anc]*2+d[anc]$ 我们利用这个式子在`tarjan`函数中就能得出每个询问的答案，当然对于起始和结束都在同一个节点的情况下,它的答案就是当前节点的出度，我们可以进行特判一下。输入输出较多，建议使用`scanf`和`printf`进行输入输出。

**时间复杂度**:`dfs`：每个点遍历一次,复杂度级别$O(n)$,`tarjan`算法复杂度接近 $O(n+m)$。

C++ 语言描述:

```c
#include
using namespace std;
typedef long long LL;
typedef pair PII;
const int N=100010;

unordered_map> gra;
int n,m;
//单个点的出度
int d[N];
//记录点i到根节点的延迟
int w[N];
//并查集数组
int q[N];
//记录答案
int res[N];
int st[N];
//存下查询
vector

    query[N];
//并查集查询
int find(int x){
    if(x!=q[x]) q[x]=find(q[x]);
    return q[x];
}

void dfs(int u,int fa)
{
    w[u]+=d[u];
    for(auto g:gra[u]){
        if(g==fa) continue;
        w[g]+=w[u];
        dfs(g,u);
    }
}

void tarjan(int u)
{
    st[u]=1;
    for(auto j:gra[u]){
        if(!st[j])
        {
            tarjan(j);
            q[j]=u;
        }
    }
    for(auto item: query[u]){
        int y=item.first,id=item.second;
        if(st[y]==2){
            int anc=find(y);
            res[id]=w[y]+w[u]-w[anc]*2+d[anc];
        }
    }
    st[u]=2;
}
int main()
{
    cin>>n>>m;
    for(int i=0;iPython 语言描述:

```python
from collections import defaultdict

gra = defaultdict(list)
d = [0] * 100010
w = [0] * 100010
q = [0] * 100010
res = [0] * 100010
st = [0] * 100010
query = [[] for _ in range(100010)]

def find(x):
    if x != q[x]:
        q[x] = find(q[x])
    return q[x]

def dfs(u, fa):
    w[u] += d[u]
    for g in gra[u]:
        if g == fa:
            continue
        w[g] += w[u]
        dfs(g, u)

def tarjan(u):
    st[u] = 1
    for j in gra[u]:
        if st[j] == 0:
            tarjan(j)
            q[j] = u
    for item in query[u]:
        y, id = item
        if st[y] == 2:
            anc = find(y)
            res[id] = w[y] + w[u] - w[anc] * 2 + d[anc]
    st[u] = 2

n, m = map(int, input().split())
for i in range(n - 1):
    a, b = map(int, input().split())
    gra[a].append(b)
    gra[b].append(a)
    d[a] += 1
    d[b] += 1

for i in range(m):
    a, b = map(int, input().split())
    if a != b:
        query[a].append((b, i))
        query[b].append((a, i))
    else:
        res[i] = d[a]

dfs(1, -1)
for i in range(1, n + 1):
    q[i] = i
tarjan(1)
for i in range(m):
    print(res[i])
```

Java 语言描述:

```java
import java.util.*;

public class Main {
    static class Pair {
        int first, second;
        public Pair(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    static Map> gra = new HashMap<>();
    static int[] d = new int[100010];
    static int[] w = new int[100010];
    static int[] q = new int[100010];
    static int[] res = new int[100010];
    static int[] st = new int[100010];
    static List

[] query = new List[100010];

    static int find(int x) {
        if (x != q[x]) q[x] = find(q[x]);
        return q[x];
    }

    static void dfs(int u, int fa) {
        w[u] += d[u];
        for (int g : gra.get(u)) {
            if (g == fa) continue;
            w[g] += w[u];
            dfs(g, u);
        }
    }

    static void tarjan(int u) {
        st[u] = 1;
        for (int j : gra.get(u)) {
            if (st[j] == 0) {
                tarjan(j);
                q[j] = u;
            }
        }
        for (Pair item : query[u]) {
            int y = item.first, id = item.second;
            if (st[y] == 2) {
                int anc = find(y);
                res[id] = w[y] + w[u] - w[anc] * 2 + d[anc];
            }
        }
        st[u] = 2;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        for (int i = 1; i ());
            query[i] = new ArrayList<>();
        }
        for (int i = 0; i LQ 国拥有 $n$ 个城市, 从 0 到 $n-1$ 编号, 这 $n$ 个城市两两之间都有且仅有 一条双向道路连接, 这意味着任意两个城市之间都是可达的。每条道路都有一 个属性 $D$, 表示这条道路的灰尘度。当从一个城市 $A$ 前往另一个城市 $B$ 时, 可 能存在多条路线, 每条路线的灰尘度定义为这条路线所经过的所有道路的灰尘 度之和, LQ 国的人都很讨厌灰尘, 所以他们总会优先选择灰尘度最小的路线。

LQ 国很看重居民的出行环境, 他们用一个指标 $P$ 来衡量 LQ 国的出行环 境, $P$ 定义为:

$P=\sum*{i=0}^{n-1} \sum*{j=0}^{n-1} d(i, j)$

其中 $d(i, j)$ 表示城市 $i$ 到城市 $j$ 之间灰尘度最小的路线对应的灰尘度的值。 为了改善出行环境, 每个城市都要有所作为, 当某个城市进行道路改善时, 会将与这个城市直接相连的所有道路的灰尘度都减少 1 , 但每条道路都有一个 灰尘度的下限值 $L$, 当灰尘度达到道路的下限值时, 无论再怎么改善, 道路的 灰尘度也不会再减小了。

具体的计划是这样的:

第 1 天, 0 号城市对与其直接相连的道路环境进行改善;

第 2 天, 1 号城市对与其直接相连的道路环境进行改善;

$\cdots$

第 $n$ 天, $n-1$ 号城市对与其直接相连的道路环境进行改善;

第 $n+1$ 天, 0 号城市对与其直接相连的道路环境进行改善;

第 $n+2$ 天, 1 号城市对与其直接相连的道路环境进行改善;

LQ 国想要使得 $P$ 指标满足 $P \leq Q$ 。请问最少要经过多少天之后, $P$ 指标 可以满足 $P \leq Q$ 。如果在初始时就已经满足条件, 则输出 0 ; 如果永远不可能 满足, 则输出 $-1$ 。

**解题思路:**

首先，对于求解`P`指的公式，我们要清楚，是每个点到其他所有点的最短路径之和相加，这种涉及到任意两点的最短路，加上 $n$ 的最大范围只有`100`，很明显我们需要想到`Floyd`算法求任意两点的最短路。

我们并没有一个直观的算法直接求得答案，所以，我们考虑**二分答案。** 如果改善`x`天是符合要求的，那么大于`x`的天数也一定符合，但小于`x`的天数不一定，所以满足二段性，我们可以二分。

我们用`g[][]`记录初始道路的灰尘度,`m[][]`记录每条道路的最低灰尘度,`f[][]`记录的是在改善`x`天后的每条道路的环境。这样我们就可以使用二分+`Floyd`的做法得到答案。

当然这里有一些需要注意的细节问题，当我们改变`f[i][j]`的值时，相应的也要改变`f[j][i]`的值，因为任意两点只存在一条双向道路，所以这两个状态应该表示的是同一条道路。每次`check`时，别忘记将`f[][]`重置回`g[][]`，再去减去对于的天数。`floyd`函数每次跑完后，计算并返回此时的`P`值。

最开始时我们可以判断每条道路都是最低复杂度的情况下，计算出来的`P`是否大于`Q`，如果大于说明肯定无解，直接返回`-1`即可。二分对于`r`的上限也需要注意，最多`100`个点，每个点最大`1e5`，所以理论上我们只要开到大于`1e7`以上就不会有问题，否则样例过大时可能会出错。

时间复杂度：$O(n^3log(n*m))$。

C++ 语言描述:

```c
#include
using namespace std;
typedef long long LL;
const int N=110;

LL g[N][N];
LL m[N][N];
LL f[N][N];
LL n,q;
LL floyd()
{
    LL a=0;
    for (int k = 1; k >n>>q;
    for(int i=1;i>g[i][j];
        }
    }
    for(int i=1;i>m[i][j];
            f[i][j]=m[i][j];
        }
    }
    if(floyd()>q){
        cout>1;
        if(check(mid)) r=mid;
        else l=mid+1;
    }
    coutPython 语言描述:

```python
import copy
N=110
g=[[0]*N for i in range(N)]
m=[[0]*N for i in range(N)]
f=[[0]*N for i in range(N)]
n,q=map(int,input().split())
def floyd(f):
    a=0
    for k in range(1,n+1):
        for i in range(1,n+1):
            for j in range(1,n+1):
                f[i][j]=min(f[i][j],f[i][k]+f[k][j])
    for i in range(1,n+1):
        for j in range(1,n+1):
            a=a+f[i][j]
    return a
def check(x,g):
    f=copy.deepcopy(g)
    h=x//n
    s=x%n
    for i in range(1,n+1):
        for j in range(1,n+1):
            if i==j:
                continue
            if iq:
        print(-1)
        return
    l,r=0,10000000
    while (l >1
        if (check(mid,g)):
            r=mid
        else:
            l=mid+1
    print(r)
solve()
```

Java 语言描述:

```java
import java.io.*;

public class Main {
    static int N=110;
    static long[][] g=new long[N][N],m=new long[N][N],f=new long[N][N];
    static long n,q;
    static BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
    static PrintWriter  out=new PrintWriter(new OutputStreamWriter(System.out));
    public static void main(String[] args) throws IOException {
        String[] s=br.readLine().split(" ");
        n=Long.parseLong(s[0]);
        q=Long.parseLong(s[1]);
        for(int i=1;iq){
            out.println(-1);
            out.flush();
            return;
        }
        long l=0,r=1000000000;
        while(l>1;
            if(check(mid)) r=mid;
            else l=mid+1;
        }
        out.println(r);
        out.flush();
    }
    static long floyd(){
        long a=0;
        for (int k = 1; k 

[← 下一篇 【蓝桥杯】简单数论](/2024/03/20/DSA-BasicNumberTheory/)

[【蓝桥杯】动态规划 上一篇 →](/2024/03/18/DSA-DynamicProgramming/)

∧ [≡](#toc-div)
