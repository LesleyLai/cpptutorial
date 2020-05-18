import React from "react";
import renderer from "react-test-renderer";
import { Note, Info, Warning } from "..";
import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";

describe("Note", () => {
  it("Passes snapshot test", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Note>This is a note</Note>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Info", () => {
  it("Passes snapshot test", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Info>This is an info box</Info>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Warning", () => {
  it("Passes snapshot test", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Warning>This is a warning box</Warning>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
