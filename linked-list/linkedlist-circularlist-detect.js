

/**
 * Question: Determine if the linkList is circular.
 * Hint: Use two pointers, move faster node two nodes ahead of slow node so when
 * fast cant go any further we are at the end.
 * @param {*} list
 */
function circularList(list){
  // list is linkedList here.

  /**
   * 1. Define two variable slow and fast starts this the first node.
   * 2. Increment slow by one and fast by two
   * 3. check if slow and fast are equal, if yes then circular list if not continue
   * 4. keep checking until fast is null to end the list
   */

   // if empty node, lets not worry
   if(list == null) return false;

   // start using two pointer to track
   let slow = link.head;
   let fast = link.head;

   // lets move fast two node ahead, but also check for empty node
   while(fast.next != null && fast.next.next != null ){

     // first move slow, then fast ( if we do otherway around it errors in some scenario )
     slow = slow.next;
     fast = fast.next.next;

     // if they are pointing at the same node, then they are circular
     if(slow === fast){
       return true;
     }
   }

   return false;
}
