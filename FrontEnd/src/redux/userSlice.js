import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  userInfo: null,
  error: "",
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.userInfo = action.payload.userInfo;
      state.isAdmin = action.payload.isAdmin;
    },
    loginFailed: (state, action) => {
      state.error = "Login failed!";
    },
    logout: (state) => {
      state.isFetching = false;
      state.userInfo = null;
      state.isAdmin = false;
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
  }, // end reducers
});

export const { loginSuccess, loginStart, loginFailed, logout } =
  userSlice.actions;

export default userSlice.reducer;
