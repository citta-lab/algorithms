/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function reverseList(head) {
     var prev = null;
     while (head) {
         var next = head.next;  // this would be rest of the linkedList
         head.next = prev;      // setting it backward, hence prev.
         prev = head;           // once we assigned head.next to prev, then we set prev to head value ( going further )
         head = next;           // next had head.next (rest of the linkedList ref ), so head would start from there.
     }
     return prev;
 }


 function reverseList(head) {
     if (!head || !head.next) {
         return head;
     }
     var newHead = reverseList(head.next);
     head.next.next = head;
     head.next = null;
     return newHead;
 }
