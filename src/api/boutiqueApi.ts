import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CollectionItemResponse = {
  itemId: string;
  title: string;
  description: string;
  cost: number;
  image: string;
  sizes: string[];
}
export const boutiqueApi = createApi({
  reducerPath: 'boutiqueApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Collections', 'Details'],
  endpoints: (builder) => ({
    getCollections: builder.query<CollectionItemResponse[], void>({
      query: () => 'collectionItems',
      providesTags: ['Collections'],
    }),
    getCollectionItems: builder.query<CollectionItemResponse, string>({
      query: (itemId) => `collections/${itemId}`,
      providesTags: (result, error, itemId) => [{ type: 'Details', id: itemId }],
    }),
  }),
});

export const {
  useGetCollectionsQuery,
  useGetCollectionItemsQuery,
} = boutiqueApi;
