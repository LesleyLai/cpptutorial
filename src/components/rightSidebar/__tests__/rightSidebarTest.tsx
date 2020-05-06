import React from "react";
import renderer from "react-test-renderer";
import RightSidebar from "../index";
import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";

const mockToc = {
  items: [
    {
      title: "Level 1 heading 1",
      url: "level-1-heading-1",
      items: [
        {
          title: "Level 2 heading 1",
          url: "level-2-heading-1",
        },
      ],
    },
    {
      title: "Level 1 heading 1",
      url: "level-1-heading-1",
    },
  ],
};

describe("RightSidebar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <RightSidebar toc={mockToc} />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
