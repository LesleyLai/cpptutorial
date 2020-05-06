import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import TreeNode, { TreeNodeData } from "./treeNode";

const Tree = () => {
  const defaultCollapsed: { [key: string]: boolean } = {};

  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = (url: string) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  interface TreeQueryData {
    allTocYaml: {
      edges: Array<{
        node: TreeNodeData;
      }>;
    };
  }

  return (
    <StaticQuery
      query={graphql`
        query SidebarTree {
          allTocYaml {
            edges {
              node {
                title
                url
                upcoming
                items {
                  url
                  title
                  upcoming
                  items {
                    url
                    title
                    upcoming
                  }
                }
              }
            }
          }
        }
      `}
      render={(data: TreeQueryData) => (
        <TreeNode
          className={"hideFrontLine"}
          setCollapsed={toggle}
          collapsed={collapsed}
          items={data.allTocYaml.edges.map(edge => edge.node)}
        />
      )}
    />
  );
};

export default Tree;
