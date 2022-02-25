class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.instance = {};
    this.storage = {};
    this.key = 0;
  }

  enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var firstKey = keys[0];
    var firstItem = this.storage[firstKey];

    delete this.storage[firstKey];
    return firstItem;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}
