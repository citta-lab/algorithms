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
        return root.val;
    }
}




/**
 * TESTING SECTION
 */
let valid = new TreeNode(6);
valid.insert(2);
valid.insert(8);
valid.insert(0);
valid.insert(4);
valid.insert(7);
valid.insert(9);
valid.insert(null);
valid.insert(null);
valid.insert(3);
valid.insert(5);

let resultOne = lowestCommonAncestor(valid, 2, 4); // should print 2
let resultTwo = lowestCommonAncestor(valid, 2, 8);  // should print 6
console.log(" 1. resultOne should be 2 : "+resultOne);
console.log(" 2. resultTwo should be 6 : "+resultTwo);