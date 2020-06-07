import React from "react";

import config from "../../../config";
import { DarkModeSwitch } from "../DarkModeSwitch";

import Sidebar from "../sidebar";

import LanguagePicker from "./languagePicker";

import { StyledNavBar, StyledNavBarHeader, StyledHeaderTitle, MobileNav } from "./styles";

import Search from "../search";

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
    <MobileNav>
      <input type="checkbox" className="toggle" id="toggle" />
      <div className="toggle-wrapper">
        <label htmlFor="toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Search />
          </li>
          <li>
            <Sidebar />
          </li>
          <li>
            <LanguagePicker />
          </li>
        </ul>
      </div>
    </MobileNav>
  </header>
);

export default Header;
