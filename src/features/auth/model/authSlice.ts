import { api } from 'shared/api';
import { LoginApiArgs, LoginApiResponse } from 'features/auth/model/types';

const authSlice = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginApiResponse, LoginApiArgs>({
      query: (query) => ({
        url: `/login`,
        method: 'POST',
        body: query,
      }),
    }),
  }),
});

export const { useLoginMutation } = authSlice;
