import React, { createContext, useState } from 'react';

export const MbtiContext = createContext();

export const MbtiProvider = ({ children }) => {
  const [user, setUser] = useState('user');
  return (
    <MbtiContext.Provider value={(user, setUser)}>
      {children}
    </MbtiContext.Provider>
  );
};
