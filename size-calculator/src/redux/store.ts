import { configureStore } from "@reduxjs/toolkit";
import sizeCalculatorReducer from "./calculatorSlice/SizeCalculatorSlice";
import { secretSauceApi } from "./services/secretSauceApi";

export const store = configureStore({
  reducer: {
    calculatorValues: sizeCalculatorReducer,
    [secretSauceApi.reducerPath]: secretSauceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(secretSauceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectCalculatorValues = (state: RootState) =>
  state.calculatorValues;

export type AppDispatch = typeof store.dispatch;
