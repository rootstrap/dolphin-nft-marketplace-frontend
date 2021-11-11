import { useState, useEffect } from 'react';

export const useReCaptcha = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const fetchFtxKeys = async () => {
      const response = await fetch(`${process.env.REACT_APP_FTX_API_URL}/recaptcha/key`);
      const data = await response.json();

      setKey(data.result.recaptchaKey);

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${data.result.recaptchaKey}&badge=bottomLeft`;
      document.body.appendChild(script);
    };

    if (!window.grecaptcha) {
      fetchFtxKeys();
    }
  }, []);

  const getToken = async (action: string) => await window.grecaptcha.execute(key, { action: action });

  return {
    getToken,
  };
};
