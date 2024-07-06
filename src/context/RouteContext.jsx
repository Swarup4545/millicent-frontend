import React, { createContext, useContext, useState } from 'react';
//createContext: A function from React to create a new context.
//useContext: A hook to access the value of a context

const RouteContext = createContext(); //here we use createcontext for create new context.

export const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('/'); //This creates a new context named RouteContext.
  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

// RouteContext: A context object created to manage route state.
// RouteProvider: A provider component that uses RouteContext.Provider to supply the currentRoute state and setCurrentRoute function to its children.

export const useRoute = () => useContext(RouteContext);

// useContext: A hook to access the value of a context.
