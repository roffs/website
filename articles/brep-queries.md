---
title: BRep queries
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 06/04/2025
---

## Area of a triangle

Given two vectors $\vec{u}$ and $\vec{v}$, the module of its cross product is the area of the parallelogram by $\vec{u}$ and $\vec{v}$. Therefore the area of a triangle $ABC$ can be computed as:

$$
\text{Area of triangle ABC} = \frac{\|(A-B) \times (A-C)\|}{2}
$$

## Area of a 2D polygon - trapezoid method

$$
\text{Area of 2D polygon} = \frac{1}{2}\sum{(x_i-x_{i+1})(y_i+y_{i+1})}
$$


## Area of a 3D polygon

Lets first make some definitions: 
- $\vec{n}$ = unit-length normal of the polygon
- $S_x, S_y, S_z$ = area of the polygon projected onto the $x=0$, $y=0$ and $z=0$ planes respectively. 
- $S$ = area of the polygon

The components of the unit-length normal vector $\vec{n} = (n_x, n_y,n_z)$ are called directioni cosines, because they can be computed as:
-  $n_x = \vec{n}\cdot (1, 0, 0) = \cos{(\alpha)}$, where $\alpha$ is the angle between the normal $\vec{n}$ and the $x$ axis. 
-  $n_y = \vec{n}\cdot (0, 1, 0) = \cos{(\beta)}$, where $\beta$ is the angle between the normal $\vec{n}$ and the $y$ axis. 
-  $n_z = \vec{n}\cdot (0, 0, 1) = \cos{(\gamma)}$, where $\gamma$ is the angle between the normal $\vec{n}$ and the $z$ axis.

The projected areas $S_x, S_y, S_z$ are proportional to the correspoding component of the unit length normal: 

- $S_x = n_x\cdot S$
- $S_y = n_y\cdot S$
- $S_z = n_z\cdot S$

### Interpretation of projected areas

We've seen that $(S_x, S_y, S_z) = S(n_x, n_y, n_z)$

- **Direction:** It's parallel to the normal and there fore it's perpendicular to the polygon

- **Length:** $\|(S_x, S_y, S_z)\| = S$, which is the area of the polygon

### Algorithm

Compute the projected areas of the polygon:
- $S_x = \frac{1}{2}\sum{(y_i-y_{i+1})(z_i+z_{i+1})}$
- $S_y = \frac{1}{2}\sum{(x_i-x_{i+1})(z_i+z_{i+1})}$
- $S_z = \frac{1}{2}\sum{(x_i-x_{i+1})(y_i+y_{i+1})}$

Once we have the projected areas, we get a normal vector: 

$$
\vec{n} = (S_x, S_y, S_z)
$$

Finally the area can be computed as the length of this normal vector: 

$$
\text{polygon area} = \|\vec{n}\| = \sqrt{S_x^2 + S_y^2 + S_z^2 }
$$

### Area of a face with holes
$$
\text{Area of a face} = \text{area of external loop}\;- \sum{\text{area of interior loops}}
$$

## Area of a solid (with planar faces)
$$
\text{Area of a solid} = \sum_i{\text{area of face i}}
$$

## Volume of a solid

From a theoretical point of view, the volum of an object can be computed as:

$$
V = \iiint\limits_V{dV}
$$

With the divergence theorem can also be expressed as: 
$$
V = \iint\limits_S{x\:n_x\:dS} = \iint\limits_S{y\:n_y\:dS} = \iint\limits_S{z\:n_z\:dS}
$$

Which, since they are the same, can be put as: 
$$
V = \frac{1}{3}\iint\limits_S{x\:n_x\:+y\:n_y\:+z\:n_z\:dS}
$$

## Mass of a solid

If we assume a constant density $\rho$ it is trivial to compute: 
$$
\text{mass} = \rho \cdot \text{Volume}
$$


## Center of mass

By definition, the center of mass $G$ can be computed as: 

$$
G = (G_x, G_y, G_z) = \frac{1}{Volume}\left(\iiint\limits_v{x\:dV}, \iiint\limits_v{y\:dV}, \iiint\limits_v{z\:dV}\right)
$$

Due to the divergence theorem, we can express: 
- $G_x = \frac{1}{2\: Vol}\iint\limits_S{x^2\;n_x\;dS}$
- $G_y = \frac{1}{2\: Vol}\iint\limits_S{y^2\;n_y\;dS}$
- $G_z = \frac{1}{2\: Vol}\iint\limits_S{z^2\;n_z\;dS}$

Finally: 

$$
G = \frac{1}{2\: Vol}\left(\iint\limits_S{x^2\,n_x\;dS, \iint\limits_S{y^2\,n_y\;dS}, \iint\limits_S{z^2\,n_z\;dS}}\right)
$$

## Moment of inertia tensor

The moment of inertia tensor is a symmetric 3x3 matrix which is useful for simulations the behaviour of solid objects when torque forces apply.  

$I = \begin{bmatrix}
I_{xx} & I_{xy} & I_{xz} \\
I_{yx} & I_{yy} & I_{yz} \\
I_{zx} & I_{zy} & I_{zz} 
\end{bmatrix}$

- The elements of the diagonal $I_{xx}$, $I_{yy}$ and $I_{zz}$ are called moments of inertia. They are always positive. 
- The elements outside the diagonal are called products of inertia. They can be positive or negative.  

*We will assume that we've translated the object so its center of mass $G$ is at the origin.*

By definition: 
- $I_{xx} = \rho \iiint\limits_V{y^2 + z^2\,dV}$
- $I_{yy} = \rho \iiint\limits_V{x^2 + z^2\,dV}$
- $I_{zz} = \rho \iiint\limits_V{x^2 + y^2\,dV}$

where $\rho$ is the density. 

Again, given the convergence theorem: 
- $I_{xx} = \rho\frac{1}{3}\iint\limits_S{y^3\,n_y + z^3\,n_z\,dS}$
- $I_{yy} = \rho\frac{1}{3}\iint\limits_S{s^3\,n_x + z^3\,n_z\,dS}$
- $I_{zz} = \rho\frac{1}{3}\iint\limits_S{x^3\,n_x + y^3\,n_y\,dS}$
