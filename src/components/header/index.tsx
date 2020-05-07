import React from "react";

import config from "../../../config";
import { DarkModeSwitch } from "../DarkModeSwitch";

import Sidebar from "../sidebar";

import LanguagePicker from "./languagePicker";

import { visibleMobile } from "../../styles/responsive";

import {
  StyledNavBar,
  StyledNavbarToggle,
  StyledNavBarHeader,
  StyledHeaderTitle,
  StyledBgDiv,
} from "./styles";

import Search from "../search";

function toggleNav() {
  const x = document.getElementById("navbar");

  if (x) {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

interface HeaderProps {
  isDarkThemeActive?: boolean;
  toggleActiveTheme?: any;
}

const Header = ({ isDarkThemeActive = false, toggleActiveTheme }: HeaderProps) => (
  <header>
    <StyledNavBar>
      <StyledNavBarHeader>
        <StyledHeaderTitle to={"/"}>{config.header.title}</StyledHeaderTitle>
      </StyledNavBarHeader>

      <Search />

      <div id="navbar" className={"topnav"}>
        <div css={visibleMobile}>
          <Sidebar />
          <hr />
        </div>

        <ul className={"navBarUL navBarNav navBarULRight"}>
          <li>
            <LanguagePicker />
          </li>
          <li>
            <DarkModeSwitch
              isDarkThemeActive={isDarkThemeActive}
              toggleActiveTheme={toggleActiveTheme}
            />
          </li>
        </ul>
      </div>
    </StyledNavBar>
    <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
      <StyledNavbarToggle onClick={toggleNav} onKeyDown={toggleNav} role="button" tabIndex={0}>
        <span />
        <span />
        <span />
      </StyledNavbarToggle>
    </StyledBgDiv>
  </header>
);

export default Header;
