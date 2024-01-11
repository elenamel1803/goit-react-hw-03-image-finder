import { Component } from 'react';
import { Overlay, ModalWrap } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWrap>
          <p>
            Your first lightbox with just a few lines of code. Yes, it's really
            that simple.
          </p>
          {/* <img src="" alt="" /> */}
        </ModalWrap>
      </Overlay>
    );
  }
}

export default Modal;
