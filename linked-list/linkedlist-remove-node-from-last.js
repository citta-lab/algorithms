/**
 * Question: Delete the `n` the node from the last.
 * Example: if linked list is [5,4,6,8,0] and n is 2 then result should be [5,4,6,0]. Most tricky one is when
 * the list is [4,5] and n is 2 then we need to remove 4 and result [5].
 *
 *
 * Approach:
 * Hence linked list is from left to right, instead of finding the size we can use two pointers.
 * slow and fast, fast can be moved `n+1` times faster before slow and fast starts together. So
 * when fast meets the end slow will be a node behind the REMOVING node. so we can do
 * slow.next = slow.next.next;
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {

  // use dummy to handle removing head ( if we only have two elements [5,6] and n=2 then we need to remove 5 )
  const dummy = new ListNode();
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Move fast n + 1 nodes ahead of slow
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  // Move fast to end, slow will be (n + 1)th from last node, just before the node to remove
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth from last node
  slow.next = slow.next.next;
  return dummy.next;
}
