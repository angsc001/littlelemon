import { type } from "@testing-library/user-event/dist/type";
import {createContext, useContext, useState} from "react";
import { string } from "yup";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: type = 'error'? 'error' : 'success',
    // Message to be displayed, can be any string
    message: string,
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);