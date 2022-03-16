import { Grid } from '@material-ui/core';
import { useResponsive } from 'app//hooks/useResponsive';
import { Balance } from 'app/interfaces/common/Balance';
import styles from './UserBalance.module.scss';

export const UserBalanceRow = ({ balance }: UserBalanceRowProps) => {
  const { isMobileView } = useResponsive();

  return (
    <Grid container justifyContent="space-around" key={balance.coin} className={styles.userBalance__item}>
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
  );
};

interface UserBalanceRowProps {
  balance: Balance;
}
