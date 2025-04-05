---
title: Algebraic topology
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 05/04/2025
---

## Valid solid

From the pont of view of the algebraic topology **all valid solids have a boundary that must separate the interior from the exterior**. So the main question is, given a surface, how can we say if it is the boundary of a valid solid? 

A surface is the boundary of a valid solid if and only if the surface is: 
1. **Orientable**: The surface can be oriented consistently.
2. **Closed**: The surface has no border/boundary. 
2. **Non self-intersecting**: The surface is free from self intersections.

## Two-manifold surfaces

A surface is two-manifold if it is *"2D everywhere"*. 

A surface $S$ is two-manifold if all points $P$ belonging to the surface have a neighborhood $N(P)$ on the surface homeomorphic to an open disc at $\mathbb{R}^2$.

The idea is that, even if the neighborhood of a point $P$ is not flat, it can be continuously deformed into an open disc. 

> [!Note]
> Two surfaces $A$ and $B$ are **homeomorphic** (topologically equivalent)  if and only if there exist an homemorphism $f$ between $A$ and $B$: $f: A \rightarrow B$
> 
> A **homeomorphism** is just a function that is continuous, and that its inverse is also continuous. 
