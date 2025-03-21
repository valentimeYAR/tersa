import { api } from 'shared/api';
import { GetDocumentsApiResponse, UpdateDocumentApiArgs } from 'features/dashboard/model/types';

const dashboardSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getDocuments: build.query<GetDocumentsApiResponse, void>({
      query: () => ({
        url: '/userdocs/get',
      }),
      providesTags: [{ type: 'Documents', id: 'LIST' }],
    }),
    createDocument: build.mutation({
      query: (query) => ({
        url: '/userdocs/create',
        method: 'POST',
        body: query,
      }),
      invalidatesTags: [{ type: 'Documents', id: 'LIST' }],
    }),
    updateDocument: build.mutation<any, UpdateDocumentApiArgs>({
      query: (query) => ({
        url: `/userdocs/set/${query.id}`,
        method: 'POST',
        body: query.body,
      }),
      invalidatesTags: [{ type: 'Documents', id: 'LIST' }],
    }),
    deleteDocument: build.mutation({
      query: (query) => ({
        method: 'POST',
        url: `/userdocs/delete/${query.id}`,
      }),
      invalidatesTags: [{ type: 'Documents', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetDocumentsQuery,
  useCreateDocumentMutation,
  useUpdateDocumentMutation,
  useDeleteDocumentMutation,
} = dashboardSlice;
