const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }

  return prefix
}

/*
  if length of strs is 0 return empty string

  else, set the prefix to the first word in the list

  for remaining words, loop through:
    while current word does not start with prefix:
      slice the prefix by one character until 0 or the prefix is empty string
*/
