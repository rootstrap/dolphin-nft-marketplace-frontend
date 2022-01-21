import { Button, Grid } from '@material-ui/core';
import { Remove, Add } from '@material-ui/icons';
import { Tiers } from 'app/interfaces/HallOfFame/HallOfFame';
import React from 'react';

export const FilterButton = ({ setTier, selectedTier, tier, styles }: filterButtonProps) => (
  <Grid item>
    <Button
      size="small"
      className={styles.hallOfFame__tierButton}
      onClick={() => setTier((currentValue: Tiers) => (currentValue !== tier ? tier : ''))}
      endIcon={selectedTier === tier ? <Remove /> : <Add />}
    >
      {tier}
    </Button>
  </Grid>
);

interface filterButtonProps {
  setTier: React.Dispatch<React.SetStateAction<Tiers>>;
  selectedTier: Tiers;
  tier: Tiers;
  styles: any;
}
