import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'boromir',
        email: 'boromir@yolo.com',
        phone: '123456789',
        type: 'personal'
      },
      {
        id: 2,
        name: 'frodo',
        email: 'frodo@yolo.com',
        phone: '123456789',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Gandalf',
        email: 'gandalf@yolo.com',
        phone: '123456789',
        type: 'personal'
      }
    ]
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  // Add contact

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact

  //Set current contact

  //clear current contact

  //Update contact

  //Filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
