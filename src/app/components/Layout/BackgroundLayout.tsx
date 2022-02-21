import { Grid } from '@material-ui/core';
import { useRedirection } from 'app/hooks/useRedirection';
import styles from './BackgroundLayout.module.scss';

export const BackgroundLayout = () => {
  const { isCreaturesUser } = useRedirection();
  return (
    <Grid className={styles.layout} style={isCreaturesUser ? { backgroundColor: 'black' } : {}} container>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
      <Grid
        className={styles.layout__item}
        style={isCreaturesUser ? { border: 'none' } : {}}
        item
        xs={6}
        md={4}
        lg={2}
      ></Grid>
    </Grid>
  );
};
