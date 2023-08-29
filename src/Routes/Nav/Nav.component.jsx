import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = function () {
  return (
    <Fragment>
      <header>
        <Link className='nav-link' to='/'>
          <h1>Logo</h1>
        </Link>

        <nav>
          <Link className='nav-link' to='shop'>SHOP</Link>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;