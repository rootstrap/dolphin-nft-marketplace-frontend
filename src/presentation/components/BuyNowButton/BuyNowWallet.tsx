import { Button, Typography } from '@material-ui/core';
import { creditCardStatus } from 'app/constants/contants';
import { CreditCardData } from 'app/interfaces/creditCard/creditCard';
import useTranslation from 'app/hooks/useTranslation';

export const BuyNowWallet = ({ defaultCreditCard, handleFundModal }: BuyNowWalletProps) => {
  const t = useTranslation();

  return (
    <div>
      <Typography component="div">
        {defaultCreditCard.status === creditCardStatus.approved
          ? t('creatures.buyCreatures.fundWallet')
          : t('creatures.buyCreatures.activateWallet')}
      </Typography>

      <Button onClick={handleFundModal} variant="outlined">
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
