/**
 * BREADTH FIRST APPROACH
 */

 function levelWidth(root){
   // root here is the node i.e new Node(data, children);

   let arr = [root, 'STOP'];
   let counters = [0]; // counter for counting width of each node, initialized to 0

   while(arr.length > 1){
     let node = arr.shift();  // take out first element from left. ( arr will look lik ['STOP']);

     if( node === 'STOP'){
       counters.push(0); // new counter so it would look like [ 1, 0]
       arr.push('STOP'); // add the stopper backagain
     }else{
       arr.push(...node.children); // if node is valid, then we take it's children
       counters[counters.length - 1]++ // increment the counters. which will become [ 1 ]
     }
   }

   return counters;
 }
