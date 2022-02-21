import { Grid } from '@material-ui/core';
import { PromotionImg } from './PromotionImg';
import Sports from 'app/assets/Sports.png';
import Creatures from 'app/assets/Creatures.png';
import Heroletes from 'app/assets/remarkable_comingSoon.png';

export const PromotionImages = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <PromotionImg src={Sports} title="Hall of Fame Village Media" link="halloffame" />
      </Grid>

      <Grid item xs={4}>
        <PromotionImg src={Heroletes} title="Heroletes" link="heroletes" />
      </Grid>

      <Grid item xs={4}>
        <PromotionImg
          src={Creatures}
          title="Creatures Chronicles"
          link={process.env.REACT_APP_CREATURES_URL}
          isHyperlink
        />
      </Grid>
    </Grid>
  );
};
