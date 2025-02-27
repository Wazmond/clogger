import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sheetsApi = createApi({
    reducerPath: "sheetsApi",
    baseQuery: fetchBaseQuery({baseUrl: "localhost"}),
    endpoints: (build) => ({
        getRange: build.query({
            query: (range) => `something/${range}`
        })

    })
})

export const { useGetRangeQuery } = sheetsApi