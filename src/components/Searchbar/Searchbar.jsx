import { Component } from 'react';
import {
  SearchbarHeader,
  Form,
  Button,
  // ButtonText,
  InputText,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleValueChange = ({ target }) => {
    this.setState({ value: target.value.toLowerCase() });
    console.log('value', this.state.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    this.props.onSubmit(this.state.value);
    // this.setState({ value: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">{/* <ButtonText>Search</ButtonText> */}</Button>

          <InputText
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleValueChange}
          />
        </Form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
