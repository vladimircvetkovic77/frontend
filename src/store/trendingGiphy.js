import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'trendingGiphy',
  initialState: {
    list: [],
    error: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    stopTrendingGiphyLoading: (trendingGiphy, action) => {
      trendingGiphy.loading = false;
    },
    trendingGiphyRequested: (trendingGiphy, action) => {
      trendingGiphy.loading = true;
    },
    trendingGiphyReceived: (trendingGiphy, action) => {
      trendingGiphy.list = action.payload.data;
    },
    updateError: (trendingGiphy, action) => {
      trendingGiphy.error = action.payload;
    }
  },
});

export default slice.reducer;

// Action Creators

const { trendingGiphyReceived, trendingGiphyRequested, stopTrendingGiphyLoading, updateError } = slice.actions;

export const loadTrendingGiphy = () => {
  return apiCallBegan({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    url: '/api/giphy/trending',
    onStart: trendingGiphyRequested.type,
    onSuccess: trendingGiphyReceived.type,
    onError: updateError.type,
    onEnd: stopTrendingGiphyLoading.type
  })
}