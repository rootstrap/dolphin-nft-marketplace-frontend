import { Typography } from '@material-ui/core';
import { ReactComponent as Twitter } from 'app/assets/Twitter.svg';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './Main.module.scss';

export const Main = () => {
  const { user } = useAppSelector(state => state.user);

  return (
    <div className={styles.main}>
      <div className={styles.main__img}>
        <img src={user.avatarImg} alt="avatar" />
      </div>
      <div className={styles.main__text}>
        <Typography variant="h4" component="div">
          {user.firstName} {user.lastName}
        </Typography>
      </div>

      <div className={styles.main__text}>
        <Typography variant="subtitle1" component="div">
          Member since: {new Date(Date.parse(user.createdAt)).toDateString()}
        </Typography>
      </div>

      <div className={styles.main__text}>
        <Typography variant="subtitle1" component="div">
          {user.email}
        </Typography>
      </div>

      <div className={styles.main__social}>
        <div className={styles.main__socialContainer}>
          <a href={user.twitterUrl} target="_blank">
            <Twitter />
          </a>
          <a href={user.discordUrl} target="_blank">
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
};
