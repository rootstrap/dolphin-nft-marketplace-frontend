import { useCallback, useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { hasEnoughBalance } from 'app/helpers/HasEnoughBalance';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useGetCreditCardFeesMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useTotalBalance } from 'app/hooks/useTotalBalance';

export const useBuyNft = (nft: NFT) => {
  const {
    user: { user },
    creditCard: { defaultCreditCard },
  } = useAppSelector(state => state);

  const { totalBalance } = useTotalBalance('USD');
  const [fee, setFee] = useState<number>(0);
  const [depositSize, setDepositSize] = useState<number>(0);
  const [enoughBalance, setEnoughBalance] = useState(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);
  const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);

  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const [getCreditCardFees] = useGetCreditCardFeesMutation();
  const [getBalance] = useGetBalanceMutation();

  const handleActivateWallet = () => {
    user.kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };
  const handleFundWallet = () => setDepositModalIsOpen(true);

  const handleOnClick = () =>
    defaultCreditCard.status === 'approved' ? handleFundWallet() : handleActivateWallet();

  const handleCloseDepositModal = () => {
    getBalance();
    setDepositModalIsOpen(false);
  };

  const handleOpenBuyNftModal = () => setBuyModalIsOpen(true);
  const handleCloseBuyNftModal = () => setBuyModalIsOpen(false);

  const loadData = useCallback(async () => {
    const data: any = await getCreditCardFees();
    await getBalance();
    const { fixed, variable } = data.data;
    const depositSize = nft.offerPrice - totalBalance;
    const fees = (depositSize * variable + fixed).toFixed(2);

    setDepositSize(depositSize);
    setFee(fees);
  }, [totalBalance, getBalance, getCreditCardFees, nft]);

  useEffect(() => {
    loadData();
  }, [loadData, depositSize]);

  useEffect(() => {
    setEnoughBalance(hasEnoughBalance(totalBalance, nft.offerPrice));
  }, [totalBalance, nft]);

  return {
    defaultCreditCard,
    handleOnClick,
    totalBalance,
    enoughBalance,
    depositModalIsOpen,
    handleCloseDepositModal,
    handleOpenBuyNftModal,
    handleCloseBuyNftModal,
    buyModalIsOpen,
    fee,
    depositSize,
  };
};
