// node here is the root node of the tree,
// which will have left and right node with daya


/**
 * 1. Hence we need to validate all the nodes we can use recursion
 * 2. we will make sure of min an max to track the values
 * 3. we can start going to left first, at this point the root
      value should be the MAXIMUM we would see.
 * 4. Assign `max` with root value.
 * 5. Once we travese the first left node, we compare the value with `max`
 * 6. update the `max` with new left node value, and everything below should
      be lower than the current `max`
 * 7. If there is no left node then we start right node
 * 8. we set `min` value from current node, expect everything right below
      should be more than `min` BUT less than latest `max`
 */

function validate(node, min =null, max=null){
  /**
   * 1. min and max will keep changing
   * 2. whenever we move to left, max will get update
   * 3. whenever we move to right, min will get update
   * 4. validate recursion returns true or false with respect
        one node at a time.
   */

   //out of bound condition, max should be the largest than node.data
   if( max !== null && node.data > max){
     return false;
   }

   //out of bound condition, min should be the less than node.data
   if(min != null && node.data < min){
     return false;
   }

   /**
    *                  10 (node.data)
    *                 /  \
    *    (node.left) 0   12(node.right)
    *               / \
    *             -1   5
    *
    */

   // if we have node on left and validate went wrong then we return false
                  // validate(0, min=null, 10)
                  // validate(-1, min=null, 0)
   if( node.left && !validate(node.left, min, node.data)){
     return false;
   }

   if( node.right && !validate(node.right, node.data, max)){
     return false;
   }

   return true;
}
