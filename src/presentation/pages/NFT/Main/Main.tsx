import { Grid } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useParams } from 'react-router';
import { Item } from './Item';
import { useNFT } from './useNFT';
import styles from './Main.module.scss';

export const Main = () => {
  const { nftId } = useParams<{ nftId: string }>();
  const { nft, isLoading } = useNFT(nftId);

  return (
    <div className={styles.mainContent}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Grid container className={styles.mainContent__container}>
          <Grid item className={styles.mainContent__item} xs={12} lg={6}>
            <iframe className={styles.mainContent__itemVideo} src={nft?.videoUrl} title={nft?.name} />
          </Grid>
          <Grid item className={styles.mainContent__item} xs={12} lg={6}>
            <Item nft={nft} styles={styles} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
