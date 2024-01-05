import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  themeMode: boolean;
  showNotification: boolean
}

const initialState: InitialStateType = {
  themeMode: true,
  showNotification: true
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setThemeMode: (state, { payload }) => {
      state.themeMode = payload;
    },
    setShowNotification: (state, {payload}) => {
        state.showNotification = payload
    }
  },
});

export const { setThemeMode, setShowNotification } = mainSlice.actions;
export default mainSlice.reducer
