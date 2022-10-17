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
        this.rootNode = null
    }
    root() {
        return this.rootNode
    }

    add(data) {
        const add = (node, data) => {
            if (!node) return new Node(data)
            if (node.data === data) return node
            data < node.data
                ? node.left = add(node.left, data)
                : node.right = add(node.right, data)
            return node
        }
        this.rootNode = add(this.rootNode, data)
    }

    has(data) {
        return this.find(data) !== null
    }

    find(data) {
        const search = (node, data) => {
            if (!node) return null
            if (data === node.data) return node
            if (data > node.data) {
                return search(node.right, data)
            } else {
                return search(node.left, data)
            }
        }
        return search(this.rootNode, data)
    }

    remove(data) {
        const remove = (node, data) => {

        }
        this.rootNode = remove(this.rootNode, data)
    }

    min() {
        if (!this.rootNode) return null
        let cur = this.rootNode
        while (cur.left) cur = cur.left
        return cur.data
    }

    max() {
        if (!this.rootNode) return null
        let cur = this.rootNode
        while (cur.right) cur = cur.right
        return cur.data
    }
}


module.exports = {
    BinarySearchTree
};