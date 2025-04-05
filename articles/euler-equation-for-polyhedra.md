---
title: Euler equation for polyhedra
description: ""
tags: ["Advanced 3D modeling", "Computer graphics"]
pubDate: 05/04/2025
---

The Euler-Poincaré equation is as follows:
$$
F + V = E + R + 2(S - H)
$$

Where: 
- F: number of **faces**
- V: number of **vertices**
- E: number of **edges**
- R: number of **rings** (interior loops)
- S: number of **shells** (connect surface components)
- H: number of handles/pass through holes(best known as **genus**)


## Genus
A genus of a surface is the maximum number of cuts (simple, closed disjoint curves) that can be drawn in the shell without disconnecting it