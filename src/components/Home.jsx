import React from "react";
import Contacts from "./Contacts";
import NewContactForm from "./NewContactForm";

const Home = () => {
  return (
    <div>
      <div className={"app"}>
        <div className={"container"}>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
