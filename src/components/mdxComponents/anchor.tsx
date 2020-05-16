import * as React from "react";

const AnchorTag = ({ children: link, href }: { children: React.ReactNode; href?: string }) =>
  link && <a href={href}>{link}</a>;

export default AnchorTag;
