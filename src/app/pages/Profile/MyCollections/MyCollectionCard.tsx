import { useState } from 'react';
import { Typography } from '@material-ui/core';
import styles from './MyCollection.module.scss';

export const MyCollectionCard = ({
  Athlete,
  Background,
  imageUrl,
  isNftInArray,
  Signed,
  Sport,
  Tier,
}: MyCollectionCardProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleMouseEnter = () => setIsDescriptionVisible(true);
  const handleMouseLeave = () => setIsDescriptionVisible(false);

  return (
    <div
      className={styles.myCollection__itemGrid}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt={`${Athlete} ${Tier} ${Background} ${Signed}`}
        style={isNftInArray ? { filter: 'none' } : null}
      />

      <div
        className={styles.myCollection__itemGridText}
        style={{ visibility: isDescriptionVisible ? 'initial' : 'hidden' }}
      >
        <Typography variant="subtitle1">Athlete: {Athlete}</Typography>
        <Typography variant="subtitle1">Sport: {Sport}</Typography>
        <Typography variant="subtitle1">Tier: {Tier}</Typography>
        <Typography variant="subtitle1">Background: {Background}</Typography>
      </div>
    </div>
  );
};

interface MyCollectionCardProps {
  Athlete: string;
  Background: string;
  imageUrl: string;
  isNftInArray: boolean;
  Signed: string;
  Sport: string;
  Tier: string;
}
