//create a circular linkedlist using typescript
class CircularLinkedNode<T> {
  data: T;
  next: CircularLinkedNode<T>;
  constructor(data: T) {
    this.data = data;
    //this.next = null;
  }
}
class CircularLinkedList<T> {
  head: CircularLinkedNode<T> | null;
  tail: CircularLinkedNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value: T) {
    const circularNode = new CircularLinkedNode<T>(value);
    if (!this.head) {
      this.head = circularNode;
      this.tail = circularNode;
      return;
    } else {
      this.tail!.next = circularNode;
      this.tail = circularNode;
    }
    this.size++;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
      if (current === this.head) {
        break;
      }
    }
  }
}
const list = new CircularLinkedList<string>();
list.add("Faith");
list.add("Daniel");
list.traverse();
