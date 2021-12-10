import { Button, MenuItem, Typography } from '@material-ui/core';
import { useConvert } from './useConvert';
import { InputSelect } from 'infrastructure/components/Select/InputSelect';
import { InputText } from 'infrastructure/components/InputText/InputText';
import styles from './Convert.module.scss';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import useTranslation from 'app/hooks/useTranslation';

export const Convert = () => {
  const {
    showResume,
    isConvertExpired,
    currencies,
    handleSubmit,
    onSubmit,
    register,
    errors,
    getConvertData,
    handleConfirm,
    isLoading,
    error,
  } = useConvert();

  const t = useTranslation();

  return (
    <form className={styles.convert} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <div className={styles.convert__title}>
            <Typography gutterBottom variant="h4">
              {t('profile.convertCoins.title')}
            </Typography>
          </div>

          {error && (
            <div className={styles.convert__error}>
              <Typography variant="h6">{error}</Typography>
            </div>
          )}

          <div className={styles.convert__coinContainer}>
            <div className={styles.convert__fromCoinContainer}>
              <label htmlFor="fromCoin">{t('profile.convertCoins.from')}</label>
              <InputSelect className="" register={register} name="fromCoin" error={errors.fromCoin}>
                {currencies.map(currency => (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </InputSelect>
            </div>

            <div className={styles.convert__toCoinContainer}>
              <label htmlFor="toCoin">{t('profile.convertCoins.to')}</label>

              <InputSelect className="" register={register} name="toCoin" error={errors.toCoin}>
                {currencies.map(currency => (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </InputSelect>
            </div>
          </div>

          <div className={styles.convert__input}>
            <div className={styles.convert__inputContainer}>
              <label htmlFor="size">{t('profile.convertCoins.amount')}</label>
              <InputText
                inputProps={{ min: 0, style: { textAlign: 'center' } }}
                className=""
                register={register}
                type="number"
                name="size"
                error={errors.size}
              />
            </div>
          </div>
          {showResume && (
            <div>
              <Typography>
                {t('profile.convertCoins.cost')} {getConvertData?.cost}
              </Typography>
              <Typography>
                {t('profile.convertCoins.price')} {getConvertData?.price}
              </Typography>
              <Typography>
                {t('profile.convertCoins.proceeds')} {getConvertData?.proceeds}
              </Typography>
            </div>
          )}

          {!showResume && isConvertExpired && (
            <div className={styles.convert__buttons}>
              <Button type="submit">{t('profile.convertCoins.convertButton')}</Button>
            </div>
          )}

          {!isConvertExpired && showResume && (
            <>
              <div className={styles.convert__buttons}>
                <Button disabled={!showResume} onClick={handleConfirm}>
                  {t('profile.convertCoins.confirmButton')}
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </form>
  );
};
