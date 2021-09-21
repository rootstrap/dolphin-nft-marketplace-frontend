import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  username: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(state, action: PayloadAction<authAction>) {
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
  },
});

interface UserState {
  username: string;
  isAuthenticated: boolean;
}

interface authAction {
  username: string;
  password: string;
}

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
