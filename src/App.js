import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home.component';

// Just for example.
const Shop = function() {
  return (
    <h1>This is Shop page</h1>
  )
}

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='shop' element={<Shop />} />
          </Route>
        </Routes>
      </main>
    );
  }
}

export default App;