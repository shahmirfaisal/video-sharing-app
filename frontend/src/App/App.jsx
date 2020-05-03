import React from "react";
import { Main } from "../styled-components/Main";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { MyVideos } from "../pages/MyVideos/MyVideos";
import { Favourites } from "../pages/Favourites/Favourites";
import { Profile } from "../pages/Profile/Profile";

const App = () => {
  return (
    <Main>
      <NavBar />

      <div className="sidebar">
        <SideBar />
      </div>

      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/videos" exact component={MyVideos} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/user/:id" component={Profile} />
      </div>
    </Main>
  );
};

export default App;
