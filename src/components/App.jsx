import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
// import Modal from './Modal/Modal';
import { AppWrap } from './App.styled';

class App extends Component {
  state = {};

  render() {
    return (
      <AppWrap>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
      </AppWrap>
    );
  }
}

export default App;
