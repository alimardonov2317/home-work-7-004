import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: (params) => ({
        url: "/BOOK",
        method: "GET",
        params
      }),
      providesTags: ["BOOK"]
    }),
    createBook: build.mutation({
      query: (body) => ({
        url: "/BOOK",
        method: "POST",
        body
      }),
      invalidatesTags: ["BOOK"]
    }),
    deleteBook: build.mutation({
      query: (id)=> ({
        url: `/BOOK/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BOOK"]
    })
  }),
  overrideExisting: false,
})

export const { useGetBooksQuery, useCreateBookMutation, useDeleteBookMutation } = extendedApi