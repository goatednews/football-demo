import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './slices/selectedImages';

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;
