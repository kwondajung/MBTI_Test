import React from 'react';

const AuthForm = () => {
  const hanleChange = (e) => {
    e.prevenDefault();
  };
  return (
    <>
      {/* <div className="w-2/3 flex flex-col justify-center items-center"> */}
      <div className="my-8 grid place-items-center">
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          name="id"
          value={FormData.id}
          onChange={hanleChange}
          required
        />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <button className="w-96">나는 버튼</button>
      </div>
    </>
  );
};

export default AuthForm;
