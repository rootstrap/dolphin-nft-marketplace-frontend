import { Link } from 'react-router-dom';
import { AddBox } from '@material-ui/icons';

export const MainImg = ({ link, src, alt, styles, disabled = false }: MainImgProps) => (
  <Link to={`verticals/${link.toLowerCase()}`} className={disabled ? styles.disabledLink : ''}>
    <div className={styles.mainContent__itemImgContainer}>
      <div className={styles.mainContent__imgContainer}>
        <img src={src} alt={alt} className={styles.mainContent__imgContainerImg} />
      </div>

      <div className={styles.mainContent__itemIcon}>
        {!disabled && <AddBox color="secondary" fontSize="large" />}
        <span className={disabled ? styles.disabledLink : ''}>{link}</span>
      </div>
    </div>
  </Link>
);
interface MainImgProps {
  src: string;
  alt: string;
  link: string;
  styles: any;
  disabled?: boolean;
}
