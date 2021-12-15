import { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { useCCVerification } from './useCCVerification';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { ReactComponent as CreditCardLogo } from 'app/assets/card.svg';
import { SuccessVerification } from './SuccessVerification';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CreditCardVerification.module.scss';

export const CreditCardVerification = () => {
  const t = useTranslation();
  const { isLoading, isDepositLoading, handleCheckStatus, isDepositSuccess, errorMsg } = useCCVerification();
  const [creditCardAmount, setCreditCardAmount] = useState<number>();

  const componentToRender = isDepositSuccess ? (
    <SuccessVerification successMsg={t('creditCard.verification.successMsg')} />
  ) : (
    <>
      <CreditCardLogo />
      <Typography gutterBottom variant="h5">
        {t('creditCard.verification.title')}
      </Typography>

      <Typography gutterBottom variant="subtitle1">
        {t('creditCard.verification.description')}
      </Typography>

      {errorMsg && (
        <Typography gutterBottom variant="subtitle1" className={styles.creditCardVerification__error}>
          {CIRCLE_FAILURE_CODES[errorMsg]}
        </Typography>
      )}

      <div className={styles.creditCardVerification__input}>
        <TextField
          type="number"
          value={creditCardAmount}
          onChange={e => setCreditCardAmount(Number(e.target.value))}
          variant="outlined"
          fullWidth
        />
      </div>
      <div>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <Button onClick={() => handleCheckStatus(creditCardAmount)}>
            {t('creditCard.verification.button')}
          </Button>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className={styles.creditCardVerification}>
        {isDepositLoading ? (
          <CustomLoader msg={t('creditCard.verification.loadingMsg')} />
        ) : (
          componentToRender
        )}
      </div>
    </div>
  );
};
