import { css, jsx } from "@emotion/core";

export const visibleMobile = css`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;
