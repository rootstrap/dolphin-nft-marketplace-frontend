import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import AthletesFirst from 'app/assets/Athletes-1.png';
import AthletesSecond from 'app/assets/Athletes-2.png';
import AthletesThird from 'app/assets/Athletes-3.png';
import AthletesFourth from 'app/assets/Athletes-4.png';
import AthletesFifth from 'app/assets/Athletes-5.png';
import AthletesSixth from 'app/assets/Athletes-6.png';
import FantasyLeague from 'app/assets/VerticalPromotionFantasyLeague.png';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useParams } from 'react-router';
import { HallOfFame } from '../HallOfFame/HallOfFame';
import { Item } from './Item';
import { NFT } from 'app/interfaces/NFT/NFT';
import { Promotion } from '../Promotion/Promotion';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <div className={styles.mainContent__title}>
        <Typography component="div" variant="h5" className={styles.mainContent__titleFeatured}>
          {t('verticals.preTitle')}
        </Typography>
        <Typography component="div" variant="h2" className={styles.mainContent__titleIssuer}>
          {t('verticals.title')}
        </Typography>
        <div>
          <Button className={styles.mainContent__titleButton}>Explore Collection</Button>
        </div>
      </div>
      <Grid container className={styles.mainContent}>
        <Grid item md={2}>
          <img alt="" src={AthletesFirst} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesSecond} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesThird} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesFourth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesFifth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesSixth} className={styles.mainContent__img} />
        </Grid>
      </Grid>

      <HallOfFame />

      {/*
      <Accordion className={styles.mainContent__accordion}>
        <AccordionSummary>
          <Promotion
            imgSrc={VerticalPromotion}
            subtitle={t('verticals.playbooks.title')}
            primaryText={t('verticals.playbooks.primaryText')}
            secondaryText={t('verticals.playbooks.secondaryText')}
            buttonText={t('verticals.playbooks.actionButton')}
          />
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion> */}

      <div className={styles.mainContent__fantasyLeague}>
        <Promotion
          imgSrc={FantasyLeague}
          subtitle={t('verticals.fantasyLeague.title')}
          primaryText={t('verticals.fantasyLeague.primaryText')}
          secondaryText={t('verticals.fantasyLeague.secondaryText')}
          buttonText={t('verticals.fantasyLeague.actionButton')}
        />
      </div>
    </>
  );
};
