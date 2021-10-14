import { Grid, Typography } from '@material-ui/core';
import { Item } from './Item';
import { useMyCollection } from './useMyCollection';
import { NFT } from 'app/interfaces/NFT/NFT';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const MyCollectionNfts = () => {
  const { nfts, isLoading } = useMyCollection();
  const t = useTranslation();

  return (
    <Grid container className={styles.myCollectionContent}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Typography variant="h4">{t('profile.collectionTitle')}</Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        <Grid container spacing={4}>
          {nfts.map((nft: NFT) => (
            <Grid item xs={12} md={6} lg={4} key={nft.id}>
              <Item
                styles={styles}
                id={nft.id}
                name={nft.name}
                totalQuantity={nft.totalQuantity}
                image={nft.imageUrl}
                ftxId={nft.ftx_id}
                verticalId={'verticals/sports'}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
