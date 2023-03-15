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

    size () {
        return this.list.length;
    }

    head () {
        return this.list[0];
    }

    tail () {
        return this.list[this.list.length -1];
    }

    at (index) {
        return this.list[index];
    }

    pop () {
        this.list.pop();
        this.list[this.list.length-1].nextNode = null;
    }

    contains (value) {
        for (let node of this.list) {
            if (node.value == value) {
                return true;
            }
        }
        return false;
    }

    find (value) {
        for (let node of this.list) {
            if (node.value == value) {
                return this.list.indexOf(node);
            }
        }
        return null;
    }

    toString () {
        let string = '';
        this.list.forEach(node => {
            string+= `( ${node.value} ) -> `;
        });
        string+= 'null';
        return string;
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
linked.append('im a new node');

console.log(linked.toString());