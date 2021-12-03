import { Select, Typography } from '@material-ui/core';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './InputSelect.module.scss';

export const InputSelect = ({ className, label = '', name, error, register, children }: InputSelectProps) => {
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
        {children}
      </Select>
      <small className={styles.inputSelect__error}>{error?.message}</small>
    </div>
  );
};

interface InputSelectProps {
  children: JSX.Element[];
  className: string;
  label?: string;
  name?: string;
  error?: { message: string };
  register: UseFormRegister<FieldValues>;
}
