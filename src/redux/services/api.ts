// api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1/api/blog/",
        // Include headers or other configurations here if needed.
    }),
    endpoints: (builder) => ({
        fetchTaskId: builder.query<string, void>({
            query: () => "enqueue_load_posts",
        }),
    }),
});

export const { useFetchTaskIdQuery } = taskApi;
