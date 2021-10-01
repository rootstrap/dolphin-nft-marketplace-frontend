import { createSlice } from '@reduxjs/toolkit';
import { loginFulfiled, signupFulfiled } from 'infrastructure/services/user/UserService';

const initialState: UserState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    id: 0,
  },
  token: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(loginFulfiled, (state, { payload: { token, user } }) => {
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
    });
    builder.addMatcher(signupFulfiled, (state, { payload: { tokenFtx, ...user } }) => {
      state.isAuthenticated = true;
      state.token = tokenFtx;
      state.user = user;
    });
  },
});

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
}

interface UserState {
  user: User;
  token: string;
  isAuthenticated: boolean;
}

export default userSlice.reducer;
