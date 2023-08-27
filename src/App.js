import { Component } from 'react';
import CatagoriesContainer from './Components/catagories-container/catagories-container.component';
import catagories from './Product-Data/categories.json';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <CatagoriesContainer catagories={catagories}/>
      </main>
    )
  }
}

export default App;