import React from "react";
import styled from "@emotion/styled";

import { Maybe } from "../../../graphql-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Theme } from "../theme";
import breakpoints from "../../styles/breakpoints";

type GlossaryTooltipProps = {
  title: string;
  children: string;
  type: string;
  className?: string;
  cppreference?: Maybe<string>;
};

const Article = styled.article<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText};
  border: 5px dashed red;
  border-radius: 6px;
  opacity: 0.95;
  white-space: normal;
  word-wrap: break-word;
  position: absolute;
  z-index: 1;
  padding: 10px 20px;
  width: 100%;
  left: 0;

  p {
    margin: 8px 0px;
  }

 .title {
    h2 {
      margin-bottom: 5px;
    }
    span {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  @media (min-width: ${breakpoints.md}) {
    width: auto;
    left: auto;
    position: absolute;
    max-width: 600px;

    .title {
      h2 {
        display: inline-block;
      }

      span {
        float: right;
      }
    }
  }
}

:hover {
  visibility: visible;
}
`;

export default (props: GlossaryTooltipProps) => {
  return (
    <Article className={props.className} data-testid="glossary-tooltip">
      <div data-testid="glossary-tooltip-heading">
        <h2 data-testid="glossary-tooltip-title">{props.title}</h2>
        <span data-testid="glossary-tooltip-type">{props.type}</span>
      </div>
      <MDXRenderer data-testid="glossary-tooltip-body">{props.children}</MDXRenderer>
      {props.cppreference && (
        <p data-testid="glossary-tooltip-cppreference">
          See <a href={`https://en.cppreference.com/w/${props.cppreference}`}>cppreference</a> for
          detailed documentation
        </p>
      )}
    </Article>
  );
};
