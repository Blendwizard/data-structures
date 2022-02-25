var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.key = 0;


  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

stackMethods.pop = function() {
  var keyList = Object.keys(this.storage);
  var lastKey = keyList[keyList.length - 1];
  var lastItem = this.storage[lastKey];
  delete this.storage[lastKey];
  this.key--;
  return lastItem;


};

stackMethods.size = function() {
  var keyList = Object.keys(this.storage);
  return keyList.length;
};