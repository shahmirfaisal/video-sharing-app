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

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const openSideBar = () => setShowSideBar(true);
  const closeSideBar = () => setShowSideBar(false);

  return (
    <Main>
      <NavBar openSideBar={openSideBar} />

      <div className="sidebar">
        <SideBar showSideBar={showSideBar} />
      </div>

      <Backdrop open={showSideBar} onClick={closeSideBar} />

      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/videos" exact component={MyVideos} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/user/:id" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/video/:id" component={FullVideo} />
        <Route path="/upload-video" component={UploadVideo} />
      </div>
    </Main>
  );
};

const mapStateToProps = (state) => {
  return {
    showContentSpinner: state.showContentSpinner,
  };
};

export default connect(mapStateToProps)(App);
