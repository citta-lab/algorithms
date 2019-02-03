/**
 * Question: Remove duplicates from UNSORTED linkedList.
 * Example: 3-2-4-5-2-6-7 should be altered to 3-2-4-5-6-7
 * 
 * Hint: Use hash instead of an array to avoid looping.
 */

let removeDuplicatesFromUnsorted = function(root){
    
    if(root === null || root.head === null || root.head.next === null) return root;

    let valueHash = {};

    let currentNode = root.head;
    let prevNode = null;

    /**
     * if we find duplicate then we skip the current and point it to curent.next
     * Example: In 3->3->4->5
     * prevNode(3) -> currentNode(3) -> currentNode.next(4) -> currentNode.next.next(5)
     * we do prevNode.next (i.e second 3) = currentNode.next (i.e 4) so currentNode(3)
     * is removed.
     */

    while(currentNode != null){
        let currentValue = currentNode.data;
        if(!valueHash[currentValue]){
            valueHash[currentValue] = currentValue;
            prevNode = currentNode;
        }else{
            prevNode.next = currentNode.next;
        }

        currentNode = currentNode.next;
    }
    
    return root;
}