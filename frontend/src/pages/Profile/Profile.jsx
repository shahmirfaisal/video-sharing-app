import React, { useEffect } from "react";
import classes from "./Profile.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import imgSrc from "../../assets/profile-img.jpg";
import { Button } from "../../styled-components/Button";
import { Videos } from "../../components/Videos/Videos";
import { Image } from "../../components/Image/Image";
import { connect } from "react-redux";
import { getUser } from "../../store/actions/actionCreators";
import { Spinner } from "../../components/Spinner/Spinner";
import { useParams } from "react-router-dom";

const Profile = ({ showContentSpinner, getUser, user }) => {
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useDocumentTitle("Web Dev Simplified");

  return (
    <>
      {showContentSpinner || !user ? (
        <Spinner />
      ) : (
        <section>
          <header className={classes.header}>
            <Image
              src={`http://localhost:5000/${user.user.image}`}
              alt="Profile Image"
              width="10rem"
              height="10rem"
              border="5px solid white"
            />

            <div className={classes.info}>
              <h3>{user.user.name}</h3>
              <p>{user.user.subscribers} subscribers</p>
            </div>

            <Button>SUBSCRIBE</Button>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (_id) => dispatch(getUser(_id)),
  };
};

const ProfileComponent = connect(mapStateToprops, mapDispatchToProps)(Profile);

export { ProfileComponent as Profile };
