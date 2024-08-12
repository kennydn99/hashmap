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
