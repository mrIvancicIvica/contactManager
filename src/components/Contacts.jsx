import React from 'react'
import Axios from "axios";
import { useContext, useEffect } from "react";
import { ContactContext } from "../Contexts/ContactContext";
import Contact from "./Contact";

const Contacts = () => {
  const { state, dispatch } = useContext(ContactContext);

  useEffect(() => {
    const contacts = async () => {
      const contasData = await Axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "FETCH_CONTACTS", data: contasData.data });
    };
    contacts();
  }, []);

  return (
    <div>
      {state.map((contact) => (
        <div key={contact.id}>
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            id={contact.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Contacts;
