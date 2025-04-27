export const sum = (list: number[]): number => {
  if (list.length === 0) return 0
  if (list.length === 1) return list[0]

  return list[0] + sum(list.slice(1))
}

const list1 = [1, 2, 3, 4, 5]

console.log(sum(list1))
