import { Link } from 'react-router-dom';
import styles from './Promotion.module.scss';

const PromotionImgContent = ({ title, src, alt = '', disabled = false }: PromotionImgContentProps) => (
  <div>
    <div className={styles.promotionContent__itemVerticalImg}>
      <img src={src} alt={alt} loading="lazy" />
    </div>

    <div className={styles.promotionContent__itemIcon}>
      <span className={disabled ? styles.disabledLink : ''}>{title}</span>
    </div>
  </div>
);

export const PromotionImg = ({
  title,
  link,
  src,
  disabled = false,
  isHyperlink = false,
}: PromotionImgProps) => {
  return (
    <>
      {isHyperlink ? (
        <a href={link}>
          <PromotionImgContent title={title} src={src} />
        </a>
      ) : (
        <Link to={link} className={disabled ? styles.disabledLink : ''}>
          <PromotionImgContent title={title} src={src} />
        </Link>
      )}
    </>
  );
};
interface PromotionImgContentProps {
  alt?: string;
  disabled?: boolean;
  src: string;
  title: string;
}

interface PromotionImgProps {
  alt?: string;
  disabled?: boolean;
  isHyperlink?: boolean;
  link: string;
  src: string;
  title: string;
}
