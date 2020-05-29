import React, { useEffect } from "react";
import { Video as StyledVideo } from "../../styled-components/Video";
import { useHistory } from "react-router-dom";

export const Video = (props) => {
  const {
    _id,
    video,
    thumbnail,
    user,
    comments,
    title,
    description,
    createdAt,
    favourites,
  } = props;

  const history = useHistory();

  return (
    <StyledVideo>
      <div className="video">
        <video
          poster={thumbnail}
          src={video}
        ></video>
      </div>

      <div className="body">
        <h3 className="title" onClick={() => history.push(`/video/${_id}`)}>
          {title}
        </h3>

        <div className="icon" onClick={() => history.push(`/video/${_id}`)}>
          <i className="fas fa-play"></i>
        </div>

        <p
          className="creator"
          onClick={() => history.push(`/user/${user._id}`)}
        >
          By {user.name}
        </p>

        <p className="date">{createdAt}</p>
      </div>
    </StyledVideo>
  );
};
