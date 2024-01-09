import {
  SearchbarHeader,
  Form,
  Button,
  ButtonText,
  InputText,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Form onSubmit={onSubmit}>
        <Button type="submit">
          <ButtonText>Search</ButtonText>
        </Button>

        <InputText
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarHeader>
  );
};

export default Searchbar;
