class LNode<T> {
  data: T;
  next: LNode<T> | null;
  constructor(val: T) {
    this.data = val;
    this.next = null;
  }
}
class LinkedList<T> {
  head: LNode<T> | null;
  constructor() {
    this.head = null;
  }
  add(val: T) {
    const newNode = new LNode<T>(val);
    //if we have "head"

    //if we dont have "head"
    if (!this.head) {
      this.head = newNode;
    }
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
    //iterate through bthe linked list and print only the elements in the linked list
  }
  //if a linked list does not have an head, the head will be undefined
}
const listz = new LinkedList<number>();
listz.add(2);
listz.add(3);
listz.print();
console.log(listz);
// const ou=Array<string>(1)
// ou.push()
//When you make a class generics, it means it can accept any data type
