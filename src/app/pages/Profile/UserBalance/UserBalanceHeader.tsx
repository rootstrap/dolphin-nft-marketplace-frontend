import { Grid, Typography } from '@material-ui/core';
import { useResponsive } from 'app/hooks/useResponsive';
import useTranslation from 'app/hooks/useTranslation';
import styles from './UserBalance.module.scss';

export const UserBalanceHeader = () => {
  const t = useTranslation();
  const { isMobileView } = useResponsive();

  return (
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
  );
};
