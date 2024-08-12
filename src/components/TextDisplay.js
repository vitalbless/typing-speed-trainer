import React from 'react';
import { useSelector } from 'react-redux';

const TextDisplay = () => {
  const targetText =
    'This is an application test for text input, an application test.';
  const userInput = useSelector((state) => state.typing.userInput);

  return (
    <div className='text-xl font-mono'>
      {targetText.split('').map((char, index) => (
        <span
          key={index}
          className={
            userInput[index]
              ? userInput[index] === char
                ? 'text-green-500'
                : 'text-red-500'
              : 'text-gray-500'
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TextDisplay;
