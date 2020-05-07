import React, { useEffect, useRef } from "react";
import { Video as StyledVideo } from "../../styled-components/Video";
import videoSrc from "../../assets/videoplayback (3).mp4";
import { useHistory } from "react-router-dom";

export const Video = () => {
  const history = useHistory();

  return (
    <StyledVideo>
      <div className="video">
        <video src={videoSrc}></video>
      </div>

      <div className="body">
        <h3 className="title" onClick={() => history.push("/video/123")}>
          MERN Stack tutorial
        </h3>

        <div className="icon" onClick={() => history.push("/video/123")}>
          <i className="fas fa-play"></i>
        </div>

        <p className="creator" onClick={() => history.push("/user/123")}>
          By Kyle
        </p>

        <p className="date">3 May, 2020</p>
      </div>
    </StyledVideo>
  );
};
