import { Button, Typography } from '@material-ui/core';
import CreaturesBackground from 'app/assets/CreaturesBackground.png';
import { WalletKitProvider } from '@gokiprotocol/walletkit';
import styles from './MainContent.module.scss';
import { WalletKit } from '../SolanaWalletKit/WalletKit';

export const MainContent = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.mainContent__background}>
          <img src={CreaturesBackground} alt="" />
        </div>
        <div className={styles.mainContent__backgroundButton}>
          <WalletKitProvider
            defaultNetwork="devnet"
            app={{
              name: 'Creatures Marketplace',
            }}
          >
            <WalletKit />
          </WalletKitProvider>
        </div>
      </div>

      <div className={styles.legend}>
        <Typography variant="h5" className={styles.legend__header}>
          THE CREATURE CHRONICLES IS A MULTI-SEASON GRAPHIC EVENT, WOVEN THROUGH THE UNIVERSE, BUILT IN THE
          METAVERSE AND READY FOR EXPLORATION BY OUR COMMUNITY.
        </Typography>
        <br />
        <Typography variant="h5" className={styles.legend__header}>
          EXILED ALIENS IS THE FIRST CHAPTER ON THIS GALACTIC JOYRIDE.
        </Typography>
      </div>
    </>
  );
};
