import { Typography, Checkbox, Button } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useKYC } from './useKYC';
import styles from './KYC.module.scss';

export const KYC = () => {
  const {
    formValues: { fullName, country, state, notCriminalRecord, notExposedPerson },
    kycModalIsOpen,
    handleClose,
    error,
    handleOnChange,
  } = useKYC();
  return (
    <BaseModal open={kycModalIsOpen} handleClose={handleClose}>
      <form className={styles.kycForm}>
        <div className={styles.kycForm__title}>
          <Typography variant="h5">Set your wallet to continue</Typography>
        </div>

        <InputText
          className={styles.kycForm__input}
          label="Full Name"
          name="fullName"
          type="text"
          value={fullName}
          error={!!error}
          onChange={handleOnChange}
        />

        <InputText
          className={styles.kycForm__input}
          label="Country of residency"
          name="country"
          type="text"
          value={country}
          error={!!error}
          onChange={handleOnChange}
        />

        <InputText
          className={styles.kycForm__input}
          label="State/Province"
          name="state"
          type="text"
          value={state}
          error={!!error}
          onChange={handleOnChange}
        />

        <div className={styles.kycForm__checkContainer}>
          <Checkbox checked={notCriminalRecord} />
          <Typography variant="subtitle2" component="p">
            Set your wallet to continue
          </Typography>
        </div>

        <div className={styles.kycForm__checkContainer}>
          <Checkbox checked={notExposedPerson} />
          <Typography variant="subtitle2" component="p">
            I certify that I am not a politically exposed person or government official
          </Typography>
        </div>

        <div className={styles.kycForm__button}>
          <Button>Continue →</Button>
        </div>
      </form>
    </BaseModal>
  );
};
