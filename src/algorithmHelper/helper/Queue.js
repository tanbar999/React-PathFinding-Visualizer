class Queue {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  poll() {
    if (this.isEmpty()) return "Queue already Empty";

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

export default Queue;
