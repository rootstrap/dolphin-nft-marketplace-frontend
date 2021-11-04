import { Grid, Typography } from '@material-ui/core';
import { zendeskEndpoints } from 'app/constants/endpoints';
import { useFaq } from './useFaq';
import styles from './Faq.module.scss';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';

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
              <a href={zendeskEndpoints.articles} target="_blank" rel="noreferrer">
                Answer
              </a>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};
