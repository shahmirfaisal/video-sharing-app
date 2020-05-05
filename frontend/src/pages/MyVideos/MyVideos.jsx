import React from "react";
import { Videos } from "../../components/Videos/Videos";
import classes from "./MyVideos.module.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";

export const MyVideos = () => {
  useDocumentTitle("My Videos");

  return (
    <section>
      <Heading>Your Videos</Heading>
      <Videos />
    </section>
  );
};
