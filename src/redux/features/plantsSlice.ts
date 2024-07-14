import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPlants = {
    image: string;
    title: string;
    price: string;
    rating: number;
    categoryName: string;
};

type TInitialState = {
    plants: TPlants[];
};

const initialState: TInitialState = {
    plants: [],
};

const plantsSlice = createSlice({
    name: "plants",
    initialState,
    reducers: {
        addPlantsToCart: (
            state: TInitialState,
            action: PayloadAction<TPlants>
        ) => {
            state.plants.push({ ...action.payload });
        },
    },
});

export const {addPlantsToCart} = plantsSlice.actions

export default plantsSlice.reducer;
