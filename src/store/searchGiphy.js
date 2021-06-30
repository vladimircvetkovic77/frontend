import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api'

const slice = createSlice({
  name: 'searchGiphy',
  initialState: {
    list: [],
    error: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    stopSearchGiphyLoading: (searchGiphy, action) => {
      searchGiphy.loading = false;
    },
    searchGiphyRequested: (searchGiphy, action) => {
      searchGiphy.loading = true;
    },
    searchGiphyReceived: (searchGiphy, action) => {
      searchGiphy.list = action.payload.data;
    },
    updateError: (searchGiphy, action) => {
      searchGiphy.error = action.payload;
    }
  },
});

export default slice.reducer;

// Action Creators

const { searchGiphyReceived, searchGiphyRequested, stopSearchGiphyLoading, updateError } = slice.actions;

export const loadSearchGiphy = (data) => {
  return apiCallBegan({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    url: '/api/giphy/search',
    method: 'POST',
    data,
    onStart: searchGiphyRequested.type,
    onSuccess: searchGiphyReceived.type,
    onError: updateError.type,
    onEnd: stopSearchGiphyLoading.type
  })
}