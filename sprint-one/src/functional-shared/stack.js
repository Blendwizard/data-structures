var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};

  // Our first key :)
  instance.key = 0;




  _.extend(instance, stackMethods);

  return instance;
};

// Changing this from var stackMethods to be Stack.stackMethods
var stackMethods = {};


// push(string) - Add a string to the top of the stack
stackMethods.push = function(value) {
  this.storage[this.key] = value;
  this.key++;
};


// pop() - Remove and return the string on the top of the stack
stackMethods.pop = function() {
  // Get a list of keys
  var keyList = Object.keys(this.storage);
  // Obtain the last numerical key

  var lastKey = keyList[keyList.length - 1];

  // Obtain the last value at that key
  var itemToPop = this.storage[lastKey];

  // Adjust key to reflect the deleted element
  this.key--;

  // Remove the last item in from the stack
  delete this.storage[lastKey];

  // Return our last item
  return itemToPop;
};



// size() - Return the number of items on the stack
stackMethods.size = function() {
  // Return the length of the stack
  var keyList = Object.keys(this.storage);
  return keyList.length;
};