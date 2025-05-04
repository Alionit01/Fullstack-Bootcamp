import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './user.type';

export const userApi = createApi({
 reducerPath: 'api', // optional name for the reducer
 baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
 tagTypes: ['User'],
 endpoints: (builder) => ({
   getUsers: builder.query<User[], void>({
     query: () => 'users',
     providesTags: ['User'],
   }),
 }),
});

export const { useGetUsersQuery } = userApi;