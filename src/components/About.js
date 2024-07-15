import { Component, useEffect } from "react";
import UserClass from "./UserClass";
import User from "./User";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent constructor called");
//   }
//   componentDidMount() {
//     console.log("parent useEffect");
//   }
//   render() {
//     console.log("parent render called");

//     return (
//       <div>
//         <h1>About Class component</h1>
//         <h2>This is Namaste React Web Series</h2>
//         <UserClass
//           name={"Twinkle Jaiswal(Class)"}
//           location={"Bangalore class"}
//         />
//       </div>
//     );
//   }
// }

const About = () => {
  console.log("parent componet");

  useEffect(() => {
    console.log("parent useEffect");
  });
  return (
    <div>
      <h1>About Class component</h1>
      <h2>This is Namaste React Web Series {console.log("parent return")}</h2>
      <User name={"first(Class)"} location={"Bangalore class"} />
      <User name={"second(Class)"} location={"Pune class"} />
    </div>
  );
};

export default About;

// same is the life cycle for useeffect as well.
// parent componet
// parent return
// child component
// child return
// User // child useEffect
// About parent useEffect
