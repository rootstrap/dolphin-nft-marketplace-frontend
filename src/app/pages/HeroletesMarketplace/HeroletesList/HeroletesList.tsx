import { Grid } from '@material-ui/core';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { useContext } from 'react';
import { HeroleteItem } from '../HeroleteItem/HeroleteItem';
import { NFTDetailsContext } from '../Marketplace';
import React from 'react';

export const HeroletesList = () => {
  const { heroletes, isLoading } = useContext(NFTDetailsContext);

  return (
    <Grid container>
      {isLoading ? (
        <CustomLoader />
      ) : (
        React.Children.toArray(
          heroletes?.map(herolete => (
            <Grid item xs={6} lg={4} style={{ padding: '0.5rem' }}>
              <HeroleteItem
                animation={herolete.animationUrl}
                collection={herolete.collection}
                currency={herolete.quoteCurrency}
                id={herolete.id}
                name={herolete.attributes.Athlete}
                price={herolete.offerPrice}
                sport={herolete.attributes.Sport}
                tier={herolete.attributes.Tier}
              />
            </Grid>
          ))
        )
      )}
    </Grid>
  );
};
