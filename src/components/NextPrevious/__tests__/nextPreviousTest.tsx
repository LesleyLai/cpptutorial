import React from "react";

import renderer from "react-test-renderer";

import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";

import NextProvious from "..";

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

it("Passes snapshot test", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <NextProvious slug="/page1" nav={mockNav} />
        <NextProvious slug="/page2" nav={mockNav} />
        <NextProvious slug="/page3" nav={mockNav} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
