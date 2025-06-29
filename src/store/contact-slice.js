import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  changed: false,
};
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      const newItem = action.payload;
      console.log("payload" + newItem.name);
      console.log("state" + state);
      state.contacts.push({
        name: newItem.name,
        email: newItem.email,
        message: newItem.message,
      });
      state.changed = true;
    },
    reset: () => initialState,
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice;
