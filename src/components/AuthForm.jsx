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

    // 요청
    register({
      id,
      password,
      nickname,
    });
  };

  // 로그인
  const handleLogin = async (e) => {
    e.preventDefault();

    // login에는 auth에서 설계한 로그인 로직의 response.data가 담겨있음
    const userInfo = await login({
      id,
      password,
    });
    // 토큰을 로컬스토리지에 저장
    // localStorage.setItem('accessToken', userInfo.accessToken);

    // console.log('유저 토큰 => ', userInfo.accessToken);
    // console.log('닉넴 => ', userInfo.nickname);

    setUser(userInfo);
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
