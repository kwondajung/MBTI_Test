import React from 'react';

const AuthForm = ({ mode, onSubmit }) => {
  const handleChange = (e) => {
    e.prevenDefault();
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
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
            value={FormData.id}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            required
          />
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              name="nickname"
              value={FormData.nickname}
              onChange={handleChange}
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
