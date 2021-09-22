import { TextField, Typography } from '@material-ui/core';

export const InputText = ({
  className,
  label = '',
  value,
  name,
  error,
  onChange,
  type = 'text',
}: InputTextProps) => (
  <div className={className}>
    <Typography>{label}</Typography>
    <TextField
      name={name}
      type={type}
      value={value}
      error={error}
      variant="outlined"
      fullWidth
      onChange={onChange}
    />
  </div>
);

interface InputTextProps {
  className: string;
  label?: string;
  value: string;
  name: string;
  error: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
}
