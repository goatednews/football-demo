import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  shirtImage: null,  // Ensure this matches your expected state structure
};

const imageSlice = createSlice({
  name: 'shirtImage',
  initialState,
  reducers: {
    setShirtImage(state, action) {
      state.shirtImage = action.payload;
      console.log('Image is being Set Successfully', state.shirtImage);
    },
    clearShirtImage(state) {
      state.shirtImage = null;
    },
  },
});

export const {setShirtImage, clearShirtImage} = imageSlice.actions;
export default imageSlice.reducer;
