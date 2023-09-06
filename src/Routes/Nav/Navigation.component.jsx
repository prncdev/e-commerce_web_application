import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CwnLogo} from '../../assets/crown.svg';
import './Navigation.styles.scss';

const Navigation = function () {
  return (
    <Fragment>
      <header className='navigation'>
        <Link className='logo-container' to='/'>
          <CwnLogo className='logo' />
        </Link>

        <nav className='nav-links-container'>
          <Link className='nav-link' to='shop'>SHOP</Link>
          <Link className='nav-link' to='sign-up'>SIGN UP</Link>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;