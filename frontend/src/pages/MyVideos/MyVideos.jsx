import React from "react";
import { Videos } from "../../components/Videos/Videos";
import classes from "./MyVideos.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const MyVideos = () => {
  useDocumentTitle("My Videos");

  return (
    <section>
      <h2 className={classes.heading}>Your Videos</h2>
      <Videos />
    </section>
  );
};
