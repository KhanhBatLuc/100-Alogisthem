function rangeSumBST(root, low, high) {
    let sum = 0;
    
    function inOrderTraversal(node) {
      if (!node) {
        return;
      }
      
      inOrderTraversal(node.left);
      
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
      
      inOrderTraversal(node.right);
    }
    
    inOrderTraversal(root);
    
    return sum;
  }
  