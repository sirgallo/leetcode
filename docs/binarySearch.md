# binary search

`binary search` is an algorithm that takes a sorted list of elements as its input and returns the position where a specified element is located or null if the element does not exist.

Suppose we have a a guessing game, where we want to guess a number between 1 and 100.

We could have list as such:
```ts
[1, 2, ... 100]
```

We want to guess the number in as few tries as possible. After each guess, we are told if the guess was too low, too high, or correct.


1. 50 --> too low

this eliminates 1 - 50.

2. 75 --> too high

this eliminates 75 - 100.

3. 63 (halfway between 50 and 75) --> too high

4. 57 --> correct!

Binary search eliminates half of the numbers each guess

so for something like a dictionary with 240,000 words, it would take 18 steps, because 2^18 is 262,144

or just take log2 --> log2(240,000) is 18

so in general, binary search has a runtime complexity of log2(n) to run in worst case.

**NOTE**

Binary search REQUIRES the list to be in sorted order to work properly.

## implementation 

[binary-search](../packages/practice/src/binary-search/binary-search.ts)


## exercises

`1.1`

suppose you have a list of 128 names, and you're searching through it using binary search. whats the max number of steps it would take?
```
log2(128) = 7
```

`1.2`

suppose you double the size of the list, whats the max number now?
```
log2(256) = 8
```