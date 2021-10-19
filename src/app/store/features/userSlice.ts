import { createSlice } from '@reduxjs/toolkit';
import {
  ccFulfiled,
  kycFulfiled,
  loginFulfiled,
  logoutFulfiled,
  signupFulfiled,
  depositFulfiled,
} from 'infrastructure/services/user/UserService';

const initialState: UserState = {
  user: {
    fullName: '',
    country: '',
    province: '',
    firstName: '',
    lastName: '',
    email: '',
    kyc1ed: false,
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
      state.user = { ...user };
    });
    builder.addMatcher(logoutFulfiled, state => {
      state.isAuthenticated = false;
      state.token = '';
      state.user = initialState.user;
    });
    builder.addMatcher(signupFulfiled, (state, { payload: { token, user } }) => {
      state.isAuthenticated = true;
      state.token = token;
      state.user = { ...user };
    });
    builder.addMatcher(kycFulfiled, (state, { payload: { full_name, country, province } }) => {
      state.user.fullName = full_name;
      state.user.country = country;
      state.user.province = province;
    });
    builder.addMatcher(ccFulfiled, (state, { payload: resp }) => {});
    builder.addMatcher(depositFulfiled, (state, { payload: resp }) => {});
  },
});

interface User {
  fullName: string;
  country: string;
  province: string;
  firstName: string;
  lastName: string;
  email: string;
  kyc1ed: boolean;
  id: number;
}

interface UserState {
  user: User;
  token: string;
  isAuthenticated: boolean;
}

export default userSlice.reducer;
