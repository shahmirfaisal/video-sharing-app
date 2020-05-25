import React from "react";
import classes from "./Spinner.module.css";
import Spinner from "react-spinkit";

const SpinnerComp = (props) => {
  return (
    <div
      style={{ position: props.fixed ? "fixed" : "absolute" }}
      className={classes.spinner}
    >
      <Spinner
        name="pacman"
        color={props.color || "rgb(55,78,215)"}
        fadeIn="none"
      />
    </div>
  );
};

export { SpinnerComp as Spinner };
