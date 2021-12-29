import { Button } from '@material-ui/core';
import { ConnectWalletButton } from '@gokiprotocol/walletkit';
import { MintCandyMachine } from '../MintCandyMachine/MintCandyMachine';
import { candyMachineConfig } from 'app/constants/creatures/candyMachineConfig';
import { useWalletKit } from './useWalletKit';
import { useResponsive } from 'app/hooks/useResponsive';
import useTranslation from 'app/hooks/useTranslation';
import styles from './WalletKit.module.scss';

export const WalletKit = () => {
  const t = useTranslation();
  const { connection, treasury, config, candyMachineId, startDateSeed, txTimeout } = candyMachineConfig;
  const { wallet, isValidAddress, disconnect } = useWalletKit();
  const { isMobileView } = useResponsive();

  return (
    <>
      {wallet ? (
        <>
          <MintCandyMachine
            candyMachineId={candyMachineId}
            config={config}
            connection={connection}
            startDate={startDateSeed}
            treasury={treasury}
            txTimeout={txTimeout}
            wallet={wallet}
            isValidAddress={isValidAddress}
          />
          <Button onClick={disconnect}>{t('creatures.whitelist.disconnect')}</Button>
        </>
      ) : (
        <div className={styles.walletKit}>
          <ConnectWalletButton style={WalletButtonStyle} />
          {!isMobileView && <div className={styles.walletKit__text}>{t('creatures.whitelist.welcome')}</div>}
        </div>
      )}
    </>
  );
};

const WalletButtonStyle = {
  backgroundColor: 'black',
  fontFamily: 'The Neue',
  color: 'white',
  justifyContent: 'center',
  margin: '1rem',
  width: '20rem',
};
