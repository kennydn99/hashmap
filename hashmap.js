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

  has(key) {
    const hashCode = this.hash(key);

    if (hashCode < 0 || hashCode >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    const bucket = this.buckets[hashCode];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const [storedKey] = bucket[i];
        if (key === storedKey) return true;
      }
    }

    return false;
  }

  remove(key) {
    if (this.has(key)) {
      const hashCode = this.hash(key);

      if (hashCode < 0 || hashCode >= this.buckets.length) {
        throw new Error("Trying to access index out of bound");
      }

      const bucket = this.buckets[hashCode];

      for (let i = 0; i < bucket.length; i++) {
        const [storedKey, storedValue] = bucket[i];
        if (key === storedKey) {
          this.buckets[hashCode].splice(i, 1);
          return true;
        }
      }
    }

    return false;
  }

  length() {
    let num = 0;
    for (let i = 0; i < this.size; i++) {
      num += this.buckets[i].length;
    }
    return num;
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.size; i++) {
      const bucket = this.buckets[i];
      if (bucket.length > 0) {
        for (let j = 0; j < bucket.length; j++) {
          const [storedKey] = bucket[j];
          keysArray.push(storedKey);
        }
      }
    }
    return keysArray;
  }

  values() {
    let valArray = [];
    for (let i = 0; i < this.size; i++) {
      const bucket = this.buckets[i];
      if (bucket.length > 0) {
        for (let j = 0; j < bucket.length; j++) {
          const [, storedValue] = bucket[j];
          valArray.push(storedValue);
        }
      }
    }
    return valArray;
  }

  entries() {
    let entriesArray = [];
    for (let i = 0; i < this.size; i++) {
      const bucket = this.buckets[i];
      if (bucket.length > 0) {
        for (let j = 0; j < bucket.length; j++) {
          const [storedKey, storedValue] = bucket[j];
          entriesArray.push([storedKey, storedValue]);
        }
      }
    }
    return entriesArray;
  }
}
