import React, { Component } from "react";
import "./App.scss";
import { token } from "./spotify";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Artist from "./components/Artist";
import { ReactComponent as Previous } from "./svgs/previous.svg";
import { ReactComponent as Back } from "./svgs/back.svg";
import { ReactComponent as PlayIcon } from "./svgs/play.svg";

class App extends Component {
  state = {
    token: "",
  };
  componentDidMount() {
    this.setState({ token });
  }
  render() {
    const { token } = this.state;
    console.log(token);
    return (
      <div className="outerWrap">
        <div className="App">
          <Nav />
          {token ? <Main /> : ""}
        </div>
        <div className="musicControls">
          <Back />
          <PlayIcon className="play" />
          <Previous />
        </div>
      </div>
    );
  }
}

export default App;
