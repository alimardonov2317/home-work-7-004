import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67adcc4d3f5a4e1477df21ec.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes: ["BOOK", "PRODUCT"]
})
