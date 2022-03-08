import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { winterGridItems } from 'app/constants/heroletes/winterGridItems';
import { MyCollectionItem } from './MyCollectionItem';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const MyCollections = () => {
  const t = useTranslation();

  return (
    <div className={styles.myCollection}>
      <div className={styles.myCollection__title}>
        <Typography variant="h4">{t('profile.myCollections.title')}</Typography>
      </div>

      <div className={styles.myCollection__subtitle}>
        <Typography variant="h6">{t('profile.myCollections.subtitle')}</Typography>{' '}
        <Typography variant="subtitle1" className={styles.myCollection__subtitleIRL}>
          IRL
        </Typography>
      </div>

      <div className={styles.myCollection__info}>
        <div className={styles.myCollection__infoText}>
          <Typography variant="body1">{t('profile.myCollections.infoText')}</Typography>
        </div>
      </div>

      {React.Children.toArray(
        winterGridItems.map((item, index) => <MyCollectionItem {...item} index={index} />)
      )}
    </div>
  );
};
