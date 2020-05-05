import React from "react";
import classes from "./Profile.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import imgSrc from "../../assets/profile-img.jpg";
import { Button } from "../../styled-components/Button";
import { Videos } from "../../components/Videos/Videos";
import { Image } from "../../components/Image/Image";

export const Profile = () => {
  useDocumentTitle("Web Dev Simplified");

  return (
    <section>
      <header className={classes.header}>
        <Image
          src={imgSrc}
          alt="Profile Image"
          width="10rem"
          height="10rem"
          border="5px solid white"
        />

        <div className={classes.info}>
          <h3>Web Dev Simplified</h3>
          <p>145k subscribers</p>
        </div>

        <Button>SUBSCRIBE</Button>
      </header>

      <h2 className={classes.heading}>Videos</h2>

      <Videos />
    </section>
  );
};
