import { Grid, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import { Item } from 'app/pages/Profile/MyGallery/Item';
import { EmptyGallery } from './EmptyGallery';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyGallery.module.scss';

export const GalleryList = ({ nfts }: GalleryListProps) => {
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
          {nfts.map(nft => {
            const { id, name, offerPrice, imageUrl, videoUrl, animationUrl, issuer } = nft;
            return (
              <Grid item xs={12} md={6} lg={4} className={styles.list__collection} key={id}>
                <Item
                  id={id}
                  name={name}
                  image={imageUrl}
                  animation={animationUrl}
                  video={videoUrl}
                  offerPrice={offerPrice}
                  issuer={issuer}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <EmptyGallery />
      )}
    </div>
  );
};

interface GalleryListProps {
  nfts: NFT[];
}
