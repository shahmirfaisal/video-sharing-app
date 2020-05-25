import React, { useEffect } from "react";
import classes from "./Alert.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

const Alert = ({ message, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: actions.REMOVE_ALERT });
    }, 2000);
  }, []);

  return <div className={classes.alert}>{message}</div>;
};

const mapStateToProps = (state) => {
  return {
    message: state.alertMessage,
  };
};

const AlertComponent = connect(mapStateToProps)(Alert);

export { AlertComponent as Alert };
