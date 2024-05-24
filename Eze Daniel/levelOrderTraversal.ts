class BinaryTreess<T> {
  value: T;
  left: BinaryTreess<T> | null;
  Right: BinaryTreess<T> | null;
  constructor(value: T) {
    this.value = value;
    this.Right = null;
    this.left = null;
  }
}
function levelOrderTraversal<T>(root: BinaryTreess<T>|null):T[] {
  if (root === null) return [];

  const queue: (BinaryTreess<T> | null)[] = [root];
  const result: T[] = [];
  //let queue: BinaryTreess<T>[] = [];
  queue.push(root);
  while (queue.length > 0) {
    const current = queue.shift();
    // if (currentNode !== null) {
    //   result.push(currentNode.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
  


  return result;
}
