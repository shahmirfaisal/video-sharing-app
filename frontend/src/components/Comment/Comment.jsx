import React from "react";
import classes from "./Comment.module.css";
import imgSrc from "../../assets/profile-img.jpg";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";

export const Comment = () => {
  return (
    <div className={classes.comment}>
      <header>
        <Image src={imgSrc} width="3rem" height="3rem" />
        <h5>Shahmir Faisal</h5>
      </header>

      <Description />
    </div>
  );
};
