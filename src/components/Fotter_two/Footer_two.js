import { Link } from 'react-router-dom';
import './Footer_two.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AiFillGithub } from 'react-icons/ai';

export default function FooterTwo() {
  return (
    <div className="footer-two">
      <div className="container-width-85">
        <p>You can also find me on</p>
        <Link to={'https://github.com/FalkoKa'}>
          <AiFillGithub color="white" size={40} />
        </Link>

        <p className="tax-info">
          This is a <a href="http://zalando.de">Zalando</a> clone. Not used for
          production. More information in the{' '}
          <Link to={'/about'}>about section</Link>
        </p>
      </div>
    </div>
  );
}
