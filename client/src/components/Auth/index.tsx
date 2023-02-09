import React, { FC, useEffect, useState } from 'react';
import RequestsBuilder from '../../fetchUtils/RequestsBuilder';
import { setStateFnType } from '../../types';
import * as S from './styles';

interface IAuth {
  currentUser: string | null;
  setCurrentUser: setStateFnType<string | null>;
}

const Auth: FC<IAuth> = ({ currentUser, setCurrentUser }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', currentUser);
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const signIn = async () => {
    const user = await RequestsBuilder.post({
      endpoint: '/login',
      body: { username, password },
    });

    resetForm();

    if (user.isLogged) {
      setCurrentUser(user.username);
    }
  };

  const signUp = async () => {
    await RequestsBuilder.post({
      endpoint: '/register',
      body: { username, password },
    });

    resetForm();
  };

  const logout = async () => {
    const user = await RequestsBuilder.post({
      endpoint: '/logout',
      body: {
        username: currentUser,
      },
    });

    if (!user.isLogged) {
      setCurrentUser(null);
    }
  };

  return (
    <S.Container>
      {!currentUser ? (
        <>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}>Sign in</button>
          <button onClick={signUp}>Sign up</button>
        </>
      ) : (
        <>
          <span>Hello, {currentUser}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </S.Container>
  );
};

export default Auth;
