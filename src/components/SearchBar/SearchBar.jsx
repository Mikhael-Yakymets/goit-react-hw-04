import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <header>
      <form className={css.form}>
        <input
          className={css.formSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
