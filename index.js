import HashMap from "./hashmap.js";

const test = new HashMap();
console.log("hashcode:", test.hash("test"));
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

console.log(test);
console.log("get(lion): ", test.get("lion"));
console.log("has(ice cream)?: ", test.has("ice cream"));
console.log("Removing 'lion': ", test.remove("lion"));
console.log("has(lion)?: ", test.has("lion"));
console.log("Length of hashmap(num of storedKeys:", test.length());
// console.log("Clear - removing all entries in the hashMap", test.clear());
// console.log("Length of hashmap(num of storedKeys:", test.length());
console.log("keys(): ", test.keys());
console.log("values(): ", test.values());
console.log("entries(): ", test.entries());
