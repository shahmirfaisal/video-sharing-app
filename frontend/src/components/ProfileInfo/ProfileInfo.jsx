import React from "react";
import classes from "./ProfileInfo.module.css";
import { Button } from "../../styled-components/Button";
import { Image } from "../Image/Image";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSubscribe } from "../../store/actions/actionCreators";

const ProfileInfo = ({ user, currentUser, token, toggleSubscribe }) => {
  const history = useHistory();

  const toggleSubscribeHandler = () => {
    if (!currentUser) return history.push("/login");
    toggleSubscribe(
      user._id,
      token,
      !user.subscribers.includes(currentUser._id)
    );
  };

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
        <p>{user.subscribers.length} subscribers</p>
      </div>

      <Button onClick={toggleSubscribeHandler} style={{ marginTop: "0.5rem" }}>
        {user.subscribers.includes(currentUser?._id)
          ? "UNSUBSCRIBE"
          : "SUBSCRIBE"}
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSubscribe: (userId, token, bool) =>
      dispatch(toggleSubscribe(userId, token, bool)),
  };
};

const ProfileInfoComponent = connect(null, mapDispatchToProps)(ProfileInfo);

export { ProfileInfoComponent as ProfileInfo };
