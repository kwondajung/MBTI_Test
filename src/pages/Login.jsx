import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { MbtiContext } from '../context/MbtiContext';

const Login = () => {
  // const { user, setUser } = useContext(MbtiContext);

  const handleLogin = async () => {};
  return (
    <div>
      <h1 className="flex justify-center">로그인</h1>
      <AuthForm mode="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
