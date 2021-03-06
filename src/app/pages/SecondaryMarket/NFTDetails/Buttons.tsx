import { useContext } from 'react';
import { Button, Link as MuiLink, TextField, Typography } from '@material-ui/core';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { NFTDetailsContext } from './NFTDetails';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';
import styles from './NftDetails.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const Buttons = () => {
  const {
    isInputVisible,
    setIsInputVisible,
    isSellNftLoading,
    nftPrice,
    setNftPrice,
    nft,
    handleSellNft,
    cancelOfferNft,
    setIsWithdrawModalOpen,
  } = useContext(NFTDetailsContext);
  const t = useTranslation();

  return (
    <div>
      {nft?.offerPrice && (
        <Typography className={styles.secondaryMarket__cancelSaleButton} onClick={cancelOfferNft}>
          {t('nft.sellNft.cancelSellButton')}
        </Typography>
      )}
      <MuiLink onClick={() => setIsWithdrawModalOpen(true)}> {t('nft.sellNft.withdrawNft')}</MuiLink>
      {isInputVisible ? (
        <div className={styles.secondaryMarket__buttons}>
          {isSellNftLoading ? (
            <CustomLoader />
          ) : (
            <>
              <TextField
                className={styles.secondaryMarket__buttonsInput}
                inputProps={{ min: 0, step: 0.00001, style: { textAlign: 'center' } }}
                placeholder={`Price in ${nft?.quoteCurrency}`}
                fullWidth
                value={nftPrice}
                onChange={e => setNftPrice(e.target.value)}
                size="medium"
                type="number"
              />
              <Button variant="contained" fullWidth onClick={handleSellNft}>
                {t('nft.sellNft.saleButton')}
              </Button>
              <Button fullWidth onClick={() => setIsInputVisible(false)}>
                {t('nft.sellNft.cancelButton')}
              </Button>
            </>
          )}
        </div>
      ) : (
        <div className={styles.secondaryMarket__buttons}>
          <div>
            <Button variant="contained" fullWidth onClick={() => setIsInputVisible(true)}>
              {nft?.offerPrice ? t('nft.sellNft.modifyPriceButton') : t('nft.sellNft.saleButton')}
            </Button>
          </div>
          <div>
            <Link to={routesPaths.profile}>
              <Button fullWidth>{t('nft.sellNft.collectionButton')}</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
