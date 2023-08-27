import './/Styles/categories.styles.scss';
import catagories from './Product-Data/categories.json';

const App = function (props) {

  return (
    <main className='categories-container'>
      {catagories.map(({ id, title, imageUrl }) => (
        <section key={id} className='category-container'>
          {/* In order to have inline css on a JSX element, we can do that with `style` props and double curly brackets. */}
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
          <section className='category-body-container'>
            <h2 className='product-title'>{title}</h2>
            <p>Shop Now</p>
          </section>
        </section>
      ))}
    </main>
  );
}

export default App;