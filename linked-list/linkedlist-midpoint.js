function midpoint(list){
  //takes linkedlist as an argument

  /**
   * 1. The idea is to have two variables 'SLOW' and 'FAST'.
   * 2. Point both slow and fast at first node, incement the slow by 1 and fast by 2
   * 3. before moving fast by 2 make sure to check .next and .next.next
   * 4. if .next or .next.next is false then return slow
   */

   var slow = list.head;
   var fast = list.head;

   while(fast.next && fast.next.next){
     slow = slow.next;
     fast = fast.next.next;
   }

   return slow;
}
