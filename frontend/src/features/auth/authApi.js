import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4200/api/auth',
        credentials: 'include'
    }),
    endpoints: (builder) => {
        return {
            login: builder.mutation({
                query: (credentials) => ({
                    url: '/login',
                    method: 'POST',
                    body: credentials,
                }),
            }),
            refresh: builder.mutation({
                query: () => ({
                    url: '/refresh-token',
                    method: 'POST'
                }),
            }),
            register: builder.mutation({
                query: (data) => ({
                    url: '/register',
                    method: 'POST',
                    body: data,
                }),
            }),
            logout: builder.mutation({
                query: () => ({
                    url: '/logout',
                    method: 'POST',
                }),
            }),
            getUser: builder.query({
                query: () => ({
                    url: '/user',
                    method: 'GET',
                }),
            })


            }
    },
});

export const {
    useLoginMutation,
    useRefreshMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetUserQuery,
} = authApi;