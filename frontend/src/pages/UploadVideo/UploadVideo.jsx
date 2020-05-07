import React, { useState } from "react";
import classes from "./UploadVideos.module.css";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { Heading } from "../../styled-components/Heading";
import { Button } from "../../styled-components/Button";
import { Player } from "video-react";
import videoSrc from "../../assets/videoplayback (3).mp4";

export const UploadVideo = () => {
  const [videoSrc, setVideoSrc] = useState();
  const [imgSrc, setImgSrc] = useState();

  const uploadHandler = ({ target: { files } }, set) => {
    if (files && files[0]) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        set(fileReader.result);
      };

      fileReader.readAsDataURL(files[0]);
    }
  };

  return (
    <section>
      <Heading>Upload Video</Heading>
      <Form>
        <Input type="text" placeholder="Title..." label="Title" id="title" />
        <Input
          type="textarea"
          placeholder="Description..."
          label="Description"
          id="description"
        />

        <input
          type="file"
          id="video"
          hidden
          onChange={(e) => uploadHandler(e, setVideoSrc)}
        />
        <Button style={{ margin: "1.2rem 0" }} as="label" htmlFor="video">
          Upload video
        </Button>
        <Player src={videoSrc} />

        <input
          type="file"
          id="img"
          hidden
          onChange={(e) => uploadHandler(e, setImgSrc)}
        />
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
