import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './slices/selectedImages';
import shirtImageReducer from './slices/selectedShirtImages';

const rootReducer = combineReducers({
  image: imageReducer,
  shirtImage: shirtImageReducer,
});

export default rootReducer;
