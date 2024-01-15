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
    searchValue: '',
  };

  handleValueChange = ({ target }) => {
    this.setState({
      searchValue: target.value.toLowerCase().split(' ').join(' '),
    });
    // console.log('value', this.state.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.searchValue.trim()) {
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    console.log(this.state.searchValue);
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
            value={this.state.searchValue}
            onChange={this.handleValueChange}
          />
        </Form>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
