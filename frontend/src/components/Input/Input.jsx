import React from "react";
import { FormControl } from "../../styled-components/FormControl";
import PropTypes from "prop-types";

export const Input = (props) => {
  const { type, label, id, onChange, value, placeholder } = props;

  return (
    <FormControl>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
      )}
      <label htmlFor={id}>{label}</label>
    </FormControl>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
