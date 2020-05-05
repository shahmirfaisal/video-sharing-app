import React from "react";
import classes from "./FullVideo.module.css";
import videoSrc from "../../assets/videoplayback (3).mp4";
import { Player } from "video-react";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { Description } from "../../components/Description/Description";
import { Comments } from "../../components/Comments/Comments";

export const FullVideo = () => {
  return (
    <section className={classes.fullVideo}>
      <div className={classes.video}>
        <Player src={videoSrc} />
      </div>

      <h3 className={classes.title}>MERN Stack Tutorial</h3>

      <div className={classes.info}>
        <p>5 May, 2020</p>
        <div>
          <i className="fas fa-thumbs-up"></i>
          123
        </div>
        <div>
          <i className="fas fa-thumbs-down"></i>
          123
        </div>
        <div>
          <i className="fas fa-heart"></i>
          45
        </div>
      </div>

      <ProfileInfo />
      <Description />

      <hr />

      <h3 className={classes.commentsTitle}>Comments</h3>

      <Comments />
    </section>
  );
};
