import { Typography } from '@material-ui/core';
import { RarityBackgrounds, RaritySigned, RarityTiers } from '.';
import styles from './Rarity.module.scss';

export const Rarity = () => {
  return (
    <div className={styles.rarity}>
      <div className={styles.rarity__title}>
        <Typography variant="h4">Design & Rarity</Typography>
      </div>

      <RarityTiers />
      <RarityBackgrounds />
      <RaritySigned />
    </div>
  );
};
