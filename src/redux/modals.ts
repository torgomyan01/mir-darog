import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modals {
  modalCalc: boolean;
}

const initialState: Modals = {
  modalCalc: false,
};

export const modals = createSlice({
  name: "modals-state",
  initialState,
  reducers: {
    setModalCalc: (state, action: PayloadAction<boolean>) => {
      state.modalCalc = action.payload;
    },
  },
});

// Export actions և reducer
export const { setModalCalc } = modals.actions;
export default modals.reducer;
