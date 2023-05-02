import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import Logo from './../../components/Logo/Logo';
import './../Login/Login.css';
import { Link, Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { userContext } from '../../userConext';
import axios from 'axios';

export default function Signup(props) {
  const [signupUser, setSignupUser] = useState({});
  const [error, setError] = useState('');
  const { user, setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(signupUser);

    if (
      signupUser.password &&
      signupUser.passwordConfirm &&
      signupUser.email &&
      signupUser.fullName
    ) {
      if (signupUser.password !== signupUser.passwordConfirm) {
        return setError('Passwords do not macht');
      }
      axios
        .post(`/api/v1/user/new`, { signupUser })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data.message);
        });
    } else {
      setError('Please complete the form');
    }
  };

  const handleChange = (e) => {
    setSignupUser({ ...signupUser, [e.target.name]: e.target.value });
  };

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="container-width-85">
      <Logo />
      <div className="signup">
        <div className="form-container">
          <h2>I'm new here</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <FormControl variant="standard">
              <InputLabel htmlFor="fullName">Full Name</InputLabel>
              <Input
                onChange={handleChange}
                required
                name="fullName"
                autoComplete="off"
                type="text"
                id="fullName"
                endAdornment={
                  <InputAdornment position="end">
                    <GroupRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                onChange={handleChange}
                required
                name="email"
                autoComplete="off"
                type="email"
                id="email"
                endAdornment={
                  <InputAdornment position="end">
                    <EmailRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                onChange={handleChange}
                required
                name="password"
                autoComplete="off"
                type="password"
                id="password"
                endAdornment={
                  <InputAdornment position="end">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="password2">Confirm Password</InputLabel>
              <Input
                onChange={handleChange}
                required
                autoComplete="off"
                type="password"
                id="password2"
                name="passwordConfirm"
                endAdornment={
                  <InputAdornment position="end">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <button>Sign Up</button>
            {error ? <p>{error}</p> : <p></p>}
          </form>
        </div>

        <footer>
          <Link
            style={{
              textDdecoration: 'none',
              color: 'gray',
              fontSize: '0.8rem',
              display: 'flex',
              justifyContent: 'center',
              margin: '50px 0',
            }}
            className="legal-notice"
            to={'/about'}
          >
            Legal Notice
          </Link>
        </footer>
      </div>
    </div>
  );
}
