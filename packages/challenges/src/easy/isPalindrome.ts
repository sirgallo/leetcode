export const isPalindrome = (num: number): boolean => {
  if (num < 0) return false // neg numbers cannot be palindromes

  const original = num
  let reversed = 0

  while (num > 0) {
    const digit = num % 10 // mod 10, get the remainder
    reversed = reversed * 10 + digit // add the digit to reversed
    num = Math.floor(num / 10)
  }

  return original === reversed
}

console.log(isPalindrome(121))
console.log(isPalindrome(-10))
console.log(isPalindrome(10))

/*
    original = 121

    loop:
        num = 121
        reversed = 0
        1. {
            digit = 121 % 10 = 1
            reversed = (0 * 10) + 1 = 1
            num = Math.floor(121 / 10) = 12
        }

        num = 12
        reversed = 1
        2. {
            digit = 12 % 10 = 2
            reversed = (1 * 10) + 2 = 12
            num = Math.floor(12 / 10) = 1
        }

        num = 1
        reversed = 12
        3. {
            digit = 1 % 10 = 1
            reversed = (12 * 10) + 1 = 121
            num = Math.floor(1 / 10) = 0
        }

    return 121 === 121
*/
