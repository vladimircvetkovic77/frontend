import { combineReducers } from 'redux';
import trendingGiphyReducer from './trendingGiphy';
import searchGiphyReducer from './searchGiphy';

export default combineReducers({
  trendingGiphy: trendingGiphyReducer,
  searchGiphy: searchGiphyReducer
});
