export const binarySearch = (
  list: number[],
  item: number,
  low = 0,
  high = list.length - 1
): number | undefined => {
  if (low > high) return undefined

  const mid = Math.floor((low + high) / 2)
  const guess = list[mid]

  if (guess === item) return mid
  if (guess > item) return binarySearch(list, item, low, mid - 1)
  else return binarySearch(list, item, mid + 1, high)
}

const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const list2 = [1, 3, 6, 9, 15, 30, 31, 50, 56, 90, 99]

console.log(binarySearch(list1, 8)) // 7
console.log(binarySearch(list1, 3)) // 2
console.log(binarySearch(list2, 5)) // undefined
console.log(binarySearch(list2, 56)) // 8