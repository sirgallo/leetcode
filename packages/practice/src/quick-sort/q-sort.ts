interface Sorted {
  left: number[]
  right: number[]
}

const sortHelper = (list: number[], index: number, pivot: number): Sorted => {
  const sorted: Sorted = { left: [], right: [] }
  for (let i = 0; i < list.length; i++) {
    if (i === index) continue // this is the pivot
    if (list[i] < pivot) sorted.left.push(list[i])
    else sorted.right.push(list[i])
  }

  return sorted
}

export const quickSort = (list: number[]): number[] => {
  if (list.length < 2) return list

  const index = Math.floor(Math.random() * list.length) // random partition
  const pivot = list[index]
  const sorted = sortHelper(list, index, pivot)

  return [...quickSort(sorted.left), pivot, ...quickSort(sorted.right)]
}

const list1: number[] = []
const list2 = [1]
const list3 = [5, 1, 4, 8, 10, 9, 7, 6, 3, 2]

console.log(quickSort(list1))
console.log(quickSort(list2))
console.log(quickSort(list3))
