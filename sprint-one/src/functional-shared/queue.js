var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};

  // Create place to store our queue
  instance.storage = {};

  // Create initial numeric key
  instance.key = 0;
  // extend methods to queue
  _.extend(instance, queueMethods);
  // return instance
  return instance;

};


var queueMethods = {};


queueMethods.enqueue = function(value) {
  // Acess the storage within the instance
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
// FIFO
  var keyList = Object.keys(this.storage);
  var firstKey = keyList[0];
  var firstItem = this.storage[firstKey];

  delete this.storage[firstKey];
  return firstItem;

};


queueMethods.size = function() {
  var keyList = Object.keys(this.storage);
  return keyList.length;
};