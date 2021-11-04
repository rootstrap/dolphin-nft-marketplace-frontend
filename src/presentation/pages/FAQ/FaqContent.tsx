import { Grid, Typography } from '@material-ui/core';
import { useFaq } from './useFaq';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './Faq.module.scss';

export const FaqContent = () => {
  const { isLoading, faqs } = useFaq();

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Grid container className={styles.faqContent}>
          {faqs.map(faq => (
            <Grid item lg={12} className={styles.faqContent__question} key={faq.id}>
              <Typography variant="h5">{faq.name}</Typography>
            </Grid>
          ))}

          <Grid item lg={12} className={styles.faqContent__question}>
            <Typography component="div" variant="subtitle2">
              <a href={process.env.REACT_APP_ZENDESK_URL} target="_blank" rel="noreferrer">
                Answer
              </a>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};
