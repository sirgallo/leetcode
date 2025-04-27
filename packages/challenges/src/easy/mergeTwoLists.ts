class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  let newList = new ListNode(0)
  let current = newList

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
    current = current.next
  }

  current.next = list1 ?? list2
  return newList.next
}

/*
  take two linked lists (sorted) and merge them:

  create a new linked list and set it to current

  while list1 and list2 are not null:
    if list1 value is less than list2 value:
      next linkedNode in current is list1
      set list1 to next linked node in list 1
    if list2 value is less than list1 value:
      next linkedNode in current is list2
      set list2 to next linked node in list 2
    
    set current to next link in linked node

  set the next linked node in current to remainder in either list1 or list2

  return newList next linked node (first is a dummy node)
*/