import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home.component';
import Navigation from './Routes/Nav/Nav.component';
import Shop from './Routes/Shop/Shop.component';

class App extends Component {
    render() {
      return (
        <main className='App'>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='shop' element={<Shop />} />
            </Route>
          </Routes>
        </main>
      );
    }
  }

export default App;