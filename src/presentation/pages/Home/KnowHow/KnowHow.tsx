import { Grid } from '@material-ui/core';
import First from 'app/assets/First.png';
import Second from 'app/assets/Second.png';
import Third from 'app/assets/Third.png';
import styles from './KnowHow.module.scss';
import { Step } from './Step';

export const KnowHowContent = () => {
  return (
    <>
      <Grid className={styles.knowHowContent} container>
        <Grid className={styles.knowHowContent__item} item lg={12}>
          <div className={styles.knowHowContent__video}></div>
        </Grid>
      </Grid>

      <Grid className={styles.knowHowContent} container>
        <Grid className={styles.knowHowContent__item} item xs={6} md={4} lg={4}>
          <Step
            styles={styles}
            textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua."
            src={First}
            alt="First"
          />
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={6} md={4} lg={4}>
          <Step
            styles={styles}
            textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua."
            src={Second}
            alt="Second"
          />
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={6} md={4} lg={4}>
          <Step
            styles={styles}
            textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua."
            src={Third}
            alt="Third"
          />
        </Grid>
      </Grid>
    </>
  );
};
