import { useEffect, useState } from 'react';

export default () => {
  const [isCreaturesUser, setIsCreaturesUser] = useState(false);

  useEffect(() => {
    const path = window.location.origin;
    setIsCreaturesUser(path === process.env.REACT_APP_CREATURES_URL);
  }, []);

  return {
    isCreaturesUser,
  };
};
