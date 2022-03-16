import { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Item } from 'app/pages/Profile/MyGallery/Item';
import { EmptyGallery } from './EmptyGallery';
import useTranslation from 'app/hooks/useTranslation';
import ReactPaginate from 'react-paginate';
import { ProfileContext } from '../ProfilePage';
import styles from './MyGallery.module.scss';

export const GalleryList = () => {
  const t = useTranslation();
  const { nfts, handlePageClick, pageCount, pageOffset } = useContext(ProfileContext);

  return (
    <div className={styles.list}>
      <div className={styles.list__title}>
        <Typography gutterBottom variant="h4">
          {t('profile.collectionTitle')}
        </Typography>
      </div>
      {Boolean(nfts.length) ? (
        <Grid container justifyContent="center">
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
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            previousLabel="< previous"
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            forcePage={pageOffset}
            className={styles.list__paginator}
          />
        </Grid>
      ) : (
        <EmptyGallery />
      )}
    </div>
  );
};
