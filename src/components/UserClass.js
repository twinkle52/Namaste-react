import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor called");
  }

  componentDidMount() {
    // is like useEffect, load the componet -> render it -> make api call -> rerender
    console.log("child componentDidMount called");
  }
  render() {
    const { name, location } = this.props;

    console.log("child render called");

    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          button
        </button>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Contact: @twinkle123</h3>
      </div>
    );
  }
}

export default UserClass;
