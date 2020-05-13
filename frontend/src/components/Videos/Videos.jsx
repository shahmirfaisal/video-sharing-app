import React from "react";
import { Video } from "../Video/Video";
import { Videos as StyledVideos } from "../../styled-components/Videos";

export const Videos = ({ videos }) => {
  return (
    <StyledVideos>
      {videos.map((video, i) => (
        <Video key={video._id} {...video} />
      ))}
    </StyledVideos>
  );
};
