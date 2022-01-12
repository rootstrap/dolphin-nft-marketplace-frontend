import { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';

export const Buttons = () => {
  const { isInputVisible, setIsInputVisible, isSellNftLoading, nftPrice, setNftPrice, handleSellNft } =
    useContext(NFTDetailsContext);

  return (
    <div>
      {isInputVisible ? (
        <div className={styles.secondaryMarket__buttons}>
          {isSellNftLoading ? (
            <CustomLoader />
          ) : (
            <>
              <TextField
                className={styles.secondaryMarket__buttonsInput}
                inputProps={{ min: 0, step: 0.00001, style: { textAlign: 'center' } }}
                placeholder="price"
                fullWidth
                value={nftPrice}
                onChange={e => setNftPrice(e.target.value)}
                size="medium"
                type="number"
              />
              <Button variant="contained" fullWidth onClick={handleSellNft}>
                Sell
              </Button>
              <Button fullWidth onClick={() => setIsInputVisible(false)}>
                Cancel
              </Button>
            </>
          )}
        </div>
      ) : (
        <div className={styles.secondaryMarket__buttons}>
          <div>
            <Button variant="contained" fullWidth onClick={() => setIsInputVisible(true)}>
              Put it for sale
            </Button>
          </div>

          <div>
            <Link to={routesPaths.profile}>
              <Button fullWidth>My Collection</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
