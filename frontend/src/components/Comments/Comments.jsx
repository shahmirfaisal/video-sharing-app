import React from "react";
import classes from "./Comments.module.css";
import { Comment } from "../Comment/Comment";

export const Comments = ({ comments }) => {
  return (
    <section className={classes.comments}>
      {comments.map((comment, i) => (
        <Comment {...comment} key={i} />
      ))}
    </section>
  );
};
