import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserData {
  value: any;
}

const initialState: UserData = {
  value: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewUser } = userDataSlice.actions;

export default userDataSlice.reducer;
