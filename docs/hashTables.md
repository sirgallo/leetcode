# hash tables

hash functions take a string value and return a number, which is our index

hash functions should follow a couple principles:

1. they need to be consistent. the same string should always return back the same number

2. they need to map different strings to different numbers to avoid collisions

The hash function will map values to indices in an array

hash tables are also really good for caching (O(1) lookup for a given value, O(1) insert)

