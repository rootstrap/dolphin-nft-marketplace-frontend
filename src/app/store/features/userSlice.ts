import { createSlice } from '@reduxjs/toolkit';
import {
  kycFulfiled,
  loginFulfiled,
  logoutFulfiled,
  signupFulfiled,
} from 'infrastructure/services/user/UserService';

const initialState: UserState = {
  user: {
    fullName: '',
    country: '',
    province: '',
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
    builder.addMatcher(loginFulfiled, (state, { payload: { token, descriptionUser } }) => {
      state.isAuthenticated = true;
      state.token = token;
      state.user = descriptionUser[0];
    });
    builder.addMatcher(logoutFulfiled, state => {
      state.isAuthenticated = false;
      state.token = '';
      state.user = initialState.user;
    });
    builder.addMatcher(signupFulfiled, (state, { payload: { tokenFtx, ...user } }) => {
      state.isAuthenticated = true;
      state.token = tokenFtx;
      state.user = user;
    });
    builder.addMatcher(kycFulfiled, (state, { payload: { full_name, country, province } }) => {
      state.user.fullName = full_name;
      state.user.country = country;
      state.user.province = province;
    });
  },
});

interface User {
  fullName: string;
  country: string;
  province: string;
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
