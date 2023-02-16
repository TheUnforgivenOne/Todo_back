import { useEffect, useState } from 'react';
import parseCookie from './cookieParser';

const getUser = (newCookie: string) => {
  const parsedCookie = parseCookie(newCookie);
  const username = parsedCookie?.token?.split(':')?.[0];

  return username;
};

const useCookie = () => {
  const [currentUser, setCurrentUser] = useState<string | undefined>(() =>
    getUser(document.cookie)
  );

  useEffect(() => {
    let cookie = document.cookie;
    setInterval(() => {
      const newCookie = document.cookie;
      if (newCookie !== cookie) {
        try {
          setCurrentUser(getUser(newCookie));
        } finally {
          cookie = newCookie;
        }
      }
    }, 1000);
  }, []);

  return { currentUser };
};

export default useCookie;
