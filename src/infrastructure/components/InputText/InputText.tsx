import { TextField, Typography } from '@material-ui/core';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './InputText.module.scss';

export const InputText = ({
  className,
  label = '',
  name,
  error,
  type = 'text',
  size = 'medium',
  register,
}: InputTextProps) => (
  <div className={className}>
    <Typography>{label}</Typography>
    <TextField
      {...register(name)}
      size={size}
      type={type}
      variant="outlined"
      fullWidth
      error={!!error}
      color="secondary"
    />
    <small className={styles.inputText__error}>{error?.message}</small>
  </div>
);

interface InputTextProps {
  className: string;
  label?: string;

  name?: string;
  error?: { message: string };

  type?: 'text' | 'password' | 'email' | 'date' | 'number';
  size?: 'medium' | 'small';
  register: UseFormRegister<FieldValues>;
}
