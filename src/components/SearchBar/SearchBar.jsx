import { ImSearch } from 'react-icons/im';

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" placeholder="Search movies..." />
        <button type="submit">
          <ImSearch size={20} />
          <span>Search</span>
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
