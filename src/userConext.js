import { createContext, useState } from 'react';
import { getUser } from './utils/user_service';

export const userContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState(getUser());
  // const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}
