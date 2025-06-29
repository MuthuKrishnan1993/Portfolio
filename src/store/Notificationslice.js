import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: null,
    error: null,
    loading: false,
    open: false,
  },
  reducers: {
    setNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
        open: action.payload.open,
      };
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});
export const notificationActions = notificationSlice.actions;
export default notificationSlice;
