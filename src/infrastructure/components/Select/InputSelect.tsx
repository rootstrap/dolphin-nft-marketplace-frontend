import { Select, Typography } from '@material-ui/core';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './InputSelect.module.scss';

export const InputSelect = ({
  className,
  label = '',
  name,
  error,
  register,
  options,
  onChange,
}: InputSelectProps) => {
  return (
    <div className={className}>
      <Typography>{label}</Typography>
      <Select
        {...register(name)}
        variant="outlined"
        fullWidth
        onChange={onChange ? event => onChange(event) : undefined}
        error={!!error}
        color="secondary"
        defaultValue=""
      >
        {options}
      </Select>
      <small className={styles.inputSelect__error}>{error?.message}</small>
    </div>
  );
};

interface InputSelectProps {
  options: JSX.Element[];
  onChange?: Function;
  className: string;
  label?: string;
  name?: string;
  error?: { message: string };
  register: UseFormRegister<FieldValues>;
}
