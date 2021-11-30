import { MenuItem, Select, Typography } from '@material-ui/core';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './InputSelect.module.scss';

export const InputSelect = ({
  className,
  label = '',
  name,
  error,
  register,
  options,
  isAlpha3Code = false,
}: InputSelectProps) => {
  return (
    <div className={className}>
      <Typography>{label}</Typography>
      <Select
        {...register(name)}
        variant="outlined"
        fullWidth
        error={!!error}
        color="secondary"
        defaultValue=""
      >
        {options.map(option => (
          <MenuItem key={option.alpha3Code} value={isAlpha3Code ? option.alpha3Code : option.alpha2Code}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      <small className={styles.inputSelect__error}>{error?.message}</small>
    </div>
  );
};

interface InputSelectProps {
  options: Option[];
  isAlpha3Code?: boolean;
  className: string;
  label?: string;
  name?: string;
  error?: { message: string };
  register: UseFormRegister<FieldValues>;
}

interface Option {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  numeric: string;
}
