import { Typography, Checkbox, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useCC } from './useCC';
import { Grid } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CC.module.scss';

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
              name="fullName"
              type="text"
              error={errors.fullName}
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
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.code')}
              register={register}
              name="cvv"
              type="number"
              error={errors.cvv}
            />
          </Grid>
          <Grid item xs={6}>
            <InputText
              className={styles.ccForm__input}
              label={t('creditCard.expireDate')}
              register={register}
              name="expiryDate"
              type="number"
              error={errors.expiryDate}
            />
          </Grid>

          {!isLoading && (
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
