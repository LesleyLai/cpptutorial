import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";
import Link from "gatsby-link";

import { Theme } from "../theme";

import { Language, languages, translations } from "../../utils/translations";

import LanguageSwitchIcon from "../images/language-switch";

const StyledLanguagePicker = styled.div<{ theme: Theme }>`
  svg {
    fill: ${({ theme }) => theme.colors.icon};
    width: 30px;
  }

  svg:hover {
    fill: ${({ theme }) => theme.colors.iconHover};
  }

  ul {
    display: none;
    position: absolute;
  }

  :hover > ul {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.headerBg};
  }
`;

interface LanguageOptionProps {
  lang: Language;
  active: boolean;
}

const LanguageOption = ({ lang, active }: LanguageOptionProps) => {
  const theme: Theme = useTheme();
  const style = css`
    padding: 10px 15px;

    &:hover {
      background: ${theme.colors.highlight};
    }

    a {
      color: ${theme.colors.primaryText};
      font-size: 16px;
      font-weight: 500;
      line-height: 1em;
      opacity: 1;
    }
  `;

  const activeStyle = css`
    font-weight: 700;
  `;

  return (
    <li css={[style, active && activeStyle]}>
      <Link lang={lang} to="/">
        {translations[lang]["language_name"]}
      </Link>
    </li>
  );
};

const LanguagePicker = () => {
  const activeLang = "en";

  return (
    <StyledLanguagePicker>
      <LanguageSwitchIcon />
      <ul>
        {languages.map(lang => (
          <LanguageOption key={lang} lang={lang} active={lang == activeLang} />
        ))}
      </ul>
    </StyledLanguagePicker>
  );
};

export default LanguagePicker;
