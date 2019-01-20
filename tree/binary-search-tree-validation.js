const TreeNode = require('./testSetup/binarySearchImplement');

/**
 * Question: Validate binary search tree.
 * Example: 
 * 
 * Hint: We need to do recursive, however we need to keep track of maxium and minimum
 * values to check all left nodes with respect to previously set max. similarly all right 
 * nodes need to be checked with min value.
 */


 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 let validateBST = function(root){
    // sending it to helper function, setting default value to null.
    return isValid(root, null, null);
 }

 let isValid = function(node, max, min){


    /**
     * if we have max value, then current node value
     * should be less than previous max so we satisfy
     * valid left side of the tree.
     */
    if(max!=null && node.val > max){
        return false;
    }

    /**
     * Similar to above, if we have min value then node
     * value should be more than min, so it satisfies right
     * side.
     */
    if(min!=null && node.val < min){
        return false;
    }

    /**
     * if we have left node, we send that left node as start of the node
     * and node.val (previous node) as max value and min unchanged.
     * The CATCH is if isValid returns false, then we know the tree is not
     * valid so we flip the value to return false.
     */
    if(node.left && !(isValid(node.left, node.val, min))){
        return false;
    }

    /**
     * if we have right node, we send that right node as start of the node
     * and node.val (previous node) as min value and max unchanged.
     * The CATCH is if isValid returns false, then we know the tree is not
     * valid so we flip the value to return false.
     */
    if(node.right && !(isValid(node.right, max, node.val))){
        return false;
    }


    // if eveything runs fine, then we are certain the tree is valid
    return true;
 }


/**
 * TESTING SECTION: 
 */
let valid = new TreeNode(10);
valid.insert(5);
valid.insert(15);
valid.insert(0);
valid.insert(20);

let invalid = new TreeNode(10);
invalid.insert(5)
invalid.insert(15);
invalid.insert(0);
invalid.insert(20);
invalid.left.left.right = new TreeNode(999);

//let result = validateBST(valid); // should be true
let result = validateBST(invalid); // should be false
console.log(result); 



