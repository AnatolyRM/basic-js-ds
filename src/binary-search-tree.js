const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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
        const addNodeEl = (node, data) => {
            !node ? new Node(data) :
            data === node.data ? node :
            data < node.data ? node.left = addNodeEl(node.left, data) : node.right = addNodeEl(node.right, data)

            return node
        }
        this.rootNode = addNodeEl(this.rootNode, data)
    }


    has(data) {
       return this.find(data) !== null
    }

    find(data) {
        const searchNode = (node, data) => {
            !node ? null :
            data === node.data ? node :
                data < node.data ? searchNode(node.left, data) : searchNode(node.right, data)
        }

        return searchNode(this.rootNode, data)
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node || (!node.left && !node.right)) return null

            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            }

            if (data > node.data) {
                node.right = removeNode(node.right, data)
                return node
            }

            if (!node.left) {
                node = node.right
                return node
            }

            if (!node.right) {
                node = node.left
                return node
            }

            let minEl = node.right

            if (minEl.left) minEl = minEl.left

            node.data = minEl.data
            node.right = removeNode(node.right, minEl.data)

            return node
        }

        this.tree = removeNode(this.tree, data)
    }

    min() {
        if (!this.rootNode) return null

        let min = this.rootNode

        if (min.left) min = min.left

        return min.data
    }

    max() {
        if (!this.rootNode) return null

        let max = this.rootNode

        if (max.right) max = max.right

        return max.data
    }
}


module.exports = {
    BinarySearchTree
};