import React from "react";
import { Videos } from "../../components/Videos/Videos";
import classes from "./Favourites.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Favourites = () => {
  useDocumentTitle("Favourite Videos");

  return (
    <section>
      <h2 className={classes.heading}>Favourites</h2>
      <Videos />
    </section>
  );
};
