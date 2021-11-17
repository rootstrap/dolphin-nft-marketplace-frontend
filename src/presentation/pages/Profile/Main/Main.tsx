import { Typography } from '@material-ui/core';
import { PersonOutlined } from '@material-ui/icons';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import styles from './Main.module.scss';

export const Main = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__containerImg}>
          {/* TODO: Placeholder until avatar gets support */}
          <PersonOutlined />
        </div>
        <div className={styles.main__containerText}>
          <Typography variant="h5" component="div">
            {user.firstName} {user.lastName}
          </Typography>
        </div>

        <div className={styles.main__containerText}>
          <Typography variant="subtitle2" component="div">
            Member since: August 2021
          </Typography>
        </div>

        <div className={styles.main__containerText}>
          <Typography variant="subtitle2" component="div">
            {user.email}
          </Typography>
        </div>

        <div className={styles.main__containerText}>
          <Checkboxes />
        </div>
      </div>
    </div>
  );
};
