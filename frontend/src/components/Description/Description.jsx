import React, { useState } from "react";
import classes from "./Description.module.css";

export const Description = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(readMore ? false : true);
  };

  const classNames = [
    classes.description,
    readMore ? classes.descriptionReadMore : null,
  ];

  return (
    <div>
      <p className={classNames.join(" ")}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quaerat
        error sapiente facilis quas nihil dolorem, culpa fuga consequatur. Fuga!
      </p>

      <p onClick={toggleReadMore} className={classes.readMore}>
        {readMore ? "Read Less" : "Read More"}
      </p>
    </div>
  );
};
