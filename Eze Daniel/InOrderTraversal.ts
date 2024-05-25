class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  // PreOrderTraversal method
  InOrderTraversal(root: BinaryTreeNode<T> | null): T[] {
    const output: T[] = [];

    const traverse = (node: BinaryTreeNode<T> | null) => {
      if (node === null) return;

      traverse(node.left); // Recursively visit the left subtree
      output.push(node.value); // Visit the root node
      traverse(node.right); // Recursively visit the right subtree
    };

    traverse(root);
    return output;
  }
}

// Usage example
const tree = new BinaryTreeNode<number>(1);
tree.left = new BinaryTreeNode<number>(2);
tree.right = new BinaryTreeNode<number>(3);
tree.left.left = new BinaryTreeNode<number>(4);
tree.left.right = new BinaryTreeNode<number>(5);
tree.right.left = new BinaryTreeNode<number>(6);
tree.right.right = new BinaryTreeNode<number>(7);

const binaryTree = new BinaryTree<number>();
const result = binaryTree.InOrderTraversal(tree);

console.log(result); // Output: [ 4, 2, 5, 1, 6, 3, 7]
