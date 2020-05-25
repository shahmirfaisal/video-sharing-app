import React, { useEffect } from "react";
import classes from "./UploadVideos.module.css";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Heading } from "../../styled-components/Heading";
import { Button } from "../../styled-components/Button";
import { Player } from "video-react";
import { connect } from "react-redux";
import { postVideo } from "../../store/actions/actionCreators";
import { useInput } from "../../hooks/useInput";
import { useHistory } from "react-router-dom";
import { Error } from "../../styled-components/Error";
import { useFileUpload } from "../../hooks/useFileUpload";
import * as actions from "../../store/actions/actions";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const UploadVideo = ({ error, postVideo, token, removeErrors }) => {
  useEffect(() => {
    if (!token) history.replace("/");
    return () => removeErrors();
  }, []);
  useDocumentTitle("Upload Video");

  const [uploadVideo, videoSrc, videoFile] = useFileUpload("");
  const [uploadImg, imgSrc, imgFile] = useFileUpload("");
  const [title, changeTitle] = useInput("");
  const [description, changeDescription] = useInput("");

  const history = useHistory();

  const postVideoHandler = (e) => {
    e.preventDefault();
    postVideo(title, description, videoFile, imgFile, token, history);
  };

  return (
    <section>
      <Heading>Upload Video</Heading>

      <Error> {error} </Error>

      <Form onSubmit={postVideoHandler}>
        <Input
          type="text"
          placeholder="Title..."
          label="Title"
          id="title"
          value={title}
          onChange={changeTitle}
        />

        <Input
          type="textarea"
          placeholder="Description..."
          label="Description"
          id="description"
          value={description}
          onChange={changeDescription}
        />

        <input type="file" id="video" hidden onChange={uploadVideo} />

        <Button style={{ margin: "1.2rem 0" }} as="label" htmlFor="video">
          Upload video
        </Button>

        <Player src={videoSrc} />

        <input type="file" id="img" hidden onChange={uploadImg} />

        <Button style={{ margin: "1.2rem 0" }} as="label" htmlFor="img">
          Add Thumbnail
        </Button>
        <div className={classes.thumbnail}>
          <img src={imgSrc} />
        </div>
        <Button block>Post Video</Button>
      </Form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.authError,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postVideo: (title, description, video, img, token, history) =>
      dispatch(postVideo(title, description, video, img, token, history)),
    removeErrors: () => dispatch({ type: actions.REMOVE_AUTH_ERROR }),
  };
};

const UploadVideoComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadVideo);

export { UploadVideoComponent as UploadVideo };
