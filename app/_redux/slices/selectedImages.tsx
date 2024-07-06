import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  image: {},
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage(state, action) {
      state.image = action.payload;
      console.log('Image is being Set Successfully', state.image);
    },
    clearImage(state) {
      state.image = {};
    },
  },
});

export const {setImage, clearImage} = imageSlice.actions;
export default imageSlice.reducer;
