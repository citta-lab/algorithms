function circularList(list){
  // list is linkedList here.

  /**
   * 1. Define two variable slow and fast starts this the first node.
   * 2. Increment slow by one and fast by two
   * 3. check if slow and fast are equal, if yes then circular list if not continue
   * 4. keep checking until fast is null to end the list
   */

   let slow = link.head;
   let fast = link.head;

   while(fast.next && fast.next.next){
     slow = slow.next;
     fast = fast.next.next;

     // if they are pointing at the same node, then they are circular
     if(slow === fast){
       return true;
     }
   }

   return false;
}
