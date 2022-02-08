import { Typography } from '@material-ui/core';
import { ReactComponent as Error } from 'app/assets/Error.svg';

export const FailedVerification = ({ errorMsg }: SuccessVerificationProps) => (
  <div>
    <Error />
    <Typography gutterBottom variant="subtitle2">
      {errorMsg}
    </Typography>
  </div>
);

interface SuccessVerificationProps {
  errorMsg: string;
}
