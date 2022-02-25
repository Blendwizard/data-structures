var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.instance = {};
  this.storage = {};
  this.key = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Stack.prototype.pop = function() {
  var listOfKeys = Object.keys(this.storage);
  var lastKey = listOfKeys[listOfKeys.length - 1];
  var lastItem = this.storage[lastKey];

  this.key--;
  delete this.storage[lastKey];
  return lastItem;
};

Stack.prototype.size = function() {
  var keyList = Object.keys(this.storage);
  return keyList.length;
};


