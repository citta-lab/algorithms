/**
 * Question: Find the lowest common ancestor in binary tree.
 * Example: If the given tree root is = [3,5,1,6,2,0,8,null,null,7,4] p = 5, q = 1 then the lowest common
 * ancestor is 6.
 * 
 * Hint: this is not a binary search tree and hence the left and right is not sorted. The given p and/or q might 
 * be either side of the root node. Important logic here is, let's start matching p value to one side of the root node,
 * if we find the match then return the `ROOT` itself, if we didn't then return null. Use this to check for all nodes.
 * Explanation: https://www.youtube.com/watch?v=F-_1sbnPbWQ
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if(root === null) return null;
    if(root === p || root === q) return root;
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
    if(left != null && right!= null){
        return root;
    }else{
        return (left ? left : right);
    }
};