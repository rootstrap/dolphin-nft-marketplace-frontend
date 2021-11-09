import { useState, useEffect } from 'react';

export const useReCaptcha = () => {
  const [key, setKey] = useState('');
  const [token, setToken] = useState('');

  const handleLoaded = () => {
    const windows: any = window;

    windows.grecaptcha.ready((_: any) => {
      windows.grecaptcha.execute(key, { action: 'REGISTER' }).then((token: any) => {
        setToken(token);
      });
    });
  };

  useEffect(() => {
    const fetchKeys = async () => {
      const response = await fetch(`${process.env.REACT_APP_FTX_API_URL}/recaptcha/key`);
      const data = await response.json();

      setKey(data.result.recaptchaKey);
    };

    if (key) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
      script.addEventListener('load', handleLoaded);
      document.body.appendChild(script);
    } else {
      fetchKeys();
    }
  }, [key]);

  return {
    key,
    token,
  };
};
