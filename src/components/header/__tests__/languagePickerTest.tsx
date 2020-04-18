import React from "react";
import renderer from "react-test-renderer";
import LanguagePicker from "../languagePicker";
import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <LanguagePicker />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
