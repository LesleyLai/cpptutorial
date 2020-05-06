import * as React from "react";

const AnchorTag = ({ children: link, href }: { children: React.ReactNode; href?: string }) =>
  link && (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {link}
    </a>
  );

export default AnchorTag;
