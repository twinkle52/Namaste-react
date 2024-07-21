import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/twinkle52");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(
      "components gets updated after the api is fetched and DOM manipulation is done with new data"
    );
  }

  componentWillUnmount() {
    console.log(
      "This will be called when the page gets changes say from about to contactus"
    );
  }
  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    console.log("rendered");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Company: {company}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 * Life Cycle of the React
 *
 * --Mounting----
 *
 * Constructor(Dummy)
 * Render(Dummy)
 *
 *     <HTML With Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this,.setState> -> state variable is updated
 *
 * ---- Update ---
 *
 *    Render(API new data, no constructor now)
 *    <HTML new API data>
 *     component Did update
 *
 */
