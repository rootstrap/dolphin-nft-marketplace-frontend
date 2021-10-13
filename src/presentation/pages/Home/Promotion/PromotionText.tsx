import { Button } from '@material-ui/core';

export const PromotionText = ({ textContent, textButton, styles }: PromotionTextProps) => (
  <div className={styles.promotionContent__itemTextContainer}>
    <div className={styles.promotionContent__itemText}>{textContent}</div>

    <div className={styles.promotionContent__itemButton}>
      <Button>{textButton}</Button>
    </div>
  </div>
);

interface PromotionTextProps {
  textContent: string;
  textButton: string;
  styles: any;
}
