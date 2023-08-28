import './/Styles/categories.styles.scss';
import CatagoryItem from './Components/catagory-items/Catagory-item.component.';
import catagories from './Product-Data/categories.json';

const App = function (props) {

  return (
    <main className='categories-container'>
      {catagories.map(({ id, title, imageUrl }) => (
        <CatagoryItem key={id} title={title} imageUrl={imageUrl}/>
      ))}
    </main>
  );
}

export default App;