import { Button, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BuyNowButton.module.scss';

export const BuyNowBigButton = ({ buttonText = '', className = '', onClick }: BuyNowBigButtonProps) => {
  const t = useTranslation();

  return (
    <div className={styles.buyNowButton}>
      <Button className={className} onClick={onClick} variant="outlined">
        <Typography variant="h6" component="p">
          {buttonText ? buttonText : t('creatures.buyCreatures.buyButton')}
        </Typography>
      </Button>
    </div>
  );
};

interface BuyNowBigButtonProps {
  buttonText?: string;
  className?: string;
  onClick: () => void;
}
