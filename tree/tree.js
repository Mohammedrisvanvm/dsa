class Node {
  constructor(value) {
    this.value = value;
    this.children = null;
    this.next = null; // pointer to next sibling node
  }
}
const root = new Node(1);
root.children = new Node(2);
root.children.next = new Node(3);
root.children.next.next = new Node(4);
function traverseTree(node) {
  console.log(node.value);
  let child = node.children;
  while (child !== null) {
    traverseTree(child);
    child = child.next;
  }
}

traverseTree(root);
