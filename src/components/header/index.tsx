import React from "react";
import GitHubButton from "react-github-btn";

import config from "../../../config";
import { DarkModeSwitch } from "../DarkModeSwitch";
import Loc from "../../types/location";

import Sidebar from "../sidebar";

import LanguagePicker from "./languagePicker";

import {
  StyledNavBar,
  StyledNavbarToggle,
  StyledNavBarHeader,
  StyledHeaderTitle,
  StyledBgDiv,
  StyledGithubButtonWrapper,
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
  location: Loc;
  isDarkThemeActive?: boolean;
  toggleActiveTheme?: any;
}

const Header = ({ location, isDarkThemeActive = false, toggleActiveTheme }: HeaderProps) => {
  const githubUrl = config.githubUrl;

  return (
    <header>
      <StyledNavBar>
        <StyledNavBarHeader>
          <StyledHeaderTitle to={"/"}>{config.header.title}</StyledHeaderTitle>
        </StyledNavBarHeader>

        <Search />

        <div id="navbar" className={"topnav"}>
          <div className={"visibleMobile"}>
            <Sidebar location={location} />
            <hr />
          </div>

          <ul className={"navBarUL navBarNav navBarULRight"}>
            <li>
              <LanguagePicker />
            </li>

            {githubUrl !== "" && <li className="divider hiddenMobile"></li>}
            {githubUrl !== "" && (
              <StyledGithubButtonWrapper>
                <GitHubButton href={githubUrl} data-show-count={true} aria-label="Star on GitHub">
                  Star
                </GitHubButton>
              </StyledGithubButtonWrapper>
            )}
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
        <div className={"navBarDefault removePadd"}>
          <StyledNavbarToggle onClick={toggleNav} onKeyDown={toggleNav} role="button" tabIndex={0}>
            <span />
            <span />
            <span />
          </StyledNavbarToggle>
        </div>
      </StyledBgDiv>
    </header>
  );
};

export default Header;
