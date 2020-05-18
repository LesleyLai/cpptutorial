import React from "react";

import { css, jsx, SerializedStyles } from "@emotion/core";

import { useTheme } from "emotion-theming";
import { Theme } from "../theme";

interface InfoProps {
  children: React.ReactNode;
}

interface NoteProps extends InfoProps {
  additionalStyle?: SerializedStyles;
}

const Note = ({ children, additionalStyle }: NoteProps) => {
  const theme: Theme = useTheme();

  const noteStyle = css`
    color: ${theme.colors.primaryText};
    line-height: 18px;
    overflow: hidden;
    padding: 10px 20px;
    margin: 0px 0px 24px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 8px;
      margin-top: 8px;
    }

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 18px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-size: 16px;
    }

    p {
      margin-bottom: 8px;
      margin-top: 8px;
    }
  `;

  return <aside css={[noteStyle, additionalStyle]}>{children}</aside>;
};

const Info = ({ children }: InfoProps) => {
  const theme: Theme = useTheme();

  const style = css`
    background-color: ${theme.colors.note};
    border-left: solid 4px ${theme.colors.noteHighlight};
  `;

  return <Note additionalStyle={style}>{children}</Note>;
};

const Warning = ({ children }: InfoProps) => {
  const theme: Theme = useTheme();

  const style = css`
    background-color: ${theme.colors.warning};
    border-left: solid 4px ${theme.colors.warningHighlight};
  `;

  return <Note additionalStyle={style}>{children}</Note>;
};

export { Note, Info, Warning };
