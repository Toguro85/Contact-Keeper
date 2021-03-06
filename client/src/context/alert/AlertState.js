import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = [];

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set Alert
  const setAlert = (msg, type) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, id, type }
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id
        }),
      4000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
