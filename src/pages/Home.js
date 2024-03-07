import React from "react";
import Game from "../components/home/Game"

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Welcome to my website.</h1>
        <h1>Home Page</h1>
        <Game/>
      </div>
    );
  }
}

export default Home;
