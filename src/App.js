import React from 'react';
import { useSelector } from 'react-redux';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';
import Statistics from './components/Statistics';
import ResultsScreen from './components/ResultsScreen';

const App = () => {
  const targetText =
    'This is an application test for text input, an application test.';
  const userInput = useSelector((state) => state.typing.userInput);

  const isCompleted = userInput === targetText;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-4'>Typing Speed Trainer</h1>
      {!isCompleted ? (
        <>
          <TextDisplay />
          <TextInput />
          <Statistics />
        </>
      ) : (
        <ResultsScreen />
      )}
    </div>
  );
};

export default App;
