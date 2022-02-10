import { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { creditCardStatus } from 'app/constants/constants';
import { CreditCardData } from 'app/interfaces/creditCard/creditCard';
import { useAppSelector } from 'app/hooks/reduxHooks';
import useTranslation from 'app/hooks/useTranslation';

export const BuyNowWallet = ({ defaultCreditCard, handleFundModal }: BuyNowWalletProps) => {
  const t = useTranslation();
  const { setLoginModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  const handleOnClick = () => (isAuthenticated ? handleFundModal() : setLoginModalIsOpen(true));

  return (
    <div>
      <Typography component="div">
        {defaultCreditCard.status === creditCardStatus.approved
          ? t('creatures.buyCreatures.fundWallet')
          : t('creatures.buyCreatures.activateWallet')}
      </Typography>

      <Button onClick={handleOnClick} variant="outlined">
        {defaultCreditCard.status === creditCardStatus.approved
          ? t('creatures.buyCreatures.fundButton')
          : t('creatures.buyCreatures.activateButton')}
      </Button>
    </div>
  );
};

interface BuyNowWalletProps {
  defaultCreditCard: CreditCardData;
  handleFundModal: () => void;
}
