import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import { AppWrap } from './App.styled';

class App extends Component {
  state = {
    showModal: false,
    showLoader: false,
  };

  componentDidUpdate(prevprops) {}

  handleFormSubmit = value => {
    console.log(value);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  toggleLoader = () => {
    this.setState(({ showLoader }) => ({ showLoader: !showLoader }));
  };

  // toggleState = key => {
  //   this.setState(prevState => ({ [key]: !prevState[key] }));
  // };

  // onGalleryClick = e => {
  //   const selectedImg = e.currentTarget;

  //   console.log(selectedImg);
  //   this.toggleModal(selectedImg);
  // };

  render() {
    const { showModal, showLoader } = this.state;
    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
        <Button />
        {showLoader && <Loader />}
        {showModal && <Modal onClose={this.toggleModal} />}
        {/* {showModal && <Modal onClose={this.toggleState('showModal')} />} */}
      </AppWrap>
    );
  }
}

export default App;
