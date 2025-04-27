const rToInt: { [k: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToInt = (s: string): number => {
  let sum = 0
  let index = 0
  while (index < s.length) {
    if (index < s.length - 1 && rToInt[s[index]] < rToInt[s[index+1]]) {
      sum += rToInt[s[index+1]] - rToInt[s[index]]
      index = index + 2
    } else {
      sum += rToInt[s[index]]
      index++
    }
  }

  return sum
}

/*
  Roman to Int

  use a global hash table for Roman to Integer value lookup

  loop through the string:
    if the current value is less than the next value:
      subtract the two
      for example: 
        IV is 4 because V - I
      increment by two
    else:
      add the current index to the sum
      increment by one

  time complexity: O(n)
*/