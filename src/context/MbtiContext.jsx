import React, { createContext, useState } from 'react';

export const MbtiContext = createContext();

// 컴포넌트 밖에서 로컬스토리지에 접근 (getItem)
const token = localStorage.getItem('accessToken');

export const MbtiProvider = ({ children }) => {
  const [user, setUser] = useState(!!token);
  return (
    <MbtiContext.Provider value={(user, setUser)}>
      {children}
    </MbtiContext.Provider>
  );
};
