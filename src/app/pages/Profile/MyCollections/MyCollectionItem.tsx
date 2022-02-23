import { useContext, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ArrowDropDownOutlined, ArrowDropUpOutlined } from '@material-ui/icons';
import { ProfileContext } from '../ProfilePage';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { Attributes } from 'app/interfaces/NFT/NFT';
import { MyCollectionCard } from './MyCollectionCard';
import styles from './MyCollection.module.scss';

export const MyCollectionItem = ({ name, index }: MyCollectionItemProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { nfts, nftAttributes, isLoading } = useContext(ProfileContext);

  const nftsFilteredByName = nfts.filter(nft => nft.name.includes(name));
  const nftAttributesFilteredByName = nftAttributes.filter(nft => nft.Athlete.includes(name));
  const nftsWithAttributes = nftsFilteredByName.map(nft => nft.attributes) as Attributes[];

  const handleSetVisibility = () => setIsContentVisible(!isContentVisible);

  if (isLoading) return <CustomLoader />;

  return (
    <div className={styles.myCollection__item}>
      <div
        className={styles.myCollection__itemTitle}
        onClick={handleSetVisibility}
        onKeyDown={handleSetVisibility}
        role="button"
        tabIndex={index}
      >
        <Typography variant="h6">{name}</Typography>

        {isContentVisible ? (
          <ArrowDropUpOutlined fontSize="large" />
        ) : (
          <ArrowDropDownOutlined fontSize="large" />
        )}
      </div>

      {isContentVisible && (
        <Grid container className={styles.myCollection__itemGrid}>
          {nftAttributesFilteredByName.map(item => {
            const isNftInArray = !!nftsWithAttributes.find(
              ({ Athlete, Background, Collection, Signed, Sport, Tier }) =>
                Athlete === item.Athlete &&
                Background === item.Background &&
                Collection === item.Collection &&
                Signed === item.Signed &&
                Sport === item.Sport &&
                Tier === item.Tier
            );

            return (
              <Grid item xs={4} sm={3} md={2} lg={2}>
                <MyCollectionCard
                  Athlete={item.Athlete}
                  Tier={item.Tier}
                  Background={item.Background}
                  Signed={item.Signed}
                  isNftInArray={isNftInArray}
                  imageUrl={item.imageUrl}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

interface MyCollectionItemProps {
  image: string;
  index: number;
  name: string;
  sport: string;
}
