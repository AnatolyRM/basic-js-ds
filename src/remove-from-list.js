const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

// (removeKFromList(initial, 3)

function removeKFromList( arr, k) {
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }

  class Node {
    constructor () {
      this.len = 0;
    }
    Node(element) {
      if (this.len === 0) {
        this.value = element;
        this.next = null;
        this.len++;
      } else {
        let pre = this;
        let cur = pre.next;
        while (cur !== null) {
          pre = cur;
          cur = cur.next
        }
        const node = new ListNode(element);
        pre.next = node;
        this.len++;
      }
    }

    Node() {
      if (this.len === 0) { return undefined; }
      if (this.len === 1) {
        let output = this.value;
        this.value = null;
        this.len = 0;
        return output;
      }
      let output = this.value;
      this.value = this.next.value;
      this.next = this.next.next;
      this.len--;
      return output;
    }
  }
}


module.exports = {
  removeKFromList
};
