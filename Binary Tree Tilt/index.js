function findTilt(root) {
    let tilt = 0;

    function traverse(node) {
        if (!node) {
            return 0;
        }

        const leftSum = traverse(node.left);
        const rightSum = traverse(node.right);

        tilt += Math.abs(leftSum - rightSum);

        return leftSum + rightSum + node.val;
    }

    traverse(root);

    return tilt;
}
