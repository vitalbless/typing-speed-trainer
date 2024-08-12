import React from 'react';
import { useSelector } from 'react-redux';
import { useCalculateStatsQuery } from '../features/typing/typingApi';

const Statistics = () => {
  const targetText =
    'This is an application test for text input, an application test.';
  const userInput = useSelector((state) => state.typing.userInput);
  const startTime = useSelector((state) => state.typing.startTime);

  const { data } = useCalculateStatsQuery({ userInput, targetText, startTime });

  const wpm = data
    ? Math.round(data.correctCount / 5 / (data.timeElapsed / 60))
    : 0;

  return (
    <div className='mt-4'>
      <p className='text-lg'>Words per minute: {wpm}</p>
      <p className='text-lg'>Errors: {data?.errorCount}</p>
    </div>
  );
};

export default Statistics;
