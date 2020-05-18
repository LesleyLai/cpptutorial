import React from "react";
import styled from "@emotion/styled";
import { StoryFn } from "@storybook/addons";

import { Info, Warning } from ".";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula, nisl ac feugiat porttitor, felis justo ullamcorper tellus, ut cursus urna dolor non massa. Maecenas sit amet nulla congue, ultrices mi at, placerat diam. Pellentesque nec efficitur ex. Ut eget sem nec felis facilisis semper sit amet nec tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sit amet arcu ac sem volutpat egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec urna nisl, faucibus quis nibh dictum, varius viverra felis. Vestibulum pellentesque nulla eget diam viverra commodo. Aenean vel pellentesque quam.";

const Wrapper = styled.div`
  max-width: 750px;
  margin: 20px 40px;
`;

export default {
  title: "Notes",
  decorators: [(storyFn: StoryFn<React.ReactNode>) => <Wrapper>{storyFn()}</Wrapper>],
};

export const InfoStory = () => (
  <Info>
    <p>
      <strong>Info: </strong>
      {loremIpsum}
    </p>
  </Info>
);

InfoStory.story = {
  name: "Info",
};

export const WarningStory = () => (
  <Warning>
    <p>
      <strong>Warning: </strong>
      {loremIpsum}
    </p>
  </Warning>
);

WarningStory.story = {
  name: "Warning",
};
