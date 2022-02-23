import { useState } from 'react';
import { Typography } from '@material-ui/core';
import styles from './MyCollection.module.scss';

export const MyCollectionCard = ({
  Athlete,
  Tier,
  Background,
  Signed,
  isNftInArray,
  imageUrl,
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
        style={isNftInArray ? { filter: 'none' } : {}}
      />
      <div
        className={styles.myCollection__itemGridText}
        style={{ visibility: isDescriptionVisible ? 'initial' : 'hidden' }}
      >
        <Typography variant="subtitle1">{Tier}</Typography>
        <Typography variant="subtitle1">{Background}</Typography>
      </div>
    </div>
  );
};

interface MyCollectionCardProps {
  Athlete: string;
  Tier: string;
  Background: string;
  Signed: string;
  isNftInArray: boolean;
  imageUrl: string;
}
