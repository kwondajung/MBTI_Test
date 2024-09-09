import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MbtiContext } from '../context/MbtiContext';

const Layout = ({ children }) => {
  const { user, setUser, isLogin, setIsLogin } = useContext(MbtiContext);

  console.log('user 확인 => ', user); // undefined 뜸

  // TODO: 로그인하지 않은 사용자 login 페이지로 이동
  useEffect(() => {}, []);
  return (
    <div>
      <header>
        <nav className="flex justify-between items-center px-5 py-7 bg-gray-200">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {isLogin ? (
              <>
                <Link to="/profile">마이페이지</Link>
                <button
                  onClick={() => {
                    setIsLogin(false);
                  }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="contianer mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
