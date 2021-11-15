import { useEffect, useState } from 'react';

export default () => {
  const [path, setPath] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const path = window.location.href;
    setPath(path);
  }, [path, setPath]);

  if (path.includes('creaturechronicles')) {
    setRedirect(true);
  }

  return {
    redirect,
  };
};
