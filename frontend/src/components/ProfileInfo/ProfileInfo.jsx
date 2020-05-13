import React from "react";
import classes from "./ProfileInfo.module.css";
import imgSrc from "../../assets/profile-img.jpg";
import { Button } from "../../styled-components/Button";
import { Image } from "../Image/Image";
import { useHistory } from "react-router-dom";

export const ProfileInfo = ({ user }) => {
  const history = useHistory();

  return (
    <div className={classes.profileInfo}>
      <Image
        width="3.7rem"
        height="3.7rem"
        src={`http://localhost:5000/${user.image}`}
        alt="Profile Image"
      />

      <div className={classes.info}>
        <h4 onClick={() => history.push(`/user/${user._id}`)}>{user.name}</h4>
        <p>{user.subscribers} subscribers</p>
      </div>

      <Button style={{ marginTop: "0.5rem" }}>SUBSCRIBE</Button>
    </div>
  );
};
