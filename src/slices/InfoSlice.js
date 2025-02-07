import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "",
  },
];

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = infoSlice.actions;
export default infoSlice.reducer;
