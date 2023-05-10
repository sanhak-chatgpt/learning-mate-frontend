import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ComponentsState {
  currentIndex: number;
}

const initialState: ComponentsState = {
  currentIndex: 0,
};

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setCurrentIndex } = componentsSlice.actions;
export default componentsSlice.reducer;
