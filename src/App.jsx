import React from "react";
import { ContactProvider } from "./Contexts/ContactContext";
import Routes from "./Routes";

const App = () => {
  return (
    <ContactProvider>
      <Routes />
    </ContactProvider>
  );
};

export default App;
