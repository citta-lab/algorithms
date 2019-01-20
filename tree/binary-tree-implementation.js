/**
 * Similar to how we have linkedList we will need to have a node, which represents the
 * each node we will be travesing through. and Tree class to manage/mantian these nodes
 * (like LinkedList).
 * 1. Create Node class with constrcutor, which takes data and initialises empty children
 * array.
 * 2. Unlike LinkedList, Node class will have add and remove methods which will be added/
 * removed from `children` instance variable of type array.
 */


 class Node {
   constructor(data){
     this.data = data;
     this.children = []; // this is where children node will be referenced.
   }

   add(data){
     let node = new Node(data);
     this.children.push(node);
   }

   remove(data){
     if(this.children){
       this.children = this.children.filter(child => {
         return child.data !== data
       })
     }
   }
 }

/**
 * 1. Tree wouldn't handle adding or removing nodes like LinkedList becuase
 *    tree wouldn't be aware of all the nodes, where as linkedList has just two
 *    reference.
 * 2. Example of adding node to tree
      let node = new Node(12);
      let tree = new Tree();
      tree.root = node;
 * 3. Traverse Breadth First will make use of an `extra array`, we start with adding root
 *    element to it and with in while loop, we check if the `extra array` has element if yes
 *    then we take that out, get it's children and push those to extra array. Once it's done
 *    we pass the node we took it out from the `extra array` to passed function.
 */

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
      let arr = [this.root];   // or let arr = []; arr.push(this.root);

      while(arr.length){
        let node = arr.shift();  // shift is inbuilt array method which takes out the first element.

        arr.push(...node.children); // passing all the node's immideate children
                                    // push adds at the "END" of an array ( IMPORTANT )
        fn(node); // exectuting the function on the removed mode from shift.
      }
  }

  traverseDF(fn){
    let arr = [this.root];

    while(arr.length){
      let node = arr.shift(); // always get the first node.

      arr.unshift(...node.children); // adds at the "BEGINING" of an array ( IMPORTANT );
      fn(node); // process the removed node.
    }
  }

}
