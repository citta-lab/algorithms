/**
 * Question: Merge two sorted linked list.
 * Example: If l1 1->2->3->6->8 and l2 2->4->5->7
 * then the sorted list should be 1->2->2->3->4->5->6->7->8.
 * @param {*} l1
 * @param {*} l2
 */


/**
 * HINT: The idea is making use of pointer (i.e sortList ) to track
 * and then use newHead to store sorted lsit.
 * Refer [this](https://www.youtube.com/watch?v=j_UNYW6Ap0k) video.
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  // if l1 is not present then we just return l2. Similarly for l2.
  if(l1 == null) return l2;
  if(l2 == null) return l1;

  // sortList is used for tracking, newHead will be the one we going to return.
  let sortList = null;
  let newHead = null;

  /**
   * figuring out what newHead should be pointing.
   *
   * Working Explanation: if we think l1.val is lesser than l2.val then sortList will point to l1.
   * Now we point l1 to sortList.next. So we move l1 one node ahead of sortList. So we figureout
   * the starting point hence point the newHead to sortList.
   */

  if(l1.val < l2.val){
      sortList = l1;
      l1 = sortList.next;
  }else{
      sortList = l2;
      l2 = sortList.next;
  }

  newHead = sortList;

  /**
   * Now we need to do for every other node.
   *
   * Working Explanation: if we think l1.val is lesser than l2.val, then we already have newHead pointing
   * to sortList (first node of l1) and l1 points to second node in l1 list. Now we need to link it, hence
   * sortList.next will (first node's next) to l1 (second node). then move sortList and l1 one node next.
   */
  while(l1 && l2){
      if(l1.val <= l2.val){
          sortList.next = l1;
          sortList = l1;
          l1 = sortList.next;
      }else{
          sortList.next = l2;
          sortList = l2;
          l2 = sortList.next;
      }
  }

 /**
  * Condition to handle the tail.
  *
  * Working Explanation: hence l1 or l2 is a node ahead of sortList. If we find l1 or l2 already pointing
  * to null ( we know it's the end of the list ). Then we point sortList.next to other list node.
  */
 if(l1 == null) { sortList.next = l2; }
 if(l2 == null) { sortList.next = l1; }

 // finally return the newHead which we created in the begining.
 return newHead;
};
