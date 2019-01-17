/**
 * Question: Write method to serialize and deserialize binary tree.
 * Example: Tree form of [1,2,3,null,null,4,5] should serialize to [1,2,3,null,null,4,5]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root===null) return 'null';
    let queue = [root], ans = [];
    while(queue.length!=0){
    	let node = queue.shift();
    	if(node===null) ans.push('null');
    	else {
    		ans.push(node.val);
    		queue.push(node.left);
    		queue.push(node.right);
    	}
    }
    return ans.join(',');
};

var deserialize = function(data) {
	if(data==='null') return null;
	let arr = data.split(',');
	let queue = [];
	let tree = new TreeNode(arr.shift());
	queue.push(tree);
	while(arr.length!=0){
		let l = arr.shift(), r = arr.shift();
		let curNode = queue.shift();
		if(l!=='null'){
			curNode.left = new TreeNode(l);
			queue.push(curNode.left);
		}
		if(r!=='null'){
			curNode.right = new TreeNode(r);
			queue.push(curNode.right);
		}
	}
	return tree;
};