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
    updateUserRol: (state, action) => {
      state.rol = action.payload;
    },
  },
});

export const { updateUser, updateUserRol } = userSlice.actions;
export default userSlice.reducer;
