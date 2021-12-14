import { Typography } from '@material-ui/core';
import { socialMediaLinks } from 'app/constants/contants';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { ReactComponent as Facebook } from 'app/assets/Facebook.svg';
import { ReactComponent as Instagram } from 'app/assets/Instagram.svg';
import { ReactComponent as Twitter } from 'app/assets/Twitter.svg';
import styles from './Social.module.scss';

export const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social__discord}>
        <Typography>Have more questions?</Typography>
        <Typography>
          Join our discord or find additional FAQs <a href={process.env.REACT_APP_ZENDESK_URL}>here</a>
        </Typography>
      </div>

      <div className={styles.social__link}>
        <div className={styles.social__linkItem}>
          <a href={socialMediaLinks.facebook} target="_blank">
            <Facebook />
          </a>
        </div>
        <div className={styles.social__linkItem}>
          <a href={socialMediaLinks.twitter} target="_blank">
            <Twitter />
          </a>
        </div>
        <div className={styles.social__linkItem}>
          <a href={socialMediaLinks.instagram} target="_blank">
            <Instagram />
          </a>
        </div>
        <div className={styles.social__linkItem}>
          <a href={socialMediaLinks.discord} target="_blank">
            <Discord />
          </a>
        </div>
      </div>
    </div>
  );
};
