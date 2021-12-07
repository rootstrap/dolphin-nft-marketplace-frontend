import { Button, MenuItem, Typography } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { InputSelect } from 'infrastructure/components/Select/InputSelect';
import styles from './Convert.module.scss';

const options = [
  {
    name: 'name 1',
  },
  {
    name: 'name 2',
  },
  {
    name: 'name 3',
  },
];

export const Convert = () => {
  return (
    <div className={styles.convert}>
      <Typography gutterBottom variant="h6">
        Convert your coins
      </Typography>
      <div className={styles.convert__fromCoin}>
        <InputSelect>
          {options.map(option => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </InputSelect>
      </div>

      <div className={styles.convert__toCoin}>
        {options.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </div>

      <div className={styles.convert__input}>
        <InputText />
      </div>

      <div className={styles.convert__buttons}>
        <Button>CANCEL</Button>
        <Button>CONVERT</Button>
      </div>
    </div>
  );
};
