import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  author: "",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      const { name, author } = action.payload;
      state.name = name;
      state.author = author;
    },
  },
});

export const { updateProject } = projectSlice.actions;
export default projectSlice.reducer;
