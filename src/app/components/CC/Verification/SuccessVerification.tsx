import { Typography } from '@material-ui/core';
import { ReactComponent as Success } from 'app/assets/success.svg';

export const SuccessVerification = ({ successMsg }: SuccessVerificationProps) => (
  <div style={{ textAlign: 'center' }}>
    <Success />
    <Typography gutterBottom variant="subtitle2">
      {successMsg}
    </Typography>
  </div>
);

interface SuccessVerificationProps {
  successMsg: string;
}
