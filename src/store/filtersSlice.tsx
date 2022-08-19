import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "all";

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterTodos: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { filterTodos } = filterSlice.actions;
export default filterSlice.reducer;
