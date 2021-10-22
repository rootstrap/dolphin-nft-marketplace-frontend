import { Typography, Checkbox, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useKYC } from './useKYC';
import { Grid } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './KYC.module.scss';

export const KYC = () => {
  const t = useTranslation();
  const { kycModalIsOpen, handleClose, isLoading, register, handleSubmit, onSubmit, errors, error } =
    useKYC();

  return (
    <BaseModal open={kycModalIsOpen} handleClose={handleClose}>
      <form className={styles.kycForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.kycForm__title}>
          <Typography variant="h5">{t('kyc.title')}</Typography>
        </div>

        {error && (
          <div className={styles.kycForm__error}>
            <Typography variant="h6">{error}</Typography>
          </div>
        )}

        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.fullName')}
              register={register}
              name="fullName"
              type="text"
              error={errors.fullName}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.birth')}
              register={register}
              name="dateOfBirth"
              type="date"
              error={errors.dateOfBirth}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.country')}
              register={register}
              name="country"
              type="text"
              error={errors.country}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.state')}
              register={register}
              name="state"
              type="text"
              error={errors.state}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.postalCode')}
              register={register}
              name="postalCode"
              type="text"
              error={errors.postalCode}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label={t('kyc.address')}
              register={register}
              name="streetAddress"
              type="text"
              error={errors.streetAddress}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.kycForm__checkbox}>
              <Checkbox name="notCriminalRecord" {...register('notCriminalRecord')} checked={true} />
              <Typography variant="subtitle2" component="p">
                {t('kyc.criminalRecord')}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.kycForm__checkbox}>
              <Checkbox name="notExposedPerson" {...register('notExposedPerson')} checked={true} />
              <Typography variant="subtitle2" component="p">
                {t('kyc.notExposedPerson')}
              </Typography>
            </div>
          </Grid>
          {!isLoading && (
            <Grid item xs={12}>
              <div className={styles.kycForm__button}>
                <Button type="submit">{t('kyc.button')}</Button>
              </div>
            </Grid>
          )}
        </Grid>
      </form>
    </BaseModal>
  );
};
