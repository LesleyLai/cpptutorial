import React from "react";

import TreeNode from "./treeNode";

export default {
  title: "TreeNode",
  component: TreeNode,
};

export const Node = () => (
  <ul>
    <TreeNode
      setCollapsed={(_url) => {
        /*do nothing*/
      }}
      collapsed={{}}
      url="/"
      title="This is a Tree Node"
    />
  </ul>
);

Node.story = {
  name: "A tree node",
};
