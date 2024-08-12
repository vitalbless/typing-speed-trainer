import React from 'react';
import { useDispatch } from 'react-redux';
import { resetState } from '../features/typing/typingSlice';

const RestartButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(resetState())}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Restart
    </button>
  );
};

export default RestartButton;
