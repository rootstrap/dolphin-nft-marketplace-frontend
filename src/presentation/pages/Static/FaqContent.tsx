import { Grid, Typography } from '@material-ui/core';
import styles from './Faq.module.scss';

export const FaqContent = () => {
  return (
    <Grid container className={styles.faqContent}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__question} variant="h5">
          Question 1 - This is a question might be long
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__answer} variant="subtitle1">
          Answer 1. This is a very long answer.
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__question} variant="h5">
          Question 2
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__answer} variant="subtitle1">
          Answer 2
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__question} variant="h5">
          Question 3
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__answer} variant="subtitle1">
          Answer 3
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__question} variant="h5">
          Question 4
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__answer} variant="subtitle1">
          Answer 4
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__question} variant="h5">
          Question 5
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography className={styles.faqContent__answer} variant="subtitle1">
          Answer 5
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
