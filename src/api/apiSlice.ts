import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://your-backend-url.com/api',
  }),
  tagTypes: ['Collection', 'Product', 'User'], // Add tag types for cache control
  endpoints: () => ({}), // Extend in other files
});
