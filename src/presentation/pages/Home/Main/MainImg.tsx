import { Link } from 'react-router-dom';
import styles from './MainContent.module.scss';

const MainImgContent = ({ title, src, alt = '', disabled = false }: MainImgContentProps) => (
  <div className={styles.mainContent__itemImgContainer}>
    <div className={styles.mainContent__imgContainer}>
      <img src={src} alt={alt} className={styles.mainContent__imgContainerImg} loading="lazy" />
    </div>

    <div className={styles.mainContent__itemIcon}>
      <span className={disabled ? styles.disabledLink : ''}>{title}</span>
    </div>
  </div>
);

export const MainImg = ({ title, link, src, disabled = false, isHyperlink = false }: MainImgProps) => {
  return (
    <>
      {isHyperlink ? (
        <a href={link}>
          <MainImgContent title={title} src={src} />
        </a>
      ) : (
        <Link to={`verticals/${link}`} className={disabled ? styles.disabledLink : ''}>
          <MainImgContent title={title} src={src} />
        </Link>
      )}
    </>
  );
};
interface MainImgContentProps {
  alt?: string;
  disabled?: boolean;
  src: string;
  title: string;
}

interface MainImgProps {
  alt?: string;
  disabled?: boolean;
  isHyperlink?: boolean;
  link: string;
  src: string;
  title: string;
}
