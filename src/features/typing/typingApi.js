import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const typingApi = createApi({
  reducerPath: 'typingApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    calculateStats: builder.query({
      queryFn: ({ userInput, targetText, startTime }) => {
        const correctCount = userInput
          .split('')
          .filter((char, index) => char === targetText[index]).length;
        const errorCount = userInput
          .split('')
          .filter((char, index) => char !== targetText[index]).length;
        const timeElapsed = startTime ? (new Date() - startTime) / 1000 : 0;

        return { data: { correctCount, errorCount, timeElapsed } };
      },
    }),
  }),
});

export const { useCalculateStatsQuery } = typingApi;
