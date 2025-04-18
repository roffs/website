---
title: Pointset topology
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 04/04/2025
---

From the point of view of pointset topology all solids are just collections of points, are the points that are included are those that belong to the solid. 


## Open ball

Given a point $P \in \mathbb{R}^3$ and a radius $r \in \mathbb{R}, r\geq0$, then the open ball is the set of points whose distance to point $P$ is less than $r$:

$$
B(P, r) = \{Q\in\mathbb{R}^3 | dist(Q,R) < r\}
$$

This concept can be extended to N dimensions.

The equivalent of 1 dimension $P \in \mathbb{R}$ would be an open interval, for example  $(0, 1)$

The equivalent of 2 dimension $P \in \mathbb{R}^2$ would be an open disc.


## Neighborhood

Given a point $P \in \mathbb{R}^3$, a neighbohood centered at $P$ is any set that contains some open ball $B$ centered at the point $P$ with some radius $r$. The neighborhood can be arbitrary as small as we want as we can make the radius $r$ as small as we consider. 

## Open pointset
A set of points $A$ is an open set if and only if for every point $P$ that belongs to $A$ there exist a neighborhood centered at $P$ that is completely inside the set. 

$$
A \;\text{is open} \Longleftrightarrow \forall{P}\in A,\; \exists N(P)\subset A
$$

What this means is that for any point inside the open interval you can always find a neighborhood that is also inside thie open interval.

## Closed pointset

$A$ is a closed pointset if and only if its complementary set $\bar{A}$ is open.  

$$
A\;\text{is closed}\equiv \bar{A}\;\text{is open}
$$


> [!NOTE]  
> The open and closed pointset concepts are not mutually exclusive. A pointset can be neither open and closed, or can be open and closed at the same time. For example:
> - Not open nor closed: $(0, 1]$
> - Open and closed: $\mathbb{R}$ or $\empty$

## Interior point
A point $P$ is interior to the pointset $S$ if there exist a neighborhood centered at $P$ that is included in the pointset:

$$
P\;\text{is interior to }S \equiv \exists N(P) \in S
$$

For example, for the 1D interval $S=[0, 2]$, its interior is $Int(S) = (0, 2)$

## Exterior point
A point $P$ is exterior to the pointset $S$ if there exist a neighborhood of the point that is included in the complementary of the pointset

$$
P\;\text{is exterior to }S \equiv \exists N(P) \in \bar{S}
$$


## Boundary
A point $P$ is a boundary point of pointset $S$ if any neighborhood centered at $P$ contains both from $S$ and from $\bar{S}$. 

## Bounded pointset
A pointset $S$ is bounded if it can be enclosed in some open ball $B(P,r)$, meaning that we could compute a bounding sphere with a finite radius $r$ that it would encapsulate the pointset. 


## Regular pointset
A pointset $S$ is regular when it is *"the same dimension everywhere"*. All boundary points have a neighborhood $N(P)$ that contains points from both the $Int(S)$ and $Ext(S)$.   

A pointset $S$ is regular if it is equal to its regularization: 
$$
S\;\text{is regular}\equiv S = cl(Int(S))
$$

> [!Note] 
> The regularization of a pointset $S$ is computed as the closure of its interior.
> $$
> \text{Regularization(S)}= cl(Int(S))
> $$
> where the closure $cl(A) = \overline{Int(\bar{A})}$

