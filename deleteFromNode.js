class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  deleteNodeWithValue(value) {
    if (!this.head) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.append(5);
ll.append(10);
ll.append(15);
ll.append(20);

ll.deleteNodeWithValue(5);
ll.deleteNodeWithValue(15);
console.log(ll);
