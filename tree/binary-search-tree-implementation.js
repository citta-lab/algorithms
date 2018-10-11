/**
 * 1. The main differece between normal tree and binary search tree is that
 *    binary search tree will have only two node vs tree can have multiple.
 * 2. Hence the Node constrcutor will just take `data` and `left` and `right`
 *    pointers instead of `children` array.
 * 3. Binary search tree will always have lower value on left and higher value on
 *    right with respect to ROOT value.
 * 4. Binary tree on the other hand exludes above condition
 */

 class Node(data){
   constructor(data){
     this.data = data;
     this.left = null;
     this.right = null
   }

   // we will need to use recursion to consider all child nodes sceanrio
   insert(data){

     if( data < this.data && this.left ){
       this.left.insert(data); // recursion for next round
     }else if( data < this.data ){
       this.left = new Node(data);
     }else if(data > this.data && this.right){
       this.right.insert(data);
     }else if(data > this.data){
       this.right = new Node(data);
     }

     if(!this.data){
       this.data = new Node(data);
     }
   }

   contains(data){

     if(this.data === data){
       return this; // returning entire node.
     }

     if (data < this.data && this.left ){
       return this.left.contains(data);
     } else if ( data > this.data && this.right ){
       return this.right.contains(data);
     }

     return null; // if we didn't match anything.
   }
 }
