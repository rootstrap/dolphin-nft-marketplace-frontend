import { Button, Grid, Typography } from '@material-ui/core';
import { CreditCard, Delete } from '@material-ui/icons';
import { setDefaultCreditCard } from 'app/store/features/creditCardSlice';
import { useCreditCards } from './useCreditCards';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CreditCards.module.scss';

export const CreditCards = () => {
  const t = useTranslation();
  const { creditCards, defaultCreditCard, dispatch, deleteCreditCard } = useCreditCards();

  return (
    <div className={styles.creditCards}>
      <Typography gutterBottom variant="h5">
        {t('profile.creditCards.title')}
      </Typography>
      <Grid container>
        {creditCards.map(creditCard => (
          <Grid item xs={12} md={6} lg={3}>
            <div className={styles.creditCards__itemContainer}>
              <Grid container>
                <Grid container className={styles.creditCards__container}>
                  <Grid item xs={4} md={4} lg={4}>
                    {creditCard.name}
                  </Grid>
                  <Grid item xs={6} md={6} lg={6} className={styles.creditCards__default}>
                    {defaultCreditCard.id !== creditCard.id && (
                      <Button
                        size="small"
                        onClick={() => dispatch(setDefaultCreditCard(creditCard))}
                        variant="text"
                      >
                        {t('profile.creditCards.button')}
                      </Button>
                    )}
                  </Grid>
                  <Grid item xs={2} md={2} lg={2}>
                    <Delete
                      color="secondary"
                      onClick={() => deleteCreditCard(creditCard.id)}
                      className={styles.creditCards__deleteIcon}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  XXXX - XXXX - XXXX - {creditCard.data.mask}
                </Grid>

                <Grid item xs={2} md={2} lg={2}>
                  {t('profile.creditCards.status')}
                </Grid>
                <Grid item xs={2} md={10} lg={10} className={styles.creditCards__status}>
                  {creditCard.status}
                </Grid>
              </Grid>
              {defaultCreditCard.id === creditCard.id && (
                <>
                  <Typography>{t('profile.creditCards.default')}</Typography>
                  <CreditCard />
                </>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
