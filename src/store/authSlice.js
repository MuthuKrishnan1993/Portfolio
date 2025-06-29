import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authToken: null,
  userVerifiedCheck: false,
  userId: null,
  userName: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveuser(state, action) {
      state.user = action.payload;
      console.log("saveuser", action.payload);
    },
    saveToken(state, action) {
      state.authToken = action.payload;
      console.log("saveToken", action.payload);
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
// Compare this snippet from src/store/auth-actions.js:
