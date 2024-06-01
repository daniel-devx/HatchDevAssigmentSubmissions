class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  root: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
  }
}
class BinarySearchTree {
  val: number | null;
  root: TreeNode | null;
  constructor(val: number) {
    this.val = null;
  }
  private InstanceNode(newnode: TreeNode, node: TreeNode) {
    if (newnode < node) {
      if (node.left === null) {
        node.left = newnode;
      } else {
        this.InstanceNode(newnode, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newnode;
      }
      this.InstanceNode(newnode, node.right);
    }
  }
  //insert(node: Treenode);
  insert(val: number) {
    const newNode = new TreeNode(val);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.InstanceNode(newNode, this.root);
    }
  }
}
