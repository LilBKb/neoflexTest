import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  name: string;
  price: number;
  image: string;
  count: number;
}

interface ItemsState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: ItemsState = {
  items: [],
  totalPrice: 0,
};

const calcTotalPrice = (state: ItemsState) => {
  state.totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "count">>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name,
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      calcTotalPrice(state);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
      calcTotalPrice(state);
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
      calcTotalPrice(state);
    },
    minusItem: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.name === action.payload);

      if (!item) return;

      item.count -= 1;

      if (item.count <= 0) {
        state.items = state.items.filter((item) => item.name !== action.payload);
      }

      calcTotalPrice(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, deleteItem, minusItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;