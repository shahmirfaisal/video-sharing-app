import React from "react";
import { Video } from "../Video/Video";
import { Videos as StyledVideos } from "../../styled-components/Videos";
import LazyLoad from "react-lazyload";

export const Videos = ({ videos }) => {
  return (
    <StyledVideos>
      {videos.length === 0 ? (
        <p>No videos found</p>
      ) : (
        videos.map((video, i) => (
          <LazyLoad key={video._id}>
            <Video {...video} />
          </LazyLoad>
        ))
      )}
    </StyledVideos>
  );
};
