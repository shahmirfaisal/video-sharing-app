import React from "react";

export const Page404 = () => {
  const style = {
    div: {
      textAlign: "center",
    },
    heading: {
      fontSize: "4rem",
    },
  };
  return (
    <div style={style.div}>
      <h1 style={style.heading}>404</h1>
      <h2>Page not found!</h2>
    </div>
  );
};
