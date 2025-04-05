---
title: Boundary representation (BRep)
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 05/04/2025
---

Boundary representation (BRep) represents solids in terms of their boundaries. 


## Types of BRep

### Planar faces

They can be: 
- Arbitrary planar faces (might have holes)
- Polygonal faces:
    - Triangle mesh
    - Quad mesh
    - Arbitrary polygonal mesh

### Free form surface

- Parametric surfaces
    - Bezier surfaces
    - B-Spline 
    - Non uniform rational B-Splines (NURBS)


## Information in BRep

They must include at least two types of information:
1. Geometric information
2. Topological information. 

### Geometric information

It refers to coordinats of points, components of vectors, coefficients of planes/lines and any information regarding the geometry of the different elements of the boundary representation. In general it is information that depends on a specific coordinate system. 

Some information that we could be interested in having would be:
- Vertices $\longrightarrow (x,y,z), (n_x, n_y, n_z)$
- Edges $\longrightarrow$ coefficients of the equation of the line
- Faces $\longrightarrow$ plane $(a,b,c,d)$

### Topological information
It refers to the adjacency relationship between faces, edges and vertices. 

| **From/To** |     Face     |     Edge     |    Vertex    |
|:-----------:|:------------:|:------------:|:------------:|
|   **Face**  | F:{F}<br>1:N | F:{E}<br>1:N | F:{V}<br>1:N |
|   **Edge**  | E:{F}<br>1:2 | E:{E}<br>1:N | E:{V}<br>1:2 |
|  **Vertex** | V:{F}<br>1:N | V:{E}<br>1:N | V:{V}<br>1:N |


#### BRep supporting faces with holes

 In order to support holes, the faces also need to store loops (collection of connected edges), which can be exterior or interior (being these last ones the ones that describes the hole)f


 #### Conditions for a valid solid (polyhedron): 
 - All edges are shared by exactly two faces. 
 - The set of faces shared by every vertex define a single cone.
 - The faces and edges of the solid must be free from self-intersections. 


> [!Note]
> While for checking the two first conditions only the topological information is needed, to check the last one you also need the geometry  . 

## Typical conventions in BRep 
- **Normal of a face:** The normal face will always be oriented towards the outside of the solid
- For **exterior loops** vertices should be stored in **counter clock-wise (CCW) order**
- For **interior loops** vertices should be stored in ** clock-wise (CCW) order**
