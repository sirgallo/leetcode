# divide and conquer

divide and conquer is a recursive technique for solving solving problems.

1. figure out the base case, which should be the simplest possible case
2. divide or decrease your problem until it becomes the base case

in divide and conquer, with every recursive call, you end up reducing the scope of the problem.

Let's say we have a farm that is 1680 x 640 meters.

We can start by splitting the plot like such:
```

------------------------------
|          |          |      |
|          |          |      |    640
|          |          |      |
------------------------------
    640        640      400

now take the last chunk:

--------
|      | 240
|------|
|      | 400
--------
  400

and so on...

until we reach our base case

-----------
|    |    | 80
|    |    |
-----------
    160

so the biggest plot size is 80 x 80 m
```

so divide and conquer breaks our problem up until we reach our base case


## quicksort

quicksort is a divide and conquer algorithm. 

base case:
empty array or array with one element

