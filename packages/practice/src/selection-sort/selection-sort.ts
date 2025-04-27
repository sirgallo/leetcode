const findSmallest = (list: number[]): number => {
  let smallest = list[0]
  let smallestIdx = 0

  for (let i = 1; i < list.length; i++) {
    if (list[i] < smallest) {
      smallest = list[i]
      smallestIdx = i
    }
  }

  return smallestIdx
}

export const selectionSort = (list: number[]): number[] => {
  const newList = []
  const length = list.length
  for (let i = 0; i < length; i++) {
    const smallestIdx = findSmallest(list)
    newList.push(list[smallestIdx])
    list.splice(smallestIdx, 1) // let's mutate the original list to reduce memory use of clone
  }

  return newList
}

const list1 = [5, 1, 3, 11, 7, 8, 6, 2, 10, 9]

console.log(selectionSort(list1))