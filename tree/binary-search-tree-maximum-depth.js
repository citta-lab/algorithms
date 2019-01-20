/**
 * Question: find the maxium depth in binary search tree.
 * Example: If the left tree has only one child and right has two child. Then we need to make sure we count 
 * right child and return the depth is 3.
 * 
 * Example Data: [{"val":3,"right":{"val":20,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}},"left":{"val":9,"right":null,"left":null}}]
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    
    let leftNode = maxDepth(root.left);
    let rightNode = maxDepth(root.right);
    
    return Math.max(leftNode, rightNode)+1;
};

/**
 * OR you can do below.
 */

var maxDepth = function(root) {
    if(root == null) return 0;
    
    let leftNode = maxDepth(root.left);
    let rightNode = maxDepth(root.right);
    
    let leftHeight = 0; rightHeight = 0
    
    if(leftNode>rightNode){
        leftHeight = 1 + leftNode;
    }else{
        rightHeight = 1 + rightNode;
    }
    
    return rightHeight > leftHeight ? rightHeight : leftHeight
};

let test = maxDepth([0]);
console.log(test)// should be one