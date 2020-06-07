import React from "react";
import Link from "../link";

import { StyledNextPrevious } from "./style";

import _ from "lodash";

import { Maybe } from "../../../graphql-types";

type PageInfo = {
  url: string;
  title?: Maybe<string>;
};

interface NextPreviousProps {
  slug: string;
  nav: PageInfo[];
}

const LeftArrow = () => (
  <div className={"leftArrow"}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1em"
      width="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    >
      <g>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </g>
    </svg>
  </div>
);

const RightArrow = () => (
  <div className={"rightArrow"}>
    <svg
      preserveAspectRatio="xMidYMid meet"
      height="1em"
      width="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
    >
      <g>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </g>
    </svg>
  </div>
);

const NextPrevious = ({ slug, nav }: NextPreviousProps) => {
  const currentIndex = nav.findIndex((el) => el && el.url === slug);

  let nextInfo: PageInfo | null = null;
  let previousInfo: PageInfo | null = null;

  if (currentIndex === -1) {
    // index
    if (nav[0]) {
      nextInfo = nav[0];
    }
  } else if (currentIndex === 0) {
    // first page
    if (nav[1]) {
      nextInfo = nav[1];
    }
  } else if (currentIndex === nav.length - 1) {
    // last page
    previousInfo = nav[currentIndex - 1];
  } else if (currentIndex) {
    // any other page
    nextInfo = nav[currentIndex + 1];
    previousInfo = nav[currentIndex - 1];
  }

  return (
    <StyledNextPrevious>
      {previousInfo && currentIndex >= 0 && (
        <Link to={previousInfo.url} className={"previousBtn"}>
          <LeftArrow />
          <div className={"preRightWrapper"}>
            <div className={"smallContent"}>
              <span>Previous</span>
            </div>
            <div className={"nextPreviousTitle"}>
              <span>{previousInfo.title}</span>
            </div>
          </div>
        </Link>
      )}
      {nextInfo && currentIndex >= 0 && (
        <Link to={nextInfo.url} className={"nextBtn"}>
          <div className={"nextRightWrapper"}>
            <div className={"smallContent"}>
              <span>Next</span>
            </div>
            <div className={"nextPreviousTitle"}>
              <span>{nextInfo && nextInfo.title}</span>
            </div>
          </div>
          <RightArrow />
        </Link>
      )}
    </StyledNextPrevious>
  );
};

export default NextPrevious;
