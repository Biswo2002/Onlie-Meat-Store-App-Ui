import React, {createContext, ReactNode, useContext, useState} from 'react';

const AppContext = createContext({});

// type AppContextProviderProps = {
//   children?: ReactNode;
// };

export default ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = useState({});

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);