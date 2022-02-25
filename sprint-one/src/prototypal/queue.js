var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.key = 0;


  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

queueMethods.dequeue = function() {
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


