var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.instance = {};
  this.storage = {};
  this.key = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};


Queue.prototype.dequeue = function() {
  var listOfKeys = Object.keys(this.storage);
  var firstKey = listOfKeys[0];
  var firstItem = this.storage[firstKey];

  delete this.storage[firstKey];
  return firstItem;
};

Queue.prototype.size = function() {
  var keyList = Object.keys(this.storage);
  return keyList.length;
};