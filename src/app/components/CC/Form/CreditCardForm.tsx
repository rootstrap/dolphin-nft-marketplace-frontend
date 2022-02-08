import { Button, Grid, Typography, MenuItem, Link } from '@material-ui/core';
import { InputText } from 'app/components/InputText/InputText';
import { InputSelect } from 'app/components/Select/InputSelect';
import { useCreditCardForm } from './useCreditCardForm';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { CreditCardVerification } from '../Verification/CreditCardVerification';
import { helpLinks } from 'app/constants/constants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './CreditCardForm.module.scss';

export const CreditCardForm = () => {
  const t = useTranslation();
  const { isSuccess, isLoading, register, handleSubmit, onSubmit, errors, error, countries, subregions } =
    useCreditCardForm();

  const componentToRender = isSuccess ? (
    <CreditCardVerification />
  ) : (
    <>
      <div className={styles.creditCardForm__title}>
        <Typography variant="h5">{t('creditCard.title')}</Typography>
        {error && (
          <Typography variant="h6" className={styles.creditCardForm__error}>
            {error}
          </Typography>
        )}
      </div>

      <div className={styles.creditCardForm__text}>
        <Typography variant="body1">{t('creditCard.text')}</Typography>
        <Typography variant="body1">
          {t('creditCard.text2')}
          <Link href={helpLinks.bankAccount}>{t('creditCard.bankAccount')}</Link>
          or
          <Link href={helpLinks.cryptoWallet}>{t('creditCard.cryptoCurrency')}</Link>
          {t('creditCard.text3')}
        </Typography>
      </div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.fullName')}
            register={register}
            name="name"
            type="text"
            error={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.cardNumber')}
            register={register}
            name="ccNumber"
            type="number"
            error={errors.ccNumber}
            isCreditCard
          />
        </Grid>
        <Grid item xs={4}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.code')}
            register={register}
            name="cvv"
            type="number"
            error={errors.cvv}
          />
        </Grid>
        <Grid item xs={4}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.expireMonth')}
            register={register}
            name="expiryMonth"
            type="number"
            error={errors.expiryMonth}
          />
        </Grid>
        <Grid item xs={4}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.expireYear')}
            register={register}
            name="expiryYear"
            type="number"
            error={errors.expiryYear}
          />
        </Grid>
        <Grid item xs={12}>
          <InputSelect
            className={styles.creditCardForm__input}
            label={t('creditCard.country')}
            register={register}
            name="country"
          >
            {countries.map(option => (
              <MenuItem key={option.alpha2Code} value={option.alpha2Code}>
                {option.name}
              </MenuItem>
            ))}
          </InputSelect>
        </Grid>
        <Grid item xs={12}>
          <InputSelect
            className={styles.creditCardForm__input}
            label={t('creditCard.district')}
            register={register}
            name="district"
          >
            {subregions.map(option => (
              <MenuItem key={option.code} value={option.code}>
                {option.name}
              </MenuItem>
            ))}
          </InputSelect>
        </Grid>
        <Grid item xs={6}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.addressL1')}
            register={register}
            name="address1"
            type="text"
            error={errors.address1}
          />
        </Grid>
        <Grid item xs={6}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.addressL2')}
            register={register}
            name="address2"
            type="text"
            error={errors.address2}
          />
        </Grid>
        <Grid item xs={6}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.city')}
            register={register}
            name="city"
            type="text"
            error={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <InputText
            className={styles.creditCardForm__input}
            label={t('creditCard.postalCode')}
            register={register}
            name="postalCode"
            type="text"
            error={errors.postalCode}
          />
        </Grid>

        <Grid item xs={12}>
          <div className={styles.creditCardForm__button}>
            <Button type="submit">{t('creditCard.button')}</Button>
          </div>
          <Typography variant="body1">
            {t('creditCard.faqText')}
            <Link href={process.env.REACT_APP_ZENDESK_URL}>{t('creditCard.faq')}</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );

  return (
    <form className={styles.creditCardForm} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? <CustomLoader /> : componentToRender}
    </form>
  );
};
