import React, { useContext } from 'react';
import TestForm from '../components/TestForm';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { createTestResult } from '../api/testResults';
import { useNavigate } from 'react-router-dom';
import { MbtiContext } from '../context/MbtiContext';

const TestPage = () => {
  const { user } = useContext(MbtiContext);
  const navigate = useNavigate();
  console.log(user);

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);

    console.log('결과', result);

    const resultData = {
      userId: user.userId,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    // 만든 데이터를 크리에이트해서 넣어주겠따
    const data = await createTestResult(resultData);
    console.log('데이터 확인 => ', data);
    navigate('/results');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
