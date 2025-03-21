import { api } from 'shared/api';
const authSlice = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (query) => ({
                url: `/login`,
                method: 'POST',
                body: query,
            }),
        }),
    }),
});
export const { useLoginMutation } = authSlice;
