interface Box {
  items: (Box | string)[]
}

export const lookForKeyRecursive = (box: Box): string | undefined => {
  for (const item of box.items) {
    if (typeof item === 'string') return item
  
    const found = lookForKeyRecursive(item)
    if (found !== undefined) return found
  }
}

const box: Box = {
  items: [
    {
      items: [
        { items: [] },
        'this is the string'
      ]
    },
    {
      items: [
        { items: [] }
      ]
    },
    {
      items: [
        { items: [] },
        { items: [] }
      ]
    }
  ]
}

console.log(lookForKeyRecursive(box))