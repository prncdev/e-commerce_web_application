import { useState } from 'react';

const App = function(props) {
  const catagoriesArray = [
    { id: 1, title: 'Hats' },
    { id: 2, title: 'Jackets' },
    { id: 3, title: 'Sneakers' },
    { id: 4, title: 'Womens' },
    { id: 5, title: 'Mens' },
  ]
  const [ catagories, setCatagories ] = useState(catagoriesArray);

  return (
    <main className='catagories-container'>
      {this.state.catagories.map(({id, title}) => (
        <section key={id} className="catagory-container">
          {/* <img src="" alt="" /> */}
          <section className="catagory-body-container">
            <h2 className='product-title'>{title}</h2>
            <p>Shop Now</p>
          </section>
        </section>
      ))}

    </main>
  );

}

export default App;