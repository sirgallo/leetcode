export const binarySearch = (list: number[], item: number): number | undefined => {
  if (list.length === 0) return undefined

  let low = 0
  let high = list.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2) // find the middle point between low and high
    let guess = list[mid]

    if (guess === item) return mid // if guess is item, return it
    if (guess > item) high = mid - 1 // if guess is too high, high is now mid - 1
    else low = mid + 1 // if guess is too low, low is now mid + 1
  }

  return undefined
}

const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const list2 = [1, 3, 6, 9, 15, 30, 31, 50, 56, 90, 99]

console.log(binarySearch(list1, 8)) // 7
console.log(binarySearch(list1, 3)) // 2
console.log(binarySearch(list2, 5)) // undefined
console.log(binarySearch(list2, 56)) // 8