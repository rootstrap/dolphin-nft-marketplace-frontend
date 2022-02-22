import { Select, Typography } from '@material-ui/core';
import { ReactFragment } from 'react';
import { Controller, FieldValues, UseFormRegister, Control } from 'react-hook-form';
import styles from './InputSelect.module.scss';

export const InputSelect = ({
  className,
  label = '',
  name,
  error,
  register,
  children,
  control,
}: InputSelectProps) => {
  return (
    <div className={className}>
      <Typography>{label}</Typography>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, ...field } }) => (
            <Select
              {...field}
              inputRef={ref}
              variant="outlined"
              fullWidth
              error={!!error}
              color="secondary"
              defaultValue=""
            >
              {children}
            </Select>
          )}
        />
      ) : (
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
      )}
      <small className={styles.inputSelect__error}>{error?.message}</small>
    </div>
  );
};

interface InputSelectProps {
  children: ReactFragment | JSX.Element[];
  className: string;
  label?: string;
  name?: string;
  error?: { message: string };
  register?: UseFormRegister<FieldValues>;
  control?: Control<any>;
}
