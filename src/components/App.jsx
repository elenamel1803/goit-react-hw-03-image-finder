import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar />
        <Loader />
      </>
    );
  }
}

export default App;
