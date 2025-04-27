/*
  this approach modifies the list in place to reduce additional memory allocations
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

const randomPartition = (list: number[], low: number, high: number): number => {
  const randomIdx = Math.floor(Math.random() * (high - low + 1)) + low; // need this semicolon
  [list[randomIdx], list[high]] = [list[high], list[randomIdx]]
  return partition(list, low, high)
}

export const quickSort = (list: number[], low = 0, high = list.length - 1) => {
  if (high === undefined) high = list.length - 1
  if (low < high) {
    const pivotIdx = randomPartition(list, low, high)
    quickSort(list, low, pivotIdx - 1)
    quickSort(list, pivotIdx + 1, high)
  }

  return list
}

const list1: number[] = []
const list2: number[] = [1]
const list3: number[] = [5, 1, 4, 8, 10, 9, 7, 6, 3, 2]

console.log(quickSort(list1))
console.log(quickSort(list2))
console.log(quickSort(list3))