import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  insertLast(data) {
    const node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  insertAt(data, index) {
    if (index < 0) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index >= this.size) {
      this.insertLast(data);
      return;
    }

    const node = new Node(data);
    let curr;
    let prev;
    curr = this.head;
    let count = 0;

    while (count < index) {
      prev = curr;
      count += 1;
      curr = curr.next;
    }

    node.next = curr;
    prev.next = node;

    this.size += 1;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

export default LinkedList;
