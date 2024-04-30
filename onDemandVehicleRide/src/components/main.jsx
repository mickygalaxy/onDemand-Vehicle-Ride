import React from "react";

import Header from "../navBarComponent";

const Main = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Main;