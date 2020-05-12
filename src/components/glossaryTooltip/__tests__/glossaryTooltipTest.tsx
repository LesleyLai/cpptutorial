import React from "react";
import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import { ThemeProvider } from "emotion-theming";
import { lightTheme } from "../../theme";

import GlossaryTooltip from "..";

jest.mock("gatsby-plugin-mdx", () => {
  return {
    MDXRenderer: ({ children, ...props }) => <div {...props}>{children}</div>,
  };
});

beforeEach(cleanup);

const title = "std::puts";
const tooltipType = "C-style IO Library";
const body = `return () => React.createElement('div')`;
const cppreference = "cpp/io/c/puts";

const props = { title, type: tooltipType, cppreference };

it("Renders correctly without cppreference", () => {
  const { getByTestId, queryByTestId } = render(
    <ThemeProvider theme={lightTheme}>
      <GlossaryTooltip title={title} type={tooltipType}>
        {body}
      </GlossaryTooltip>
    </ThemeProvider>
  );

  const tooltipElem = getByTestId("glossary-tooltip");
  const headingElem = getByTestId("glossary-tooltip-heading");
  const titleElem = getByTestId("glossary-tooltip-title");
  const tooltipTypeElem = getByTestId("glossary-tooltip-type");
  const bodyElem = getByTestId("glossary-tooltip-body");
  const cppreferenceElem = queryByTestId("glossary-tooltip-cppreference");

  expect(tooltipElem).toContainElement(headingElem);
  expect(headingElem).toContainElement(titleElem);
  expect(titleElem).toHaveTextContent(title);
  expect(headingElem).toContainElement(tooltipTypeElem);
  expect(tooltipTypeElem).toHaveTextContent(tooltipType);
  expect(tooltipElem).toContainElement(bodyElem);

  expect(cppreferenceElem).toBeNull();
});

it("Renders correctly with cppreference", () => {
  const { getByTestId } = render(
    <ThemeProvider theme={lightTheme}>
      <GlossaryTooltip {...props}>{body}</GlossaryTooltip>
    </ThemeProvider>
  );

  const tooltipElem = getByTestId("glossary-tooltip");
  const headingElem = getByTestId("glossary-tooltip-heading");
  const titleElem = getByTestId("glossary-tooltip-title");
  const tooltipTypeElem = getByTestId("glossary-tooltip-type");
  const bodyElem = getByTestId("glossary-tooltip-body");
  const cppreferenceElem = getByTestId("glossary-tooltip-cppreference");

  expect(tooltipElem).toContainElement(headingElem);
  expect(headingElem).toContainElement(titleElem);
  expect(titleElem).toHaveTextContent(title);
  expect(headingElem).toContainElement(tooltipTypeElem);
  expect(tooltipTypeElem).toHaveTextContent(tooltipType);
  expect(tooltipElem).toContainElement(bodyElem);

  expect(cppreferenceElem).toHaveTextContent("See cppreference for detailed documentation");
});

it("Passes snapshot test", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <GlossaryTooltip {...props}>{body}</GlossaryTooltip>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
