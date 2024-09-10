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
export const getUserProfile = async (accessToken) => {
  // console.log('이게 진짜', accessToken);
  const response = await axios.get(`${API_URL}/user`, {
    // 헤더스는 한 번 잡아놓으면 호출 시 중복해서 안 써도 됨
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

// 마이페이지 수정
export const updateProfile = async (accessToken, nickname) => {
  const formData = new FormData();
  formData.append('nickname', nickname);

  const response = await axios.patch(`${API_URL}/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
