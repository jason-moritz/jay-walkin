import { Box, TextField } from "@mui/material";
import "./Search.css";

const Search = (props) => {
  const {
    handleSubmit,
    handleSearch,
    search,
    category
  } = props;
  
  return (
    <Box 
      className="box-search-bar"
      component="form"
      autoComplete="on"
      onSubmit={e => handleSubmit(e)}
      sx={{
        width: "50%",
        mx: {xs: 1, md: 2},
        display: "flex",
        justifyContent: "center"
      }}
    >
      <TextField
        label={category === "all" ? "Search" : "Please change category to 'All' to enable."}
        value={search}
        onChange={e => handleSearch(e)}
        disabled={category !== "all"}
        name="Search"
        placeholder="Search"
        type="search"
        autoFocus
        sx={{
          width: "100%"
        }}
      />
    </Box>
  );
};

export default Search;
