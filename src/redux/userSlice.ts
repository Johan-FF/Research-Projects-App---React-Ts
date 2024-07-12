import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  rol: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, userName, rol, email } = action.payload;
      state.name = name;
      state.userName = userName;
      state.rol = rol;
      state.email = email;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
