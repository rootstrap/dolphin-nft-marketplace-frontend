import { MenuItem, Select, Typography } from '@material-ui/core';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './InputSelect.module.scss';

export const InputSelect = ({ className, label = '', name, error, register, options }: InputSelectProps) => {
  return (
    <div className={className}>
      <Typography>{label}</Typography>
      <Select {...register(name)} variant="outlined" fullWidth error={!!error} color="secondary">
        {options.map(option => (
          <MenuItem value={option.code}>{option.name}</MenuItem>
        ))}
      </Select>
      <small className={styles.inputSelect__error}>{error?.message}</small>
    </div>
  );
};

interface InputSelectProps {
  options: Option[];
  className: string;
  label?: string;
  name?: string;
  error?: { message: string };
  register: UseFormRegister<FieldValues>;
}

interface Option {
  name: string;
  code: string;
}
