// import './simpleStyle.scss';
import './/Styles/categories.styles.scss';

const App = function(props) {
  const catagories = [
    { id: 1, title: 'Hats' },
    { id: 2, title: 'Jackets' },
    { id: 3, title: 'Sneakers' },
    { id: 4, title: 'Womens' },
    { id: 5, title: 'Mens' },
  ];

  return (
    <main className='categories-container'>
      {catagories.map(({id, title}) => (
        <section key={id} className='category-container'>
          {/* <img src="" alt="" /> */}
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