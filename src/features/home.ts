import { getAreaData, getMarketData } from "@/services/home";
import { homeDataState } from "@/utils/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  areaData: [],
  marketData: [],
} as homeDataState;

export const getAllAreaData = createAsyncThunk(
  "areaData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAreaData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllMarketData = createAsyncThunk(
  "marketData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getMarketData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAreaData.fulfilled, (state, action) => {
      state.areaData = action.payload;
    });
    builder.addCase(getAllMarketData.fulfilled, (state, action) => {
      state.marketData = action.payload;
    });
  },
});

export default homeSlice.reducer;
