import React from "react";
import classes from "./SideBar.module.css";
import Logo from "../../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/actionCreators";

const SideBar = (props) => {
  const { showSideBar, isAuth, logout, currentUser } = props;

  const history = useHistory();

  const classNames = [classes.sidebar, showSideBar ? classes.show : null];

  const logoutHandler = () => {
    logout(history);
  };

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
                to={`/user/${currentUser._id}`}
                activeClassName={classes.active}
                className={classes.link}
              >
                <i className="fas fa-user"></i> Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-videos"
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
            <li onClick={logoutHandler}>
              <a className={classes.link}>
                <i className="fas fa-sign-out-alt"></i> Logout
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => dispatch(logout(history)),
  };
};

const SideBarComponent = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export { SideBarComponent as SideBar };
