import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { token: string | null; role: string | null };
}
const data: AuthState =
  typeof window !== "undefined" && localStorage.getItem("token")
    ? {
        user: {
          token: window.localStorage.getItem("token"),
          role: window.localStorage.getItem("role"),
        },
      }
    : {
        user: {
          token: "",
          role: "",
        },
      };

const initialState: AuthState = {
  user: {
    role: data.user.role,
    token: data.user.token,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction(state, action: PayloadAction<{ token: string; role: string }>) {
      state.user = action.payload;
      if (
        action.payload.token != undefined &&
        action.payload.role != undefined
      ) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("role", action.payload.role);
      }
    },
    logout(state) {
      state.user = {
        token: "",
        role: "",
      };
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
    loadUser(state) {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      if (token && role) {
        state.user = { token, role };
      }
    },
  },
});

export const { loginAction, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
