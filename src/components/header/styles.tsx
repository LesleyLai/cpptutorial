import styled from "@emotion/styled";
import breakpoints from "../../styles/breakpoints";

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
  background: ${props => (props.isDarkThemeActive ? props.theme.colors.background : undefined)};
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

  span:first-child {
    margin-top: 0px;
  }

  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const StyledGithubButtonWrapper = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px 0px;
  padding-left: 15px;
  max-height: 40px;

  span span {
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px 10px;
  }
`;
