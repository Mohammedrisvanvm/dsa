class Graph {
    constructor() {
      this.map = new Map();
    }
 
    addVertex(data) {
      if (!this.map.has(data)) {
        this.map.set(data, []);
      }
    }
   
    insert(vertex, edge, isBidirectional) {
      this.addVertex(vertex);
      this.addVertex(edge);
      this.map.get(vertex).push(edge);
      if (isBidirectional) {
        this.map.get(edge).push(vertex);
      }
    }
 
    display() {
      for (let [key, values] of this.map.entries()) {
        console.log(`${key}: ${values.join(" ")}`);
      }
    }
  }
