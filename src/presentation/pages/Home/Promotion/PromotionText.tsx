import { Button } from '@material-ui/core';
import routesPaths from 'app/constants/routesPath';

export const PromotionText = ({ textContent, textButton, styles }: PromotionTextProps) => (
  <div className={styles.promotionContent__itemTextContainer}>
    <div className={styles.promotionContent__itemText}>{textContent}</div>

    <div className={styles.promotionContent__itemButton}>
      <a href={routesPaths.knowHow}>
        <Button>{textButton}</Button>
      </a>
    </div>
  </div>
);

interface PromotionTextProps {
  textContent: string;
  textButton: string;
  styles: any;
}
