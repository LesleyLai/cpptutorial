import React from "react";

import styled from "@emotion/styled";

import { Theme } from "../theme";

import Toc from "../../types/toc";

const UL = styled.ul<{ theme: Theme }>`
  margin-top: 32px;

  li {
    list-style-type: none;
    border-left: 1px solid #e6ecf1;
    border-left-color: rgb(230, 236, 241);
  }

  li a {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 24px 7px 16px;

    color: ${(props) => props.theme.colors.primaryText};
  }
`;

const RightSidebarTitle = styled.li<{ theme: Theme }>`
  font-size: 10px;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 7px 24px 7px 16px;
  border-left: 1px solid #e6ecf1;
  border-left-color: rgb(230, 236, 241);

  color: ${(props) => props.theme.colors.primaryText};
`;

const StyledRightSidebar = styled("aside")<{ theme: Theme }>`
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
  background: ${(props) => props.theme.colors.background};

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
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.colors.highlight} !important;
    }

    ${(props) =>
      props.active &&
      `
color: ${({ theme }: { theme: Theme }) => theme.colors.highlight};
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
  toc: Toc;
}

const RightSidebar = ({ toc }: SidebarLayoutProps) => {
  const finalItems = toc.items?.map((innerItem: Toc, index: number) => {
    return (
      <ListItem key={index} to={innerItem.url} level={1}>
        {innerItem.title}
      </ListItem>
    );
  });

  return (
    <StyledRightSidebar>
      {finalItems && (
        <UL>
          <RightSidebarTitle>CONTENTS</RightSidebarTitle>
          {finalItems}
        </UL>
      )}
    </StyledRightSidebar>
  );
};

export default RightSidebar;
