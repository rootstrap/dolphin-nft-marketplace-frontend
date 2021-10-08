import { Button, Grid, Select, Typography } from '@material-ui/core';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { usePeers } from './usePeers';
import styles from './Peers.module.scss';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';

export const Peers = ({ open, handleClose }: PeersProps) => {
  const { nfts, isLoading } = usePeers();
  console.log(nfts);

  return (
    <BaseModal open={open} handleClose={handleClose} bigModal>
      <Grid container className={styles.sorting}>
        <Grid item lg={8}></Grid>
        <Grid item lg={1}>
          <Typography variant="h6">Sort By</Typography>
        </Grid>
        <Grid item lg={3}>
          <Select fullWidth></Select>
        </Grid>
      </Grid>

      <hr />

      {isLoading ? (
        <CustomLoader />
      ) : (
        nfts.map(nft => (
          <Grid container className={styles.peers} justifyContent="center" key={nft.id}>
            <Grid item md={4} lg={4}>
              {nft.name.slice(0, 10)}
            </Grid>
            <Grid item md={1} lg={2}>
              {nft.totalQuantity && `#${nft.totalQuantity}`}
            </Grid>
            <Grid item md={1} lg={1}>
              {nft.offerPrice && `$${nft.offerPrice}`}
            </Grid>
            <Grid item></Grid>
            <Grid item md={6} lg={5}>
              <div className={styles.peers__buttonContainer}>
                <Button variant="text">See More</Button>
                <Button variant="text">Select and buy</Button>
              </div>
            </Grid>
          </Grid>
        ))
      )}
    </BaseModal>
  );
};

interface PeersProps {
  open: boolean;
  handleClose: () => void;
}

/* <>
            <Grid item md={4} lg={4}>
              Owner name here
            </Grid>
            <Grid item md={1} lg={2}>
              #1025
            </Grid>
            <Grid item md={1} lg={1}>
              $15
            </Grid>
            <Grid item></Grid>
            <Grid item md={6} lg={5}>
              <div className={styles.peers__buttonContainer}>
                <Button variant="text">See More</Button>
                <Button variant="text">Select and buy</Button>
              </div>
            </Grid>
          </> */
