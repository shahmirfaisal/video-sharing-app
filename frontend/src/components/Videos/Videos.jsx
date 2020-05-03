import React from "react";
import { Video } from "../Video/Video";
import { Videos as StyledVideos } from "../../styled-components/Videos";

export const Videos = () => {
  return (
    <StyledVideos>
      <Video />
      <Video />
      <Video />
      <Video />
    </StyledVideos>
  );
};
