import React from "react";
import Categories from "./Categories";
import { Switch, Route } from "react-router-dom";
import Playlist from "./pages/Playlist";

const Main = () => {
  return (
    <div className="main">
      <div className="upperNav"></div>
      <div className="mainContent">
        <Switch>
          <Route path="/" exact component={Categories}>
            <Categories />
          </Route>
          <Route path="/search">Search</Route>
          <Route path="/library">Your library</Route>
          <Route path="/playlist/:id" component={Playlist}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
