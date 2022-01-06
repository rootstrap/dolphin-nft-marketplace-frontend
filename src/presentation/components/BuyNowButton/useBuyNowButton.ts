import { ModalContext } from 'app/context/ModalContext';
import { hasEnoughBalance } from 'app/helpers/HasEnoughBalance';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useGetCreditCardFeesMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { useBuyNftByPackMutation, useGetNftPackInfoMutation } from 'infrastructure/services/nft/NftService';
import { useCallback, useContext, useEffect, useState } from 'react';
import { creditCardStatus, currency } from 'app/constants/contants';

export const useBuyNowButton = () => {
  const {
    user: { user },
    creditCard: { defaultCreditCard },
    deposit: { balances },
  } = useAppSelector(state => state);

  const totalBalance = balances.find(balance => balance.coin === currency.usd).total || 0;
  const [creaturePrice, setCreaturePrice] = useState<number>(0);
  const [depositSize, setDepositSize] = useState<number>(0);
  const [enoughBalance, setEnoughBalance] = useState(false);
  const [fee, setFee] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);

  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const [buyNft, { isSuccess }] = useBuyNftByPackMutation();
  const [getPackInfo] = useGetNftPackInfoMutation();
  const [getCreditCardFees] = useGetCreditCardFeesMutation();
  const [getBalance] = useGetBalanceMutation();
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleActivateWallet = () => {
    user.kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  const handleCloseDepositModal = () => {
    getBalance();
    setDepositModalIsOpen(false);
  };

  const handleFundWallet = () => setDepositModalIsOpen(true);

  const handleOnClick = () =>
    defaultCreditCard.status === creditCardStatus.approved ? handleFundWallet() : handleActivateWallet();

  const handleClose = () => {
    setIsOpen(false);
    window.location.href = '/profile';
  };

  const loadData = useCallback(async () => {
    try {
      setIsLoadingData(true);

      const data: any = await getCreditCardFees();
      const packInfo: any = await getPackInfo();
      const { fixed, variable } = data.data;
      const depositSize = packInfo.data.result.price - totalBalance;
      const fees = (depositSize * variable + fixed).toFixed(2);

      setCreaturePrice(packInfo.data.result.price);
      setDepositSize(depositSize);
      setFee(fees);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingData(false);
    }
  }, [getCreditCardFees, getPackInfo, totalBalance]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    setEnoughBalance(hasEnoughBalance(totalBalance, creaturePrice));
  }, [totalBalance, creaturePrice]);

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(true);
    }
  }, [isSuccess]);

  return {
    buyNft,
    depositSize,
    defaultCreditCard,
    handleOnClick,
    enoughBalance,
    fee,
    isLoadingData,
    depositModalIsOpen,
    isOpen,
    handleClose,
    handleCloseDepositModal,
  };
};
