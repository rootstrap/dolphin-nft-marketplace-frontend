import { Checkbox, Typography } from '@material-ui/core';
import { dolphinServiceLinks } from 'app/constants/constants';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './AthElitesCarousel.module.scss';

export const CarouselCheckboxes = ({
  handleAgreeSweepstakes,
  handleOnCheck,
  isAgree,
  isEligible,
}: CarouselCheckboxesProps) => {
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <div>
      <div className={styles.carousel__buyCheckbox}>
        <Checkbox checked={isAgree} onChange={handleOnCheck} />
        <Typography variant="caption">
          To purchase I agree to the <a href={dolphinServiceLinks.privacyPolicy}>Privacy Policy</a> and{' '}
          <a href={dolphinServiceLinks.termOfService}>Terms of Service</a>
        </Typography>
      </div>

      <div className={styles.carousel__buyCheckbox}>
        <Checkbox checked={isEligible} onChange={handleAgreeSweepstakes} disabled={!isAuthenticated} />
        <Typography variant="caption">
          With my purchase, I wish to enter the Heroletes Sweepstakes and agree to the{' '}
          <a href={dolphinServiceLinks.sweepstakesRules}>Official Rules</a>
        </Typography>
      </div>
    </div>
  );
};

interface CarouselCheckboxesProps {
  handleAgreeSweepstakes: () => void;
  handleOnCheck: () => void;
  isAgree: boolean;
  isEligible: boolean;
}
