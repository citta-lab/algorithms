/**
 * Question: Identify if the given binary tree is symmetric. I.e if we 
 * fold binary tree vertically then all the elements shoukd match.
 * Example: this binary tree [1,2,2,3,5,5,3] is symmetric:
 *  1
   / \
  2   2
 / \ / \
3  5 5  3
 * Hint: the idea is to way we split the left and right part of the node,
 * check it recursively. Don't get confused with second 2,2 set.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


 let isSymmetric = function(root){

     // if we find root is null, then we say it is symmetric as 
     if( root == null) return true;

     // call the helper, by splitting the root
     return symmetricHelper(root.left, root.right);
 }

 let symmetricHelper = function(leftNode, rightNode){

    // if we find either one node not null, then we compare
    if( leftNode == null || rightNode == null ) {
        return leftNode == rightNode;
    }

    // if left side is not equal to right side value then return false
    if(leftNode.val != rightNode.val) return false;

    /**
     * split the node again, send left and right part 
     */
     return symmetricHelper(leftNode.left, rightNode.right) 
     && symmetricHelper(leftNode.right, rightNode.left);
 }