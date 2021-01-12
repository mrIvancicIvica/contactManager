import { createContext, useReducer } from "react";
import { ContactReducer } from "../Reducers/ContactReducer";

const ContactContext = createContext();

const initialState  = {
  contacts: [{id: 1,  name: "Ivica",  }],
};

const { contacts } = initialState ;

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContactReducer, contacts );

  return (
    <div>
      <ContactContext.Provider value={{ state, dispatch, }}>
        {children}
      </ContactContext.Provider>
    </div>
  );
};

export default ContactProvider;

export { ContactProvider, ContactContext };
  