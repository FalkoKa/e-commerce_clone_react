import Header from './../../components/Header/Header';
import NavBar from './../../components/Navbar.js/Navbar';
import CategoriesNav from '../../components/Categories_nav/Categories_nav';
import { useContext } from 'react';
import { userContext } from '../../userConext';

export default function Profile(props) {
  const { user } = useContext(userContext);

  return (
    <>
      <Header />
      <NavBar />
      <CategoriesNav />
      <div className="profile container-width-85">
        <h1>Your Profile {user.name} </h1>
      </div>
    </>
  );
}
