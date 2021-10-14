import { Button, Grid, Typography } from '@material-ui/core';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { NFT } from 'app/interfaces/NFT/NFT';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Peers.module.scss';

export const Peers = ({ open, handleClose, nfts }: PeersProps) => {
  const t = useTranslation();

  return (
    <BaseModal open={open} handleClose={handleClose} bigModal>
      <div className={styles.peers}>
        <Grid container className={styles.peers__title}>
          <Grid item lg={12}>
            <Typography variant="h4">{nfts[0]?.series}</Typography>
          </Grid>
        </Grid>

        <hr className={styles.peers__separator} />
        {nfts.map(nft => (
          <Grid container justifyContent="center" key={nft.id} className={styles.peers__itemContainer}>
            <Grid item md={4} lg={4}>
              {nft.name.slice(0, 10)}
            </Grid>
            <Grid item md={1} lg={2}>
              {nft.totalQuantity && `#${nft.totalQuantity}`}
            </Grid>
            <Grid item md={1} lg={1}>
              {nft.offerPrice && `$${nft.offerPrice}`}
            </Grid>
            <Grid item lg={2}></Grid>
            <Grid item md={6} lg={3}>
              <Button variant="text" fullWidth>
                {t('peers.buyButton')}
              </Button>
            </Grid>
          </Grid>
        ))}
      </div>
    </BaseModal>
  );
};

interface PeersProps {
  nfts: NFT[];
  open: boolean;
  handleClose: () => void;
}
