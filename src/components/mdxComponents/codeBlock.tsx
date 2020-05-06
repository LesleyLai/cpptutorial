import * as React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/vsDark";

import styled from "@emotion/styled";

import { Theme } from "../theme";

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

type TipData = {
  text: string;
  cppreference?: string;
};

const getTip = (token: Token): TipData | undefined => {
  if (token.content.slice().trim() == "puts") {
    return {
      text:
        "Prints a null-terminated string and one additional newline character '\\n' to standard output",
    };
  }
};

interface TokenWithTipProps {
  children: string;
  tip: TipData;
}

const TokenWithTip = (props: TokenWithTipProps) => {
  const Style = styled.span<{ theme: Theme }>`
    text-decoration: underline;

    .codeTip {
      visibility: hidden;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primaryText};
      padding: 10px 20px;
      border: 5px dashed red;
      border-radius: 6px;
      max-width: 600px;

      white-space: normal;
      word-wrap: break-word;

      position: absolute;
      z-index: 1;
    }

    :hover .codeTip {
      visibility: visible;
    }
  `;

  const tip = props.tip;

  return (
    <Style {...props}>
      {props.children}
      <div className="codeTip">
        <h2>std::puts</h2>
        <p>{tip.text}</p>
        {tip.cppreference && (
          <text>
            See <a href={`https://en.cppreference.com/w/${tip.cppreference}`}>cppreference</a> for
            detailed documentation
          </text>
        )}
      </div>
    </Style>
  );
};

/** Removes the last token from a code example if it's empty. */
function cleanTokens(tokens: Token[][]) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }
  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }
  return tokens;
}

/* eslint-disable react/jsx-key */
const CodeBlock = ({ children: exampleCode, className, ...props }) => {
  const language = className ? className.replace(/language-/, "") : "";
  return (
    <Highlight {...defaultProps} code={exampleCode} language={language} theme={prismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + " pre"} style={style}>
          {cleanTokens(tokens).map((line, i) => {
            let lineClass = {};

            let isDiff = false;
            // If token is diff, set line color and trim the + or - sign
            const isTokenDiff = (token: Token) => {
              if (token.content[0] === "+") {
                lineClass = { backgroundColor: "rgba(76, 175, 80, 0.3)" };
                token.content = token.content.substring(1);
                return true;
              } else if (token.content[0] === "-") {
                lineClass = { backgroundColor: "rgba(244, 67, 54, 0.3)" };
                token.content = token.content.substring(1);
                return true;
              }
              return false;
            };

            if (line[0]) {
              if (line[0].content.length) {
                isDiff = isTokenDiff(line[0]);
              } else if (line[1]) {
                isDiff = isTokenDiff(line[1]);
              }
            }

            const lineProps = getLineProps({ line, key: i });
            lineProps.style = lineClass;

            return (
              <div {...lineProps} key={i}>
                {line.map((token, key) => {
                  const tip = getTip(token);
                  return tip ? (
                    <TokenWithTip tip={tip} {...getTokenProps({ token, key })} />
                  ) : (
                    <span {...getTokenProps({ token, key })} />
                  );
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
