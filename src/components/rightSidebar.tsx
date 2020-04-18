import React from "react";
import { StaticQuery, graphql } from "gatsby";

// import Link from './link';
import config from "../../config";

import Loc from "../types/location";

import styled from "@emotion/styled";

import { Theme } from "./theme";

export const Sidebar = styled("aside")<{ theme: Theme }>`
  width: 100%;
  border-right: 1px solid #ede7f3;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;

  background: ${props => props.theme.colors.background};

  .rightSideTitle {
    font-size: 10px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding: 7px 24px 7px 16px;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);

    color: ${props => props.theme.colors.primaryText};
  }

  .rightSideBarUL {
    margin-top: 32px;
  }

  .rightSideBarUL li {
    list-style-type: none;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
  }

  .rightSideBarUL li a {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;

    color: ${props => props.theme.colors.primaryText};
  }

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})<{ theme: Theme; level: number; active: boolean }>`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: ${props => props.theme.colors.highlight} !important;
    }

    ${props =>
      props.active &&
      `
color: ${props => props.theme.colors.highlightBg};
border-color: rgb(230,236,241) !important;
border-style: solid none solid solid;
border-width: 1px 0px 1px 1px;
background-color: #fff;
`} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

interface SidebarLayoutProps {
  location: Loc;
}

interface AllMdx {
  edges: Array<{
    node: {
      fields: {
        slug: string;
      };
      tableOfContents: any;
    };
  }>;
}

const SidebarLayout = ({ location }: SidebarLayoutProps) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }: { allMdx: AllMdx }) => {
      let finalNavItems: any = undefined;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems: any[] | undefined = undefined;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map(
                  (innerItem: any, index: number) => {
                    const itemId = innerItem.title
                      ? innerItem.title.replace(/\s+/g, "").toLowerCase()
                      : "#";

                    return (
                      <ListItem key={index} to={`#${itemId}`} level={1}>
                        {innerItem.title}
                      </ListItem>
                    );
                  }
                );
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={"rightSideBarUL"}>
              <li className={"rightSideTitle"}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
