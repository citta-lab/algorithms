/**
 * Question: Find the lowest common ancestor in binary SEARCH tree.
 * Example: If the given tree root is = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 then the lowest common
 * ancestor is 6.
 * 
 * Hint: we need to determine what will be the lowest common parent between two given child node. Don't think
 * anything but recursion. Hence it's a binary search tree, all the numbers on left will be lesser than root and 
 * right will be more than root. We use this to our advantage and build two recursion to call based on left or right
 * condition.
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
    // if given value are smaller than root, then it must be in left
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }else{
        return root;
    }
}