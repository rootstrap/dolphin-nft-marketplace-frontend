import React, { useContext, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ProfileContext } from '../ProfilePage';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { Attributes } from 'app/interfaces/NFT/NFT';
import { MyCollectionCard } from './MyCollectionCard';
import { DropDownArrow } from 'app/components/DropDownArrow/DropDownArrow';
import styles from './MyCollection.module.scss';

export const MyCollectionItem = ({ name, image, index }: MyCollectionItemProps) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { nfts, nftAttributes, isLoading } = useContext(ProfileContext);

  const nftAttributesFilteredByName = nftAttributes.filter(nft => nft.Athlete.includes(name));
  const nftsFilteredByName = nfts.filter(nft => nft.name.includes(name));
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
        <DropDownArrow isContentVisible={isContentVisible} />
      </div>

      {isContentVisible && (
        <Grid container className={styles.myCollection__itemGrid}>
          {React.Children.toArray(
            nftAttributesFilteredByName.map(item => {
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
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <MyCollectionCard
                    Athlete={item.Athlete}
                    Background={item.Background}
                    imageUrl={item.imageUrl}
                    isNftInArray={isNftInArray}
                    Signed={item.Signed}
                    Sport={item.Sport}
                    Tier={item.Tier}
                  />
                </Grid>
              );
            })
          )}
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
