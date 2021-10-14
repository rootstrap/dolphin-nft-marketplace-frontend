import { Typography } from '@material-ui/core';
import { Facebook, PersonOutlined, Twitter } from '@material-ui/icons';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './Main.module.scss';

export const Main = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__containerImg}>
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

        <div className={styles.main__containerSocial}>
          <Twitter />
          <Discord />
        </div>
      </div>
    </div>
  );
};
