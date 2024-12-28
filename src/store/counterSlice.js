import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCount: (state, action) => {
      state.value++;
    },
    decrementCount: (state, action) => {
      state.value--;
    },
    resetCount: (state, action) => {
      state.value = 0;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
