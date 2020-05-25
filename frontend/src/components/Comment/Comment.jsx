import React from "react";
import classes from "./Comment.module.css";
import { Image } from "../Image/Image";
import { Description } from "../Description/Description";
import { useHistory } from "react-router-dom";

export const Comment = (props) => {
  const history = useHistory();

  return (
    <div className={classes.comment}>
      <header>
        <Image
          src={`http://localhost:5000/${props.user.image}`}
          width="3rem"
          height="3rem"
        />

        <h5 onClick={() => history.push(`/user/${props.user._id}`)}>
          {props.user.name}
        </h5>
      </header>

      <Description text={props.comment} />
    </div>
  );
};
