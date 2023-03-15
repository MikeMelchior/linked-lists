class LinkedList {
    constructor() {
        this.list = [];
    }

    append(value) {
        let newNode = new Node;
        newNode.value = value;
        this.list.push(newNode);
    }

    prepend(value) {
        let newNode = new Node;
        newNode.value = value;
        newNode.nextNode = this.list[0];
        this.list.unshift(newNode);
    }

}

class Node {
    constructor() {
        this.nextNode = null;
        this.value = null;
    }
}

let linked = new LinkedList;
linked.append('appended');
linked.prepend('prepended');

console.log(linked);