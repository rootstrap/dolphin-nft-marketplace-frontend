import { ModalContext } from 'app/context/ModalContext';
import { hasEnoughBalance } from 'app/helpers/HasEnoughBalance';
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';
import { useGetCreditCardFeesMutation, creditCardApi } from 'app/services/creditCard/CreditCardService';
import { useGetBalanceMutation } from 'app/services/deposit/DepositService';
import { useBuyNftByPackMutation } from 'app/services/nft/NftService';
import { useCallback, useContext, useEffect, useState } from 'react';
import { creditCardStatus, currency } from 'app/constants/constants';
import { nftsPerPack, pricePerPack } from 'app/constants/heroletes/remarkablesCarousel';
import { nftPack } from 'app/interfaces/NFT/NFT';
import { useSetAgreeSweepstakesMutation } from 'app/services/user/UserService';

export const useBuyNowButton = ({ nftsToBuy, isUserEligible }: UseBuyNowButtonArgs) => {
  const {
    user: {
      user: { email, kyc1ed },
    },
    creditCard: { defaultCreditCard },
    deposit: { balances },
  } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const [totalBalance, setTotalBalance] = useState(0);
  const [depositSize, setDepositSize] = useState<number>(0);
  const [enoughBalance, setEnoughBalance] = useState(false);
  const [fee, setFee] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);

  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const [buyNft, { isSuccess, isError, isLoading: isLoadingBuyNFT }] = useBuyNftByPackMutation();
  const [getCreditCardFees] = useGetCreditCardFeesMutation();
  const [getBalance] = useGetBalanceMutation();
  const [setAgreeSweepstakes] = useSetAgreeSweepstakesMutation();
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleActivateWallet = () => {
    kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  const handleCloseDepositModal = () => {
    getBalance();
    setDepositModalIsOpen(false);
  };

  const handleFundWallet = () => setDepositModalIsOpen(true);

  const handleFundModal = () =>
    defaultCreditCard.status === creditCardStatus.approved ? handleFundWallet() : handleActivateWallet();

  const handleClose = () => {
    setIsOpen(false);
    resetErrors();

    if (isSuccess) {
      window.location.href = '/profile';
    }
  };

  const loadData = useCallback(async () => {
    try {
      setIsLoadingData(true);

      const data: any = await getCreditCardFees();
      const { fixed, variable } = data.data;
      const depositSize = pricePerPack[nftsToBuy] - totalBalance;
      const fees = (depositSize * variable + fixed).toFixed(2);

      setDepositSize(depositSize);
      setFee(fees);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingData(false);
    }
  }, [getCreditCardFees, totalBalance, nftsToBuy]);

  const handleBalance = useCallback(() => {
    setEnoughBalance(hasEnoughBalance(totalBalance, pricePerPack[nftsToBuy]));
  }, [totalBalance, nftsToBuy]);

  const handleBuyNft = () => {
    setIsLoadingData(true);

    try {
      nftsPerPack[nftsToBuy].forEach(async nft => await buyNft(nft));

      setAgreeSweepstakes({
        email,
        isEligible: isUserEligible,
      });
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    setTotalBalance(() => balances.find(balance => balance.coin === currency.usd)?.total || 0);
  }, [balances]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    handleBalance();
  }, [totalBalance, nftsToBuy, handleBalance]);

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setIsOpen(true);
    }
  }, [isError]);

  const resetErrors = () => dispatch(creditCardApi.util.resetApiState());

  return {
    handleBuyNft,
    depositSize,
    defaultCreditCard,
    handleFundModal,
    enoughBalance,
    fee,
    isLoadingData,
    isLoadingBuyNFT,
    depositModalIsOpen,
    isOpen,
    handleClose,
    handleCloseDepositModal,
    isSuccess,
  };
};

interface UseBuyNowButtonArgs {
  packId: string;
  nftsToBuy: nftPack;
  isUserEligible?: boolean;
}
