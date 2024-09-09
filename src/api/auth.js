import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

// 회원가입
export const register = async (userData) => {
  console.log('회원가입 확인 => ', userData);

  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
// 로그인
export const login = async (userData) => {
  console.log('로그인 확인 => ', userData);

  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data; // 로그인 성공 여부 보냄
};

// 마이페이지
export const getUserProfile = async (token) => {};

// 마이페이지 수정
export const updateProfile = async (FormData) => {};
