import { Grid, Typography } from '@material-ui/core';
import { ReactComponent as CollectionIcon } from 'app/assets/remarkables_icon1.svg';
import { ReactComponent as SuperTeamIcon } from 'app/assets/remarkables_icon2.svg';
import { ReactComponent as IrlIcon } from 'app/assets/remarkables_icon3.svg';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HowItWorks.module.scss';

export const HowItWorks = () => {
  const t = useTranslation();

  return (
    <>
      <Grid container justifyContent="center" className={styles.howItWorks}>
        <Typography variant="h2" className={styles.howItWorks__title}>
          {t('heroletes.howItWorks.title')}
        </Typography>
        <Grid container justifyContent="space-around" spacing={1}>
          <Grid item md={2} lg={3}>
            <div className={styles.howItWorks__item}>
              <Typography className={styles.howItWorks__itemTitle} variant="h3">
                {t('heroletes.howItWorks.firstItem.title')}
              </Typography>
              <CollectionIcon className={styles.howItWorks__itemImage} />
              <Typography component={'p'} variant="subtitle1" className={styles.howItWorks__itemDescription}>
                {t('heroletes.howItWorks.firstItem.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item md={2} lg={3}>
            <div className={styles.howItWorks__item}>
              <Typography className={styles.howItWorks__itemTitle} variant="h3">
                {t('heroletes.howItWorks.secondItem.title')}
              </Typography>
              <SuperTeamIcon className={styles.howItWorks__itemImage} />
              <Typography component={'p'} variant="subtitle1" className={styles.howItWorks__itemDescription}>
                {t('heroletes.howItWorks.secondItem.description')}
              </Typography>
            </div>
          </Grid>
          <Grid item md={2} lg={3}>
            <div className={styles.howItWorks__item}>
              <Typography className={styles.howItWorks__itemTitle} variant="h3">
                {t('heroletes.howItWorks.thirdItem.title')}
              </Typography>
              <IrlIcon className={styles.howItWorks__itemImage} />
              <Typography component={'p'} variant="subtitle1" className={styles.howItWorks__itemDescription}>
                {t('heroletes.howItWorks.thirdItem.description')}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
