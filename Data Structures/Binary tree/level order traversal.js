var levelOrder = function(root) {
  let results = [];
  
  let lot = (root, level) => {
      if (!root) return;
      
      if (results[level]) results[level].push(root.val)
      
      else results[level] = [root.val]
      
      lot(root.left, level+1)
      lot(root.right, level +1)
  }
  
  lot(root, 0)
  
  return results;
};