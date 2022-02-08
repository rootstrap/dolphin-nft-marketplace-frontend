import { Grid, Typography } from '@material-ui/core';
import { useUserBalance } from './useUserBalance';
import { useResponsive } from '../../../hooks/useResponsive';
import { Convert } from 'app/components/Convert/Convert';
import useTranslation from 'app/hooks/useTranslation';
import styles from './UserBalance.module.scss';

export const UserBalance = () => {
  const t = useTranslation();
  const { balances } = useUserBalance();
  const { isMobileView } = useResponsive();

  return (
    <>
      <div className={styles.userBalance}>
        <Grid container justifyContent="center">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom align="center">
                {t('profile.userBalance.title')}
              </Typography>
            </Grid>
          </Grid>

          {Boolean(balances.length) && (
            <Grid container className={styles.userBalance__container}>
              <Grid container justifyContent="space-around" className={styles.userBalance__heading}>
                <Grid item xs={2}>
                  <Typography variant="h6">{t('profile.userBalance.coinColumn')}</Typography>
                </Grid>
                {!isMobileView && (
                  <Grid item xs={2}>
                    <Typography variant="h6" className={styles.userBalance__column__balance}>
                      {t('profile.userBalance.balanceColumn')}
                    </Typography>
                  </Grid>
                )}

                <Grid item xs={2}>
                  <Typography variant="h6">{t('profile.userBalance.availableBalanceColumn')}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">{t('profile.userBalance.usdValueColumn')}</Typography>
                </Grid>
              </Grid>

              {balances.map(
                balance =>
                  balance.total > 0.00001 && (
                    <Grid
                      container
                      justifyContent="space-around"
                      key={balance.coin}
                      className={styles.userBalance__item}
                    >
                      <Grid item xs={2} className={styles.userBalance__column}>
                        {balance.coin}
                      </Grid>
                      {!isMobileView && (
                        <Grid item xs={2} className={styles.userBalance__column__balance}>
                          {balance.total}
                        </Grid>
                      )}

                      <Grid item xs={2} className={styles.userBalance__column}>
                        {balance.availableWithoutBorrow}
                      </Grid>
                      <Grid item xs={2} className={styles.userBalance__column}>
                        ${balance.usdValue.toFixed(2)}
                      </Grid>
                    </Grid>
                  )
              )}
            </Grid>
          )}
        </Grid>
      </div>

      <Convert />
    </>
  );
};
