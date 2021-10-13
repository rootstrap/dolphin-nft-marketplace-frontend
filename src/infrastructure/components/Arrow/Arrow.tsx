import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import styles from './Arrow.module.scss';

export const Arrow = ({ direction = 'right', handleOnClick }: ArrowProps) => {
  const icon = direction === 'right' ? <ArrowForwardIos /> : <ArrowBackIos />;

  return (
    <button onClick={handleOnClick} className={styles.arrow}>
      {icon}
    </button>
  );
};

interface ArrowProps {
  direction?: 'left' | 'right';
  handleOnClick: () => void;
}
