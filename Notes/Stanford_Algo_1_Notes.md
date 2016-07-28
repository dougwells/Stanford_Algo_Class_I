## Stanford Algorithm's Class - Professor Tim Roughgarden

### Week 1: Notes:

1. Big-O:  Upper Bound.  Tn (number of operations) is less than or equal to Big-O
  * Big-O is an upper bound.  
    1. Declare C & n'.  Above n', Tn is ALWAYS less than Big-O

  * Big-O suppresses constant factors & lower order terms
    1. Constant factors ignored since system dependent
    2. Lower order terms ignored since irrelevant when n is very large
    3. To compare Big-Os, merely input a large value for n

  * Typical Big-O times
    1. Constant time:   O(n^0)
    2. Linear time:     O(n)
    3. Quadratic time:  O(n^2)

2. Omega Notation:  Lower Bound.  Tn (number of operations) is greater than or equal to Theta

3.  Theta = Equality

4.  "Little-o":  Strictly less than.  Never equal

### Week 2: Master Method & Quicksort:
#### Comparison algos - best you can do is n*log(n)

1. Master Method (aka "Master Theorem"): "Blackbox" for determining number of operations in recursion
  * Equation: T(n) <= a*T(n/b) + C(n^d)
    1. T(n) = running time for algorithm
    2. a = number of recursive calls made per step (ie, Merge-Sort is 2)
    3. b = input size "shrinkage" prior to being fed into recursive call (Merge-Sort = 2)
    4. d = exponent for work needed for "combine step".  d can be zero (more commonly = 1)
      * n^d is the work that is done outside of recursion
    5. C = constant (earlier version had this as O)

  * Blackbox answer.  3 base cases
    1. Case 1:  if a=b^d  --> O(n^d*log[n])   This is Merge-Sort case (a=2, b=2, d=1)
    2. Case 2:  if a<b^d  --> O(n^d)
    3. Case 3:  if a>b^d  --> O(n^[logb(a)])  log-base matters b/c in exponent (vs case 1 changes leading constant factor)

### Week 3: Selection Algo (find i-th item in sorted array), Graphs, & Karger's Algo for minimum cuts
#### Selection algo runs faster than n*log(n) b/c only work with half of array per recursion call

1. R-Select:  Uses random selection of pivot.  (R := "Random")
  * Running time:
    1. Best (if 25<p<75).  Running time = 8c*(N)
      * Used coin toss as part of proof (since also 50/50 outcome)
      * Geometric sum - Good explanation.  https://en.wikipedia.org/wiki/Geometric_series
    2. Worse = N^2

2. Discrete pivot selection = no random selection. (D := "Discrete")
  * Uses "Median of Medians"
  * Running time is always linear (but high coefficients and lower order terms)
  * In practice use, R-Select

3. Graphs
  * Karger "min-cut" algorithm:  http://www.geeksforgeeks.org/kargers-algorithm-for-minimum-cut-set-1-introduction-and-implementation/
  http://mlarocca.github.io/05-22-2014/karger.html
  http://stackoverflow.com/questions/23825200/karger-min-cut-algorithm-in-python-2-7
  * Definitions
    1. n = number vertices or "nodes"
    2. m = number of edges (an edge simply connects 2 "dots" or nodes)
    3. cuts
      * grouping of all nodes into either A or B.  
      * Goal is to minimize # of edges "cut"
      * k = of edges that get cut (cross A & B)
        1. number of cuts possible, ~ 2^n  (actually (2^n)-2 )
    4. Min cut = cut which produces fewest crossing edges
