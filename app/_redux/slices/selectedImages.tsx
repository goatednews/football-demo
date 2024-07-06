import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  image: null,  // Ensure this matches your expected state structure
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setFaceImage(state, action) {
      state.image = action.payload;
      console.log('Image is being Set Successfully', state.image);
    },
    clearFaceImage(state) {
      state.image = null;
    },
  },
});

export const {setFaceImage, clearFaceImage} = imageSlice.actions;
export default imageSlice.reducer;
