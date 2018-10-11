
const linkedList = new LinkedList();
linkedList.insertFirst('MEGHA')
linkedList.insertFirst('MAHESH')
linkedList.insertFirst('BHARATH')
linkedList.insertFirst('RENUKA')

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

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size(){
    var counter = 0;

    if(this.head){
      var pointer = this.head;
      while(pointer){
        counter++;
        pointer = pointer.next;
      }
    }

    return counter
  }

  getFirst(){
    return this.head;
  }

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

  clearList(){
     this.head = null;
  }

  removeFirst(){
    if(!this.head){
      return null;
    }else{
      this.head = this.head.next;
    }
  }

  removeLast(){
    if(!this.head){
      return
    }

    if(!this.head.next){
      this.head = null;
      return
    }

    let previous = this.head
    let node = this.head.next
    while(node.next){
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data){
    let last = getLast();
    if(last){
      last.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }

  getAt(index){
    let counter = 0;
    if(!this.head){
      return null;
    }

    let node = this.head;
    while(node){
      if(counter === index){
        return node;
      }
      counter++;
      node = node.next
    }

    return null; // out of bound index handling
  }

  removeAt(index){
    if(!this.head){
      return null;
    }

    if( index === 0){
      this.head = this.head.next; // or null
      return;
    }

    // get previous node, so we can drop the interested node
    const previous = getAt(index-1);

    // if getAt returns null then we just return
    if(!previous){
      return;
    }

    // previous.next is present, and we have node after then we drop it
    if(previous.next){
      if(previous.next.next){
        let rightMostNode = previous.next.next;
        previous.next = rightMostNode;
      }
    }
  }


  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if(index === 0){
      this.head = new Node(data, this.head);
      return;
    }

    let previous = getAt(index-1);

    if(!previous){
      previous = this.getLast();
    }

    let node = new Node (data, previous.next);
    previous.next = node;
  }

}
