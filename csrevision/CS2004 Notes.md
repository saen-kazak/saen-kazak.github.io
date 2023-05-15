## <span style="text-decoration: underline 3px green;text-underline-offset:10px;margin:0;">Comparing Algorithms</span>


### Run Time

The running time of an algorithm:
- **varies** based on the **input**.
- often increases as the **input size** increases.
- may be **faster** on certain data sets than others.

**Case Times**
Algorithms will have a **best** case time, **worst** case time and **average** case time.
- The **best case** does not really tell us much as it usually doesn't happen very often.
- The **average case** can be difficult to determine as it often requires a lot of testing.
- The **worst case** is most useful and is **easier to analyse**.

### Experimental Studies

Programs can be written that **implement** the algorithm and the resulting run times can be **plotted**.

However, this brings about some **limitations**:
- Implementing the algorithm can be **difficult**.
- Results may **not** be indicative of certain inputs.
- The same **hardware** and **software** must be used.

### Asymptotic Analysis

- Using a **high level description** of the algorithm instead of an **implementation**.
- Calculating how the **running time** varies with **input size**.

To estimate the running time, we can:
- Use **pseudocode** to construct the algorithm.
- Count the number of **steps** in terms of primitive operations.

We refer to the running time of an algorithm as **T(n)** where **n = input size** or **T(n,m,...)** if there is more than one input.

**T(n)** can be used to calculate the Big-O of an algorithm, **O(n)**.



## <span style="text-decoration: underline 3px green;text-underline-offset:10px;margin:0;">Pseudo Code</span>

- Used to represent algorithms in a way that is **independent** of programming languages
- The normal concepts of loops (for/while), conditionals (if/else) and variables are used.
- **Mathematical notations** such as sets and equations are also often used.
- Functions are **not** used, **unless** we define them first

### Pseudo Code Example

```ArrayMax Algorithm Pseudocode
input: A 1-D numerical array Arr of size n > 0
let CurrentMax = a0
for i = 1 to n-1
	if ai > CurrentMax Then CurrentMax = ai
End For
Output: CurrentMax, the largest value in Arr
```

### Counting Primitive Operations

The individual operations of an algorithm can be counted by **inspecting** the pseudo code.
For example, the line `let CurrentMax = a0` will contain **two** operations as we are **referencing** `CurrentMax` **(1)**, and **assigning** it to `a0` **(2)**.

It is important to count **loops** correctly as operations inside a loop will repeat.
For example if the for loop has an operation count of **n-1** and repeats **7 times**, the inside code will have an operation count of **7(n-1)**.

**Indentation** helps to ensure nested loops can be easily seen, so that the inside operations can be counted properly.

## <span style="text-decoration: underline 3px green;text-underline-offset:10px;margin:0;">Mathematical Foundations</span>

**Variables** are symbols used to represent a mathematical construct, such as **sets** or **matrices**. They are treated the same mathematically as they are in programming.

### Sets

A **set** is a collection of objects, known as **elements**.
Sets are unordered.
Sets can be finite or infinite.

Some well known sets include
- **ℝ** - The set of Real Numbers 
- **ℤ** - The set of Integers

We can specify whether an **element** is a member of a set using the **∈** and **∉** symbols.

>If we say a ∈ **B**, this means a is an element of the set B
>If we say x ∉ **Y**, this means that x is not an element of the set Y.

We can reference the **cardinality** of a set by wrapping its name in | | **characters**.

> If set **A** = **{ 1 , 2 , 3 , 4 , 7 , 9}**
> then **|A|** = **6**
> because there are six elements in set A.

Multiple sets can be referenced at a time via the use of **intersections** and **unions**.
**Intersection** (**∩**) shows elements that are in **both sets**.

> If Set **A = { 1 , 2 , 4 , 6 , 7 }**
> If Set **B = { 2 , 3 , 5 , 8 , 9 }**
> 
> then **A ∩ B = {2}** ` can be thought of as in A and B`
> and **A ∪ B = {1,2,3,4,5,7,8,9}** `can be thought of as in A or B`

**Subsets** and **Supersets** can be defined as well.

> If A is a set and B is a set,
> and every element of B is also in A,
> then we can say **B** ⊆ **A**,
> meaning B is a **subset** of A
> 
> By applying the reverse logic, this also means that A is a **superset** of B.

### Equations

Equations use mathematical operations to link variables and numbers to each other.
Equations often have to be simplified.

>(*n*-1)(*n*-2)(*n*-3) can be simplified to
>= (*n*<sup>2</sup> - 2*n* - *n* + 2)(*n* - 3) `expand first bracket`
>= (*n*<sup>2</sup> - 3*n* + 2)( *n* - 3) `add up the 'n' terms`
>= n<sup>3</sup> - 3n<sup>2</sup> - 3n<sup>2</sup> + 9n + 2n - 6 `expand again`
>= n<sup>3</sup> - 6n<sup>2</sup> + 11n - 6 `add up the terms again`

### Functions

Functions are relations that uniquely associate members of one set with members of another set.

**The exponential function**
*e* is an irrational (infinite decimal places) mathematical constant which is around **2.718**.
*e*<sup><em>x</em></sup> is a special function often used to represent continuous growth.

>*e*<sup><em>x</em></sup> can also be notated as *exp(x)*.

### Subscripts

**Subscripts** can be used to **index** lists.

> If **X = \[ 4 , 7 , 8 , 5 , 8 , 3 ]**
> 
> we can signify that
> X<sub>1</sub> = 4
> X<sub>4</sub> = 5, etc.
> X<sub>i</sub> = \[*whatever number we're at in a loop*]

### Summation

We can use specific notation to reference the **sum** of all elements in a set.

>If X = **\[1 , 3 , 5 , 7 , 9]**
>then
>![[Pasted image 20230515182651.png]] 
>is the same as saying
>
>***s* = x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub> + (...) +  x<sub>n</sub>** 
>
>which in this case would be **1+3+5+7+9 = 25**
>
>	To sum the squares, we would replace **X<sub>i</sub>** above with **X<sup>2</sup><sub>i</sub>**

### Products

Similar notation can be used to reference the **product** of all elements in a set.

>If X = **\[1 , 3 , 5 , 7 , 9]**
>then
>![[Pasted image 20230515183923.png]]
>is the same as saying
>
>***s* = x<sup>2</sup><sub>1</sub> + x<sup>2</sup><sub>2</sub> + x<sup>2</sup><sub>3</sub> + (...) +  x<sup>2</sup><sub>n</sub>** 
>
>which in this case would be **1<sup>2</sup> + 3<sup>2</sup> + 5<sup>2</sup> + 7<sup>2</sup> + 9<sup>2</sup>** = **165**

