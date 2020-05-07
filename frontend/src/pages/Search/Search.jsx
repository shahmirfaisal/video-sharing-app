import React from "react";
import { Videos } from "../../components/Videos/Videos";
import { Heading } from "../../styled-components/Heading";

export const Search = () => {
  return (
    <section>
      <Heading>Search Result:</Heading>
      <Videos />
    </section>
  );
};
