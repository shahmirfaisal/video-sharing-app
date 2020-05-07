import React from "react";
import { Videos } from "../../components/Videos/Videos";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Heading } from "../../styled-components/Heading";

export const Favourites = () => {
  useDocumentTitle("Favourite Videos");

  return (
    <section>
      <Heading>Favourites</Heading>
      <Videos />
    </section>
  );
};
