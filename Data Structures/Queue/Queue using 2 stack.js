// Implememt Queue using 2 stacks

import Stack from '../Stack/stack2.js'


class Queue {
    constructor () {
        this.first = new Stack();
        this.second = new Stack();
    }
    add (item) {
       this.first.push(item);
    }
    remove () {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.pop();
        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
    peek () {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
}