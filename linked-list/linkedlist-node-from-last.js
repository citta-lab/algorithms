function fromLast(list, n){
  // list is linkedList and n is the position we need to return from the last

  let slow = list.head;
  let fast = list.head;

  /**
   * 1. start with slow and fast temp variable pointing to first node
   * 2. Now we can give fast 'n' times head start so we can track slow node
   * 3. once fast is `n` time more than slow, increment slow by one and fast by ONE
   * 4. if fast.next (ONE AT A TIME) is null then return slow which is behing n times
        the last node
   */

  // giving fast pointer `n` times head start
  while(n>0){
    fast = fast.next;
    n--;
  }

 // increment both one at a time, NOT by two
  while(fast.next){
    slow = slow.next;
    fast = fast.next;
  }

  return slow;

}
