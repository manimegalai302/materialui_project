import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      isLoggedIn: false,
    },
  },
  reducers: {
    info: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { info} = userSlice.actions;
export default userSlice.reducer;
