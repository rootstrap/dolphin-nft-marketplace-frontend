import { TextField, Typography, IconButton } from '@material-ui/core';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ReactComponent as VisaCard } from 'app/assets/VisaIcon.svg';
import { ReactComponent as MasterCard } from 'app/assets/MasterCardIcon.svg';
import styles from './InputText.module.scss';

export const InputText = ({
  className,
  isCreditCard = false,
  label = '',
  name,
  error,
  type = 'text',
  size = 'medium',
  inputProps,
  register,
}: InputTextProps) => (
  <div className={className}>
    <div className={styles.inputText__text}>
      <Typography>{label}</Typography>
      {isCreditCard && (
        <div>
          <VisaCard />
          <MasterCard />
        </div>
      )}
    </div>

    <TextField
      {...register(name)}
      size={size}
      type={type}
      variant="outlined"
      fullWidth
      error={!!error}
      color="secondary"
      inputProps={inputProps}
    />

    <small className={styles.inputText__error}>{error?.message}</small>
  </div>
);

interface InputTextProps {
  className: string;
  label?: string;
  inputProps?: any;
  name?: string;
  error?: { message: string };
  isCreditCard?: boolean;
  type?: 'text' | 'password' | 'email' | 'date' | 'number';
  size?: 'medium' | 'small';
  register: UseFormRegister<FieldValues>;
}
