import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInput, setStartTime } from '../features/typing/typingSlice';

const TextInput = () => {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.typing.userInput);
  const startTime = useSelector((state) => state.typing.startTime);

  const handleChange = (e) => {
    if (!startTime) {
      dispatch(setStartTime(new Date()));
    }
    dispatch(setUserInput(e.target.value));
  };

  return (
    <input
      type='text'
      value={userInput}
      onChange={handleChange}
      className='mt-4 p-2 border rounded w-full'
      autoFocus
    />
  );
};

export default TextInput;
