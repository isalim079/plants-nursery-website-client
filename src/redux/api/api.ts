import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["plant", "cart"],
    endpoints: (builder) => ({
        getPlants: builder.query({
            query: () => ({
                url: "/allPlants",
                method: "GET",
            }),
            providesTags: ["plant"],
        }),
        getPlantById: builder.query({
            query: (id) => ({
                url: `/plantDetails/${id}`,
                method: "GET",
            }),
            providesTags: ["plant"],
        }),
        deletePlants: builder.mutation({
            query: (id) => ({
                url: `/allPlants/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["plant"],
        }),
        addPlantToCart: builder.mutation({
            query: (data) => ({
                url: "/cartItems",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["cart"],
        }),
        addPlants: builder.mutation({
            query: (data) => ({
                url: "/allPlants",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["plant"],
        }),
        updatePlantsData: builder.mutation({
            query: ({ id, data }) => ({
                url: `/allPlants/${id}`,
                method: "PUT",
                body: data,
            }),

            invalidatesTags: ["plant"],
        }),
        getCartItems: builder.query({
            query: () => ({
                url: "/cartItems",
                method: "GET",
            }),
            providesTags: ["cart"],
        }),
    }),
});

export const {
    useGetPlantsQuery,
    useGetPlantByIdQuery,
    useAddPlantToCartMutation,
    useGetCartItemsQuery,
    useUpdatePlantsDataMutation,
    useAddPlantsMutation,
    useDeletePlantsMutation,
} = baseApi;
