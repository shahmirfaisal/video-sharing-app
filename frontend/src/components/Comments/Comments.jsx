import React from "react";
import classes from "./Comments.module.css";
import { Comment } from "../Comment/Comment";

export const Comments = () => {
  return (
    <section className={classes.comments}>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
};
