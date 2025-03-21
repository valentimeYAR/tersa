import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Documents'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs',
        prepareHeaders(headers) {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('x-auth', token);
            }
        },
    }),
    endpoints: () => ({}),
    refetchOnReconnect: true,
});
