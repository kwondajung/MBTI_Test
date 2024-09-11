import React, { useContext, useEffect, useState } from 'react';
import { createTestResult, getTestResults } from '../api/testResults';
import TestResultList from '../components/TestResultList';
import { MbtiContext } from '../context/MbtiContext';

const TestResultPage = () => {
  const { user } = useContext(MbtiContext);
  const [results, setResults] = useState([]);

  // console.log(resultData);
  const fetchResults = async () => {
    const mbtiData = await getTestResults();
    // const mbtiResult = await createTestResult(resultData);
    console.log(mbtiData);
    // console.log(mbtiResult);

    setResults(mbtiData);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
      <div className="bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default TestResultPage;
