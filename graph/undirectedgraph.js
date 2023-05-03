class Graph {
  constructor() {
    this.adjacencylist = {};
  }
  addVertex(vertex) {
    if (!this.adjacencylist[vertex]) {
      this.adjacencylist[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencylist[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencylist[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencylist[vertex1].add(vertex2);
    this.adjacencylist[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencylist[vertex1].delete(vertex2);
    this.adjacencylist[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencylist[vertex]) {
      return false;
    }
    for (let adjacentVertex of this.adjacencylist[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencylist[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencylist[vertex1].has(vertex2) &&
      this.adjacencylist[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjacencylist) {
      console.log(vertex + "->" + [...this.adjacencylist[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");

graph.addEdge("a", "b");
graph.addEdge("b", "c");

graph.display();
console.log(graph.hasEdge("a", "c"));
graph.removeVertex("b");
graph.display();
