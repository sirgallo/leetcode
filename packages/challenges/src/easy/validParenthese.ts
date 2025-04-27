const mirrorBracket: { [s: string]: string } = {
  ']': '[',
  '}': '{',
  ')': '('
}

const isValid = (s: string): boolean => {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
      stack.push(s[i])
    }

    if (s[i] === ']' || s[i] === '}' || s[i] === ')') {
      const popped = stack.pop()
      if (popped !== mirrorBracket[s[i]]) return false
    }
  }

  return true
}

/*
  check if strings are valid in parentheses

  (): valid
  {}: valid
  []: valid
  ({[]}): valid
  (){}[]: valid
  (]: not valid

  use a stack

  for the length of the string, if an opening bracket is encountered, push onto stack
  when a closing bracket is encountered, pop off the stack
  if the value popped from the stack is not an opening bracket, it is invalid

  if looped through and the stack is empty, the string was valid
*/