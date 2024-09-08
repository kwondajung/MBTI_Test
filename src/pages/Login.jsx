import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const handleLogin = async (formData) => {};
  return (
    <div>
      <h1 className="flex justify-center">로그인</h1>
      <AuthForm mode="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
