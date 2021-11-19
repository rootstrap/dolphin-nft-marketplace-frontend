import { Button, Grid, Typography } from '@material-ui/core';
import AthletesFirst from 'app/assets/Athletes-1.png';
import AthletesSecond from 'app/assets/Athletes-2.png';
import AthletesThird from 'app/assets/Athletes-3.png';
import AthletesFourth from 'app/assets/Athletes-4.png';
import AthletesFifth from 'app/assets/Athletes-5.png';
import AthletesSixth from 'app/assets/Athletes-6.png';
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
      <div className={styles.mainContent__title}>
        <Typography component="div" variant="h5" className={styles.mainContent__titleFeatured}>
          Featured Collection
        </Typography>
        <Typography component="div" variant="h2" className={styles.mainContent__titleIssuer}>
          Hall of Fame Village
        </Typography>
        <div>
          <Button className={styles.mainContent__titleButton}>Explore Collection</Button>
        </div>
      </div>
      <Grid container className={styles.mainContent}>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesFirst} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesSecond} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesThird} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesFourth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesFifth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2} lg={2}>
          <img alt="" src={AthletesSixth} className={styles.mainContent__img} />
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
