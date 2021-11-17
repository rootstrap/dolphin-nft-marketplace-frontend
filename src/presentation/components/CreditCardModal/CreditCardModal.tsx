import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { Button, Grid, Typography } from '@material-ui/core';
import { CreditCard, Delete } from '@material-ui/icons';
import { useCreditCardModal } from './useCreditCardModal';
import { setDefaultCreditCard } from 'app/store/features/creditCardSlice';
import { useAppSelector } from 'app/hooks/reduxHooks';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CreditCardModal.module.scss';

export const CreditCardModal = () => {
  const t = useTranslation();
  const { kyc1ed } = useAppSelector(state => state.user.user);
  const {
    handleAddCreditCard,
    creditCardModalIsOpen,
    handleClose,
    creditCards,
    defaultCreditCard,
    dispatch,
    deleteCreditCard,
  } = useCreditCardModal();

  return (
    <BaseModal open={creditCardModalIsOpen} handleClose={handleClose}>
      <div className={styles.creditCardModal}>
        <Typography gutterBottom variant="h5">
          {t('profile.creditCards.title')}
        </Typography>
        {creditCards.map(creditCard => (
          <Grid container className={styles.creditCardModal__itemContainer}>
            <Grid container className={styles.creditCardModal__headerContainer}>
              <Grid item xs={4} md={4} lg={4}>
                {creditCard.name}
              </Grid>
              <Grid item xs={6} md={6} lg={6} className={styles.creditCardModal__default}>
                {defaultCreditCard.id !== creditCard.id && (
                  <Button
                    size="small"
                    onClick={() => dispatch(setDefaultCreditCard(creditCard))}
                    variant="text"
                  >
                    {t('profile.creditCards.defaultButton')}
                  </Button>
                )}
              </Grid>
              <Grid item xs={2} md={2} lg={2}>
                <Delete
                  color="secondary"
                  onClick={() => deleteCreditCard(creditCard.id)}
                  className={styles.creditCardModal__deleteIcon}
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              XXXX - XXXX - XXXX - {creditCard.data.mask}
            </Grid>

            <Grid item xs={2} md={2} lg={2}>
              {t('profile.creditCards.status')}
            </Grid>
            <Grid item xs={2} md={10} lg={10} className={styles.creditCardModal__status}>
              {creditCard.status}
            </Grid>

            {defaultCreditCard.id === creditCard.id && (
              <>
                <Typography>{t('profile.creditCards.default')}</Typography>
                <CreditCard />
              </>
            )}
          </Grid>
        ))}

        <Button fullWidth disabled={!kyc1ed} variant="text" onClick={handleAddCreditCard}>
          {t('profile.creditCards.addButton')}
        </Button>
      </div>
    </BaseModal>
  );
};
