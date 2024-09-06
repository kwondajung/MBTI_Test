import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MbtiContext } from '../context/MbtiContext';

const Layout = ({ children }) => {
  const { user, setUser } = useContext(MbtiContext);

  // TODO: 로그인하지 않은 사용자 login 페이지로 이동
  useEffect(() => {}, []);
  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <>
                <button>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="contianer mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
