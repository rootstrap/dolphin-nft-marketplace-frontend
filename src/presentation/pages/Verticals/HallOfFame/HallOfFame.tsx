import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { Item } from '../Main/Item';
import { useParams } from 'react-router';
import { Promotion } from '../Promotion/Promotion';
import { useHallOfFame } from './useHallOfFame';
import VerticalPromotion from 'app/assets/VerticalPromotion.png';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HallOfFame.module.scss';
import { NFT } from 'app/interfaces/NFT/NFT';

export const HallOfFame = () => {
  const { verticalId } = useParams<{ verticalId?: string }>();
  const { nfts, isLoading } = useHallOfFame();
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
    </Accordion>
  );
};
