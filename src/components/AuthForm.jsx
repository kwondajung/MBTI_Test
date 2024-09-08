import React, { useState } from 'react';
import { register } from '../api/auth';

const AuthForm = ({ mode, onSubmit }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  // const [formData, setFormData] = useState({
  //   id: '',
  //   password: '',
  //   nickname: '',
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    register({
      id,
      password,
      nickname,
    });
  };

  return (
    <>
      {/* <div className="w-2/3 flex flex-col justify-center items-center"> */}
      <div>
        <form onSubmit={handleSubmit} className="my-8 grid place-items-center">
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
