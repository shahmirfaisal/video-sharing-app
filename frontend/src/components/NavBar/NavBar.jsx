import React from "react";
import classes from "./NavBar.module.css";
import { Button } from "../../styled-components/Button";
import { useHistory } from "react-router-dom";

export const NavBar = ({ openSideBar }) => {
  const history = useHistory();

  const isAuth = true;

  return (
    <nav className={classes.nav}>
      <i
        className={`${classes.hamburgerIcon} fas fa-bars`}
        onClick={openSideBar}
      ></i>

      <form className="form">
        <input type="text" placeholder="search..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>

      {isAuth ? (
        <Button
          onClick={() => history.push("/upload-video")}
          className={classes.upload}
        >
          <i className="fas fa-upload"></i> <span>Upload</span>
        </Button>
      ) : (
        <Button onClick={() => history.push("/signup")}>Signup</Button>
      )}
    </nav>
  );
};
