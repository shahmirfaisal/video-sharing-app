import React, { useEffect } from "react";
import classes from "./EditProfile.module.css";
import { Heading } from "../../styled-components/Heading";
import { Form } from "../../styled-components/Form";
import { connect } from "react-redux";
import { Input } from "../../components/Input/Input";
import { useInput } from "../../hooks/useInput";
import { Button } from "../../styled-components/Button";
import { useFileUpload } from "../../hooks/useFileUpload";
import { editProfile } from "../../store/actions/actionCreators";
import { useHistory } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const EditProfile = ({ editProfile, token, user }) => {
  useDocumentTitle("Edit Profile");

  useEffect(() => {
    if (!user) history.replace("/");
  }, []);

  const [name, changeName] = useInput(user?.name);
  const [uploadImg, imgSrc, imgFile] = useFileUpload(
    `http://localhost:5000/${user?.image}`
  );
  const history = useHistory();

  const editProfileHandler = (e) => {
    e.preventDefault();
    editProfile(name, imgFile, token, history);
  };

  return (
    <section>
      <Heading>Edit Profile</Heading>

      <Form onSubmit={editProfileHandler}>
        <Input
          type="text"
          placeholder="Name..."
          id="name"
          label="Name"
          value={name}
          onChange={changeName}
        />

        <input hidden type="file" id="img" onChange={uploadImg} />

        <Button style={{ margin: "1.2rem 0" }} as="label" htmlFor="img">
          Upload Image
        </Button>

        <div className={classes.img}>
          <img src={imgSrc} alt="" />
        </div>

        <Button>Edit</Button>
      </Form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (name, img, token, history) =>
      dispatch(editProfile(name, img, token, history)),
  };
};

const EditProfileComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

export { EditProfileComponent as EditProfile };
