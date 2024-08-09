import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
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
        deleteCategories: builder.mutation({
            query: (id) => ({
                url: `/plantCategories/${id}`,
                method: "DELETE",
            }),
        }),
        addPlantToCart: builder.mutation({
            query: (data) => {
                // console.log(data);
                return {
                    url: "/cartItems",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["cart"],
        }),
        addCategories: builder.mutation({
            query: (data) => {
                // console.log(data);
                return {
                    url: "/plantCategories",
                    method: "POST",
                    body: data,
                };
            },
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
        updateIsCheckout: builder.mutation({
            query: () => ({
                url: "/checkout",
                method: "PUT",
            }),
            invalidatesTags: ["cart"],
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
    useUpdateIsCheckoutMutation,
    useAddCategoriesMutation,
    useDeleteCategoriesMutation,
} = baseApi;
