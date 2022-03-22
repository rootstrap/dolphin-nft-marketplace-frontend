import { Grid } from '@material-ui/core';
import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { AttributesFilters } from './AttributesFilter/AttributesFilter';
import { HeroletesList } from './HeroletesList/HeroletesList';
import { Main } from './Main/Main';
import { Marketplace } from './Marketplace';

const HeroletesMarketplacePage = () => (
  <TopBarLayout
    pageComponent={
      <Marketplace>
        <Main />
        <Grid container>
          <Grid item xs={12} md={4}>
            <AttributesFilters />
          </Grid>
          <Grid item xs={12} md={8}>
            <HeroletesList />
          </Grid>
        </Grid>
      </Marketplace>
    }
  />
);

export default HeroletesMarketplacePage;
