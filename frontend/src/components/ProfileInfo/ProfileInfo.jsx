import React from "react";
import classes from "./ProfileInfo.module.css";
import imgSrc from "../../assets/profile-img.jpg";
import { Button } from "../../styled-components/Button";
import { Image } from "../Image/Image";
import { useHistory } from "react-router-dom";

export const ProfileInfo = () => {
  const history = useHistory();

  return (
    <div className={classes.profileInfo}>
      <Image width="3.7rem" height="3.7rem" src={imgSrc} alt="Profile Image" />

      <div className={classes.info}>
        <h4 onClick={() => history.push("/user/123")}>Web Dev Simplified</h4>
        <p>150k subscribers</p>
      </div>

      <Button style={{ marginTop: "0.5rem" }}>SUBSCRIBE</Button>
    </div>
  );
};
