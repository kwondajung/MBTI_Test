import React, { createContext, useContext, useState } from 'react';

export const MbtiContext = createContext(null);

// 컴포넌트 밖에서 로컬스토리지에 접근 (getItem)
const token = localStorage.getItem('accessToken');

export const MbtiProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const [isLogin, setIsLogin] = useState(false);
  // console.log(setIsLogin);

  return (
    <MbtiContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </MbtiContext.Provider>
  );
};
