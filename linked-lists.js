class LinkedList {
    constructor() {
        this.list = [];
    }

    append(value) {
        let newNode = new Node
        newNode.value = value;
        this.list.push(newNode);
    }

}

class Node {
    constructor() {
        this.nextNode = null;
        this.value = null;
    }
}

let linked = new LinkedList;
linked.append('test');
