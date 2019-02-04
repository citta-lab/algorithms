/**
 * TESTING NODE:
 * We can make use of this code to insert data to linkedList node so we can simulate the test
 * easily.
 */


// Defining node with data and next
class Node {
    constructor(data, next=null){
      this.data = data;
      this.next = next;
    }
  }
  
  // Defining LinkedList which will use Node
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    //inserts from last to first
    insertFirst(data) {
      const node = new Node(data, this.head);
      this.head = node;
    }
  
    //find's the last node or head if it's empty
    getLast(){
      if(!this.head){
        return null;
      }
  
      let node = this.head;
      while(node){
        if(!node.next){
          return node;
        }
        node = node.next;
      }
    }
    
    //inserts from first to last ( normal way )
    insertLast(data){
          let last = this.getLast();
          if(last){
              last.next = new Node(data);
          }else{
              this.head = new Node(data, this.head)
          }
      }
  }
  

  //example data insertion
  const linkedList = new LinkedList();
  linkedList.insertLast(3)
  linkedList.insertLast(4)
  linkedList.insertLast(5)
  linkedList.insertLast(6)
  linkedList.insertLast(7)
  linkedList.insertLast(8)
  linkedList.insertLast(7)
  linkedList.insertLast(1)
  
  console.log(' data : '+JSON.stringify(linkedList));