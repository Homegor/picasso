import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface TPost {
    map(arg0: (post: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: string,
    title: string,
    body: string
}
export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getPost: builder.query<TPost, {limit: number, start: number}>({
            query: ({limit=5, start=0 }) => ({
                url: "/posts",
                params:
                    {
                        _limit:limit,
                        _start:start,
                    }
            }),
        }),
        getPostById: builder.query({
            query: (postId: number) => `posts/${postId}`,
        }),
    }),
})
export const {useGetPostQuery, useGetPostByIdQuery} = postApi
