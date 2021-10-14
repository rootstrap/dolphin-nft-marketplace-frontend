import { Typography, Checkbox, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { ModalContext } from 'app/context/ModalContext';
import { useCC } from './useCC';
import { Grid } from '@material-ui/core';
import styles from './CC.module.scss';

export const CC = () => {
  const {
    formValues: {
      name,
      ccNumber,
      cvv,
      expiryMonth,
      expiryYear,
      country,
      district,
      address1,
      address2,
      city,
      postalCode,
    },
    ccModalIsOpen,
    handleClose,
    error,
    handleOnChange,
    handleOnChangeCheck,
    handleOnSubmit,
  } = useCC();
  return (
    <BaseModal open={ccModalIsOpen} handleClose={handleClose}>
      <form className={styles.ccForm} onSubmit={handleOnSubmit}>
        <div className={styles.ccForm__title}>
          <Typography variant="h5">Enter your Credit Card Information</Typography>
        </div>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="Full Name"
              name="name"
              type="text"
              value={name}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="Credit Card number"
              name="ccNumber"
              type="text"
              value={ccNumber}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label="CVV"
              name="cvv"
              type="text"
              value={cvv}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label="Expiry Month"
              name="expiryMonth"
              type="text"
              value={expiryMonth}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={4}>
            <InputText
              className={styles.ccForm__input}
              label="Expiry Year"
              name="expiryYear"
              type="text"
              value={expiryYear}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="District"
              name="district"
              type="text"
              value={district}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="Address line 1"
              name="address1"
              type="text"
              value={address1}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="Address line 2"
              name="address2"
              type="text"
              value={address2}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="City"
              name="city"
              type="text"
              value={city}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.ccForm__input}
              label="Postal Code"
              name="postalCode"
              type="text"
              value={postalCode}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.ccForm__button}>
              <Button type="submit">Continue →</Button>
            </div>
            {error && <Typography className={styles.ccForm__error}>{error}</Typography>}
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};
