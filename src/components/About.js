import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    // super(props) is used to call the parent class constructor and to ensure that the subclass is properly initialized
    // with the parent's properties, allowing you to safely use this within your component's constructor.
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent coponentDidMount called");
  }
  render() {
    console.log("parent render called");

    return (
      <div>
        <h1>About Class component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/**first the about parent component will be rendered then it sees that we have USerClass so the instance of the USerClass will get created
         * then the contructor inside the userclass will be called and then the render() method will be called
         * mounting the componet in the UI means creating a instance. Here we want that after h2 tag there will be be USerClass mounted or loaded
         * so we are creting the instance of USerclass by calling it. This the basic for both function and
         */}
        <UserClass
          name={"Twinkle Jaiswal(Class)"}
          location={"Bangalore class"}
        />
      </div>
    );
  }
}

export default About;

// This is the life cucle of class component.
// parent constructor called
// parent render called
// child constructor called of UserClass
// child render called of UserClass
// child componentDidMount called of UserClass, after whole child will get render then parent component did mount will be called
// parent coponentDidMount called
