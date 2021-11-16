export const getToken = async (action: string) =>
  await window.grecaptcha.execute(process.env.REACT_APP_GOOGLE_KEY, { action: action });
