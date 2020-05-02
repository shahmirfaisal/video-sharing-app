import React from "react";
import classes from "./SideBar.module.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>

      <ul>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={classes.active}
            className={classes.link}
          >
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/user"
            activeClassName={classes.active}
            className={classes.link}
          >
            <i className="fas fa-user"></i> Profile
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/videos"
            activeClassName={classes.active}
            className={classes.link}
          >
            <i className="fas fa-photo-video"></i> My Videos
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favourites"
            activeClassName={classes.active}
            className={classes.link}
          >
            <i className="fas fa-heart"></i> Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
