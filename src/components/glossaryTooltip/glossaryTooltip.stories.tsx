import React from "react";

import GlossaryTooltip from ".";

export default {
  title: "Glossary Tooltip",
  component: GlossaryTooltip,
};

const title = "std::puts";
const tooltipType = "C-style IO Library";
const body =
  'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "title": "Header <cstdio>",\n  "cppreference": "cpp/io/c/puts",\n  "type": "C-style I/O Library",\n  "token": "<cstdio>"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "provides C-style I/O operations.\\nIt is also part of the C standard library as ", mdx("inlineCode", {\n    parentName: "p"\n  }, "<stdio.h>"), "."), mdx("p", null, "Example usage:"), mdx("pre", null, mdx("code", _extends({\n    parentName: "pre"\n  }, {\n    "className": "language-cpp",\n    "metastring": "notip=true",\n    "notip": "true"\n  }), "#include <cstdio>\\n\\nauto main() -> int {\\n  std::puts(\\"Hello world!\\");\\n  std::printf(\\"Formated print %d!\\\\n\\", 42);\\n}\\n")));\n}\n;\nMDXContent.isMDXComponent = true;';
const cppreference = "cpp/io/c/puts";

const props = {
  title,
  type: tooltipType,
  cppreference,
};

export const Tooltip = () => <GlossaryTooltip {...props}>{body}</GlossaryTooltip>;

Tooltip.story = {
  name: "Glossary Tooltip for std::puts",
};
