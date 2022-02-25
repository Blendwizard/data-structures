class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.instance = {};
    this.storage = {};
    this.key = 0;

  }
  push(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var lastKey = keys[keys.length - 1];
    var lastItem = this.storage[lastKey];
    this.key--;

    delete this.storage[lastKey];
    return lastItem;
  }

  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}