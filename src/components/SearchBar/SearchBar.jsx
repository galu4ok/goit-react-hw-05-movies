import { ImSearch } from 'react-icons/im';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          placeholder="Search movies..."
        />
        <SearchFormButton type="submit">
          <ImSearch size={20} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
      </SearchForm>
    </SearchBarHeader>
  );
};
export default SearchBar;
