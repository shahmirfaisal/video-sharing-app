import React, { useEffect, useRef } from "react";
import { Video as StyledVideo } from "../../styled-components/Video";
import videoSrc from "../../assets/videoplayback (3).mp4";

export const Video = () => {
  return (
    <StyledVideo>
      <div className="video">
        <video src={videoSrc}></video>
      </div>

      <div className="body">
        <h3 className="title">MERN Stack tutorial</h3>
        <div className="icon">
          <i className="fas fa-play"></i>
        </div>

        <p className="creator">By Kyle</p>

        <p className="date">3 May, 2020</p>
      </div>
    </StyledVideo>
  );
};
