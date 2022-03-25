import { zodResolver } from '@hookform/resolvers/zod';
import useTranslation from 'app/hooks/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useWithdrawNftMutation } from 'app/services/wallet/WalletService';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useRequestCodeMutation } from 'app/services/mfa/MfaService';
import { useCallback, useEffect } from 'react';

interface FormValues {
  address: string;
  code: string;
}

export const useWithdrawNftModal = (id: string) => {
  const t = useTranslation();
  const { mfaRequired } = useAppSelector(state => state.user.user);
  const [withdrawNft, { isSuccess, isError, data }] = useWithdrawNftMutation();
  const [requestCode] = useRequestCodeMutation();

  const schema = z.object({
    address: z.string().min(1, { message: t('nft.withdraw.addressError') }),
    code: z.string().min(1, { message: t('nft.withdraw.codeError') }),
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    withdrawNft({ address: data.address, code: data.code, id: id });
  };

  const sendSms = useCallback(() => {
    requestCode('');
  }, [requestCode]);

  useEffect(() => {
    if (mfaRequired === 'sms') {
      sendSms();
    }
  }, [sendSms, mfaRequired]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return {
    data,
    errors,
    handleSubmit,
    isError,
    isSuccess,
    mfaRequired,
    onSubmit,
    register,
    sendSms,
  };
};
