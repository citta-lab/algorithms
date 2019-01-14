/**
 * Question: Reverse the linkedlist so it would be read from last to first.
 * Example: List like 15->9->10->4 should be 15<-9<-10<-4<-head
 * @param {*} head
 */

const reverseList = (head) => {

  if(!head || !head.next)
      return head

  // to start with head will be pointing to 15
  let newHead = head.next
  // newHead = 9
  let newList = head
  // newList = 15
  head.next = null
  // head.next (i.e 15.next ) = null ( becomes tale )
  head = newHead
  // head = 9

  while(newHead != null){
      newHead = head.next
      // newHead = (9.next) => 10,
      head.next = newList
      // 9.next = 15
      newList = head
      // newList = (15) => 9
      head = newHead
      // head = ( 9 ) => 10
  }

  return newList
};
