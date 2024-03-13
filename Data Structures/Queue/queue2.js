class Queue {
    constructor () {
        this.data = [];
    }
    add (item) {
        this.data.unshift(item);
    }
    remove () {
        this.data.pop();
    }
}

let q = new Queue();
q.add(4);
q.add(3);
q.add(2);
q.add(1);
console.log(q)
q.remove();
console.log(q)
