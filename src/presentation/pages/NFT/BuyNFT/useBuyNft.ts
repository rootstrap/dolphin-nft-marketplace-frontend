import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { hasEnoughBalance } from 'app/helpers/HasEnoughBalance';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useGetCreditCardFeesMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useBuyNft = (nft: NFT) => {
  const {
    user: { user },
    creditCard: { defaultCreditCard },
    deposit: { currentBalance },
  } = useAppSelector(state => state);

  const [fee, setFee] = useState<number>(0);
  const [depositSize, setDepositSize] = useState<number>(0);
  const [enoughBalance, setEnoughBalance] = useState(false);
  const [depositModalIsOpen, setDepositModalIsOpen] = useState(false);

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

  const loadData = async () => {
    const data: any = await getCreditCardFees();
    await getBalance();
    const { fixed, variable } = data.data;
    const depositSize = nft.offerPrice - currentBalance;
    const fees = (depositSize * variable + fixed).toFixed(2);

    setDepositSize(depositSize);
    setFee(fees);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setEnoughBalance(hasEnoughBalance(currentBalance, nft.offerPrice));
  }, [currentBalance]);

  return {
    defaultCreditCard,
    handleOnClick,
    currentBalance,
    enoughBalance,
    depositModalIsOpen,
    handleCloseDepositModal,
    fee,
    depositSize,
  };
};
