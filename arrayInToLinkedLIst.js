class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }

  const head = new Node(arr[0]);

  let current = head;

  console.log(current);
  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);

 

    current.next = newNode;
    
    current = newNode;

  }

  return head;
}

const ll = arrayToLinkedList([5, 1,20 ]);

console.log(ll)
