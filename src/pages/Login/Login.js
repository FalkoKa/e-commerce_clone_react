import Logo from '../../components/Logo/Logo';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { userLogin } from '../../utils/user_api';
import { userContext } from './../../userConext';

export default function Login() {
  const { login } = useContext(userContext);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      userLogin(formData)
        .then((tokenAndUser) => {
          localStorage.setItem('token', tokenAndUser.token);
          console.log(tokenAndUser);
          login({
            _id: tokenAndUser._id,
            name: tokenAndUser.name,
            email: formData.email,
          });
        })
        .catch((err) => console.log(err));
    } else {
      setError('');
    }
  };

  const handleChange = (e) => {
    setError('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-width-85">
      <Logo />
      <div className="login">
        <div className="form-container">
          <h2>Welcome back</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <FormControl variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                onChange={handleChange}
                autoComplete="off"
                type="email"
                id="email"
                name="email"
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
                autoComplete="off"
                type="password"
                id="password"
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <button>Login</button>
          </form>
          <Link>Forgotten your password?</Link>
          <div className="border-bottom"></div>
        </div>
        <div className="new-here">
          <h2>I'm new here</h2>
          <Link to={'/signup'}>
            <div className="register-link">Register</div>
          </Link>
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
