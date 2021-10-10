import { Typography, Checkbox, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useKYC } from './useKYC';
import { Grid } from '@material-ui/core';
import styles from './KYC.module.scss';

export const KYC = () => {
  const {
    formValues: { fullName, country, province, notCriminalRecord, notExposedPerson },
    kycModalIsOpen,
    handleClose,
    error,
    handleOnChange,
    handleOnChangeCheck,
    handleOnSubmit,
  } = useKYC();
  return (
    <BaseModal open={kycModalIsOpen} handleClose={handleClose}>
      <form className={styles.kycForm} onSubmit={handleOnSubmit}>
        <div className={styles.kycForm__title}>
          <Typography variant="h5">Set your wallet to continue</Typography>
        </div>

        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label="Full Name"
              name="fullName"
              type="text"
              value={fullName}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label="Country of residency"
              name="country"
              type="text"
              value={country}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.kycForm__input}
              label="State/Province"
              name="province"
              type="text"
              value={province}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.kycForm__checkContainer}>
              <Checkbox name="notCriminalRecord" checked={notCriminalRecord} onChange={handleOnChangeCheck} />
              <Typography variant="subtitle2" component="p">
                Set your wallet to continue
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.kycForm__checkContainer}>
              <Checkbox name="notExposedPerson" checked={notExposedPerson} onChange={handleOnChangeCheck} />
              <Typography variant="subtitle2" component="p">
                I certify that I am not a politically exposed person or government official
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.kycForm__button}>
              <Button type="submit">Continue →</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};
