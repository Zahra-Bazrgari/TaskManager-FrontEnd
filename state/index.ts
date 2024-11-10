import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarlMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarlMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;

    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarlMode = action.payload;
    }
  },
});

export const {setIsDarkMode, setIsSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer;
