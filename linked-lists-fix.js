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

    contains (value) {
        if (this.head) {
            let tmp = this.head; 
            while (tmp) {
                if (tmp.value == value) {
                    return true;
                } else tmp = tmp.nextNode;
            }     
        }
        return false;
    }

    find (value) {
        if (this.head) {
            let count = 0;
            let tmp = this.head;
            while (tmp.nextNode && tmp.value != value) {
                count++;
                tmp = tmp.nextNode;
            }
            if (tmp.value == value) {
                return count;
            }
        }
        return 'No such node';
    }

    toString () {
        if (this.head) {
            let str = '';
            let tmp = this.head;
            while(tmp) {
                str += `( ${tmp.value} ) -> `;
                tmp = tmp.nextNode;
            }
            str += 'null'
            return str;
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