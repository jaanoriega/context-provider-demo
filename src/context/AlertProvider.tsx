// External dependencies
import React, { useCallback } from 'react';

// Types & Interfaces
type AlertFn = () => void;

// Constants
const Context = React.createContext<AlertFn>(() => {});

function AlertProvider({children}: React.PropsWithChildren<unknown>) {
  const showAlert = useCallback(() => {
    alert('hello world');
  }, []);

  return (
    <Context.Provider value={showAlert}>
      { children }
    </Context.Provider>
  );
}

const useAlert = () => {
  return React.useContext(Context);
};

export {
  useAlert,
}

export default AlertProvider;
