import { MenuItem, Select, Typography } from '@material-ui/core';

export const InputSelect = ({ className, label, options }: InputSelectProps) => {
  return (
    <div className={className}>
      <Typography>{label}</Typography>
      <Select>
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

interface InputSelectProps {
  className: string;
  label: string;
  options: Option[];
}

interface Option {
  label: string;
  value: string;
}
