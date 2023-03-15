class LinkedList {
    constructor() {
        this.list = [];
    }

    append(value) {
        let newNode = new Node;
        newNode.value = value;
        // if list is not empty then change pointer
        // of last element to point to appended element
        if (this.list.length > 0) {
            this.list[this.list.length - 1].nextNode = newNode;
        }
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

    insertAt (value, index) {
        let listA = this.list.splice(0, index);
        let listB = this.list.splice(0);
        // change element to left of 
        // insert's next pointer
        listA[index - 1].nextNode = value;
        // add next pointer to new node
        value.nextNode = listB[0]
        // add all parts back into list
        this.list.push(...listA, value, ...listB);
    }

    removeAt (index) {
        let listA = this.list.splice(0, index);
        let listB = this.list.splice(0);
        listB.shift();
        
        listA[index-1].nextNode = listB[0];
        this.list.push(...listA, ...listB);
    }

}

class Node {
    constructor(value=null) {
        this.nextNode = null;
        this.value = value;
    }
}

let linked = new LinkedList;

linked.append('a');  // linked == ( a ) -> null
linked.prepend('b'); // linked == ( b ) -> ( a ) -> null
linked.append('c'); // linked == ( b ) -> ( a ) -> ( c ) -> null

// linked.size() ...  3
// linked.head() ... Node {nextNode: Node, value: 'b'}
// linked.tail() ... Node {nextNode: Node, value: 'c'}
// linked.at(1) ... Node {nextNode: Node, value: 'a'}
// linked.pop() ... '( b ) -> ( a ) -> null'
// linked.contains('c') ... true;
// linked.contains('d') ... false;
// linked.find('a') ... 1;
// linked.toString() ... '( b ) -> ( a ) -> ( c ) -> null'

// let someNode = new Node('d');
// linked.insertAt(someNode, 2)
// linked.toString() ... ( b ) -> ( a ) -> ( d ) -> ( c ) -> null

// linked.removeAt(2)
// linked.toString() ... ( b ) -> ( a ) -> null


