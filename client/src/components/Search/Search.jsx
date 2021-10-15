import { Box, TextField } from "@mui/material";
import "./Search.css";

const Search = (props) => {
  const {
    handleSubmit,
    handleSearch,
    search
  } = props;
  
  return (
    <Box 
      className="box-search-bar"
      component="form"
      autoComplete="on"
      onSubmit={e => handleSubmit(e)}
    >
      <TextField
        label="Search"
        value={search}
        onChange={e => handleSearch(e)}
        name="Search"
        placeholder="Search"
        type="search"
        autoFocus
        sx={{
          width: "50%"
        }}
      />
    </Box>
  );
};

export default Search;
