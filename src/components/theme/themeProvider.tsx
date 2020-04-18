import * as React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import { lightTheme, darkTheme } from "./index";
import Header from "../header";
import "../styles/GlobalStyles";

interface ThemeProviderProps {
  children: React.ReactNode;
  location: any;
}

interface ThemeProviderState {
  isDarkThemeActive: boolean;
}

class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
  state = {
    isDarkThemeActive: false,
  };

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  retrieveActiveTheme = () => {
    const isDarkThemeActiveJson = window.localStorage.getItem("isDarkThemeActive");

    const isDarkThemeActive = isDarkThemeActiveJson ? JSON.parse(isDarkThemeActiveJson) : false;

    this.setState({ isDarkThemeActive });
  };

  toggleActiveTheme = () => {
    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));

    window.localStorage.setItem("isDarkThemeActive", JSON.stringify(!this.state.isDarkThemeActive));
  };

  render() {
    const { children, location } = this.props;

    const { isDarkThemeActive } = this.state;

    const currentActiveTheme = isDarkThemeActive ? darkTheme : lightTheme;

    return (
      <div>
        <EmotionThemeProvider theme={currentActiveTheme}>
          <Header
            location={location}
            isDarkThemeActive={isDarkThemeActive}
            toggleActiveTheme={this.toggleActiveTheme}
          />
          {children}
        </EmotionThemeProvider>
      </div>
    );
  }
}

export default ThemeProvider;
