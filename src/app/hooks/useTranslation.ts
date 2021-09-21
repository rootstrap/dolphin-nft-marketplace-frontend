import { useIntl } from 'react-intl';

const useTranslation = () => {
  const intl = useIntl();

  return (message: string) => intl.formatMessage({ id: message });
};

export default useTranslation;
