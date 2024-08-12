import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCalculateStatsQuery } from '../features/typing/typingApi';
import { resetState } from '../features/typing/typingSlice';

const ResultsScreen = () => {
  const dispatch = useDispatch();
  const targetText =
    'This is an application test for text input, an application test.';
  const userInput = useSelector((state) => state.typing.userInput);
  const startTime = useSelector((state) => state.typing.startTime);

  const { data } = useCalculateStatsQuery({ userInput, targetText, startTime });

  const wpm = data
    ? Math.round(data.correctCount / 5 / (data.timeElapsed / 60))
    : 0;

  const handleRestart = () => {
    dispatch(resetState());
  };

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold'>Results</h2>
      <p className='text-lg'>Words per minute: {wpm}</p>
      <p className='text-lg'>Errors: {data?.errorCount}</p>
      <button
        onClick={handleRestart}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
      >
        Restart
      </button>
    </div>
  );
};

export default ResultsScreen;
