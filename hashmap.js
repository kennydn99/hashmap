export default class HashMap {
  constructor(size = 16) {
    this.buckets = new Array(size);
    this.size = size;

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    this.buckets[hashCode].push([key, value]);
  }

  get(key) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    const bucket = this.buckets[hashCode];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const [storedKey, storedValue] = bucket[i];
        if (key === storedKey) return storedValue;
      }
    }

    return null;
  }
}
