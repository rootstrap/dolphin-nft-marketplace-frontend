import { Grid, Typography } from '@material-ui/core';
import AthletesBackground from 'app/assets/AthletesBackground.png';
import athletesBgLeft from 'app/assets/athletes_left.png';
import athletesBgRight from 'app/assets/athletes_right.png';
import SportsTitle from 'app/assets/SportsTitle.png';
import VerticalPromotion from 'app/assets/VerticalPromotion.png';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useParams } from 'react-router';
import { useVertical } from '../useVertical';
import { Item } from './Item';
import { NFT } from 'app/interfaces/NFT/NFT';
import { Promotion } from '../Promotion/Promotion';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';

export const Main = () => {
  const { verticalId } = useParams<{ verticalId?: string }>();
  const { nfts, isLoading } = useVertical();
  const t = useTranslation();

  return (
    <>
      <Grid container className={styles.mainContent}>
        <Grid item md={6} lg={6}>
          <div className={styles.mainContent__text}>
            <img alt="" src={SportsTitle} className={styles.mainContent__textImg} />
            <Typography variant="h3" gutterBottom>
              {t('home.collection')}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t('sports.title')}
            </Typography>
            <Typography variant="h6">{t('sports.description')}</Typography>
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
      </Grid>

      <Promotion
        imgSrc={VerticalPromotion}
        title={t('verticals.promotion.title')}
        subtitle={t('verticals.promotion.subtitle')}
        primaryText={t('verticals.promotion.primaryText')}
        secondaryText={t('verticals.promotion.secondaryText')}
      />

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
                series={nft.series}
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
