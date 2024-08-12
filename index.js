import HashMap from "./hashmap.js";

const hashmap = new HashMap();
console.log("hashcode:", hashmap.hash("test"));
hashmap.set("test", "kenny");
console.log(hashmap);
console.log(hashmap.get("test"));
