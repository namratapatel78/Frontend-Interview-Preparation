function isBST(node)
{
    if (node == null)
        return true;
      
    /* False if left is > than node */
    if (node.left != null && node.left.data > node.data)
        return false;
      
    /* False if right is < than node */
    if (node.right != null && node.right.data < node.data)
        return false;
      
    /* False if, recursively, the left or right is not a BST */
    if (!isBST(node.left) || !isBST(node.right))
        return false;
      
    /* Passing all that, it's a BST */
    return true;
}