import HashMap from "./hashmap.js";

const test = new HashMap();

// Test hashing
console.log("Testing hash function:");
console.log("Hash code for 'test':", test.hash("test")); // Should return a hash code

// Test adding key-value pairs
console.log("\nTesting set() and get():");
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Get 'apple':", test.get("apple")); // Should return 'red'
console.log("Get 'banana':", test.get("banana")); // Should return 'yellow'
console.log("Get 'carrot':", test.get("carrot")); // Should return 'orange'

// Test updating existing keys
console.log("\nTesting updating values with set():");
test.set("apple", "green"); // Update existing key
console.log("Get updated 'apple':", test.get("apple")); // Should return 'green'

// Test has() method
console.log("\nTesting has():");
console.log("Has 'lion'? ", test.has("lion")); // Should return true
console.log("Has 'nonexistent'? ", test.has("nonexistent")); // Should return false

// Test removing keys
console.log("\nTesting remove():");
console.log("Removing 'lion':", test.remove("lion")); // Should return true
console.log("Has 'lion' after removal? ", test.has("lion")); // Should return false

// Test length of HashMap
console.log("\nTesting length():");
console.log("Length of HashMap:", test.length()); // Should return number of entries

// Test resizing and rehashing
console.log("\nTesting resizing and rehashing:");
test.set("extra1", "value1");
test.set("extra2", "value2");
test.set("extra3", "value3");
test.set("extra4", "value4");
test.set("extra5", "value5"); // This should trigger a resize if implemented correctly

// Check entries after resizing
console.log("Entries after resizing:", test.entries());

// Test clearing the HashMap
console.log("\nTesting clear():");
test.clear();
console.log("Length after clearing:", test.length()); // Should return 0
console.log("Keys after clearing:", test.keys()); // Should return an empty array
console.log("Values after clearing:", test.values()); // Should return an empty array
console.log("Entries after clearing:", test.entries()); // Should return an empty array
