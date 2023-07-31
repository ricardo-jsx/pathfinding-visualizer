export default class PriorityQueue<T> {
  private items: { element: T; priority: number }[] = [];

  constructor(private comparator: (a: T, b: T) => number) {}

  enqueue(item: T) {
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.comparator(this.items[i].element, item) > 0) {
        this.items.splice(i, 0, { element: item, priority: i });
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push({ element: item, priority: this.items.length });
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift()?.element;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}