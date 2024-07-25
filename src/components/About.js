import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/context/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Class component</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xs font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
// in the class based contect we cannot use hooks. so how we will use context
// When we create a context react gives us the power of consumer as well which can be used as a component not hook, so one way is hook and other is consumer in class based compoenets
/**
 * so inside the consumer we can use jsx, and inside that the callback function to use the context data.
 * {loggedInUser: 'Default User'}
 */
