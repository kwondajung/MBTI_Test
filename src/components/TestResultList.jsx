import React from 'react';
import TestResultItem from './TestResultItem';

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  // console.log('확인이요', results);
  return (
    <div className="space-y-4">
      {results
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            user={user}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TestResultList;
