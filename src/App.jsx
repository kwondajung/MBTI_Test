import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import TestPage from './pages/TestPage';
import TestResultPage from './pages/TestResultPage';
import { MbtiContext, MbtiProvider } from './context/MbtiContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <MbtiProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResultPage />} />
            {/* </Route> */}
          </Routes>
        </Layout>
      </MbtiProvider>
    </BrowserRouter>
  );
};

export default App;
