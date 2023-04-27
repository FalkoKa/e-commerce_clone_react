import Logo from '../../components/Logo/Logo';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div className="container-width-85">
      <Logo />
      <div className="login">
        <div className="form-container">
          <h2>Welcome back</h2>
          <form className="login-form">
            <FormControl variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
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
