var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // example: {1 : someValue, 2 : anotherValue, 3 : thirdValue}
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    var keyList = Object.keys(storage);
    var keyToPop = keyList[keyList.length - 1];
    var poppedItem = storage[keyToPop];

    key--;
    delete storage[keyToPop];
    return poppedItem;
  };

  someInstance.size = function() {
    var keyList = Object.keys(storage);
    return keyList.length;

  };

  return someInstance;
};

// Functional instantiation: a simple "maker" pattern

// Do:
// Work within the src/functional/ folder
// Define all functions and properties within the maker function
// Capitalize the maker function name
// Don't:
// Use the keyword new, the keyword this, or any prototype chains
// Example: The provided classes Stack and Queue already follow this pattern