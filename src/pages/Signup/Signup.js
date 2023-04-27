import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import './../Login/Login.css';
import { Link } from 'react-router-dom';
import Logo from './../../components/Logo/Logo';

export default function Signup(props) {
  return (
    <div className="container-width-85">
      <Logo />
      <div className="signup">
        <div className="form-container">
          <h2>I'm new here</h2>
          <form className="login-form">
            <FormControl variant="standard">
              <InputLabel htmlFor="fullName">Full Name</InputLabel>
              <Input
                required
                name="fullName"
                autoComplete="off"
                type="text"
                id="fullName"
                endAdornment={
                  <InputAdornment position="end">
                    <EmailRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
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
                required
                autoComplete="off"
                type="password"
                id="password2"
                endAdornment={
                  <InputAdornment position="end">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <button>Sign Up</button>
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
