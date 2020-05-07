import React from "react";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";

export const Home = () => {
  useDocumentTitle("Video Sharing App");

  return (
    <section>
      <Heading>Explore</Heading>

      <Videos />
    </section>
  );
};
