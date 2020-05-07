import React from "react";
import classes from "./SideBar.module.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export const SideBar = (props) => {
  const { showSideBar } = props;

  const classNames = [classes.sidebar, showSideBar ? classes.show : null];

  const isAuth = true;

  return (
    <nav className={classNames.join(" ")}>
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

        {isAuth ? (
          <>
            <li>
              <NavLink
                to="/user/123"
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
            <li>
              <a className={classes.link}>
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/signup"
                activeClassName={classes.active}
                className={classes.link}
              >
                <i className="fas fa-user"></i> Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                activeClassName={classes.active}
                className={classes.link}
              >
                <i className="fas fa-user"></i> Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
