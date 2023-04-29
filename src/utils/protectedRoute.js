import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../userConext';

export default function Protected({ children }) {
  const { user } = useContext(userContext);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
