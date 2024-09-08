import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  const HandleSignUp = () => async (formData) => {};

  return (
    <>
      <div>
        <h1 className="flex justify-center">회원가입</h1>
        <AuthForm mode="signup" onSubmit={HandleSignUp} />
      </div>
      <p className="flex justify-center">
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </>
  );
};

export default Signup;
