import { useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { useUserBalance } from './useUserBalance';
import { Convert } from 'app/components/Convert/Convert';
import { FundWalletModal } from 'app/components/FundWalletModal/FundWalletModal';
import { UserBalanceHeader, UserBalanceRow } from './';
import { minimunBalance } from 'app/constants/constants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './UserBalance.module.scss';

export const UserBalance = () => {
  const t = useTranslation();
  const { balances } = useUserBalance();
  const [isFundModalOpen, setIsFundModalOpen] = useState(false);

  const handleOpenFundModal = () => setIsFundModalOpen(true);
  const handleCloseFundModal = () => setIsFundModalOpen(false);

  return (
    <>
      <div className={styles.userBalance}>
        <Grid container justifyContent="center">
          {!!balances.length && (
            <>
              <Typography variant="h4" gutterBottom align="center">
                {t('profile.userBalance.title')}
              </Typography>

              <Grid container className={styles.userBalance__container}>
                <UserBalanceHeader />
                {balances.map(
                  balance => balance.total > minimunBalance && <UserBalanceRow balance={balance} />
                )}
              </Grid>
            </>
          )}
        </Grid>
      </div>

      <div className={styles.userBalance__deposit}>
        <Button fullWidth onClick={handleOpenFundModal}>
          {t('profile.userBalance.depositButton')}
        </Button>
      </div>

      <FundWalletModal open={isFundModalOpen} handleClose={handleCloseFundModal} />

      <Convert />
    </>
  );
};
