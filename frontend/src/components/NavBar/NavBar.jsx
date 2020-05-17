import React from "react";
import classes from "./NavBar.module.css";
import { Button } from "../../styled-components/Button";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { connect } from "react-redux";

const NavBar = ({ openSideBar, isAuth }) => {
  const history = useHistory();
  const [value, changeValue, reset] = useInput("");

  const searchVideos = (e) => {
    e.preventDefault();
    history.push(`/search?search=${value}`);
    reset();
  };

  return (
    <nav className={classes.nav}>
      <i
        className={`${classes.hamburgerIcon} fas fa-bars`}
        onClick={openSideBar}
      ></i>

      <form className="form" onSubmit={searchVideos}>
        <input
          type="text"
          placeholder="search..."
          value={value}
          onChange={changeValue}
        />
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

const NavBarComponent = connect(mapStateToProps)(NavBar);

export { NavBarComponent as NavBar };
