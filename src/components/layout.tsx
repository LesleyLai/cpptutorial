import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";

import { Theme } from "./theme";
import ThemeProvider from "./theme/themeProvider";
import mdxComponents from "./mdxComponents";
import Sidebar from "./sidebar";
import RightSidebar from "./rightSidebar";
import Toc from "../types/toc";

import GlobalStyles from "./styles/global";

const Wrapper = styled("div")<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  .sideBarUL .item > a:hover {
    background-color: ${({ theme }) => theme.colors.sidebarHighlight};
    color: #fff;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled("main")<{ theme: any }>`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  padding-top: 3rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled("div")`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

const LeftSideBarWidth = styled("div")`
  width: 298px;
`;

const RightSideBarWidth = styled("div")`
  width: 224px;
`;

interface LayoutProps {
  children: React.ReactNode;
  toc: Toc;
}

const Layout = ({ children, toc }: LayoutProps) => (
  <ThemeProvider>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <GlobalStyles />
        <LeftSideBarWidth className="hiddenMobile">
          <Sidebar />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth className="hiddenMobile">
          <RightSidebar toc={toc} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
