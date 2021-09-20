import { Grid, Typography, TextField, Select } from '@material-ui/core';
import useTranslation from '../../../app/hooks/useTranslation';
import { TopBarLayout } from '../../../infrastructure/components/Layout/TopBarLayout';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const t = useTranslation();

  return (
    <>
      <TopBarLayout
        pageComponent={
          <div className={styles.homePage}>
            <div className={styles.homePage__item}></div>
            <div className={styles.homePage__text}>
              <Typography variant="h5" gutterBottom>
                {t('home.title')}
              </Typography>
              <Typography>{t('home.description')}</Typography>
            </div>

            <div className={styles.homePage__latestSection}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={4}>
                  <Typography variant="h6" className={styles.homePage__latestSectionText}>
                    {t('home.latestSection.description')}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <div className={styles.homePage__latestSectionItem}></div>
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <div className={styles.homePage__latestSectionItem}></div>
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <div className={styles.homePage__latestSectionItem}></div>
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <div className={styles.homePage__latestSectionItem}></div>
                </Grid>
              </Grid>
            </div>

            <div className={styles.homePage__searchBar}>
              <Grid container spacing={2}>
                <Grid item md={7}>
                  <TextField variant="outlined" placeholder="Search your next NFT" fullWidth />
                </Grid>
                <Grid item md={1}>
                  {t('home.nftList.sortBy')}
                </Grid>
                <Grid item md={4}>
                  <Select variant="outlined" fullWidth></Select>
                </Grid>
              </Grid>
            </div>

            <div className={styles.homePage__nftList}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className={styles.homePage__nftListItem}></div>
                </Grid>
              </Grid>
            </div>

            <div className={styles.homePage__categorySection}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={8} lg={6}>
                  <Typography variant="h6" className={styles.homePage__categorySectionText}>
                    {t('home.categorySection.title')}
                  </Typography>
                  <Typography className={styles.homePage__categorySectionDescription}>
                    {t('home.categorySection.description')}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={4} lg={2}>
                  <div className={styles.homePage__categorySectionItem}></div>
                </Grid>
                <Grid item xs={6} md={6} lg={2}>
                  <div className={styles.homePage__categorySectionItem}></div>
                </Grid>
                <Grid item xs={6} md={6} lg={2}>
                  <div className={styles.homePage__categorySectionItem}></div>
                </Grid>
              </Grid>
            </div>

            <div className={styles.homePage__footer}>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <div className={styles.homePage__footerItem}></div>
                </Grid>
                <Grid item md={4}>
                  <div className={styles.homePage__footerItem}></div>
                </Grid>
                <Grid item md={4}>
                  <div className={styles.homePage__footerItem}></div>
                </Grid>
              </Grid>
            </div>
          </div>
        }
      />
    </>
  );
};

export default HomePage;
