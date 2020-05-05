import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../styled-components/Button";

export const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <form className="form">
        <input type="text" placeholder="search..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>

      <Button>
        <i className="fas fa-upload"></i> Upload
      </Button>
    </nav>
  );
};
