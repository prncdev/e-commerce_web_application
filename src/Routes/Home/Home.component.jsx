import { Fragment } from 'react';
import CatagoriesContainer from '../../Components/catagories-container/catagories-container.component';
import catagories from '../../Product-Data/categories.json';
import { Outlet } from 'react-router-dom';

const Home = function() {
  return (
    <Fragment>
      <Outlet />
      <CatagoriesContainer catagories={catagories}/>
    </Fragment>
  );
}

export default Home;