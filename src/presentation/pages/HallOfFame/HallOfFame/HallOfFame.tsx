import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { Item } from '../Main/Item';
import { Promotion } from '../Promotion/Promotion';
import { useHallOfFame } from './useHallOfFame';
import { NFT } from 'app/interfaces/NFT/NFT';
import { ItemBanner } from './ItemBanner/ItemBanner';
import { FilterButton } from './FilterButton/FilterButton';
import VerticalPromotion from 'app/assets/VerticalPromotion.png';
import useTranslation from 'app/hooks/useTranslation';
import mainContentStyles from '../Main/Main.module.scss';
import styles from './HallOfFame.module.scss';

export const HallOfFame = () => {
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
            <Grid container>
              {itemBanners.map(({ image, legend: itemLegend }) => (
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <ItemBanner
                    setLegend={setLegend}
                    image={image}
                    legend={itemLegend}
                    selectedLegend={legend}
                  />
                </Grid>
              ))}
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
