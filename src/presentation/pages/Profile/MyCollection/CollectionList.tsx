import { Grid, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import { FillsResult } from 'app/interfaces/NFT/NFT';
import { Item } from 'presentation/pages/Profile/MyCollection/Item';
import { EmptyCollection } from './EmptyCollection';
import styles from './MyCollection.module.scss';

export const CollectionList = ({ nfts }: CollectionListProps) => {
  const t = useTranslation();
  return (
    <div className={styles.list}>
      <div className={styles.list__title}>
        <Typography gutterBottom variant="h4">
          {t('profile.collectionTitle')}
        </Typography>
      </div>
      {nfts.length ? (
        <Grid container className={styles.list__collection}>
          {nfts.map(({ nft }) => {
            const { id, ftx_id, name, totalQuantity, offerPrice, imageUrl } = nft;
            return (
              <Grid item xs={12} md={6} lg={4} className={styles.list__collection} key={id}>
                <Item
                  id={id}
                  ftxId={ftx_id}
                  name={name}
                  totalQuantity={totalQuantity}
                  price={offerPrice}
                  image={imageUrl}
                  verticalId={'verticals/sports'}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <EmptyCollection />
      )}
    </div>
  );
};

interface CollectionListProps {
  nfts: FillsResult[];
}
