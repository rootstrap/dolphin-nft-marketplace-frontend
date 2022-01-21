import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { Item } from '../Main/Item';
import { useParams } from 'react-router';
import { Promotion } from '../Promotion/Promotion';
import { useHallOfFame } from './useHallOfFame';
import VerticalPromotion from 'app/assets/VerticalPromotion.png';
import useTranslation from 'app/hooks/useTranslation';
import { NFT } from 'app/interfaces/NFT/NFT';
import { ItemBanner } from './ItemBanner/ItemBanner';
import { FilterButton } from './FilterButton/FilterButton';
import MoreSoon from 'app/assets/Athlete-MoreSoon.png';
import styles from './HallOfFame.module.scss';
import mainContentStyles from '../Main/Main.module.scss';

export const HallOfFame = () => {
  const { verticalId } = useParams<{ verticalId?: string }>();
  const { nfts, isLoading, setTier, setLegend, legend, tier, itemBanners, tiers } = useHallOfFame();
  const t = useTranslation();

  return (
    <Accordion className={styles.hallOfFame__accordion} id="hallOfFame">
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
              {itemBanners.map(({ image, legend: itemLegend }) => (
                <ItemBanner setLegend={setLegend} image={image} legend={itemLegend} selectedLegend={legend} />
              ))}
              <div className={styles.hallOfFame__itemImgContainer}>
                <div className={styles.hallOfFame__imgContainer}>
                  <img src={MoreSoon} alt="More Soon" className={styles.hallOfFame__imgContainerImg} />
                  <Typography className={styles.hallOfFame__imgContainerText}>More Soon</Typography>
                </div>
              </div>
            </Grid>
            <Grid container justifyContent="flex-end">
              {tiers.map(item => (
                <FilterButton setTier={setTier} selectedTier={tier} tier={item} styles={styles} />
              ))}
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