import React, { FC, useState } from 'react';
import RequestsBuilder from '../../utils/RequestsBuilder';
import * as S from './styles';

interface IAuth {
  currentUser?: string;
}

const Auth: FC<IAuth> = ({ currentUser }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const signIn = async () => {
    await RequestsBuilder.post({
      endpoint: '/login',
      body: { username, password },
    });

    resetForm();
  };

  const signUp = async () => {
    await RequestsBuilder.post({
      endpoint: '/register',
      body: { username, password },
    });

    resetForm();
  };

  const logout = async () => {
    await RequestsBuilder.post({
      endpoint: '/logout',
    });
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
