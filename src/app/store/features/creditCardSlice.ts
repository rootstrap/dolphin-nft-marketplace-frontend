import { createSlice } from '@reduxjs/toolkit';
import { CreditCardData } from 'app/interfaces/creditCard/creditCard';
import { deleteCreditCardFulfiled, getCreditCardsFulfiled } from 'app/services/creditCard/CreditCardService';

const initialState: CreditCardState = {
  creditCards: [],
  defaultCreditCard: {
    id: '',
    name: '',
    time: '',
    billingInfo: {
      city: '',
      name: '',
      line1: '',
      line2: '',
      country: '',
      district: '',
      postalCode: '',
    },
    depositVerificationStatus: 'notStarted',
    depositVerificationErrorCode: 'no_error',
    status: 'pending',
    data: {
      mask: '',
    },
    errorCode: null,
  },
};

const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState,
  reducers: {
    setDefaultCreditCard: (state, { payload }) => {
      state.defaultCreditCard = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(getCreditCardsFulfiled, (state, { payload }) => {
      state.creditCards = payload;
      state.defaultCreditCard =
        payload.length === 0 ? { ...initialState.defaultCreditCard } : { ...payload[0] };
    });
    builder.addMatcher(deleteCreditCardFulfiled, (state, { meta }) => {
      state.creditCards = state.creditCards.filter(creditCard => creditCard.id !== meta.arg.originalArgs);
    });
  },
});

interface CreditCardState {
  creditCards: CreditCardData[];
  defaultCreditCard: CreditCardData;
}

export default creditCardSlice.reducer;
export const { setDefaultCreditCard } = creditCardSlice.actions;
