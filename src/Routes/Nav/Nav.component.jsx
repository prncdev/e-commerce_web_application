import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = function () {
  return (
    <Fragment>
      <header>
        <nav>
          <h2>This is Navigation bar</h2>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;