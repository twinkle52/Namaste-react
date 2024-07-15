import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state here is the big object which stores all the state variables.
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props; // destructure the props inside the render method same as done in function component.
    // we destructure in function component inside function only

    const { count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 * 2,
            });
          }}
        >
          button
        </button>

        <h1>Count2: {count2}</h1>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Contact: @twinkle123</h3>
      </div>
    );
  }
}

export default UserClass;
