import { Grid, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { ReactComponent as DolphinLogo } from '../../../app/assets/Dolphin_Ball.svg';
import styles from './TopBar.module.scss';

export const MobileTopBar = () => (
  <Grid container spacing={2}>
    <Grid item xs={2}>
      <IconButton>
        <Menu />
      </IconButton>
    </Grid>
    <Grid item xs={10}>
      <DolphinLogo className={styles.logo} />
    </Grid>
  </Grid>
);
