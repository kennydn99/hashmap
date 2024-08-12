export default class HashMap {
  constructor(size = 16, loadFactor = 0.75) {
    this.buckets = new Array(size);
    this.size = size;
    this.loadFactor = loadFactor;

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

    const bucket = this.buckets[hashCode];

    if (this.has(key)) {
      for (let i = 0; i < bucket.length; i++) {
        const [storedKey] = bucket[i];
        if (key === storedKey) {
          bucket[i] = [storedKey, value];
          return;
        }
      }
    }

    bucket.push([key, value]);

    if (this.length() > this.size * this.loadFactor) {
      this.resize(this.size * 2);
    }
  }

  resize(newSize) {
    const oldBuckets = this.buckets;
    this.size = newSize;
    this.buckets = new Array(newSize);

    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }

    for (let i = 0; i < oldBuckets.length; i++) {
      const bucket = oldBuckets[i];
      for (let j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];
        const newHashcode = this.hash(key);
        this.buckets[newHashcode].push([key, value]);
      }
    }
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
