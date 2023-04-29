import { createContext, useEffect, useState } from 'react';
import { getUser } from './utils/user_service';

export const userContext = createContext();

export function UserProvider(props) {
  //   const [user, setUser] = useState(getUser());
  const [user, setUser] = useState(null);

  useEffect(() => {});

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('token');

    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
