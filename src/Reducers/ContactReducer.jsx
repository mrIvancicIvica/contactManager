export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id !== action.id);
    case "FETCH_CONTACTS":
      return action.data;
    case "ADD_CONTACT":
      return { contacts: [...state.contacts, { name: action.name }] };
    default:
      return state;
  }
};
  