import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppWrap } from './App.styled';
import { fetchImagesApi } from 'services/RequestApi';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    selectedImage: null,
    showModal: false,
    isLoading: false,
    error: null,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    // this.setState({ isLoading: true });

    if (searchValue !== prevState.searchValue || page !== prevState.page) {
      fetchImagesApi({ searchValue, page })
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            throw new Error('Sorry, no results...');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            // page: prevState.page + 1,
            loadMore: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch(error => {
          this.setState({ loadMore: false, error: error.message });
          // .finally {
          //     //   // this.setState({ showLoader: false });
          //     // }
        });
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({
      searchValue,
      images: [],
      page: 1,
    });
  };

  handleImageClick = selectedImage => {
    this.setState({ selectedImage });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  // toggleState = key => {
  //   this.setState(prevState => ({ [key]: !prevState[key] }));
  // };

  render() {
    console.log(this.state);
    const { showModal, images, isLoading, selectedImage, loadMore } =
      this.state;

    return (
      <AppWrap>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} onImageClick={this.handleImageClick} />
        )}

        {loadMore && <Button />}

        {showModal && (
          <Modal image={selectedImage} onClose={this.toggleModal} />
        )}
        {/* {showModal && <Modal onClose={this.toggleState('showModal')} />} */}
      </AppWrap>
    );
  }
}

export default App;
