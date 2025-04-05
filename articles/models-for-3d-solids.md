---
title: Models for 3D solids
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 04/04/2025
---

Types of geometric models: 
- Curve models 
- Surface models
- Solid models
- Volume models



## Features of geometric models:
- **Non-ambiguity** A model is non-ambiguous if given a model there is at most one (possible) real object with that model
- **Validity:** There should be at least one possible real object with that model
- **Uniqueness:** A model is unique if, given a real object, there is a single model representing it. 


## What is a valid solid?

### Pointset topology
All solids are subsets of $\mathbb{R}^3$. The subset $S \subset \mathbb{R}^3$ is a valid solid if: 
- $S$ is a closed
- $S$ is a bounded 
- $S$ is regulard

### Algebraic topology: 
All solids have a boundary that separates the points that are inside of the solid from the ones that are outside. 
A surface is the boundary of a valid solid if and only if:
- It's closed
- It's orientable
- It's non self-intersecting