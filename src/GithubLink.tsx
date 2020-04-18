import * as React from "react";
const githubIcon = require("./components/images/github.svg");

interface GithubLinkProp {
  link: string;
  text: string;
}

const GithubLink = ({ link, text }: GithubLinkProp) => {
  return (
    <a href={link} className="githubSection">
      <img className="githubIcon" src={githubIcon} alt="github" />
      {text}
    </a>
  );
};

export default GithubLink;
