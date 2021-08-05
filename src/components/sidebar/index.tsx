import React from "react";
import Tree from "./tree";
import styled from "@emotion/styled";
import { ExternalLink } from "react-feather";
import config from "../../../config";

import { Theme } from "../theme";

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
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
    padding: 0.45rem 0 0.45rem ${({ level }) => 2 + (level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight} !important;
    }

    ${(props) =>
      props.active &&
      `
      // color: #663399;
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

const Sidebar = styled("aside")`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const UL = styled.ul<{ theme: Theme }>`
  margin-top: 50px;

  li {
    list-style-type: none;
    width: auto;
  }

  li a,
  li span {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;
    padding-left: 10px;
    padding-right: 25px;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    border-color: transparent currentcolor transparent transparent;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  span {
    color: ${({ theme }) => theme.colors.primaryText};
    opacity: 40%;
  }

  .item > a:hover {
    background-color: ${({ theme }) => theme.colors.sidebarHighlight};
    color: #fff;
  }
`;

const SidebarLayout = () => (
  <Sidebar>
    <UL>
      <Tree />
      {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
      {config.sidebar.links.map((link, key) => {
        if (link.link !== "" && link.text !== "") {
          return (
            <ListItem key={key} to={link.link}>
              {link.text}
              <ExternalLink size={14} />
            </ListItem>
          );
        }
      })}
    </UL>
  </Sidebar>
);

export default SidebarLayout;
