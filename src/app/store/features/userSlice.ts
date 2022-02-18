import { createSlice } from '@reduxjs/toolkit';
import { ErrorReqHandler } from 'app/helpers/ErrorReqHandler';
import {
  createCreditCardFulfiled,
  createCreditCardRejected,
} from 'app/services/creditCard/CreditCardService';
import { loginMfaFulfilled } from 'app/services/mfa/MfaService';
import {
  kycFulfiled,
  kycRejected,
  loginFulfiled,
  logoutFulfiled,
  logoutRejected,
  signupFulfiled,
  signupFTXFulfiled,
  loginFTXFulfiled,
  loginStatusFulfiled,
  googleLoginFulfiled,
  setAgreeSweepstakesFulfiled,
} from 'app/services/user/UserService';

const initialState: UserState = {
  user: {
    fullName: '',
    country: '',
    province: '',
    firstName: '',
    lastName: '',
    email: '',
    kyc1ed: false,
    kyc2ed: false,
    irlEligible: true,
    creditCardId: 0,
    id: 0,
  },
  token: '',
  tokenFtx: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: state => state,
  },
  extraReducers: builder => {
    builder.addMatcher(signupFulfiled, (state, { payload: { token, user } }) => {
      state.isAuthenticated = true;
      state.token = token;
      state.user = { ...user };
    });
    builder.addMatcher(
      signupFTXFulfiled,
      (
        state,
        {
          payload: {
            result: { token },
          },
        }
      ) => {
        state.tokenFtx = token;
      }
    );
    builder.addMatcher(loginFulfiled, (state, { payload: { token, user } }) => {
      state.token = token;
      state.user = { ...state.user, ...user };
    });
    builder.addMatcher(
      loginFTXFulfiled,
      (
        state,
        {
          payload: {
            result: { token },
          },
        }
      ) => {
        state.tokenFtx = token;
      }
    );
    builder.addMatcher(loginStatusFulfiled, (state, { payload }) => {
      state.isAuthenticated = payload.loggedIn;
      state.user.kyc1ed = payload.user?.kycLevel && Boolean(payload.user.kycLevel);
    });
    builder.addMatcher(logoutFulfiled, state => {
      state.isAuthenticated = false;
      state.tokenFtx = '';
      state.token = '';
      state.user = { ...initialState.user };
      localStorage.clear();
    });
    builder.addMatcher(logoutRejected, (state, { payload: { status } }) => {
      ErrorReqHandler({ status });
    });
    builder.addMatcher(kycFulfiled, state => {
      state.user.kyc1ed = true;
    });
    builder.addMatcher(kycRejected, (state, { payload: { status } }) => {
      ErrorReqHandler({ status });
    });
    builder.addMatcher(setAgreeSweepstakesFulfiled, (state, { payload: { irlEligible } }) => {
      state.user.irlEligible = irlEligible;
    });
    builder.addMatcher(createCreditCardFulfiled, (state, { payload }) => {
      state.user.creditCardId = payload.result.id;
    });
    builder.addMatcher(createCreditCardRejected, (state, { payload: { status } }) => {
      ErrorReqHandler({ status });
    });
    builder.addMatcher(loginMfaFulfilled, (state, { payload }) => {
      state.tokenFtx = payload.result.token;
      state.user.kyc1ed = payload.result.target.kycLevel && Boolean(payload.result.target.kycLevel);
    });
    builder.addMatcher(googleLoginFulfiled, (state, { payload }) => {
      state.tokenFtx = payload.token;
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
  kyc1ed: boolean;
  irlEligible: boolean;
  kyc2ed: boolean;
  creditCardId: number;
  id: number;
}

interface UserState {
  user: User;
  token: string;
  tokenFtx: string;
  isAuthenticated: boolean;
}

export default userSlice.reducer;
