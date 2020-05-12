import * as React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import prismTheme from "prism-react-renderer/themes/vsDark";
import { MDXRenderer } from "gatsby-plugin-mdx";
import breakpoints from "../../styles/breakpoints";

import GlossaryTooltip from "../glossaryTooltip";

import styled from "@emotion/styled";

import { StaticQuery, graphql } from "gatsby";
import { Maybe } from "../../../graphql-types";

import { Theme } from "../theme";

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

type TipData = {
  title: string;
  body: string;
  type: string;
  cppreference?: Maybe<string>;
};

interface GlossaryData {
  body: any;
  frontmatter: {
    title: string;
    type: string;
    cppreference?: Maybe<string>;
    token?: string;
  };
}

const getTip = (token: Token, glossaries: GlossaryData[]): TipData | undefined => {
  const glossary = glossaries.find(
    glossary => glossary.frontmatter.token == token.content.slice().trim()
  );

  return (
    glossary && {
      title: glossary.frontmatter.title,
      body: glossary.body,
      type: glossary.frontmatter.type,
      cppreference: glossary.frontmatter.cppreference,
    }
  );
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
    }

    :hover .codeTip {
      visibility: visible;
    }
  `;

  const tip = props.tip;

  return (
    <Style {...props}>
      {props.children}
      <GlossaryTooltip className="codeTip" {...tip}>
        {tip.body}
      </GlossaryTooltip>
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

interface CodeBlockProps {
  className: string;
  children: string;
  notip?: boolean;
}

/* eslint-disable react/jsx-key */
const CodeBlock = ({ children: code, notip = false, className }: CodeBlockProps) => (
  <StaticQuery
    query={graphql`
      query CodeBlockQuery {
        glossary: allMdx(filter: { fields: { mdxType: { eq: "glossary" } } }) {
          edges {
            node {
              frontmatter {
                cppreference
                title
                type
                token
              }
              body
            }
          }
        }
      }
    `}
    render={data => {
      const language = className ? className.replace(/language-/, "") : "";

      const glossaries = data.glossary.edges
        .filter(({ node }) => !!node)
        .map(({ node }) => node)
        .filter(({ frontmatter }) => !!frontmatter) as GlossaryData[];

      return (
        <Highlight {...defaultProps} code={code} language={language as Language} theme={prismTheme}>
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
                      const tip = !notip && getTip(token, glossaries);
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
    }}
  />
);
export default CodeBlock;
