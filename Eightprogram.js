// Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
    constructor() {
        this.size = 16;
        this.buckets = Array(this.size).fill(null).map(() => []);
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    put(key, value) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, existingValue] = bucket[i];
            if (existingKey === key) {
                bucket[i] = [key, value];
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        for (let [existingKey, existingValue] of bucket) {
            if (existingKey === key) {
                return existingValue;
            }
        }

        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, existingValue] = bucket[i];
            if (existingKey === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}

const map = new HashMap();
map.put('name', 'Alice');
map.put('age', 25);

console.log(map.get('name'));
console.log(map.get('age'));

map.remove('name');
console.log(map.get('name'));
