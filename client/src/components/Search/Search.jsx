import "./Search.css";

const Search = (props) => {
  const {
    handleSubmit,
    handleSearch,
    search
  } = props;
  
  return (
    <form 
      className="search-form" 
      onSubmit={e => handleSubmit(e)}
    >
      <input
        className="search-input"
        value={search}
        onChange={e => handleSearch(e)}
        name="Search"
        placeholder="Search"
        type="search"
        autoFocus
      />
    </form>
  );
};

export default Search;
