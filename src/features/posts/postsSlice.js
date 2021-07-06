import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'e5ed7391-386c-48e6-9667-d2d06f1e96b7';

export const postsSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      catPosts: builder.query({
        query(limit = 2) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useCatPostsQuery } = postsSlice;