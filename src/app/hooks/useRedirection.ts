import { useEffect, useState } from 'react';

export default () => {
  const [isCreaturesUser, setIsCreaturesUser] = useState(false);

  useEffect(() => {
    const path = window.location.href;
    setIsCreaturesUser(path.includes('creaturechronicles'));
  }, []);

  return {
    isCreaturesUser,
  };
};
