interface Box {
  items: (Box | string)[]
}

/*
  suppose you have box with nested boxes. There is a key in one of the boxes that is a string.

  recurse through the boxes until you find the key
*/
export const lookForKeyRecursive = (box: Box): string | undefined => {
  for (const item of box.items) {
    if (typeof item === 'string') return item

    const found = lookForKeyRecursive(item)
    if (found !== undefined) return found
  }

  return undefined
}

const box: Box = {
  items: [
    {
      items: [{ items: [] }, { items: [] }],
    },
    {
      items: [{ items: [] }, 'this is the string'],
    },
    {
      items: [{ items: [] }],
    },
  ],
}

console.log(lookForKeyRecursive(box))
