import './App.css';
import {Component} from 'react';
import Nav from './header';
import Items from './items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav logoName="item List" />
        <Items />
      </div>
    );
  }
}

export default App;
