class LNode<T> {
  value: T;
  next: LNode<T> | null;
  prev: LNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: LNode<T> | null;
  tail: LNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: T, position?: number): void {
    const newNode = new LNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
  }

  delete(value: T): boolean {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        return true;
      }
      current = current.next;
    }

    return false;
  }

  print(): void {
    let current = this.head;
    let output = "";

    while (current) {
      output += current.value + " <-> ";
      current = current.next;
    }

    console.log(output + "null");
  }
}

// Example usage:
const list = new DoublyLinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 <-> 2 <-> 3 <-> null

// list.delete(2);
// list.print(); // Output: 1 <-> 3 <-> null

// list.delete(1);
// list.print(); // Output: 3 <-> null
// list.delete(3);
// list.print();
// // Output: null
list.add(5);
list.print();
console.log(list);
