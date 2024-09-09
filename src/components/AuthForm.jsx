import React, { useContext, useState } from 'react';
import { login, register } from '../api/auth';
import { MbtiContext } from '../context/MbtiContext';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ mode, onSubmit }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const { user, setUser, isLogin, setIsLogin } = useContext(MbtiContext);
  const navigate = useNavigate();

  // 회원가입
  const handleSignUp = (e) => {
    e.preventDefault();

    register({
      id,
      password,
      nickname,
    });
  };

  // 로그인
  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await login({
      id,
      password,
    });
    // console.log(user);
    // 토큰을 로컬스토리지에 저장
    localStorage.setItem('accessToken', user.accessToken);

    // 컨텍스트 중에 isLogin을 true
    setIsLogin(true);
    navigate('/');
  };

  return (
    <>
      <div>
        <form
          onSubmit={mode === 'login' ? handleLogin : handleSignUp}
          className="my-8 grid place-items-center"
        >
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              name="nickname"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              required
            />
          )}
          <button className="w-96" type="submit">
            {mode === 'login' ? '로그인' : '회원가입'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
