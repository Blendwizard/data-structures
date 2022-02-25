var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Keep track of your numeric key
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // I: value
    // O: none
    // C: no arrays
    // E: none
    // Example: {1 : firstVal, 2 : secondVal, 3 : thirdVal}
    storage[key] = value;
    key++;

  };

  someInstance.dequeue = function() {
    // We want to remove the first item we added
    var keyList = Object.keys(storage);
    var firstInKey = keyList[0];
    var firstInItem = storage[firstInKey];

    delete storage[firstInKey];
    return firstInItem;
  };

  someInstance.size = function() {
    var keyList = Object.keys(storage);
    return keyList.length;
  };

  return someInstance;
};

// FIFO
// Stack = 1 > 2 > 3 ? pop 1 > 2 > 1
// Queue = 1 > 2 > 3 ? pop 1 > 2 > 3