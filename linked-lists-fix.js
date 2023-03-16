class LinkedList {
    constructor () {
        this.head = null;
    }

    append (value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let tmp = this.head;
            while (tmp.nextNode) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }
}

class Node {
    constructor (value = null) {
        this.value = value;
        this.nextNode = null;
    }
}


let list = new LinkedList;



console.log(list);