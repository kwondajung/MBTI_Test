import axios from 'axios';
import { MbtiContext } from '../context/MbtiContext';

export const API_URL = 'https://moneyfulpublicpolicy.co.kr';

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
  // 로그인 api 호출에 대한 결과값 이렇게 넣어야 setUser(response.data) user를 사용할 수 있따
  // 로그아웃도 똑같이 하면 됨 null 지워지는 시점에 로그아웃을 넣고 setUser 초기화
  return response.data; // 로그인 성공 여부 보냄
};

// 마이페이지
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// 마이페이지 수정
export const updateProfile = async (FormData) => {};
