---
title: "Unions"
---

A `union` is like a `struct`, but all the members are allocated at the same address so that a `union` only occupies the space of its largest member.
A `union` holds only one of its members at a time,
but it does not know which member it holds on its own.
For example,

TODO

`union` is hard to use correctly,
and using `union`s improperly can easily cause bugs.
We consider the usage of `union` to be an advanced topic and discuss it furthur in this tutorial.
For many use cases, using alternatives such as `std::variant` can be simpler and safer (we will talk about `std::variant` much later in the tutorial).