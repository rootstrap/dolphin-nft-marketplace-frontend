import { Typography, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useCC } from './useCC';
import { Grid } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CC.module.scss';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';

export const CC = () => {
  const t = useTranslation();
  const { ccModalIsOpen, handleClose, isLoading, register, handleSubmit, onSubmit, errors, error } = useCC();
  return (
    <BaseModal open={ccModalIsOpen} handleClose={handleClose}>
      <form className={styles.ccForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.ccForm__title}>
          <Typography variant="h5">{t('creditCard.title')}</Typography>
        </div>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.fullName')}
              register={register}
              name="name"
              type="text"
              error={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.cardNumber')}
              register={register}
              name="ccNumber"
              type="number"
              error={errors.ccNumber}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.code')}
              register={register}
              name="cvv"
              type="number"
              error={errors.cvv}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.expireMonth')}
              register={register}
              name="expiryMonth"
              type="number"
              error={errors.expiryMonth}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.expireYear')}
              register={register}
              name="expiryYear"
              type="number"
              error={errors.expiryYear}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.country')}
              register={register}
              name="country"
              type="text"
              error={errors.country}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.district')}
              register={register}
              name="district"
              type="text"
              error={errors.district}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.addressL1')}
              register={register}
              name="address1"
              type="text"
              error={errors.address1}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.addressL2')}
              register={register}
              name="address2"
              type="text"
              error={errors.address2}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.city')}
              register={register}
              name="city"
              type="text"
              error={errors.city}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.postalCode')}
              register={register}
              name="postalCode"
              type="text"
              error={errors.postalCode}
            />
          </Grid>

          {isLoading ? (
            <CustomLoader />
          ) : (
            <Grid item xs={12}>
              <div className={styles.ccForm__button}>
                <Button type="submit">{t('creditCard.button')}</Button>
              </div>
              {error && <Typography className={styles.ccForm__error}>{error}</Typography>}
            </Grid>
          )}
        </Grid>
      </form>
    </BaseModal>
  );
};
