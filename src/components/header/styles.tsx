import styled from "@emotion/styled";
import breakpoints from "../styles/breakpoints";

import { Link } from "gatsby";

import { Theme } from "../theme";

export const StyledNavBar = styled.nav<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.headerBg};
  border-radius: 0;
  border-top: 0;
  margin-bottom: 0;
  border: 0;
  align-items: center;
  z-index: 1;
  padding: 15px;
  position: relative;
  height: 60px;

  @media (max-width: ${breakpoints.md}) {
    display: block;
    height: auto;
  }

  @media (min-width: ${breakpoints.md}) {
    display: flex;
    padding: 10px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 0px;
  }
`;

export const StyledNavBarHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: auto;

  @media (min-width: 768px) and (max-width: 991px) {
    flex: initial;
  }

  @media (min-width: ${breakpoints.md}) {
    padding-right: 20px;
    padding-left: 20px;
    min-width: 240px;
  }

  @media (min-width: ${breakpoints.lg}) {
    min-width: 300px;
  }
`;

export const StyledHeaderTitle = styled(Link)<{ theme: Theme }>`
  height: auto;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primaryText};
  text-transform: uppercase;
  padding-right: 50px;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 24px;
  }
`;

export const MobileNav = styled.div`
  .toggle-wrapper {
    background-color: #ededed;
    padding: 15px, 30px;
    display: flex;
    align-items: center;
    position: relative;
    left: 0;
    transition: 0.3s left;
  }

  .toggle {
    display: none;
  }

  .menu {
    position: fixed;
    left: -240px;
    top: 0;
    bottom: 0;
    width: 240px;
    background-color: #fff;
    transition: 0.3s left;
    z-index: 3;
    overflow-x: hidden;
  }
  .menu ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .menu > ul > li > a {
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    color: #fff;
  }

  .menu > ul > li > a:hover {
    background-color: #0f2944;
  }

  .toggle:checked ~ .menu {
    left: 0;
  }
  .toggle:checked ~ .toggle-wrapper {
    left: 240px;
  }

  label[for="toggle"] {
    cursor: pointer;
    display: flex;
    height: 30px;
    flex-direction: column;
    justify-content: space-between;
  }

  label[for="toggle"] span {
    display: block;
    height: 4px;
    width: 36px;
    border-radius: 2px;
    background-color: #6c6c6c;
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;
