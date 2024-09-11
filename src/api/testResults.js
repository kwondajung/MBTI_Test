import axios from 'axios';

const API_URL = 'http://localhost:5000/testResults';

// db에 있는 데이터를 가져오는 애
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};

// TODO: 함수 작성: post 요청을 안 했었음;;
// resultData 이걸 테스트 페이지에서 받아옴
// db에 resultData를 포스트함
// 인자가 있으면 무조건 실행할 때 인자를 넘겨줘야 함
export const createTestResult = async (resultData) => {
  // console.log('값 받아오는지 확인 => ', resultData);
  // console.log('MBTI 결과 => ', resultData.result);
  const response = await axios.post(API_URL, resultData);

  return response;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(API_URL, id);

  return response;
};

export const updateTestResultVisibility = async (id, visibility) => {};
