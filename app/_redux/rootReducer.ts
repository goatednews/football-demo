import { combineReducers } from '@reduxjs/toolkit';
import selectedImage from './slices/selectedImages';

const rootReducer = combineReducers({
  selectedImage: selectedImage,
});

export default rootReducer;




