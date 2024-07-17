import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItems = {
    plantId: string;
    title: string;
    image: string;
    price: string;
    rating: number;
    quantity: number;
    categoryName: string;
    description: string;
}
type TCartItemState = {
    cartItems: TCartItems[];
};

const initialState: TCartItemState = {
    cartItems: [],
};

const plantsSlice = createSlice({
    name: "plants",
    initialState,
    reducers: {
       addToCart: ((state, action: PayloadAction<TCartItems>) => {
        state.cartItems.push({...action.payload})
       })
    },
});

export const {addToCart} = plantsSlice.actions

export default plantsSlice.reducer;
