import React, { createContext, useContext, useState } from 'react';

export const MbtiContext = createContext(null);

// 컴포넌트 밖에서 로컬스토리지에 접근
// accessToken이 존재하는지 token에 담고 있음
// const token = localStorage.getItem('accessToken');

export const MbtiProvider = ({ children }) => {
  const [user, setUser] = useState({
    accessToken: '',
    avatar: null,
    nickname: '',
    success: false,
    userId: '',
  });

  return (
    <MbtiContext.Provider value={{ user, setUser }}>
      {children}
    </MbtiContext.Provider>
  );
};
