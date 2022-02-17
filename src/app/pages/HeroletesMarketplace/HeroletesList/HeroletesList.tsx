import { Grid } from '@material-ui/core';
import { HeroleteItem } from '../HeroleteItem/HeroleteItem';
import { useHeroleteList } from './useHeroleteList';

export const HeroletesList = () => {
  const { heroletes } = useHeroleteList();

  return (
    <Grid container>
      {heroletes.map(herolete => (
        <Grid item xs={6} md={4} style={{ padding: '0.5rem' }}>
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
      ))}
    </Grid>
  );
};
