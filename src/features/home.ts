import { getAreaData, getMarketData } from "@/services/home";
import { homeDataState } from "@/utils/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  areaData: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
  marketData: [
    {
      title: "BTCUSDT",
      description: "Bitcoin",
      currentPrice: 23.495,
      difference: 23.4,
      differencePosition: "Up",
    },
    {
      title: "AUSUDT",
      description: "Axie Infini",
      currentPrice: 15.95,
      difference: 8.9,
      differencePosition: "Down",
    },
    {
      title: "ETHUSDT",
      description: "Ethereum",
      currentPrice: 12.95,
      difference: 1.5,
      differencePosition: "Up",
    },
    {
      title: "SOLUSDT",
      description: "Solana",
      currentPrice: 15.95,
      difference: 4.5,
      differencePosition: "Down",
    },
    {
      title: "BNBUSD",
      description: "Binance",
      currentPrice: 15.95,
      difference: 8.9,
      differencePosition: "Up",
    },
    {
      title: "ADAUSFT",
      description: "Cardano",
      currentPrice: 15.95,
      difference: 12.2,
      differencePosition: "Down",
    },
    {
      title: "ETHUSDT",
      description: "Ethereum",
      currentPrice: 12.95,
      difference: 1.5,
      differencePosition: "Up",
    },
    {
      title: "BNBUSD",
      description: "Binance",
      currentPrice: 15.95,
      difference: 8.9,
      differencePosition: "Up",
    },
  ],
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
