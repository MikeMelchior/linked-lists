class LinkedList {
    length = 0;
    constructor () {
        this.head = null;
    }

    append (value) {
        if (!this.head) {
            this.head = new Node(value)
            this.length++;
        } else {
            let tmp = this.head;
            while (tmp.nextNode) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
            this.length++;
        }
    }

    prepend (value) {
        if (!this.head) {
            this.head = new Node(value);
            this.length++;
        } else {
            let tmp = this.head;
            this.head = new Node(value);
            this.head.nextNode = tmp; 
            this.length++;
        }
    }

    size () {
        return this.length;
    }

    headNode () {
        return this.head;
    }
    
    tail () {
        let tmp = this.head;
        while (tmp.nextNode) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }


}

class Node {
    constructor (value = null) {
        this.value = value;
        this.nextNode = null;
    }
}


let list = new LinkedList;


list.append('thing');
list.append('another');
list.prepend('im first!');

console.log(list);