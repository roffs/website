---
title: Internal representations of BReps
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 05/04/2025
---

We'll see three different boundary representations for plannar faces:
- Face array + Vertex array
- Face array + Polygonal array + Halfedge array + Vertex array
- Vertex array

The two frist options are hierarchical representations (in the sense that they store some kind of relationship between the elements F:{V}, F:{E}, E:{V}...). 

The last one is an inverse representation, as it's based in representing the relationship V:{F}

## Face array + Vertex array

The vertex array stores the coordinates of each vertex, while the face array store the indices of the vertex forming the face. 

Face array: $[[v_0, v_1, v_2, v_3], ... ]$

Vertex array: $[[x_0, y_0, z_0 ], [x_1, y_1, z_1],...]$

In this representation we are not storing edge information per se, but it is implicit in the face array. For instance, in the example provided there would be an edge between $v_0$ and $v_1$. So all the relationships F:{V}, F:{E} and E:{V} can be obtained from the face array. 

The problem with this representation is that **it does not support holes**. 

## Face array + Polygonal array + Halfedge array + Vertex array

Since it supports holes, now the faces can be made of one or more loops (called polygones). 
For each face we will need to store the outer loop and one or more inner loops, then each loop will store the indices of its half edges

Face array: $[ [L_0, L_1, ], ... ]$

Polygonal array: $[[He_0, He_1, H_3],...]$


Vertex array: $[[x_0, y_0, z_0 ], [x_1, y_1, z_1],...]$

> [!Note]
> A half edge is like a regular edge, but assuming only one of its two possible directions. Since a half edge also has to store a pointer to its "twin" (other direction) half edge, each half edge only needs to store one of its two vertices ("from" or "to").

## Vertex array

With a vertex array we can store everything we need provided that we store as well these topological relationships $V:\{F\}$.

Vertex array: $[[x_0, y_0, z_0, F_0, F_1, F_3 ], [x_1, y_1, z_1, F_0, F_3, F_4],...]$