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

  const index = Math.floor(list.length / 2) // set the pivot in the middle
  const pivot = list[index]
  const sorted = sortHelper(list, index, pivot)

  return [
    ...quickSort(sorted.left),
    pivot,
    ...quickSort(sorted.right)
  ]
}


const list1: number[] = []
const list2 = [1]
const list3 = [5, 1, 4, 8, 10, 9, 7, 6, 3, 2]

// console.log(quickSort(list1))
// console.log(quickSort(list2))
// console.log(quickSort(list3))

/*
  this second approach is in place and modifies the list in place to reduce additional memory allocations
*/

const partition = (list: number[], low: number, high: number): number => {
  const pivot = list[high]
  let i = low

  for (let j = low; j < high; j++) {
    if (list[j] < pivot) {
      [list[i], list[j]] = [list[j], list[i]] // swap the elements
      i++
    }
  }

  [list[i], list[high]] = [list[high], list[i]]
  return i
}

export const quickSortInPlace = (list: number[], low = 0, high = list.length - 1) => {
  if (low < high) {
    const pivotIdx = partition(list, low, high)
    quickSortInPlace(list, low, pivotIdx - 1)
    quickSortInPlace(list, pivotIdx + 1, high)
  }

  return list
}

console.log(quickSortInPlace(list1))
console.log(quickSortInPlace(list2))
console.log(quickSortInPlace(list3))