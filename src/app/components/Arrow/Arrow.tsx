import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import styles from './Arrow.module.scss';

export const Arrow = ({ direction = 'right', handleOnClick, style }: ArrowProps) => {
  const icon = direction === 'right' ? <ArrowForwardIos /> : <ArrowBackIos />;

  return (
    <button onClick={handleOnClick} className={styles.arrow} style={style}>
      {icon}
    </button>
  );
};

interface ArrowProps {
  direction?: 'left' | 'right';
  handleOnClick: () => void;
  style?: React.CSSProperties;
}
