import { Checkbox, Typography } from '@material-ui/core';
import { dolphinServiceLinks } from 'app/constants/constants';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { BuyNowButton } from '../BuyNowButton/BuyNowButton';
import { BaseModal } from '../Modal/Modal';
import { nftPack } from 'app/interfaces/NFT/NFT';
import { ShoppingCartOutlined } from '@material-ui/icons';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const CarouselCheckboxes = ({
  handleAgreeSweepstakes,
  handleClose,
  handleOnCheck,
  isAgree,
  isEligible,
  isItemForSale,
  isOpen,
  tier,
}: CarouselCheckboxesProps) => {
  const { isAuthenticated } = useAppSelector(state => state.user);
  const t = useTranslation();

  return (
    <BaseModal open={isOpen} handleClose={handleClose} bigModal>
      <div className={styles.carousel__buy}>
        <div className={styles.carousel__buyIcon}>
          <ShoppingCartOutlined fontSize="large" />
          <Typography variant="h5">Confirm your purchase</Typography>
        </div>

        {isItemForSale && (
          <BuyNowButton
            isUserAgree={isAgree}
            isUserEligible={isEligible}
            buttonText="Buy Now"
            className={styles.carousel__buyButton}
            nftsToBuy={tier}
          />
        )}

        <div className={styles.carousel__buyCheckbox}>
          <div className={styles.carousel__buyCheckboxInfo}>
            <Checkbox checked={isAgree} onChange={handleOnCheck} />
            <Typography variant="body2">
              {t('heroletes.carousel.firstCheck')}{' '}
              <a href={dolphinServiceLinks.privacyPolicy}>Privacy Policy</a> and{' '}
              <a href={dolphinServiceLinks.termOfService}>Terms of Service</a>
            </Typography>
          </div>

          <div className={styles.carousel__buyCheckboxInfo}>
            <Checkbox checked={isEligible} onChange={handleAgreeSweepstakes} disabled={!isAuthenticated} />
            <Typography variant="body2">
              {t('heroletes.carousel.secondCheck')}{' '}
              <a href={dolphinServiceLinks.sweepstakesRules}>Official Rules</a>
            </Typography>
          </div>
        </div>

        <div className={styles.carousel__buyArticle}>
          <Typography variant="body2">
            {t('heroletes.carousel.firstArticle')}
            <a href={dolphinServiceLinks.winterSportsRules} target="_blank">
              {' '}
              Sweepstakes-Official-Rules
            </a>
            . {t('heroletes.carousel.secondArticle')}
          </Typography>
        </div>
      </div>
    </BaseModal>
  );
};

interface CarouselCheckboxesProps {
  handleAgreeSweepstakes: () => void;
  handleClose: () => void;
  handleOnCheck: () => void;
  isAgree: boolean;
  isEligible: boolean;
  isItemForSale: boolean;
  isOpen: boolean;
  tier: nftPack;
}
