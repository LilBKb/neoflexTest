import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
    name: string;
    price: number;
    rating: number;
    image: string;
}

interface ItemsState {
    items: CartItem[];
}
const initialState: ItemsState = {
    items: [],
};




export const itemsSlice = createSlice({
    name: "items",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
        state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((item) => item.name !== action.payload);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
        state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;