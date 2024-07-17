import { Component, useEffect } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Class component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
