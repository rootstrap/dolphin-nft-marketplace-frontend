import { Button } from '@material-ui/core';

export const MainText = ({ textContent, textButton, styles }: MainTextProps) => (
  <div className={styles.mainContent__itemTextContainer}>
    <div className={styles.mainContent__itemText}>{textContent}</div>

    <div className={styles.mainContent__itemButton}>
      <Button>{textButton}</Button>
    </div>
  </div>
);

interface MainTextProps {
  textContent: string;
  textButton: string;
  styles: any;
}
