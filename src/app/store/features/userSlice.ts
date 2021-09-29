import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginFulfiled } from 'infrastructure/services/user/ApiService';

const initialState: UserState = {
  user: {},
  token: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(state, action: PayloadAction<authAction>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(loginFulfiled, (state, { payload: { token, user } }) => {
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
    });
  },
});

interface UserState {
  user: object;
  token: string;
  isAuthenticated: boolean;
}

interface authAction {
  user: object;
  info: object;
  password: string;
}

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
