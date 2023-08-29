import { Fragment } from 'react';
import CatagoriesContainer from '../Components/catagories-container/catagories-container.component';
import catagories from '../Product-Data/categories.json';
import { Outlet } from 'react-router-dom';

const Home = function() {
  return (
    <Fragment>
      {/* Below, this `Outlet` component will decide that there the child component will display in relation of its parent component. So in other words the order of `Outlet` component is matters because it tells react that child component will show before parent component or after parent component.*/}
      <Outlet />
      <CatagoriesContainer catagories={catagories}/>
    </Fragment>
  );
}

export default Home;