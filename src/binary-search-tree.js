const {NotImplementedError} = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// class Node {
//     constructor(data, left = null, right = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    root() {
        return this.root
    }

    add(data) {
        const addNode = (node, data) => {
            if (!node) return new Node(data)
            if (node.data === data) return node
            data < node.data ? node.left = addNode(node.left, data) : node.right = addNode(node.right, data)
            return node
        }
        this.root = addNode(this.root, data)
    }

    has(data) {
        return this.find(data) !== null
    }

    find(data) {
        const search = (node, data) => {
            if (!node) return null
            if (data === node.data) return node
            data > node.data ? search(node.right, data) : search(node.left, data)
        }

        return search(this.root, data)
    }

    remove(data) {

    }

    min() {
        if (!this.root) return null
        let cur = this.root
        if (cur.left) cur = cur.left
        return cur.data
    }

    max() {
        if (!this.root) return null
        let cur = this.root
        if (cur.right) cur = cur.right
        return cur.data
    }
}


module.exports = {
    BinarySearchTree
};