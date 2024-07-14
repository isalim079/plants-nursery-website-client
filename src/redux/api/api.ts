import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ["plant"],
    endpoints: (builder) => ({
        getPlants: builder.query({
            query: () => {
                // const params = new URLSearchParams();

                // if(priority){
                //     params.append("priority", priority)
                // }
                return {
                    url: '/allPlants',
                    method: "GET",
                    // params: params,
                }
            },
            providesTags: ['plant']
        }),
        getPlantById: builder.query({
            query: (id) => ({
                url: `/plantDetails/${id}`,
                method: 'GET'
            }),
            providesTags: ['plant']
        })
    })
})

export const {useGetPlantsQuery, useGetPlantByIdQuery} = baseApi