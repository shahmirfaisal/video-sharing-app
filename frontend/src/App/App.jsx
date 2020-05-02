import React from "react";
import { Main } from "../styled-components/Main";
import { NavBar } from "../components/NavBar/NavBar";
import { SideBar } from "../components/SideBar/SideBar";

const App = () => {
  return (
    <Main>
      <NavBar />

      <div className="sidebar">
        <SideBar />
      </div>

      <div className="content">Content</div>
    </Main>
  );
};

export default App;
