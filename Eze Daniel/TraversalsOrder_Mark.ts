class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
class BinaryTree<T> {
  preOrder(node: BinaryTreeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];

    output.push(node?.value!);
    output.push(...this.preOrder(node!.left));
    output.push(...this.preOrder(node!.right));

    return output;
  }

  inOrder(node: BinaryTreeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];

    output.push(...this.inOrder(node!.left));
    output.push(node?.value!);
    output.push(...this.inOrder(node!.right));

    return output;
  }
  postOrder(node: BinaryTreeNode<T> | null): T[] {
    if (!node) return [];

    let output: T[] = [];

    output.push(node?.value!);
    output.push(...this.preOrder(node!.left));
    output.push(...this.preOrder(node!.right));
    return output;
  }
}
const tree = new BinaryTreeNode<number>(1);
tree.left = new BinaryTreeNode<number>(2);
tree.right = new BinaryTreeNode<number>(3);
tree.left.left = new BinaryTreeNode<number>(4);
tree.left.right = new BinaryTreeNode<number>(5);
tree.right.left = new BinaryTreeNode<number>(6);
tree.right.right = new BinaryTreeNode<number>(7);

const binaryTree = new BinaryTree<number>();
const result = binaryTree.inOrder(tree);
const Mark = binaryTree.postOrder(tree);
const Falz = binaryTree.preOrder(tree);
console.log(result);
console.log(Mark);
console.log(Falz);
