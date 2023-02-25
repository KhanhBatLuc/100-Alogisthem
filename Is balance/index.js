var isBalanced = function(root) {
    if (!root) {
   return true;
 }
 
 function getHeight(node) {
   if (!node) {
     return 0;
   }
   
   let leftHeight = getHeight(node.left);
   let rightHeight = getHeight(node.right);
   
   return 1 + Math.max(leftHeight, rightHeight);
 }
 
 function isBalancedHelper(node) {
   if (!node) {
     return true;
   }
   
   let leftHeight = getHeight(node.left);
   let rightHeight = getHeight(node.right);
   
   if (Math.abs(leftHeight - rightHeight) > 1) {
     return false;
   }
   
   return isBalancedHelper(node.left) && isBalancedHelper(node.right);
 }
 
 return isBalancedHelper(root);
};