import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  size: string;
  brandId: string;
  categoryId: string;
  nextPage: string;
  name_prefix: string;
}

const initialState: CounterState = {
  size: "",
  brandId: "",
  categoryId: "",
  nextPage: "",
  name_prefix: "",
};

export const sizeCalculatorSlice = createSlice({
  name: "sizeCalculator",
  initialState,
  reducers: {
    setSizeVal: (state, action: PayloadAction<string>) => {
      // console.log("Size: ", action.payload);
      state.size = action.payload;
    },
    setBrand: (state, action: PayloadAction<string>) => {
      // console.log("Brand: ", action.payload);
      state.brandId = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      // console.log("Category: ", action.payload);
      state.categoryId = action.payload;
    },
    setNextPage: (state, action: PayloadAction<string>) => {
      // console.log("Next Page: ", action.payload);
      state.nextPage = action.payload;
    },
    setNamePrefix: (state, action: PayloadAction<string>) => {
      // console.log("Name Prefix: ", action.payload);
      state.name_prefix = action.payload;
    },
    setInitValues: (state) => {
      state.size = "";
      state.brandId = "";
      state.categoryId = "";
      state.nextPage = "";
      state.name_prefix = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSizeVal,
  setBrand,
  setCategory,
  setNextPage,
  setNamePrefix,
  setInitValues,
} = sizeCalculatorSlice.actions;

export default sizeCalculatorSlice.reducer;
