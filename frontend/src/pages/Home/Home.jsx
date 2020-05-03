import React from "react";
import classes from "./Home.module.css";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Home = () => {
  useDocumentTitle("Video Sharing App");

  return (
    <section>
      <h2 className={classes.heading}>Explore</h2>

      <Videos />
    </section>
  );
};
