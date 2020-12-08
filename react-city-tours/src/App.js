import React, { Component } from 'react';
import Narbar from './components/Narbar/Narbar';
import "./App.scss";
import TourList from './components/TourList';

class App extends Component {
  state = {  }
  render() { 
    return ( <main>
      <Narbar />
      <TourList />
    </main> );
  }
}
 
export default App;