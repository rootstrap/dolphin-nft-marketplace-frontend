import { Button, MenuItem, Typography } from '@material-ui/core';
import { useConvert } from './useConvert';
import { InputSelect } from 'app/components/Select/InputSelect';
import { InputText } from 'app/components/InputText/InputText';
import styles from './Convert.module.scss';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import useTranslation from 'app/hooks/useTranslation';

export const Convert = () => {
  const {
    currencies,
    error,
    errors,
    expiryTime,
    getConvertData,
    handleConfirm,
    handleSubmit,
    isConfirmConvertBalanceSuccess,
    isConvertBalanceSuccess,
    isConvertExpired,
    isFirstConversion,
    isLoading,
    onSubmit,
    register,
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
              <InputSelect
                className=""
                register={register}
                name="fromCoin"
                error={errors.fromCoin}
                disabled={Boolean(expiryTime)}
              >
                {currencies.map(currency => (
                  <MenuItem value={currency} key={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </InputSelect>
            </div>

            <div className={styles.convert__toCoinContainer}>
              <label htmlFor="toCoin">{t('profile.convertCoins.to')}</label>

              <InputSelect
                className=""
                register={register}
                name="toCoin"
                error={errors.toCoin}
                disabled={Boolean(expiryTime)}
              >
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
                inputProps={{ min: 0, step: 0.00001, style: { textAlign: 'center' } }}
                className=""
                register={register}
                type="number"
                name="size"
                error={errors.size}
                disabled={Boolean(expiryTime)}
              />
            </div>
          </div>
          {!isConfirmConvertBalanceSuccess && isConvertBalanceSuccess && (
            <>
              {!isFirstConversion && (
                <div
                  className={
                    !isConvertExpired ? styles.convert__exchangeInfo : styles.convert__exchangeInfoOutdated
                  }
                >
                  <div className={styles.convert__exchangeInfoContainer}>
                    <Typography component="p">{t('profile.convertCoins.cost')}</Typography>
                    <Typography component="p">
                      {getConvertData?.cost} {getConvertData?.fromCoin}
                    </Typography>
                  </div>
                  <div className={styles.convert__exchangeInfoContainer}>
                    <Typography component="p">{t('profile.convertCoins.price')}</Typography>
                    <Typography component="p">
                      1 {getConvertData?.toCoin} = {getConvertData?.price} {getConvertData?.fromCoin}
                    </Typography>
                  </div>
                  <div className={styles.convert__exchangeInfoContainer}>
                    <Typography className={styles.convert__exchangeInfoContainerTotal} component="span">
                      {t('profile.convertCoins.proceeds')}
                    </Typography>
                    <Typography className={styles.convert__exchangeInfoContainerTotal} component="span">
                      {getConvertData?.proceeds} {getConvertData?.toCoin}
                    </Typography>
                  </div>
                </div>
              )}
              {isConvertExpired && !isFirstConversion && (
                <Typography className={styles.convert__exchangeInfoExpired}>
                  {t('profile.convertCoins.quoteExpired')}
                </Typography>
              )}
            </>
          )}
          {isConvertExpired && (
            <Button className={styles.convert__buttons} type="submit">
              {isFirstConversion
                ? t('profile.convertCoins.convertButton')
                : t('profile.convertCoins.refresh')}
            </Button>
          )}
          {!isConvertExpired && (
            <Button onClick={handleConfirm} className={styles.convert__buttons}>
              {t('profile.convertCoins.confirmButton')} {Boolean(expiryTime) && `(${expiryTime}s)`}
            </Button>
          )}
        </>
      )}
    </form>
  );
};
