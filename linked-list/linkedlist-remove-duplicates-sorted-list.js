/**
 * Question: Remove duplicates from sorted linkedList.
 * Example: 3-3-4-5-6-6-7 should be altered to 3-4-5-6-7
 * RealTime linkedList Data: {"head":{"data":3,"next":{"data":3,"next":
 * {"data":4,"next":{"data":5,"next":{"data":5,"next":{"data":6,"next"
 * :{"data":7,"next":null}}}}}}}}
 */


/**
 * Remove elements from sorted linkedList
 * @param {linkedList} root 
 */
let removeDuplicates = function(root){
    
    /**
     * If no list is passed or the head is empty or even
     * if the list doesn't have no more than one element
     * then just return what we received.
     */
    if(root === null || root.head === null || root.head.next === null ) return root;

    // IMP: point node to head of the list first.
    let node = root.head;

    while(node.next != null){
        /**
         * current node data is equal to next node data, then just point
         * current node.next to skip the next node.
         */
        if(node.data === node.next.data){
            node.next = node.next.next;
        }else{
            node = node.next;
        }
    }

    return root;
}