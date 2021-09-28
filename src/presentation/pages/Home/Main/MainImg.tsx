import { Link } from 'react-router-dom';
import { AddBox } from '@material-ui/icons';
import routesPaths from 'app/constants/routesPath';
import { Typography } from '@material-ui/core';

export const MainImg = ({ link, src, alt, styles, disabled = false }: MainImgProps) => (
  <div className={styles.mainContent__itemImgContainer}>
    <div>
      <img src={src} alt={alt} className={styles.mainContent__itemImg} />
    </div>

    <div className={styles.mainContent__itemIcon}>
      {disabled ? (
        <Typography variant="h5">More Soon</Typography>
      ) : (
        <>
          <AddBox color="secondary" fontSize="large" />
          <Link to={routesPaths.index}> {link}</Link>
        </>
      )}
    </div>
  </div>
);
interface MainImgProps {
  src: string;
  alt: string;
  link: string;
  styles: any;
  disabled?: boolean;
}
