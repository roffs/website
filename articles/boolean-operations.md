---
title: Boolean operations
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 06/04/2025
---

## Boolean operation types

- Union: $P \in (A \cup B) \iff  p \in A \lor p \in B$
- Intersection: $P \in (A \cap B) \iff  p \in A \land p \in B$
- Difference: $P \in (A - B) \iff  p \in A \land p \notin B$

## Coincidences problem

The result of a boolean operation often leads to an invalid solid. In order to solve this problem **we define boolean operations between solids as the regularization of the underlying pointset.**

$\text{A solid} \Longrightarrow \text{a point set}$

$\text{B solid} \Longrightarrow \text{b point set}$

$A \cap B = reg(a \cap b) = cl(int(a \cap b))$

The regularization of the underlyng pointsets solve the issues where the resulting pont set is not closed. However it does not address non two-manifold vertices. The solution for said problem tends to be complex, and one of its possible approaches is to duplicate vertices and separate them. 

## Vertex based algorithm

When doing a boolean operation between two solids A and B, the resulting vertices can:
- Come from A, being inside or outside B
- Come from B, being inside or outside A
- Be new vertices as results of edges from A intersecting faces from B (or the other way around)

```
V = empty // output solid


// 1.Classify existing vertices

V.addVertices(A,B); // add vertices from A classified with respect to B (inside or outside B)
V.addVertices(B,A) // add vertices from B classified with respect to A (inside or outside A)


// 2. Compute new vertices 

for edge e in A 
    for face f in B
        if intersect(f,e) -> V.addVertices(intersectionVertex(f,e))

for edge e in B
    for face f in A
        if intersect(f,e) -> V.addVertices(intserctionVertex(f,e))


// 3. Select output vertices according to the boolean operation

for vertex v in V
    if v.type = NEW -> output.add(v)
    otherwise
        case
            union: if v.type = "from A outside B" or v.type = "from B outside A" -> output.add(v)
            intersection: if v.type = "from A inside B" or v.type = "from B inside A" -> output.add(v)
            A-B: if v.type = "from A outside B" or v.type = "from B in A" -> output.add(v)
            B-A: if v.type = "from A inside B" or v.type = "from B outside A" -> output.add(v)


// 4. Build F:{V} from V:{F}

buildFaces(output) // change from inverse repr. to hierarchical repr.

end
```

For every vertex we must store: 
- $(x,y,z)$ coordinates
- $V:\{F\}$ faces stored cyclically (CCW)
- Vertex type (A inside B, A outside B, B inside A, B outside A or New)