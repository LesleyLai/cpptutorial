import React from "react";

import NextPrevious from ".";

export default {
  title: "NextPrevious",
  component: NextPrevious,
};

const mockNav = [
  {
    title: "Page 1",
    url: "/page1",
  },
  {
    title: "Page 2",
    url: "/page2",
  },
  {
    title: "Page 3",
    url: "/page3",
  },
];

export const NextPrevious1 = () => <NextPrevious slug="/page1" nav={mockNav} />;

NextPrevious1.story = {
  name: "No previous page",
};

export const NextPrevious2 = () => <NextPrevious slug="/page2" nav={mockNav} />;

NextPrevious2.story = {
  name: "Both previous and next page",
};

export const NextPrevious3 = () => <NextPrevious slug="/page3" nav={mockNav} />;

NextPrevious3.story = {
  name: "No next page",
};
