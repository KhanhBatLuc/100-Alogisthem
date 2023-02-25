function diameterOfBinaryTree(root) {
    let maxPathLength = 0;

    function depth(node) {
        if (!node) {
            return 0;
        }

        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);

        maxPathLength = Math.max(maxPathLength, leftDepth + rightDepth);

        return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);

    return maxPathLength;
}
