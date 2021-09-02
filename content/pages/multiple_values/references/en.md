---
title: "References"
---

In C++, a reference is an alias to something else.

You can only set the target of a reference during initialization.
Once you have a reference, you can perform action through the reference as if it is the underlying value.

The syntax of a reference type for a type `T` is `T&`.
Here is an example of using references on integers:

```cpp
int x = 0;
int y = 55;
int& ref = x; // Creates a reference that refers to x
std::cout << x << '\n'; // 0
ref = 42;
std::cout << x << '\n'; // 42

// Assigns the value of x to y
ref = y;
std::cout << x << '\n'; // 55
```

## Const reference

You can add `const` to a reference.
And you cannot change the underlying value by the particular const reference.
However, you are still able to mutate the value directly by the original variable if it is not `const` itself.

```cpp
int x = 42;
const int& ref = x;
x = 55; // okay
ref = 55; // error
```

## Pass by reference
References are particularly useful as function parameters.

TODO

When we don't want to modify an argument, but still don't want to pay the cost of copying, we use const references. For example:

```cpp
auto sum(const std::vector<int>& numbers) -> int {
    int result = 0;
    for (int number : numbers) {
        result += number;
    }
    return result;
}
```

Functions that take const references as parameters are very common in C++.

## Limitation of references

Unlike the counterpart in many other programming languages,
C++ references cannot *rebind*.
In other word, you cannot make a reference refer to something else.
The restriction on rebinding limit the power of C++ references, but also make them safer to use.
A nice side effect of such a restriction is that C++ references always refer to something and can never be null.

A less benign consequence of the inability of rebinding is that C++ references break assignment operations when using as member variables of a `struct`. Thus, similar to `const`, it is advisable to not use references as member variables.

```cpp
struct Ref {
  int& value;
};

auto main() -> int {
  int x = 0;
  int y = 1;
  Ref x_ref {x};
  Ref y_ref {y};
  y_ref = x_ref; // error
}
```

If you need the rebind functionality, you need to use a *pointer*, which we will talk about in chapter 7.

[^1]: https://lesleylai.info/en/const-and-reference-member-variables/