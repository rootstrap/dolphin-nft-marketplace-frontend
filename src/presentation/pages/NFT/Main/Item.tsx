import { Button, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import { NFT } from 'app/interfaces/NFT/NFT';

export const Item = ({ styles, nft }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.mainContent__itemDescription}>
      <Typography className={styles.mainContent__itemDescriptionTitle} component="div">
        {nft?.collection}
      </Typography>

      <Typography variant="h5" component="div">
        {nft?.name}
      </Typography>
      <Typography component="div">{nft?.description}</Typography>

      <div className={styles.mainContent__priceContainer}>
        <div className={styles.mainContent__priceItem}>
          <Typography component="div" variant="h6">
            {t('nft.floorPrice')}
          </Typography>
          <Typography component="p">{nft?.offerPrice}</Typography>
        </div>
        <div className={styles.mainContent__priceItem}>
          <Typography component="div" variant="h6">
            {t('nft.totalReleased')}
          </Typography>
          <Typography component="p">{nft?.number}</Typography>
        </div>
        <div className={styles.mainContent__priceItem}>
          <Typography component="div" variant="h6">
            {t('nft.forSale')}
          </Typography>
          <Typography component="p">{nft?.totalQuantity}</Typography>
        </div>
      </div>

      <div className={styles.mainContent__buttonContainer}>
        <Button variant="contained" fullWidth size="large">
          {t('nft.buyButton')}
        </Button>
        <Button fullWidth size="large">
          {t('nft.peersButton')}
        </Button>
      </div>
    </div>
  );
};

interface ItemProps {
  styles: any;
  nft?: NFT;
}
