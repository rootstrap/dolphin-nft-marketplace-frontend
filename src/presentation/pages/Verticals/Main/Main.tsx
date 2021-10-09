import { Grid, Typography } from '@material-ui/core';
import AthletesBackground from 'app/assets/AthletesBackground.png';
import athletesBgLeft from 'app/assets/athletes_left.png';
import athletesBgRight from 'app/assets/athletes_right.png';
import AthletesTitle from 'app/assets/AthletesTitle.png';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useParams } from 'react-router';
import { useVertical } from '../useVertical';
import { Item } from './Item';
import { NFT } from 'app/interfaces/NFT/NFT';
import styles from './Main.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const Main = () => {
  const { verticalId } = useParams<{ verticalId?: string }>();
  const { nfts, isLoading } = useVertical();
  const t = useTranslation();

  return (
    <>
      <Grid container className={styles.mainContent}>
        <Grid item md={6} lg={6}>
          <div className={styles.mainContent__text}>
            <img alt="" src={AthletesTitle} className={styles.mainContent__textImg} />
            <Typography variant="h3">{t('home.collection')}</Typography>
            <Typography variant="h5">{t('home.description')}</Typography>
          </div>
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={athletesBgLeft} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesBackground} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={athletesBgRight} className={styles.mainContent__img} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" className={styles.mainContent__text}>
            {t('verticals.listTitle')}
          </Typography>
        </Grid>
      </Grid>

      {isLoading ? (
        <CustomLoader />
      ) : (
        <Grid container className={styles.mainContent}>
          {nfts.map((nft: NFT) => (
            <Grid item xs={12} md={6} lg={4} key={nft.id}>
              <Item
                styles={styles}
                id={nft.id}
                name={nft.name}
                totalQuantity={nft.totalQuantity}
                image={nft.imageUrl}
                price={nft.offerPrice}
                verticalId={verticalId}
                ftxId={nft.ftx_id}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
