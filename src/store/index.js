import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact-slice";
import notificationSlice from "./Notificationslice";
import auth from "./authSlice";
const store = configureStore({
  reducer: {
    auth: auth.reducer,
    notification: notificationSlice.reducer,
    contact: contactSlice.reducer,
  },
});
export default store;
