import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, Typography } from '@material-ui/core';
import { Remove, Add } from '@material-ui/icons';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { Item } from '../Main/Item';
import { useParams } from 'react-router';
import { Promotion } from '../Promotion/Promotion';
import { useHallOfFame } from './useHallOfFame';
import VerticalPromotion from 'app/assets/VerticalPromotion.png';
import useTranslation from 'app/hooks/useTranslation';
import { NFT } from 'app/interfaces/NFT/NFT';
import { LEGENDS, TIERS } from 'app/constants/contants';
import MarcusAllen from 'app/assets/Athlete-MarcusAllen.png';
import DoakWalker from 'app/assets/Athlete-DoakWalker.png';
import EarlCampbell from 'app/assets/Athlete-EarlCampbell.png';
import JoeTheissmann from 'app/assets/Athlete-JoeTheissmann.png';
import ShannonSharpe from 'app/assets/Athlete-ShannonSharpe.png';
import TimBrown from 'app/assets/Athlete-TimBrown.png';
import MoreSoon from 'app/assets/Athlete-MoreSoon.png';
import styles from './HallOfFame.module.scss';
import mainContentStyles from '../Main/Main.module.scss';
import { ItemBanner } from './ItemBanner/ItemBanner';

export const HallOfFame = () => {
  const { verticalId } = useParams<{ verticalId?: string }>();
  const { nfts, isLoading, setTier, setLegend, legend, tier } = useHallOfFame();
  const t = useTranslation();

  return (
    <Accordion className={styles.hallOfFame__accordion}>
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
          <Grid container>
            <Grid container justifyContent="center">
              <ItemBanner
                setLegend={setLegend}
                image={MarcusAllen}
                legend={LEGENDS.marcusAllen}
                selectedLegend={legend}
              />
              <ItemBanner
                setLegend={setLegend}
                image={DoakWalker}
                legend={LEGENDS.doakWalker}
                selectedLegend={legend}
              />
              <ItemBanner
                setLegend={setLegend}
                image={EarlCampbell}
                legend={LEGENDS.earlCampbell}
                selectedLegend={legend}
              />
              <ItemBanner
                setLegend={setLegend}
                image={JoeTheissmann}
                legend={LEGENDS.joeTheissmann}
                selectedLegend={legend}
              />
              <ItemBanner
                setLegend={setLegend}
                image={ShannonSharpe}
                legend={LEGENDS.shannonSharpe}
                selectedLegend={legend}
              />
              <ItemBanner
                setLegend={setLegend}
                image={TimBrown}
                legend={LEGENDS.timBrown}
                selectedLegend={legend}
              />
              <div className={styles.hallOfFame__itemImgContainer}>
                <div className={styles.hallOfFame__imgContainer}>
                  <img src={MoreSoon} alt="More Soon" className={styles.hallOfFame__imgContainerImg} />
                  <Typography className={styles.hallOfFame__imgContainerText}>{LEGENDS.moreSoon}</Typography>
                </div>
              </div>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  size="small"
                  className={styles.hallOfFame__tierButton}
                  onClick={() => setTier(currentValue => (currentValue !== TIERS.phenom ? TIERS.phenom : ''))}
                  endIcon={tier === TIERS.phenom ? <Remove /> : <Add />}
                >
                  Phenom
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  className={styles.hallOfFame__tierButton}
                  onClick={() => setTier(currentValue => (currentValue !== TIERS.star ? TIERS.star : ''))}
                  endIcon={tier === TIERS.star ? <Remove /> : <Add />}
                >
                  Star
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  className={styles.hallOfFame__tierButton}
                  onClick={() => setTier(currentValue => (currentValue !== TIERS.icon ? TIERS.icon : ''))}
                  endIcon={tier === TIERS.icon ? <Remove /> : <Add />}
                >
                  Icon
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  className={styles.hallOfFame__tierButton}
                  onClick={() => setTier(currentValue => (currentValue !== TIERS.legend ? TIERS.legend : ''))}
                  endIcon={tier === TIERS.legend ? <Remove /> : <Add />}
                >
                  Legend
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              {nfts.map((nft: NFT) => (
                <Grid item xs={12} md={6} lg={4} key={nft.id}>
                  <Item
                    styles={mainContentStyles}
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
          </Grid>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
