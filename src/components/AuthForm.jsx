import React, { useState } from 'react';
import { login, register } from '../api/auth';

const AuthForm = ({ mode, onSubmit }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

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
  const handleLogin = (e) => {
    e.preventDefault();

    login({
      id,
      password,
    });
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
