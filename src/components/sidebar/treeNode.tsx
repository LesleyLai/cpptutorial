import React from "react";
import OpenedSvg from "../images/opened";
import ClosedSvg from "../images/closed";
import config from "../../../config";
import Link from "../link";

import { useTheme } from "emotion-theming";

import { Theme } from "../theme";
import { jsx, css } from "@emotion/core";

import { Maybe } from "../../../graphql-types";

export interface TreeNodeData {
  url?: Maybe<string>;
  title?: Maybe<string>;
  upcoming?: Maybe<boolean>;
  items?: TreeNodeData[];
}

interface TreeNodeProps {
  className?: string;
  setCollapsed: (url: string) => void;
  collapsed: { [key: string]: boolean };
  url?: string;
  title?: Maybe<string>;
  upcoming?: Maybe<boolean>;
  items?: Maybe<TreeNodeData[]>;
  depth?: number; // Recursion depth of the tree node
}

const TreeNode = ({
  className = "",
  setCollapsed,
  collapsed,
  url = "",
  title,
  upcoming,
  items,
  depth = 0,
}: TreeNodeProps) => {
  const isCollapsed = url ? collapsed[url] : false;

  const collapse = () => {
    if (url) {
      setCollapsed(url);
    }
  };

  const hasChildren = items && items.length !== 0;

  let location;

  if (typeof document != "undefined") {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? "active" : ""}`;

  const theme: Theme = useTheme();

  const allDepthstyle = css`
    .collapser {
      background: transparent;
      border: none;
      outline: none;
      position: absolute;
      right: 20px;
      z-index: 1;
      cursor: pointer;
    }

    .active > a {
      background-color: ${theme.colors.sidebarHighlight};
      color: #fff;
    }

    ul > .item {
      margin-left: 0px;
      list-style: none;
      padding: 0;
    }

    ul .item > a,
    ul .item > span {
      text-decoration: none;
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      padding-right: 35px;
      padding-left: 15px;
    }

    .collapser svg path {
      fill: #aaa !important;
    }
  `;

  const depth1Style = css`
    ul > .item {
      margin-left: 30px;
      border-left: 1px solid #e6ecf1;
    }
  `;

  const style = depth === 1 ? [allDepthstyle, depth1Style] : allDepthstyle;

  return (
    <li css={style} className={calculatedClassName}>
      {(() => {
        if (title) {
          const titleComponents = (
            <>
              {title}
              {title && hasChildren && (
                <button onClick={collapse} aria-label="collapse" className="collapser">
                  {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
                </button>
              )}
            </>
          );

          return upcoming ? (
            <span>{titleComponents}</span>
          ) : (
            <Link to={`/en${url}`}>{titleComponents}</Link>
          );
        }
      })()}

      {!isCollapsed && hasChildren && (
        <ul>
          {items?.map((item: TreeNodeData, index: number) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              depth={depth + 1}
              {...item}
              url={item.url ? url + item.url : url}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
