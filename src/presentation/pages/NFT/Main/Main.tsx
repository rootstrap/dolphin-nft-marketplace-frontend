import { Grid, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useGetNftDetailsMutation } from 'infrastructure/services/nft/NftService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Item } from './Item';
import styles from './Main.module.scss';

export const Main = () => {
  const { nftId } = useParams<{ nftId: string }>();
  const [nft, setNft] = useState<NFT>();
  const [getNftDetails, { isLoading, isError, isSuccess }] = useGetNftDetailsMutation();

  const loadData = async () => {
    const data: any = await getNftDetails(nftId);
    console.log(data.data);
    setNft(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.mainContent}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Grid container className={styles.mainContent__container}>
          <Grid item className={styles.mainContent__item} xs={12} lg={6}>
            <iframe className={styles.mainContent__itemVideo} src={nft?.videoUrl} title={nft?.name} />
          </Grid>
          <Grid item className={styles.mainContent__item} xs={12} lg={6}>
            <Item nft={nft} styles={styles} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
