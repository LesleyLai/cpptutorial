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

export const StyledBgDiv = styled.div<{ theme: Theme; isDarkThemeActive: boolean }>`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  background: ${(props) => (props.isDarkThemeActive ? props.theme.colors.background : undefined)};
  display: block;

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const StyledNavbarToggle = styled.span`
  border: 0px solid #fff;
  border-radius: 4px;
  width: 36px;
  height: 33px;
  position: absolute;
  right: 20px;
  left: 11px;
  top: 15px;
  padding: 8px 5px;
  display: block;
  background: #fff;

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: #001934;
  }

  span:first-of-type {
    margin-top: 0px;
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }

  }
`;

export const NewDiv = styled.div`
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
