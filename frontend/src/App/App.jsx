import React, { useState, useEffect } from "react";
import { Main } from "../styled-components/Main";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { MyVideos } from "../pages/MyVideos/MyVideos";
import { Favourites } from "../pages/Favourites/Favourites";
import { Profile } from "../pages/Profile/Profile";
import { Search } from "../pages/Search/Search";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/Login/Login";
import { FullVideo } from "../pages/FullVideo/FullVideo";
import { UploadVideo } from "../pages/UploadVideo/UploadVideo";
import { Backdrop } from "../styled-components/Backdrop";
import { Spinner } from "../components/Spinner/Spinner";
import { connect } from "react-redux";
import { isLogin } from "../store/actions/actionCreators";

const App = ({ showBackdropSpinner, showFullScreenSpinner, isLogin }) => {
  useEffect(() => {
    isLogin();
  }, []);

  const [showSideBar, setShowSideBar] = useState(false);

  const openSideBar = () => setShowSideBar(true);
  const closeSideBar = () => setShowSideBar(false);

  return (
    <>
      {showFullScreenSpinner ? (
        <Spinner />
      ) : (
        <Main>
          <NavBar openSideBar={openSideBar} />

          <div className="sidebar">
            <SideBar showSideBar={showSideBar} />
          </div>

          {showSideBar ? <Backdrop onClick={closeSideBar} /> : null}

          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/my-videos" exact component={MyVideos} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/user/:id" component={Profile} />
            <Route path="/search" component={Search} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/video/:id" component={FullVideo} />
            <Route path="/upload-video" component={UploadVideo} />
          </div>

          {showBackdropSpinner ? (
            <>
              <Backdrop />
              <Spinner />
            </>
          ) : null}
        </Main>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
    showBackdropSpinner: state.showBackdropSpinner,
    showFullScreenSpinner: state.showFullScreenSpinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: () => dispatch(isLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
