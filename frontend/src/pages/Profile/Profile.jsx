import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Button } from "../../styled-components/Button";
import { Videos } from "../../components/Videos/Videos";
import { Image } from "../../components/Image/Image";
import { connect } from "react-redux";
import { getUser, toggleSubscribe } from "../../store/actions/actionCreators";
import { Spinner } from "../../components/Spinner/Spinner";
import { useParams, useHistory } from "react-router-dom";

const Profile = ({
  showContentSpinner,
  getUser,
  user,
  currentUser,
  token,
  toggleSubscribe,
}) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getUser(id);
  }, [id]);

  useDocumentTitle(user?.user?.name || "Video Sharing App");

  const toggleSubscribeHandler = () => {
    if (!currentUser) return history.push("/login");
    toggleSubscribe(
      user.user._id,
      token,
      !user.user.subscribers.includes(currentUser._id)
    );
  };

  return (
    <>
      {showContentSpinner || !user ? (
        <Spinner />
      ) : (
        <section>
          <header className={classes.header}>
            <Image
              src={user.user.image}
              alt="Profile Image"
              width="10rem"
              height="10rem"
              border="5px solid white"
            />

            <div className={classes.info}>
              <h3>{user.user.name}</h3>
              <p>{user.user.subscribers.length} subscribers</p>
            </div>

            {user.user._id === currentUser?._id ? (
              <Button onClick={() => history.push("/edit-profile")}>
                Edit Profile
              </Button>
            ) : (
              <Button onClick={toggleSubscribeHandler}>
                {user.user.subscribers.includes(currentUser?._id)
                  ? "UNSUBSCRIBE"
                  : "SUBSCRIBE"}
              </Button>
            )}
          </header>

          <h2 className={classes.heading}>Videos</h2>

          <Videos videos={user.videos} />
        </section>
      )}
    </>
  );
};

const mapStateToprops = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    user: state.user,
    currentUser: state.currentUser,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (_id) => dispatch(getUser(_id)),
    toggleSubscribe: (userId, token, bool) =>
      dispatch(toggleSubscribe(userId, token, bool)),
  };
};

const ProfileComponent = connect(mapStateToprops, mapDispatchToProps)(Profile);

export { ProfileComponent as Profile };
