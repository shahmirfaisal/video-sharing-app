import React from "react";
import PropTypes from "prop-types";

export const Image = (props) => {
  const { src, alt, width, height, border } = props;

  const style = {
    div: {
      width: width,
      height: height,
      borderRadius: "50%",
      border: border,
      boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1)",
    },

    img: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "top",
    },
  };

  return (
    <div style={style.div}>
      <img style={style.img} src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  border: PropTypes.string,
};
