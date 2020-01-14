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
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  // Add contact

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set current contact

  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //clear current contact

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update contact

  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter contact
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
