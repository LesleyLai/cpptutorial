const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const palette = {
  white: "#ffffff",
  light: "#E2E4E9",
  grey1: "#C4C9D4",
  grey2: "#A7AEBE",
  grey3: "#8A93A8",
  grey4: "#6C7893",
  grey5: "#576075",
  grey6: "#414858",
  dark: "#2B303B",
  black: "#0B0C0F",
  blue1: "#0B1A28",
  blue2: "#08365E",
  blue3: "#224F77",
  blue4: "#2D6A9F",
  blue5: "#3884C7",
  blue6: "#609DD2",
  blue7: "#88B5DD",
  blue8: "#AFCEE9",
  blue9: "#D7E6F4",
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: palette.white,
    headerBg: palette.light,
    icon: palette.blue5,
    iconHover: palette.blue6,
    buttonBg: "#ddd",
    buttonBg2: "#ccc",
    heading: "#000",
    primaryText: "#3B454E",
    preFormattedText: "rgb(245, 247, 249)",
    link: palette.blue5,
    highlight: palette.blue5,
    sidebarHighlight: palette.blue5,
    search: palette.blue5,
    searchPlaceholder: palette.dark,
  },
};

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    background: palette.dark,
    headerBg: palette.black,
    icon: palette.blue5,
    iconHover: palette.blue6,
    buttonBg: "#0f4c75",
    buttonBg2: "#34495e",
    heading: "#fff",
    primaryText: "#fff",
    preFormattedText: "#000",
    link: palette.blue5,
    highlight: palette.blue5,
    sidebarHighlight: palette.blue3,
    search: palette.blue5,
    searchPlaceholder: palette.light,
  },
};

export { lightTheme, darkTheme };
