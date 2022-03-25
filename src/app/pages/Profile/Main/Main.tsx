import { Typography } from '@material-ui/core';
import { ReactComponent as Twitter } from 'app/assets/Twitter.svg';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './Main.module.scss';

export const Main = () => {
  const { avatarImg, firstName, lastName, createdAt, email, twitterUrl, discordUrl } = useAppSelector(
    state => state.user.user
  );

  return (
    <div className={styles.main}>
      <div className={styles.main__img}>
        <img src={avatarImg} alt="avatar" />
      </div>
      <div className={styles.main__text}>
        <Typography variant="h4" component="div">
          {firstName} {lastName}
        </Typography>
      </div>

      <div className={styles.main__text}>
        <Typography variant="subtitle1" component="div">
          Member since: {new Date(Date.parse(createdAt)).toDateString()}
        </Typography>
      </div>

      <div className={styles.main__text}>
        <Typography variant="subtitle1" component="div">
          {email}
        </Typography>
      </div>

      <div className={styles.main__social}>
        <div className={styles.main__socialContainer}>
          <a href={twitterUrl} target="_blank">
            <Twitter />
          </a>
          <a href={discordUrl} target="_blank">
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
};
