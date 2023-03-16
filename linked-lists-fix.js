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

    at (index) {
        try {
            let tmp = this.head;
            while (index > 0 ) {
                tmp = tmp.nextNode;
                index--;
            }
            return tmp;
        } catch {
            console.log('No such node exists');
        }
    }

    pop () {
        if (this.head) {
            let tmp = this.head;
            let tmc = this.length;
            while (tmc > 2) {
                tmc--;
                tmp = tmp.nextNode;
            }
            tmp.nextNode = null;
            this.length--;
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


list.append('thing');
list.append('another');
list.prepend('im first!');
list.append('fourth');


console.log(list);