import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

/**
 * In React, context is a feature that allows you to share data across components without having to pass props down manually at every level. It's useful for data that needs to be accessible by many components at different levels of the component tree, such as user authentication status, theme settings, or language preferences.
   Context provides a way to pass data through the component tree directly, bypassing the traditional prop drilling method, which can become cumbersome when dealing with deeply nested components. It consists of a Provider component, which holds the data and makes it available to all descendant components, and a Consumer component, which can access and use the data.
   In summary, context in React is a mechanism for managing global state and passing data to multiple components without explicit prop passing.
 */

// Context.Provider + value => Context.Consumer + useContext
